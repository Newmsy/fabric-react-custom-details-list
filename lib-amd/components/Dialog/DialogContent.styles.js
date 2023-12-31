define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        contentLgHeader: 'ms-Dialog-lgHeader',
        close: 'ms-Dialog--close',
        subText: 'ms-Dialog-subText',
        header: 'ms-Dialog-header',
        headerLg: 'ms-Dialog--lgHeader',
        button: 'ms-Dialog-button ms-Dialog-button--close',
        inner: 'ms-Dialog-inner',
        content: 'ms-Dialog-content',
        title: 'ms-Dialog-title',
    };
    exports.getStyles = function (props) {
        var _a, _b, _c;
        var className = props.className, theme = props.theme, isLargeHeader = props.isLargeHeader, isClose = props.isClose, hidden = props.hidden, isMultiline = props.isMultiline, draggableHeaderClassName = props.draggableHeaderClassName;
        var palette = theme.palette, fonts = theme.fonts, effects = theme.effects, semanticColors = theme.semanticColors;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            content: [
                isLargeHeader && [
                    classNames.contentLgHeader,
                    {
                        borderTop: "4px solid " + palette.themePrimary,
                    },
                ],
                isClose && classNames.close,
                {
                    flexGrow: 1,
                    overflowY: 'hidden',
                },
                className,
            ],
            subText: [
                classNames.subText,
                fonts.medium,
                {
                    margin: '0 0 24px 0',
                    color: semanticColors.bodySubtext,
                    lineHeight: '1.5',
                    wordWrap: 'break-word',
                    fontWeight: Styling_1.FontWeights.regular,
                },
            ],
            header: [
                classNames.header,
                {
                    position: 'relative',
                    width: '100%',
                    boxSizing: 'border-box',
                },
                isClose && classNames.close,
                draggableHeaderClassName && [
                    draggableHeaderClassName,
                    {
                        cursor: 'move',
                    },
                ],
            ],
            button: [
                classNames.button,
                hidden && {
                    selectors: {
                        '.ms-Icon.ms-Icon--Cancel': {
                            color: semanticColors.buttonText,
                            fontSize: Styling_1.IconFontSizes.medium,
                        },
                    },
                },
            ],
            inner: [
                classNames.inner,
                {
                    padding: '0 24px 24px',
                    selectors: (_a = {},
                        _a["@media (min-width: " + Styling_1.ScreenWidthMinSmall + "px) and (max-width: " + Styling_1.ScreenWidthMaxSmall + "px)"] = {
                            padding: '0 16px 16px',
                        },
                        _a),
                },
            ],
            innerContent: [
                classNames.content,
                {
                    position: 'relative',
                    width: '100%',
                },
            ],
            title: [
                classNames.title,
                fonts.xLarge,
                {
                    color: semanticColors.bodyText,
                    margin: '0',
                    padding: '16px 46px 20px 24px',
                    lineHeight: 'normal',
                    selectors: (_b = {},
                        _b["@media (min-width: " + Styling_1.ScreenWidthMinSmall + "px) and (max-width: " + Styling_1.ScreenWidthMaxSmall + "px)"] = {
                            padding: '16px 46px 16px 16px',
                        },
                        _b),
                },
                isLargeHeader && {
                    color: semanticColors.menuHeader,
                },
                isMultiline && { fontSize: fonts.xxLarge.fontSize },
            ],
            topButton: [
                {
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    padding: '15px 15px 0 0',
                    selectors: (_c = {
                            '> *': {
                                flex: '0 0 auto',
                            },
                            '.ms-Dialog-button': {
                                color: semanticColors.buttonText,
                            },
                            '.ms-Dialog-button:hover': {
                                color: semanticColors.buttonTextHovered,
                                borderRadius: effects.roundedCorner2,
                            }
                        },
                        _c["@media (min-width: " + Styling_1.ScreenWidthMinSmall + "px) and (max-width: " + Styling_1.ScreenWidthMaxSmall + "px)"] = {
                            padding: '15px 8px 0 0',
                        },
                        _c),
                },
            ],
        };
    };
});
//# sourceMappingURL=DialogContent.styles.js.map