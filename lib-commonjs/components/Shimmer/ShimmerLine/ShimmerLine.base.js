"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory Shimmer}
 */
exports.ShimmerLineBase = function (props) {
    // tslint:disable-next-line:deprecation
    var height = props.height, styles = props.styles, _a = props.width, width = _a === void 0 ? '100%' : _a, borderStyle = props.borderStyle, theme = props.theme;
    var classNames = getClassNames(styles, {
        theme: theme,
        height: height,
        borderStyle: borderStyle,
    });
    return (React.createElement("div", { style: { width: width, minWidth: typeof width === 'number' ? width + "px" : 'auto' }, className: classNames.root },
        React.createElement("svg", { width: "2", height: "2", className: classNames.topLeftCorner },
            React.createElement("path", { d: "M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z" })),
        React.createElement("svg", { width: "2", height: "2", className: classNames.topRightCorner },
            React.createElement("path", { d: "M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z" })),
        React.createElement("svg", { width: "2", height: "2", className: classNames.bottomRightCorner },
            React.createElement("path", { d: "M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z" })),
        React.createElement("svg", { width: "2", height: "2", className: classNames.bottomLeftCorner },
            React.createElement("path", { d: "M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z" }))));
};
//# sourceMappingURL=ShimmerLine.base.js.map