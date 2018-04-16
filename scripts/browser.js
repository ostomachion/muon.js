(function () {
  'use strict';
  
  var x = new(XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
  x.open('GET', window.location.href, 1);
  x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  x.onreadystatechange = function() {
    if (x.readyState > 3) parse(x.responseText, onParsed);
  }
  x.send();

  function loadScript(src, callback) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.charset = "utf-8";
      script.onload = callback;
      document.documentElement.appendChild(script);
  }

  function parse(source, callback) {
    if (typeof μ === 'undefined') {
      loadScript('scripts/muon.js', function () {
        parse(source, callback);
      });
    }
    else {
      callback(μ.parse(source).doc);
    }
  }

  function onParsed(doc) {
    if (doc === null) return;
    var html = '<!DOCTYPE html>' + transformElement(doc.value);
    document.open("text/html", "replace");
    document.write(html);
    document.close();
  }

  function transformElement(el) {
    var value = '';

    var emptyElements = [
      'area',
      'base',
      'br',
      'col',
      'command',
      'embed',
      'hr',
      'img',
      'input',
      'keygen',
      'link',
      'meta',
      'param',
      'source',
      'track',
      'wbr',
    ];

    value += '<';
    value += el.name;
    if (el.attrs.length) {
      for (var i = 0; i < el.attrs.length; i++) {
        value += ' ' + transformAttribute(el.attrs[i].value);
      }
    }
    value += '>';
    
    if (!emptyElements.includes(el.name) || el.nodes.length) {
      for (var i = 0; i < el.nodes.length; i++) {
        var child = el.nodes[i];
        if (child.name === 'element') {
          value += transformElement(child.value);
        }
        else if (child.name === 'text') {
          if (el.name === 'script') {
            value += child.value;
          }
          else {
            value += transformText(child.value);
          }
        }
        else {
          throw 'Unexpected node type: ' + child.name;
        }
      }

      value += '</' + el.name + '>';
    }

    return value;
  }

  function transformAttribute(attr) {
    var value = '';
    value += attr.name;
    value += '="';
    value += attr.value
      .replace('&', '&amp;')
      .replace('"', '&quot;');
    value += '"';

    return value;
  }

  function transformText(text) {
    return text
      .replace('&', '&amp;')
      .replace('<', '&lt;')
      .replace('>', '&gt;');
  }
})();
