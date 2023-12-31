import { getGlobalClassNames, HighContrastSelector } from '../../../Styling';
var GlobalClassNames = {
    root: 'ms-ShimmerCircle-root',
    svg: 'ms-ShimmerCircle-svg',
};
export function getStyles(props) {
    var _a, _b;
    // tslint:disable-next-line:deprecation
    var height = props.height, borderStyle = props.borderStyle, theme = props.theme;
    var semanticColors = theme.semanticColors;
    var globalClassNames = getGlobalClassNames(GlobalClassNames, theme);
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
                    _a[HighContrastSelector] = {
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
                    _b[HighContrastSelector] = {
                        fill: 'Window',
                    },
                    _b),
            },
        ],
    };
}
//# sourceMappingURL=ShimmerCircle.styles.js.map