import { concatStyleSets, getFocusStyle, HighContrastSelector } from '../../../Styling';
import { memoizeFunction } from '../../../Utilities';
import { getStyles as getBaseButtonStyles } from '../BaseButton.styles';
import { getStyles as getSplitButtonStyles } from '../SplitButton/SplitButton.styles';
import { ButtonGlobalClassNames } from '../BaseButton.classNames';
export var getStyles = memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var baseButtonStyles = getBaseButtonStyles(theme);
    var baseSplitButtonStyles = getSplitButtonStyles(theme);
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
            getFocusStyle(theme, {
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
                    _a[HighContrastSelector] = {
                        border: 'none',
                    },
                    _a),
            },
        ],
        rootHovered: {
            backgroundColor: p.neutralLighter,
            color: p.neutralDark,
            selectors: (_b = {},
                _b[HighContrastSelector] = {
                    color: 'Highlight',
                },
                _b["." + ButtonGlobalClassNames.msButtonIcon] = {
                    color: p.themeDarkAlt,
                },
                _b["." + ButtonGlobalClassNames.msButtonMenuIcon] = {
                    color: p.neutralPrimary,
                },
                _b),
        },
        rootPressed: {
            backgroundColor: p.neutralLight,
            color: p.neutralDark,
            selectors: (_c = {},
                _c["." + ButtonGlobalClassNames.msButtonIcon] = {
                    color: p.themeDark,
                },
                _c["." + ButtonGlobalClassNames.msButtonMenuIcon] = {
                    color: p.neutralPrimary,
                },
                _c),
        },
        rootChecked: {
            backgroundColor: p.neutralLight,
            color: p.neutralDark,
            selectors: (_d = {},
                _d["." + ButtonGlobalClassNames.msButtonIcon] = {
                    color: p.themeDark,
                },
                _d["." + ButtonGlobalClassNames.msButtonMenuIcon] = {
                    color: p.neutralPrimary,
                },
                _d),
        },
        rootCheckedHovered: {
            backgroundColor: p.neutralQuaternaryAlt,
            selectors: (_e = {},
                _e["." + ButtonGlobalClassNames.msButtonIcon] = {
                    color: p.themeDark,
                },
                _e["." + ButtonGlobalClassNames.msButtonMenuIcon] = {
                    color: p.neutralPrimary,
                },
                _e),
        },
        rootExpanded: {
            backgroundColor: p.neutralLight,
            color: p.neutralDark,
            selectors: (_f = {},
                _f["." + ButtonGlobalClassNames.msButtonIcon] = {
                    color: p.themeDark,
                },
                _f["." + ButtonGlobalClassNames.msButtonMenuIcon] = {
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
                _g["." + ButtonGlobalClassNames.msButtonIcon] = {
                    color: semanticColors.disabledBodySubtext,
                },
                _g),
        },
        // Split button styles
        splitButtonContainer: {
            height: '100%',
            selectors: (_h = {},
                _h[HighContrastSelector] = {
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
                        _j[HighContrastSelector] = {
                            color: 'Highlight',
                        },
                        _j["." + ButtonGlobalClassNames.msButtonIcon] = {
                            color: p.neutralPrimary,
                        },
                        _j),
                },
                ':active': {
                    backgroundColor: p.neutralLight,
                    selectors: (_k = {},
                        _k["." + ButtonGlobalClassNames.msButtonIcon] = {
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
    return concatStyleSets(baseButtonStyles, baseSplitButtonStyles, commandButtonStyles, customStyles);
});
//# sourceMappingURL=CommandBarButton.styles.js.map