<!DOCTYPE html><meta charset="utf-8"><script type="text/muon">
muon(v: 0.1, type: mu.web.html)

html(lang: en) {
  head {
    meta(charset: utf-8);
    title "Mutable Object Notation";
    link(rel: stylesheet, href: style.css);
  }
  body {
    div(class: header-container) div(class: header) {
      h1 "An Introduction to Muon 0.2.0";
      
      p(class: note) strong "This document is intended to be an introduction to the syntax and features of the current version of muon, not a full specification.";

      p "Muon (pronounced {i "MEW-on"}) is an human-friendly object syntax designed for both text markup and data serialization.";
      
      p strong "This page is written in {a(href: index-source.html.mu) "muon"}!";
    }
    
    div(class: content-container) div(class: content) {
      h2 "Syntax";
      p "Muon documents are always encoded in UTF-8 with an optional BOM. More encoding options may be supported in the future.";
      p "Every muon document begins with a muon element which looks like this:";

      pre code(class: muon) "muon(v: 0.2)";
      p "The muon element may be preceded by insignificant nodes and must be followed by exactly one element called the root element. The root element may be followed by insignificant nodes.";
      
      h3 "Insignificant Nodes";
      p "Insignificant nodes include whitespace nodes, comments, and dead nodes. These nodes do not change the meaning or structure of the document.";
      
      h4 "Whitespace Nodes";
      p "Whitespace nodes are used to separate other nodes and provide formatting to make the document more readable. They are made up of spaces, tabs, carriage returns, and newlines. (Other Unicode whitespace characters may be allowed in the future.)";
      
      h4 "Comments";
      p "Comments are used to add notes to documents.";

      h5 "Line Comments";
      p "A line comment starts with {code "--"} (two dashes) and goes to the end of the line.";
      pre code(class: muon) "-- This is a line comment.";
      
      h5 "Block Comments";
      p "Block comments start with one or more {code "<"}s and end with the first occurence of the same amount of {code ">"}s. This means that block comments can’t be “nested” unless the outer comment contains more {code "<"}s and {code ">"}s than the inner comment. Unlike line comments, block comments can span multiple lines.";
      pre code(class: muon) {
        "<< This is[cr][lf]";
        "   a block <[cr][lf]";
        "   comment. >>";
      }
      
      h4 "Dead Nodes";
      p "In many languages, unwanted code can be “commented out” so that it is ignored without being removed. Semantically, this isn’t a “comment”, so muon offers a convenient way to mark nodes as “dead.” Dead nodes are ignored like any other insignificant node. Any significant node can be marked as dead by prefixing it with a {code "~"} (tilde).";
      pre code(class: muon) "~["]This string is not part of the document.["];";
      p "Dead nodes must still be syntactically correct so that the parser can determine where they end, but they do not need to be valid with respect to the document type. For example, a dead string may appear as a child of an element that cannot contain strings.";
      
      h3 "Significant Nodes";
      
      h4 "Elements";
      p "Elements serve a similar purpose to the elements of XML. They have a name, attributes, and children. All elements may be preceded by insignificant nodes.";
      
      h5 "Names";
      p "Element names consist of one or more “segments” separated by a “separator” character. A segment begins with a “letter” and is followed by zero or more “letters” and “numbers”. Each “letter” or “number” may be followed zero or more “modifiers”.";
      p "By 1.0, the definitions of “letter”, “number”, “separator”, and “modifier” may be defined by Unicode categories, but until more research is done (particularly on security implications), the following definitions will be used:";
      ul {
        li "letter: An uppercase or lowercase ASCII letter, from A to Z.";
        li "number: An ASCII digit, from 0 to 9.";
        li "separator: An underscore or hyphen.";
        li "modifier: An ASCII single quote.";
      }
      p "By convention, element and attribute names are written in {code "kebab-case"}. {span(class: note) "(This may be changed to {code "snake_case"}.)"}";
      
      h6 "Name Compatibility";
      p "For compatibility with the naming rules of other formats, such as XML, the {code "¢"} character is considered a letter character and should only be used to encode incompatible names. An encoding is not specified by muon and must be defined by each format that requires one. Parsers and other tools should treat names with {code "¢"} the same as any other name and should not try to decode them. As a simple example of an encoding, each invalid character could be URL-encoded, but using {code "¢"} instead of {code "%"}.";
      
      h6 "Namespaces";
      p "Names may be namespaced. Each namespace is separated from the name by a period. For example, {code "namespace.name"}. {span(class: note) "(The syntax and semantics for defining namespaces has not bet finalized yet.)"}";
      
      h5 "Attribute";
      p "An element’s attributes are listed in parentheses after its name and separated by commas. Each attribute consists of a name and an optional value, separated from the name by a colon. Attribute names follow the same rules as element names. If the attribute value contains characters besides name characters or whitespace, it must be quoted. Whitespace before and after an unquoted value is ignored and all strings of whitespace within an unquoted value are collapsed to a single space character. These strings work like normal string nodes with the restriction that blocks aren’t allowed. An empty quoted value is equivalent to no value. An attribute with an unquoted empty value must not use a colon. Parentheses must not be used if there are no attributes. Like XML, attribute names cannot be repeated and attribute order does not matter.";
      pre code(class: muon) {
        "element; -- No attributes.[cr][lf]";
        "element(name: value); -- An attribute with a name of ["]name["] and value of ["]value["].[cr][lf]";
        "element(one: 1, two: 2); -- Two attributes.[cr][lf]";
        "element(name: space separated, empty); -- Two attributes. The second has no value.[cr][lf]";
        "element(quotes: ["]()["]); -- A quoted attribute value.";
      }
      p "An optional attribute with no value is called a boolean attribute. It can either be {em "on"} or {em "off"}. Normally, to set a boolean attribute to {em "off"}, you simply leave out the attribute. Sometimes, however, you may want to make this more explicit. Preceding an attribute with {code "-"} is equivalent to not including the attribute. This can be used with any optional attribute, not just boolean ones. An attribute cannot be both included and excluded. An attribute can only be excluded if it is allowed to be included by the document type. Note that attributes may also be marked as dead or meta to effectively exclude them, but this is considered bad practice.";
      pre code(class: muon) {
        "checkbox(-checked); -- Explicitly excluding the ["]checked["] attribute.[cr][lf]";
        "checkbox; -- This is equivalent, but less explicit.";
      }
      
      h5 "Children";
      p "In general, an element may contain any number of significant nodes called its children. An element’s children follow the name and attribute list and are enclosed by curly braces. If an element has no children, a semicolon can be used instead of an empty block. The semicolon is optional if there are no sibling nodes after the element. It is considered good practice to include the final semicolon unless the entire block is contained on a single line.";
      pre code(class: muon) {
        "parent [{] child; child [}] -- An element with two children.[cr][lf]";
        "[cr][lf]";
        "-- Elements can be nested arbitrarily deep.[cr][lf]";
        "parent [{][cr][lf]";
        "    child [{][cr][lf]";
        "        grandchild;[cr][lf]";
        "        ["]string["];[cr][lf]";
        "    [}][cr][lf]";
        "    child;[cr][lf]";
        "[}]";
      }
      p "If an element contains only one child, the curly braces are optional. (Note: For this rule, dead nodes are counted as “children”. Otherwise, marking or unmarking a node as dead could wildly restructure the document.)";
      pre code(class: muon) {
        "-- The ["]parent["] element contains a single child.[cr][lf]";
        "parent child [{][cr][lf]";
        "    grandchild;[cr][lf]";
        "    -- ["]live["] is a child of ["]child["], not ["]grandchild["].[cr][lf]";
        "    grandchild ~dead; live;[cr][lf]";
        "[}]";
      }
      p "Commas may be used as a lower-precedence separator than semicolons to avoid excessive curly braces. For example, the following two elements are equivalent:";
      pre code(class: muon) {
        "kleene [{][cr][lf]";
        "    opt [{] call(name: a); call(name: b) [}][cr][lf]";
        "    alt [{] item call(name: c); item call(name: d) [}][cr][lf]";
        "[}][cr][lf]";
        "[cr][lf]";
        "kleene [{][cr][lf]";
        "    opt call(name: a), call(name: b);[cr][lf]";
        "    alt item call(name: c), item call(name: d);[cr][lf]";
        "[}]";
      }
      
      h4 "String Types";
      p "Strings represent Unicode text. Strings are enclosed by {code "["]"}s and followed by a semicolon. The rules for commas and optional semicolons after elements apply to strings as well. Strings may contains text nodes and blocks.";
      
      h5 "Text Nodes";
      p "A text node represents a valid sequence of Unicode codepoints.";
      pre code(class: muon) "["]Hello, world!["]; -- A simple string containing a text node.";
      
      h6 "Escapes";
      p "Certain characters must be escaped in text nodes by enclosing them in square brackets. Here is a list of special characters which must be escaped and their escaped form.";
      table {
        thead {
          tr { th "Character"; th "Escape" }
        }
        tbody {
          tr { td code "["]"; td code "[<]["][>]" }
          tr { td code "[<]"; td code "[<]<[>]" }
          tr { td code "[>]"; td code "[<]>[>]" }
          tr { td code "[{]"; td code "[<][{][>]" }
          tr { td code "[}]"; td code "[<][}][>]" }
        }
      }
      p "Additionally, any Unicode character may be referenced by its codepoint (leading zeros may be omitted), name (case insensitive and ignoring spaces and hyphens), or any name alias. For example, here are a few ways to represent the tab character (in addition to a literal tab character):";
      ul {
        li code "["][<]U+9[>]["]; -- By codepoint.";
        li code "["][<]U+09[>]["];";
        li code "["][<]U+0009[>]["];";
        li code "["][<]CHARACTER TABULATION[>]["]; -- By Unicode Name";
        li code "["][<]characterTAB-ulation[>]["];";
        li code "["][<]horizontal tabulation[>]["]; -- By Unicode name alias.";
        li code "["][<]tab[>]["];";
        li code "["][<]ht[>]["]; -- Another alias. The preferred way to encode a tab.";
      }
      p "Named sequences defined in the Unicode standard may also be used.";
      
      h5 "Blocks";
      p "In addition to text nodes, strings may also contain blocks of nodes. This is simply syntactic sugar for closing off the string and then reopening it after the block. The actual parent of the nodes in the block is the parent of the string. For example, the following elements are equivalent:";
      pre code(class: muon) {
        "p [{] ["]This sentence has a ["]; b ["]bold["]; ["]word.["] [}][cr][lf]";
        "p ["]This sentence has a [{]b ["]bold["][}] word.["];";
      }
      p "Blocks can be extremely useful when using muon for text markup.";
      
      h5 "Trimmed Strings";
      p "Strings by default may not contain line breaks. However, a multiline string can be created by adding a newline immediately after the opening quote. The closing quote must also be on its own line. The newlines at the start and end of the string are not included in the strings value. Additionally, any amount horizontal whitespace before the closing quote will be trimmed from every line in the string.";
      pre code(class: muon) {
        "element ["][cr][lf]";
        "    This is a multiline string.[cr][lf]";
        "    These two lines are not actually indented.[cr][lf]";
        "      This line is indented by two spaces.[cr][lf]";
        "    ["];";
      }
      
      h5 "Other String Types";
      p "As of 0.2, there is only a single string type, called {code "utf"}. {code "utf"} strings may contain any valid sequence of UTF-8 (or maybe UTF-16) bytes. In the future, more advanced string types will exist in muon:";
      ul {
        li "{code "uni"}: May contain any valid sequence of Unicode {em "codepoints"}.";
        li "{code "nfc"}: May contain any valid sequence of Unicode {em "grapheme clusters"}. The string is normalized.";
        li "{code "bin"}: May contain arbitrary binary data. Only hex digits are allowed.";
      }
      
      h5 "String Options";
      p(class: note) "(This section is not finalized.)";
      p "By 1.0, strings will be able to take options to control how they are parsed. Options may include how to parse escapes, blocks, and the end of the string, and may include advanced options for parsing and trimming whitespace. Options can be set on each string individually, or inherited by all strings within an element or document. Syntax has not been set yet.";
      p "A standard library of functions for string types will be defined for use in Kleene Expressions and other applications.";
      p "Implementors may not be required to support certain string types.";
      
      h4 "Numeric Types";
      p(class: note) "(This section may be very different by 1.0.)";
      p "By 1.0, muon will offer multiple numeric types in addition to elements and string types. Here are the types currently planned for 1.0:";
      ul {
        li "{code "int"}: An arbitrarily large signed integer.";
        li "{code "num"}: An arbitrarily large or small signed real number.";
        li "{code "rat"}: A ratio between two {code "int"}s.";
        li "{code "iN"}  (where {code "N"} is {code "8"}, {code "16"}, {code "32"}, {code "64"}, {code "128"}, or {code "256"}): A signed N-bit integer.";
        li "{code "uN"}  (where {code "N"} is {code "8"}, {code "16"}, {code "32"}, {code "64"}, {code "128"}, or {code "256"}): An unsigned N-bit integer.";
        li "{code "ratN"}  (where {code "N"} is {code "8"}, {code "16"}, {code "32"}, {code "64"}, {code "128"}, or {code "256"}): A signed ratio between two {code "uN"}s.";
        li "{code "bN"} (where {code "N"} is {code "16"}, {code "32"}, {code "64"}, {code "128"}, or {code "256"}): A binaryN number as defined by the The IEEE Standard for Floating-Point Arithmetic.";
        li "{code "dN"} (where {code "N"} is {code "32"}, {code "64"}, or {code "128"}): A decimalN number as defined by the The IEEE Standard for Floating-Point Arithmetic.";
      }
      p "The syntax for numeric literals is fairly straightforward. Numbers are written as a sequence of digits. Positive numbers in a signed type may optionally be preceded by a {code "+"}, and negative numbers must be preceded by a {code "-"}. Real numbers separate their integral part from their fractional part with a {code "."}. Rational numbers separate their numerator from their denominator with a {code "/"}. A single {code "_"} may be inserted between any two digits. Numbers can be written in binary, octal, or hex by prefixing their digits with {code "0b"}, {code "0o"}, or {code "0x"} respectively (followed by an optional {code "_"}). Hex digits must be uppercase. Exponential notation can be used by following the digits with {code "e"}, an optional {code "+"} or {code "-"}, and one or more decimal digits. Special numbers include (depending on the type) {code "+inf"}, {code "-inf"}, {code "-0"}, and {code "+NaN"} (and possibly other NaNs with a sign bit, quiet/signaling bit and payload).";
      p "They type of a number can usually be inferred from the document types, but can be specified by including the type name after the number and optionally separated by a {code "_"}. In all other cases, an appropriate default type is used (not defined yet).";
      p "A standard library of functions for numeric types will be defined for use in Kleene Expressions and other applications.";
      p "Implementors are not required to support all numeric types, but they must state which ones they do support.";
      
      h3 "Metadata";
      p "Metadata adds extra information which is ignored while validating the document, but preserved throughout the lifetime of the document. Metadata can be used to provide instructions or other information to tools that process the document. Metadata can be represented by either elements or attributes by prefixing the name with a {code "#"}. When validating a document, a meta-element is replaced by its children. All attributes on a meta-element are considered metadata and should not be marked with a {code "#"}. Meta attributes may be namespaced.";
      pre code(class: muon) {
        "-- This element has one metadata attribute and one metadata child.[cr][lf]";
        "example(name: test, #meta: data) #todo;";
      }
      
      h2 "Document Type Specifications";
      p(class: note) "(Document types specifications may be not be implemented until 2.0.)";
      p "Document type specifications provide both a set of semantics for a document and a grammar or schema to validate the document against. Type grammars are implemented as Kleene Expressions. Specifications may also provide rules to help IDEs and tools such as linters, compilers, and syntax highlighters.";
      
      h3 "Type-Defined Syntactic Sugar";
      p(class: note) "(Type-defined syntactic sugar may be not be implemented until 2.0 or later.)";
      p "Type extensions are a special kind of syntactic-sugar which can be defined outside of the type specification. An extension can add a new node to a type or redefine old ones. After the file is parsed, the type extensions are “compiled” into nodes that the type specification will accept.";
      
      h2 "Compiled Muon";
      p(class: note) "(Compiled muon may not be implemented until 2.0)";
      p "Muon documents can be compiled to a binary format. Multiple compilation levels will be available to optimize for binary size, compile time, document load time, obfuscation, etc. Type specifications may define transformations to documents or possibly even sets of documents to take place before binary compilation. It is the type author’s responsibility to ensure that transformed documents are functionally equivalent to untransformed documents.";
      
      h2 "Kleene Expressions";
      p "Coming soon: {em "An Introduction to Kleene Expressions 0.2.0"}.";
    }
  }
}
--</script><script src="http://muonic.org/scripts/browser.js"></script><title>Loading muon...</title>
