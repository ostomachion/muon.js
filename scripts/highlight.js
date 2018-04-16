(function () {
  'use strict';
  
	if (typeof μ === 'undefined') μ = {};

  μ.highlight = function (doc, tokens) {
    var url = /[A-Za-z][A-Za-z0-9+\.-]*:\/\/[A-Za-z0-9](?:[A-Za-z0-9\/\\][A-Za-z0-9_+?=&#\/\\\.-]*)?/;
  
    var html = '<head><link rel="stylesheet" href="scripts/highlight.css"></head><body class="light"><table><tr><td class="line-number" value="1"></td><td><pre><code class="muon">';
    
    var lineNumber = 1;
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      
      
      do {
        var lineMatch = /\n/.exec(token.value);
        
        var tokenPart = lineMatch ? token.value.substr(0, lineMatch.index) : token.value;
        token.value = lineMatch ? token.value.substr(lineMatch.index + 1) : "";
      
        var match = url.exec(tokenPart);
        html += '<span class="' + token.name + '">';
        while (match) {
          html +=
            htmlEscape(tokenPart.substr(0, match.index)) +
            '<a class="url ' + token.name + '" href="' + match[0] + '">' +
            htmlEscape(match[0]) +
            '</a>';
            
          tokenPart = tokenPart.substr(match.index + match[0].length);
          match = url.exec(tokenPart);
        }
        html += htmlEscape(tokenPart) + '</span>';
        
        if (lineMatch) {
          lineNumber++;
          html += '</code></pre></td></tr><tr><td class="line-number" value="' + lineNumber + '"></td><td><pre><code class="muon">';
        }
        
      } while (lineMatch);
    }
      
    html += '</code></pre></td></tr><tr><td class="line-number last" value=""></td><td></td></tr></table></pre></body>';
    
    return html;
  };
  
  function htmlEscape(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }
})();
