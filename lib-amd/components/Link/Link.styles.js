define(["require", "exports", "../../Styling"], function (require, exports, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalClassNames = {
        root: 'ms-Link',
    };
    exports.getStyles = function (props) {
        var _a, _b, _c, _d;
        var className = props.className, isButton = props.isButton, isDisabled = props.isDisabled, theme = props.theme;
        var semanticColors = theme.semanticColors;
        // Tokens
        var linkColor = semanticColors.link;
        var linkInteractedColor = semanticColors.linkHovered;
        var linkDisabledColor = semanticColors.disabledText;
        var focusBorderColor = semanticColors.focusBorder;
        var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
        return {
            root: [
                classNames.root,
                theme.fonts.medium,
                {
                    color: linkColor,
                    outline: 'none',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    textDecoration: 'none',
                    selectors: (_a = {
                            '.ms-Fabric--isFocusVisible &:focus': {
                                // Can't use getFocusStyle because it doesn't support wrapping links
                                // https://github.com/microsoft/fluentui/issues/4883#issuecomment-406743543
                                // Using box-shadow and outline allows the focus rect to wrap links that span multiple lines
                                // and helps the focus rect avoid getting clipped.
                                boxShadow: "0 0 0 1px " + focusBorderColor + " inset",
                                outline: "1px auto " + focusBorderColor,
                                selectors: (_b = {},
                                    _b[Styling_1.HighContrastSelector] = {
                                        outline: '1px solid WindowText',
                                    },
                                    _b),
                            }
                        },
                        _a[Styling_1.HighContrastSelector] = {
                            // For IE high contrast mode
                            borderBottom: 'none',
                        },
                        _a),
                },
                isButton && {
                    background: 'none',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline',
                    margin: 0,
                    overflow: 'inherit',
                    padding: 0,
                    textAlign: 'left',
                    textOverflow: 'inherit',
                    userSelect: 'text',
                    borderBottom: '1px solid transparent',
                    selectors: (_c = {},
                        _c[Styling_1.HighContrastSelectorBlack] = {
                            color: '#FFFF00',
                        },
                        _c[Styling_1.HighContrastSelectorWhite] = {
                            color: '#00009F',
                        },
                        _c),
                },
                !isButton && {
                    selectors: (_d = {},
                        _d[Styling_1.HighContrastSelector] = {
                            // This is mainly for MessageBar, which sets MsHighContrastAdjust: none by default
                            MsHighContrastAdjust: 'auto',
                        },
                        _d),
                },
                isDisabled && [
                    'is-disabled',
                    {
                        color: linkDisabledColor,
                        cursor: 'default',
                    },
                    {
                        selectors: {
                            '&:link, &:visited': {
                                pointerEvents: 'none',
                            },
                        },
                    },
                ],
                !isDisabled && {
                    selectors: {
                        '&:active, &:hover, &:active:hover': {
                            color: linkInteractedColor,
                            textDecoration: 'underline',
                        },
                        '&:focus': {
                            color: linkColor,
                        },
                    },
                },
                classNames.root,
                className,
            ],
        };
    };
});
//# sourceMappingURL=Link.styles.js.map