define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var ElementType;
    (function (ElementType) {
        /** <button> element. */
        ElementType[ElementType["button"] = 0] = "button";
        /** <a> element. */
        ElementType[ElementType["anchor"] = 1] = "anchor";
    })(ElementType = exports.ElementType || (exports.ElementType = {}));
    /**
     * {@docCategory Button}
     */
    var ButtonType;
    (function (ButtonType) {
        ButtonType[ButtonType["normal"] = 0] = "normal";
        ButtonType[ButtonType["primary"] = 1] = "primary";
        ButtonType[ButtonType["hero"] = 2] = "hero";
        ButtonType[ButtonType["compound"] = 3] = "compound";
        ButtonType[ButtonType["command"] = 4] = "command";
        ButtonType[ButtonType["icon"] = 5] = "icon";
        ButtonType[ButtonType["default"] = 6] = "default";
    })(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
});
//# sourceMappingURL=Button.types.js.map