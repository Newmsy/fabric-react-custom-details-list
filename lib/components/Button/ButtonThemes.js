import { __assign } from "tslib";
import { HighContrastSelector } from '../../Styling';
import { IsFocusVisibleClassName } from '../../Utilities';
var splitButtonDividerBaseStyles = function () {
    return {
        position: 'absolute',
        width: 1,
        right: 31,
        top: 8,
        bottom: 8,
    };
};
export function standardStyles(theme) {
    var _a, _b, _c, _d, _e;
    var s = theme.semanticColors, p = theme.palette;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundPressed = s.buttonBackgroundPressed;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText,
        },
        rootHovered: {
            backgroundColor: buttonBackgroundHovered,
            color: buttonTextHovered,
            selectors: (_a = {},
                _a[HighContrastSelector] = {
                    borderColor: 'Highlight',
                    color: 'Highlight',
                },
                _a),
        },
        rootPressed: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootChecked: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootCheckedHovered: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextCheckedHovered,
        },
        rootDisabled: {
            selectors: (_b = {},
                _b[HighContrastSelector] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window',
                },
                _b),
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_c = {},
                _c[HighContrastSelector] = {
                    border: 'none',
                },
                _c),
        },
        splitButtonMenuButton: {
            color: p.white,
            backgroundColor: 'transparent',
            selectors: {
                ':hover': {
                    backgroundColor: p.neutralLight,
                    selectors: (_d = {},
                        _d[HighContrastSelector] = {
                            color: 'Highlight',
                        },
                        _d),
                },
            },
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: s.buttonBackgroundDisabled,
            selectors: {
                ':hover': {
                    backgroundColor: s.buttonBackgroundDisabled,
                },
            },
        },
        splitButtonDivider: __assign(__assign({}, splitButtonDividerBaseStyles()), { backgroundColor: p.neutralTertiaryAlt, selectors: (_e = {},
                _e[HighContrastSelector] = {
                    backgroundColor: 'WindowText',
                },
                _e) }),
        splitButtonDividerDisabled: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: p.neutralQuaternaryAlt,
            selectors: {
                ':hover': {
                    backgroundColor: p.neutralQuaternaryAlt,
                },
            },
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: p.neutralQuaternaryAlt,
            selectors: {
                ':hover': {
                    backgroundColor: p.neutralQuaternaryAlt,
                },
            },
        },
        splitButtonMenuIcon: {
            color: s.buttonText,
        },
        splitButtonMenuIconDisabled: {
            color: s.buttonTextDisabled,
        },
    };
}
export function primaryStyles(theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var p = theme.palette, s = theme.semanticColors;
    return {
        root: {
            backgroundColor: s.primaryButtonBackground,
            border: "1px solid " + s.primaryButtonBackground,
            color: s.primaryButtonText,
            selectors: (_a = {},
                _a[HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    borderColor: 'WindowText',
                    MsHighContrastAdjust: 'none',
                },
                _a["." + IsFocusVisibleClassName + " &:focus"] = {
                    selectors: {
                        ':after': {
                            border: "none",
                            outlineColor: p.white,
                        },
                    },
                },
                _a),
        },
        rootHovered: {
            backgroundColor: s.primaryButtonBackgroundHovered,
            border: "1px solid " + s.primaryButtonBackgroundHovered,
            color: s.primaryButtonTextHovered,
            selectors: (_b = {},
                _b[HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'Highlight',
                    borderColor: 'Highlight',
                },
                _b),
        },
        rootPressed: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            border: "1px solid " + s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
            selectors: (_c = {},
                _c[HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    borderColor: 'WindowText',
                    MsHighContrastAdjust: 'none',
                },
                _c),
        },
        rootExpanded: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootChecked: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootCheckedHovered: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootDisabled: {
            selectors: (_d = {},
                _d[HighContrastSelector] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window',
                },
                _d),
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_e = {},
                _e[HighContrastSelector] = {
                    border: 'none',
                },
                _e),
        },
        splitButtonDivider: __assign(__assign({}, splitButtonDividerBaseStyles()), { backgroundColor: p.white, selectors: (_f = {},
                _f[HighContrastSelector] = {
                    backgroundColor: 'Window',
                },
                _f) }),
        splitButtonMenuButton: {
            backgroundColor: s.primaryButtonBackground,
            color: s.primaryButtonText,
            selectors: (_g = {},
                _g[HighContrastSelector] = {
                    backgroundColor: 'WindowText',
                },
                _g[':hover'] = {
                    backgroundColor: s.primaryButtonBackgroundHovered,
                    selectors: (_h = {},
                        _h[HighContrastSelector] = {
                            color: 'Highlight',
                        },
                        _h),
                },
                _g),
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: s.primaryButtonBackgroundDisabled,
            selectors: {
                ':hover': {
                    backgroundColor: s.primaryButtonBackgroundDisabled,
                },
            },
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            selectors: {
                ':hover': {
                    backgroundColor: s.primaryButtonBackgroundPressed,
                },
            },
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            selectors: {
                ':hover': {
                    backgroundColor: s.primaryButtonBackgroundPressed,
                },
            },
        },
        splitButtonMenuIcon: {
            color: s.primaryButtonText,
        },
        splitButtonMenuIconDisabled: {
            color: p.neutralTertiary,
            selectors: (_j = {},
                _j[HighContrastSelector] = {
                    color: 'GrayText',
                },
                _j),
        },
    };
}
//# sourceMappingURL=ButtonThemes.js.map