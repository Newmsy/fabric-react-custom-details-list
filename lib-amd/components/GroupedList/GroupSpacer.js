define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPACER_WIDTH = 36;
    exports.GroupSpacer = function (props) {
        var count = props.count, _a = props.indentWidth, indentWidth = _a === void 0 ? exports.SPACER_WIDTH : _a;
        var width = count * indentWidth;
        return count > 0 ? React.createElement("span", { className: 'ms-GroupSpacer', style: { display: 'inline-block', width: width } }) : null;
    };
});
//# sourceMappingURL=GroupSpacer.js.map