var μ;

(function () {
  'use strict';

  μ = {
    version: '0.1.0',

    parse: function (text) {
      var caret = 0;

      try {
        var tokens = [];
        
        var ws = matchWSAndComments(tokens);
        var muonElement = matchMuonElement(tokens);
        
        var root = matchElement(tokens);
        if (root === null) throw 'Expected an element.';

        if (caret !== text.length) throw 'Extra content at end of document.';

        return {tokens: tokens, doc: root};
      }
      catch(e) {
        console.error('Muon parse error: ' + e);
        return null;
      }

      function matchWSAndComments(tokens) {
        while (true) {
          if (matchBlockComment(tokens)) continue;
          if (matchWS(tokens)) continue;
          if (matchLineComment(tokens)) continue;
          break;
        }
      }

      function matchWS(tokens) {
        return match(/\s+/y, {tokens: tokens, name: 'ws'});
      }

      function matchLineComment(tokens) {
        return match(/--.*/y, {tokens: tokens, name: 'line-comment'});
      }

      function matchBlockComment(tokens) {
        var start = match(/<+/y, {tokens: tokens, name: 'block-comment'});
        if (start === null) return start;
        var end = match(new RegExp('.*?>{' + start[0].length + '}', 'yg'), {tokens: tokens, name: 'block-comment', message: 'Expected end of block comment.'});
        return true;
      }

      function matchMuonElement(tokens) {
        match(/muon/y, {tokens: tokens, name: 'elem', ws: true, message: 'Expected `muon` element.'});
        match(/\(/y, {tokens: tokens, name: 'attr-open', ws: true, message: 'Expected `v` attribute on `muon` element.'});
        match(/v:/y, {tokens: tokens, name: 'attr-name', ws: true, message: 'Expected `v` attribute on `muon` element.'});
        match(/0\.1/y, {tokens: tokens, name: 'attr-val', ws: true, message: 'Expected value of `0.1` on `v` attribute on `muon` element.'});
        match(/,/y, {tokens: tokens, name: 'attr-sep', ws: true, message: 'Expected `type` attribute on `muon` element.'});
        if (match(/type:/y, {tokens: tokens, name: 'attr-name', ws: true})) {
          matchDottedName( {tokens: tokens, name: 'attr-val', ws: true, message: 'Invalid value for `type` attribute on `muon` element.'});
        }
        match(/\)/y, {tokens: tokens, name: 'attr-close', ws: true, message: 'Expected end of attribute list on `muon` element.'});
      }

      function matchElement(tokens) {
        var nameMatch = matchName({tokens: tokens, name: 'elem', ws: true});
        if (nameMatch === null) return nameMatch;
        var attrs = matchAttrs(tokens);
        var children = matchChildren(tokens);

        return {name: 'element', value: {name: nameMatch[0], attrs: attrs, nodes: children}};
      }

      function matchAttrs(tokens) {
        var value = [];

        if (!match(/\(/y, {tokens: tokens, name: 'attr-open', ws: true})) return value;
        if (match(/\)/y, {tokens: tokens, name: 'attr-close', ws: true})) return value;

        do {
          var nameMatch = matchName({tokens: tokens, name: 'attr-name', ws: true});
          match(/:/y, {tokens: tokens, name: 'attr-colon', ws: true});
          var valueMatch = match(/[^":,()]*/y, {tokens: tokens, name: 'attr-val', ws: true, message: 'Invalid attribute value.'});
          value.push({name: 'attr', value: {name: nameMatch[0], value: valueMatch[0]}});
        } while (match(/,/y, {tokens: tokens, name: 'attr-sep', ws: true}));

        match(/\)/y, {tokens: tokens, name: 'attr-close', ws: true, message: 'Expected end of attribute list.'});

        return value;
      }

      function matchChildren(tokens) {
        var empty = matchEmpty(tokens);
        if (empty) return [];

        var block = matchBlock(tokens, true);
        if (block) return block;

        var element = matchElement(tokens);
        if (element) return [element];

        var string = matchString(tokens);
        if (string) return string;

        throw "Expected semicolon, block, element, or string.";
      }

      function matchEmpty(tokens) {
        return match(/;|(?=\})/y, {tokens: tokens, name: 'empty', ws: true});
      }

      function matchBlock(tokens, ws) {
        var value = [];

        if (match(/\{/y, {tokens: tokens, name: 'block-start', ws: true}) === null) return null;

        while (true) {
          var element = matchElement(tokens);
          if (element) {
            value.push(element);
            continue;
          }

          var string = matchString(tokens);
          if (string) {
            for (var i = 0; i < string.length; i++) {
              value.push(string[i]);
            }
            continue;
          }

          break;
        }

        match(/\}/y, {tokens: tokens, name: 'block-end', ws: ws, message: 'Expected end of block.'});

        return value;
      }

      function matchString(tokens) {
        if (match(/"/y, {tokens: tokens, name: 'string-start'}) === null) return null;

        var value = [];

        while (true) {
          var escape = matchEscape(tokens);
          if (escape !== null) {
            value.push(escape);
            continue;
          }

          var block = matchBlock(tokens, false);
          if (block !== null) {
            for (var i = 0; i < block.length; i++) {
              value.push(block[i]);
            }
            continue;
          }

          var textNode = matchText(tokens);
          if (textNode !== null) {
            value.push(textNode);
            continue;
          }

          break;
        }

        match(/"/y, {tokens: tokens, name: 'string-end', ws: true, message: 'Expected end of string.'});
        if (matchEmpty(tokens) === null) return null;

        return value;
      }

      function matchEscape(tokens) {
        if (match(/\[/y, {tokens: tokens, name: 'escape-start'}) === null) return null;

        var escapes = [
          {key: '"', value: '"'},
          {key: '<', value: '['},
          {key: '>', value: ']'},
          {key: '{', value: '{'},
          {key: '}', value: '}'},
          {key: 'cr', value: '\r'},
          {key: 'lf', value: '\n'},
          {key: 'ht', value: '\t'},
        ];

        var value = null;
        for (var i = 0; i < escapes.length; i++) {
          if (match(new RegExp(escapes[i].key, 'y'), {tokens: tokens, name: 'escape'}) !== null) {
            value = escapes[i].value;
            break;
          }
        }

        if (value === null) throw 'Invalid escape.';

        match(/\]/y, {tokens: tokens, name: 'escape-end', message: 'Invalid escape sequence.'});

        return {name: 'text', value: value};
      }

      function matchText(tokens) {
        var value = match(/[^"\[\]\{\}]+/y, {tokens: tokens, name: 'text'});
        if(value === null) return value;
        return {name: 'text', value: value[0]};
      }

      function matchDottedName(options) {
        if (typeof options === 'undefined') options = {};

        matchName({message: options.message, tokens: options.tokens, name: options.name});
        while (match(/\./y, {tokens: options.tokens, name: 'dot'})) {
          matchName({message: 'Invalid name.', tokens: options.tokens, name: options.name});
        }
      }

      function matchName(options) {
        return match(/[A-Za-z][A-Za-z0-9]*([-_][A-Za-z][A-Za-z0-9]*)*/y, options);
      }

      function match(regex, options) {
        if (typeof options === 'undefined') options = {};
        
        regex.lastIndex = caret;
        var value = regex.exec(text);
        if (value === null && options.message) {
          throw options.message;
        }
        if (value !== null) {
            caret = regex.lastIndex;
            if (options.tokens) {
                options.tokens.push({name: options.name, value: value[0]});
            }
        }
        if (value !== null && options.ws) matchWSAndComments(options.tokens);
        return value;
      }
    },
  };
}());
