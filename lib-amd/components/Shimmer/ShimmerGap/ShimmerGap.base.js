define(["require", "exports", "react", "../../../Utilities"], function (require, exports, React, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory Shimmer}
     */
    exports.ShimmerGapBase = function (props) {
        // tslint:disable-next-line:deprecation
        var height = props.height, styles = props.styles, _a = props.width, width = _a === void 0 ? '10px' : _a, borderStyle = props.borderStyle, theme = props.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            height: height,
            borderStyle: borderStyle,
        });
        return (React.createElement("div", { style: { width: width, minWidth: typeof width === 'number' ? width + "px" : 'auto' }, className: classNames.root }));
    };
});
//# sourceMappingURL=ShimmerGap.base.js.map