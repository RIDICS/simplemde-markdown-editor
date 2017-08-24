(function (mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        mod(require("../../../../../node_modules/codemirror/lib/codemirror"), require("../../../../../node_modules/codemirror/addon/mode/overlay"));
    else if (typeof define == "function" && define.amd) // AMD
        define(["../../../../../node_modules/codemirror/lib/codemirror", "../../../../../node_modules/codemirror/addon/mode/overlay"], mod);
    else // Plain browser env
        mod(CodeMirror);
})
(function (CodeMirror) {
    "use strict";
    CodeMirror.defineMode("comment",
        function() {

            return {
                token: function(stream, state) {
                    if (stream.match("&&&")) {
                        if (!stream.eatWhile(/[\w\s\*\.\>]/)) {
                            return null;
                        }

                        if (stream.match("&&&")) {
                            return "style2";
                        }
                    }
                    while (stream.next() != null && !stream.match("&&&", false)) { }
                    return null;
                }
            };

        });
});