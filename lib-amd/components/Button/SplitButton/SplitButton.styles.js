define(["require", "exports", "tslib", "../../../Styling", "../../../Utilities"], function (require, exports, tslib_1, Styling_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var effects = theme.effects, palette = theme.palette, semanticColors = theme.semanticColors;
        var buttonHighContrastFocus = {
            left: -2,
            top: -2,
            bottom: -2,
            right: -2,
            border: 'none',
        };
        var splitButtonDividerBaseStyles = {
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8,
        };
        var splitButtonStyles = {
            splitButtonContainer: [
                Styling_1.getFocusStyle(theme, { highContrastStyle: buttonHighContrastFocus, inset: 2 }),
                {
                    display: 'inline-flex',
                    selectors: {
                        '.ms-Button--default': {
                            borderTopRightRadius: '0',
                            borderBottomRightRadius: '0',
                            borderRight: 'none',
                        },
                        '.ms-Button--primary': {
                            borderTopRightRadius: '0',
                            borderBottomRightRadius: '0',
                            border: 'none',
                            selectors: (_a = {},
                                _a[Styling_1.HighContrastSelector] = {
                                    color: 'Window',
                                    backgroundColor: 'WindowText',
                                    MsHighContrastAdjust: 'none',
                                },
                                _a),
                        },
                        '.ms-Button--primary + .ms-Button': {
                            border: 'none',
                        },
                    },
                },
            ],
            splitButtonContainerHovered: {
                selectors: {
                    '.ms-Button--primary': {
                        selectors: (_b = {},
                            _b[Styling_1.HighContrastSelector] = {
                                color: 'Window',
                                backgroundColor: 'Highlight',
                            },
                            _b),
                    },
                    '.ms-Button.is-disabled': {
                        color: semanticColors.buttonTextDisabled,
                        selectors: (_c = {},
                            _c[Styling_1.HighContrastSelector] = {
                                color: 'GrayText',
                                borderColor: 'GrayText',
                                backgroundColor: 'Window',
                            },
                            _c),
                    },
                },
            },
            splitButtonContainerChecked: {
                selectors: {
                    '.ms-Button--primary': {
                        selectors: (_d = {},
                            _d[Styling_1.HighContrastSelector] = {
                                color: 'Window',
                                backgroundColor: 'WindowText',
                                MsHighContrastAdjust: 'none',
                            },
                            _d),
                    },
                },
            },
            splitButtonContainerCheckedHovered: {
                selectors: {
                    '.ms-Button--primary': {
                        selectors: (_e = {},
                            _e[Styling_1.HighContrastSelector] = {
                                color: 'Window',
                                backgroundColor: 'WindowText',
                                MsHighContrastAdjust: 'none',
                            },
                            _e),
                    },
                },
            },
            splitButtonContainerFocused: {
                outline: 'none!important',
            },
            splitButtonMenuButton: {
                padding: 6,
                height: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderTopRightRadius: effects.roundedCorner2,
                borderBottomRightRadius: effects.roundedCorner2,
                border: "1px solid " + palette.neutralSecondaryAlt,
                borderLeft: 'none',
                outline: 'transparent',
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                width: 32,
                marginLeft: -1,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
            },
            splitButtonDivider: tslib_1.__assign(tslib_1.__assign({}, splitButtonDividerBaseStyles), { selectors: (_f = {},
                    _f[Styling_1.HighContrastSelector] = {
                        backgroundColor: 'WindowText',
                    },
                    _f) }),
            splitButtonDividerDisabled: tslib_1.__assign(tslib_1.__assign({}, splitButtonDividerBaseStyles), { selectors: (_g = {},
                    _g[Styling_1.HighContrastSelector] = {
                        backgroundColor: 'GrayText',
                    },
                    _g) }),
            splitButtonMenuButtonDisabled: {
                pointerEvents: 'none',
                border: 'none',
                selectors: (_h = {
                        ':hover': {
                            cursor: 'default',
                        },
                        '.ms-Button--primary': {
                            selectors: (_j = {},
                                _j[Styling_1.HighContrastSelector] = {
                                    color: 'GrayText',
                                    borderColor: 'GrayText',
                                    backgroundColor: 'Window',
                                },
                                _j),
                        }
                    },
                    _h[Styling_1.HighContrastSelector] = {
                        border: "1px solid GrayText",
                        color: 'GrayText',
                        backgroundColor: 'Window',
                    },
                    _h),
            },
            splitButtonFlexContainer: {
                display: 'flex',
                height: '100%',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
            },
            splitButtonContainerDisabled: {
                outline: 'none',
                border: 'none',
                selectors: (_k = {},
                    _k[Styling_1.HighContrastSelector] = {
                        color: 'GrayText',
                        borderColor: 'GrayText',
                        backgroundColor: 'Window',
                    },
                    _k),
            },
        };
        return Styling_1.concatStyleSets(splitButtonStyles, customStyles);
    });
});
//# sourceMappingURL=SplitButton.styles.js.map