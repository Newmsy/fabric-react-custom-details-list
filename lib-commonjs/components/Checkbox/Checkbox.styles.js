"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Styling_1 = require("../../Styling");
var Utilities_1 = require("../../Utilities");
var GlobalClassNames = {
    root: 'ms-Checkbox',
    label: 'ms-Checkbox-label',
    checkbox: 'ms-Checkbox-checkbox',
    checkmark: 'ms-Checkbox-checkmark',
    text: 'ms-Checkbox-text',
};
var MS_CHECKBOX_LABEL_SIZE = '20px';
var MS_CHECKBOX_TRANSITION_DURATION = '200ms';
var MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';
exports.getStyles = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var className = props.className, theme = props.theme, reversed = props.reversed, checked = props.checked, disabled = props.disabled, isUsingCustomLabelRender = props.isUsingCustomLabelRender, indeterminate = props.indeterminate;
    var semanticColors = theme.semanticColors, effects = theme.effects, palette = theme.palette, fonts = theme.fonts;
    var classNames = Styling_1.getGlobalClassNames(GlobalClassNames, theme);
    var checkmarkFontColor = semanticColors.inputForegroundChecked;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.inputBorder
    var checkmarkFontColorHovered = palette.neutralSecondary;
    // TODO: after updating the semanticColors slots mapping this needs to be semanticColors.smallInputBorder
    var checkboxBorderColor = palette.neutralPrimary;
    var checkboxBorderIndeterminateColor = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    var checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    var checkboxBorderIndeterminateHoveredColor = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    // TODO: after updating the semanticColors slots mapping the following 2 tokens need to be
    // semanticColors.inputBackgroundCheckedHovered
    var checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxHoveredTextColor = semanticColors.inputTextHovered;
    var checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    var checkboxTextColor = semanticColors.bodyText;
    var checkboxTextColorDisabled = semanticColors.disabledText;
    var indeterminateDotStyles = [
        {
            content: '""',
            borderRadius: effects.roundedCorner2,
            position: 'absolute',
            width: 10,
            height: 10,
            top: 4,
            left: 4,
            boxSizing: 'border-box',
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: disabled ? checkboxBorderColorDisabled : checkboxBorderIndeterminateColor,
            transitionProperty: 'border-width, border, border-color',
            transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
            transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,
            selectors: (_a = {},
                _a[Styling_1.HighContrastSelector] = {
                    borderColor: 'WindowText',
                },
                _a),
        },
    ];
    return {
        root: [
            classNames.root,
            {
                position: 'relative',
                display: 'flex',
            },
            reversed && 'reversed',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            !disabled && [
                !checked && {
                    selectors: (_b = {},
                        _b[":hover ." + classNames.checkbox] = {
                            borderColor: checkboxBorderHoveredColor,
                            selectors: (_c = {},
                                _c[Styling_1.HighContrastSelector] = {
                                    borderColor: 'Highlight',
                                },
                                _c),
                        },
                        _b[":focus ." + classNames.checkbox] = { borderColor: checkboxBorderHoveredColor },
                        _b[":hover ." + classNames.checkmark] = {
                            color: checkmarkFontColorHovered,
                            opacity: '1',
                            selectors: (_d = {},
                                _d[Styling_1.HighContrastSelector] = {
                                    color: 'Highlight',
                                },
                                _d),
                        },
                        _b),
                },
                checked &&
                    !indeterminate && {
                    selectors: (_e = {},
                        _e[":hover ." + classNames.checkbox] = {
                            background: checkboxBackgroundCheckedHovered,
                            borderColor: checkboxBorderColorCheckedHovered,
                        },
                        _e[":focus ." + classNames.checkbox] = {
                            background: checkboxBackgroundCheckedHovered,
                            borderColor: checkboxBorderColorCheckedHovered,
                        },
                        _e[Styling_1.HighContrastSelector] = {
                            selectors: (_f = {},
                                _f[":hover ." + classNames.checkbox] = {
                                    background: 'Window',
                                    borderColor: 'Highlight',
                                },
                                _f[":focus ." + classNames.checkbox] = {
                                    background: 'Highlight',
                                },
                                _f[":focus:hover ." + classNames.checkbox] = {
                                    background: 'Highlight',
                                },
                                _f[":focus:hover ." + classNames.checkmark] = {
                                    color: 'Window',
                                },
                                _f[":hover ." + classNames.checkmark] = {
                                    color: 'Highlight',
                                },
                                _f),
                        },
                        _e),
                },
                indeterminate && {
                    selectors: (_g = {},
                        _g[":hover ." + classNames.checkbox + ", :hover ." + classNames.checkbox + ":after"] = {
                            borderColor: checkboxBorderIndeterminateHoveredColor,
                            selectors: (_h = {},
                                _h[Styling_1.HighContrastSelector] = {
                                    borderColor: 'WindowText',
                                },
                                _h),
                        },
                        _g[":focus ." + classNames.checkbox] = {
                            borderColor: checkboxBorderIndeterminateHoveredColor,
                        },
                        _g[":hover ." + classNames.checkmark] = {
                            opacity: '0',
                        },
                        _g),
                },
                {
                    selectors: (_j = {},
                        _j[":hover ." + classNames.text + ", :focus ." + classNames.text] = {
                            color: checkboxHoveredTextColor,
                            selectors: (_k = {},
                                _k[Styling_1.HighContrastSelector] = {
                                    color: disabled ? 'GrayText' : 'WindowText',
                                },
                                _k),
                        },
                        _j),
                },
            ],
            className,
        ],
        input: {
            position: 'absolute',
            background: 'none',
            opacity: 0,
            selectors: (_l = {},
                _l["." + Utilities_1.IsFocusVisibleClassName + " &:focus + label::before"] = {
                    outline: '1px solid ' + theme.palette.neutralSecondary,
                    outlineOffset: '2px',
                    selectors: (_m = {},
                        _m[Styling_1.HighContrastSelector] = {
                            outline: '1px solid ActiveBorder',
                        },
                        _m),
                },
                _l),
        },
        label: [
            classNames.label,
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: isUsingCustomLabelRender ? 'center' : 'flex-start',
                cursor: disabled ? 'default' : 'pointer',
                position: 'relative',
                userSelect: 'none',
            },
            reversed && {
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
            },
            {
                selectors: {
                    '&::before': {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        content: '""',
                        pointerEvents: 'none',
                    },
                },
            },
        ],
        checkbox: [
            classNames.checkbox,
            {
                position: 'relative',
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                justifyContent: 'center',
                height: MS_CHECKBOX_LABEL_SIZE,
                width: MS_CHECKBOX_LABEL_SIZE,
                border: "1px solid " + checkboxBorderColor,
                borderRadius: effects.roundedCorner2,
                boxSizing: 'border-box',
                transitionProperty: 'background, border, border-color',
                transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,
                /* in case the icon is bigger than the box */
                overflow: 'hidden',
                selectors: tslib_1.__assign((_o = { ':after': indeterminate ? indeterminateDotStyles : null }, _o[Styling_1.HighContrastSelector] = {
                    borderColor: 'WindowText',
                }, _o), Styling_1.getEdgeChromiumNoHighContrastAdjustSelector()),
            },
            indeterminate && {
                borderColor: checkboxBorderIndeterminateColor,
            },
            !reversed
                ? // This margin on the checkbox is for backwards compat. Notably it has the effect where a customRender
                    // is used, there will be only a 4px margin from checkbox to label. The label by default would have
                    // another 4px margin for a total of 8px margin between checkbox and label. We don't combine the two
                    // (and move it into the text) to not incur a breaking change for everyone using custom render atm.
                    {
                        marginRight: 4,
                    }
                : {
                    marginLeft: 4,
                },
            !disabled &&
                !indeterminate &&
                checked && {
                background: checkboxBackgroundChecked,
                borderColor: checkboxBorderColorChecked,
                selectors: (_p = {},
                    _p[Styling_1.HighContrastSelector] = {
                        background: 'Highlight',
                        borderColor: 'Highlight',
                    },
                    _p),
            },
            disabled && {
                borderColor: checkboxBorderColorDisabled,
                selectors: (_q = {},
                    _q[Styling_1.HighContrastSelector] = {
                        borderColor: 'GrayText',
                    },
                    _q),
            },
            checked &&
                disabled && {
                background: checkboxBackgroundDisabledChecked,
                borderColor: checkboxBorderColorDisabled,
                selectors: (_r = {},
                    _r[Styling_1.HighContrastSelector] = {
                        background: 'Window',
                    },
                    _r),
            },
        ],
        checkmark: [
            classNames.checkmark,
            {
                opacity: checked ? '1' : '0',
                color: checkmarkFontColor,
                selectors: (_s = {},
                    _s[Styling_1.HighContrastSelector] = {
                        color: disabled ? 'GrayText' : 'Window',
                        MsHighContrastAdjust: 'none',
                    },
                    _s),
            },
        ],
        text: [
            classNames.text,
            {
                color: disabled ? checkboxTextColorDisabled : checkboxTextColor,
                fontSize: fonts.medium.fontSize,
                lineHeight: '20px',
                selectors: tslib_1.__assign((_t = {}, _t[Styling_1.HighContrastSelector] = {
                    color: disabled ? 'GrayText' : 'WindowText',
                }, _t), Styling_1.getEdgeChromiumNoHighContrastAdjustSelector()),
            },
            !reversed
                ? {
                    marginLeft: 4,
                }
                : {
                    marginRight: 4,
                },
        ],
    };
};
//# sourceMappingURL=Checkbox.styles.js.map