define(["require", "exports", "../../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-ShimmerCircle-root',
        svg: 'ms-ShimmerCircle-svg',
    };
    function getStyles(props) {
        var _a, _b;
        // tslint:disable-next-line:deprecation
        var height = props.height, borderStyle = props.borderStyle, theme = props.theme;
        var semanticColors = theme.semanticColors;
        var globalClassNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var borderStyles = !!borderStyle ? borderStyle : {};
        return {
            root: [
                globalClassNames.root,
                theme.fonts.medium,
                {
                    width: height + "px",
                    height: height + "px",
                    minWidth: height + "px",
                    boxSizing: 'content-box',
                    borderTopStyle: 'solid',
                    borderBottomStyle: 'solid',
                    borderColor: semanticColors.bodyBackground,
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            borderColor: 'Window',
                        },
                        _a),
                },
                borderStyles,
            ],
            svg: [
                globalClassNames.svg,
                {
                    display: 'block',
                    fill: semanticColors.bodyBackground,
                    selectors: (_b = {},
                        _b[Styling_1.HighContrastSelector] = {
                            fill: 'Window',
                        },
                        _b),
                },
            ],
        };
    }
    exports.getStyles = getStyles;
});
//# sourceMappingURL=ShimmerCircle.styles.js.map