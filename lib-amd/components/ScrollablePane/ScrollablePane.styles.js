define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-ScrollablePane',
        contentContainer: 'ms-ScrollablePane--contentContainer',
    };
    exports.getStyles = function (props) {
        var _a, _b;
        var className = props.className, theme = props.theme;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        var AboveAndBelowStyles = {
            position: 'absolute',
            pointerEvents: 'auto',
        };
        var positioningStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            WebkitOverflowScrolling: 'touch',
        };
        return {
            root: [classNames.root, theme.fonts.medium, positioningStyle, className],
            contentContainer: [
                classNames.contentContainer,
                {
                    overflowY: props.scrollbarVisibility === 'always' ? 'scroll' : 'auto',
                },
                positioningStyle,
            ],
            stickyAbove: [
                {
                    top: 0,
                    zIndex: 1,
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            borderBottom: '1px solid WindowText',
                        },
                        _a),
                },
                AboveAndBelowStyles,
            ],
            stickyBelow: [
                {
                    bottom: 0,
                    selectors: (_b = {},
                        _b[Styling_1.HighContrastSelector] = {
                            borderTop: '1px solid WindowText',
                        },
                        _b),
                },
                AboveAndBelowStyles,
            ],
            stickyBelowItems: [
                {
                    bottom: 0,
                },
                AboveAndBelowStyles,
                {
                    width: '100%',
                },
            ],
        };
    };
});
//# sourceMappingURL=ScrollablePane.styles.js.map