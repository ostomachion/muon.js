<!DOCTYPE html><meta charset="utf-8"><script type="text/muon">
muon(v: 0.1, type: mu.web.html)

html head {
  meta(charset: utf-8);
  script(src: scripts/muon.js);
  script(src: scripts/highlight.js);
  script {
    "var x = new(XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');";
    "x.open('GET', '/', 1);";
    "x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');";
    "x.onreadystatechange = function () [{]";
    "  if (x.readyState > 3) [{]";
    "    var info = μ.parse(x.responseText);";
    "    xml = μ.highlight(info.doc, info.tokens);";
    "    document.documentElement.innerHTML = xml;";
    "  [}]";
    "[}];";
    "x.send();";
  }
}
--</script><script src="http://muonic.org/scripts/browser.js"></script><title>Loading muon...</title>
