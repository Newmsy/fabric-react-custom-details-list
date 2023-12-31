define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-DetailsList',
        compact: 'ms-DetailsList--Compact',
        contentWrapper: 'ms-DetailsList-contentWrapper',
        headerWrapper: 'ms-DetailsList-headerWrapper',
        isFixed: 'is-fixed',
        isHorizontalConstrained: 'is-horizontalConstrained',
        listCell: 'ms-List-cell',
    };
    exports.getStyles = function (props) {
        var _a, _b;
        var theme = props.theme, className = props.className, isHorizontalConstrained = props.isHorizontalConstrained, compact = props.compact, isFixed = props.isFixed;
        var semanticColors = theme.semanticColors;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                theme.fonts.small,
                {
                    position: 'relative',
                    background: semanticColors.listBackground,
                    color: semanticColors.listText,
                    selectors: (_a = {},
                        _a["& ." + classNames.listCell] = {
                            minHeight: 38,
                            wordBreak: 'break-word',
                        },
                        _a),
                },
                isFixed && classNames.isFixed,
                compact && [
                    classNames.compact,
                    {
                        selectors: (_b = {},
                            _b["." + classNames.listCell] = {
                                minHeight: 32,
                            },
                            _b),
                    },
                ],
                isHorizontalConstrained && [
                    classNames.isHorizontalConstrained,
                    {
                        overflowX: 'auto',
                        overflowY: 'visible',
                        WebkitOverflowScrolling: 'touch',
                    },
                ],
                className,
            ],
            focusZone: [
                {
                    display: 'inline-block',
                    minWidth: '100%',
                    minHeight: 1,
                },
            ],
            headerWrapper: classNames.headerWrapper,
            contentWrapper: classNames.contentWrapper,
        };
    };
});
//# sourceMappingURL=DetailsList.styles.js.map