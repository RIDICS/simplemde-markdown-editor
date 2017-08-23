// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../../../../node_modules/codemirror/lib/codemirror"), require("../../../../../node_modules/codemirror/mode/gfm/gfm"), require("../../../../../node_modules/codemirror/addon/mode/overlay"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../../../../node_modules/codemirror/lib/codemirror", "../../../../../node_modules/codemirror/mode/gfm/gfm", "../../../../../node_modules/codemirror/addon/mode/overlay"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
    "use strict";
	
    CodeMirror.defineMode("gfmextended",
        function() {

var commentOverlay={};

        });
});
