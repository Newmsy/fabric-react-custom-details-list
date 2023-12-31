define(["require", "exports", "../../../Styling", "../../../Utilities", "../BaseButton.styles", "../SplitButton/SplitButton.styles", "../BaseButton.classNames"], function (require, exports, Styling_1, Utilities_1, BaseButton_styles_1, SplitButton_styles_1, BaseButton_classNames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
        var baseSplitButtonStyles = SplitButton_styles_1.getStyles(theme);
        var p = theme.palette, semanticColors = theme.semanticColors;
        var commandButtonHighContrastFocus = {
            left: 4,
            top: 4,
            bottom: 4,
            right: 4,
            border: 'none',
        };
        var commandButtonStyles = {
            root: [
                Styling_1.getFocusStyle(theme, {
                    inset: 2,
                    highContrastStyle: commandButtonHighContrastFocus,
                    borderColor: 'transparent',
                }),
                theme.fonts.medium,
                {
                    minWidth: '40px',
                    backgroundColor: p.white,
                    color: p.neutralPrimary,
                    padding: '0 4px',
                    border: 'none',
                    borderRadius: 0,
                    selectors: (_a = {},
                        _a[Styling_1.HighContrastSelector] = {
                            border: 'none',
                        },
                        _a),
                },
            ],
            rootHovered: {
                backgroundColor: p.neutralLighter,
                color: p.neutralDark,
                selectors: (_b = {},
                    _b[Styling_1.HighContrastSelector] = {
                        color: 'Highlight',
                    },
                    _b["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                        color: p.themeDarkAlt,
                    },
                    _b["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonMenuIcon] = {
                        color: p.neutralPrimary,
                    },
                    _b),
            },
            rootPressed: {
                backgroundColor: p.neutralLight,
                color: p.neutralDark,
                selectors: (_c = {},
                    _c["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                        color: p.themeDark,
                    },
                    _c["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonMenuIcon] = {
                        color: p.neutralPrimary,
                    },
                    _c),
            },
            rootChecked: {
                backgroundColor: p.neutralLight,
                color: p.neutralDark,
                selectors: (_d = {},
                    _d["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                        color: p.themeDark,
                    },
                    _d["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonMenuIcon] = {
                        color: p.neutralPrimary,
                    },
                    _d),
            },
            rootCheckedHovered: {
                backgroundColor: p.neutralQuaternaryAlt,
                selectors: (_e = {},
                    _e["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                        color: p.themeDark,
                    },
                    _e["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonMenuIcon] = {
                        color: p.neutralPrimary,
                    },
                    _e),
            },
            rootExpanded: {
                backgroundColor: p.neutralLight,
                color: p.neutralDark,
                selectors: (_f = {},
                    _f["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                        color: p.themeDark,
                    },
                    _f["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonMenuIcon] = {
                        color: p.neutralPrimary,
                    },
                    _f),
            },
            rootExpandedHovered: {
                backgroundColor: p.neutralQuaternaryAlt,
            },
            rootDisabled: {
                backgroundColor: p.white,
                selectors: (_g = {},
                    _g["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                        color: semanticColors.disabledBodySubtext,
                    },
                    _g),
            },
            // Split button styles
            splitButtonContainer: {
                height: '100%',
                selectors: (_h = {},
                    _h[Styling_1.HighContrastSelector] = {
                        border: 'none',
                    },
                    _h),
            },
            splitButtonDivider: {
                backgroundColor: p.neutralTertiaryAlt,
            },
            splitButtonMenuButton: {
                backgroundColor: p.white,
                border: 'none',
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
                color: p.neutralSecondary,
                selectors: {
                    ':hover': {
                        backgroundColor: p.neutralLighter,
                        color: p.neutralDark,
                        selectors: (_j = {},
                            _j[Styling_1.HighContrastSelector] = {
                                color: 'Highlight',
                            },
                            _j["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                                color: p.neutralPrimary,
                            },
                            _j),
                    },
                    ':active': {
                        backgroundColor: p.neutralLight,
                        selectors: (_k = {},
                            _k["." + BaseButton_classNames_1.ButtonGlobalClassNames.msButtonIcon] = {
                                color: p.neutralPrimary,
                            },
                            _k),
                    },
                },
            },
            splitButtonMenuButtonDisabled: {
                backgroundColor: p.white,
            },
            splitButtonMenuButtonChecked: {
                backgroundColor: p.neutralLight,
                color: p.neutralDark,
                selectors: {
                    ':hover': {
                        backgroundColor: p.neutralQuaternaryAlt,
                    },
                },
            },
            splitButtonMenuButtonExpanded: {
                backgroundColor: p.neutralLight,
                color: p.black,
                selectors: {
                    ':hover': {
                        backgroundColor: p.neutralQuaternaryAlt,
                    },
                },
            },
            splitButtonMenuIcon: {
                color: p.neutralPrimary,
            },
            splitButtonMenuIconDisabled: {
                color: p.neutralTertiary,
            },
            label: {
                fontWeight: 'normal',
            },
            icon: {
                color: p.themePrimary,
            },
            menuIcon: {
                color: p.neutralSecondary,
            },
        };
        return Styling_1.concatStyleSets(baseButtonStyles, baseSplitButtonStyles, commandButtonStyles, customStyles);
    });
});
//# sourceMappingURL=CommandBarButton.styles.js.map