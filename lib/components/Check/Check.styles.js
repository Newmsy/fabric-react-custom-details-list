import { HighContrastSelector, getGlobalClassNames, IconFontSizes } from '../../Styling';
import { getRTL } from '../../Utilities';
export var CheckGlobalClassNames = {
    root: 'ms-Check',
    circle: 'ms-Check-circle',
    check: 'ms-Check-check',
    /** Must be manually applied to the parent element of the check. */
    checkHost: 'ms-Check-checkHost',
};
export var getStyles = function (props) {
    var _a, _b, _c, _d, _e;
    // tslint:disable-next-line:deprecation
    var _f = props.height, height = _f === void 0 ? props.checkBoxHeight || '18px' : _f, checked = props.checked, className = props.className, theme = props.theme;
    var palette = theme.palette, semanticColors = theme.semanticColors, fonts = theme.fonts;
    var isRTL = getRTL(theme);
    var classNames = getGlobalClassNames(CheckGlobalClassNames, theme);
    var sharedCircleCheck = {
        fontSize: height,
        position: 'absolute',
        left: 0,
        top: 0,
        width: height,
        height: height,
        textAlign: 'center',
        verticalAlign: 'middle',
    };
    return {
        root: [
            classNames.root,
            fonts.medium,
            {
                // lineHeight currently needs to be a string to output without 'px'
                lineHeight: '1',
                width: height,
                height: height,
                verticalAlign: 'top',
                position: 'relative',
                userSelect: 'none',
                selectors: (_a = {
                        ':before': {
                            content: '""',
                            position: 'absolute',
                            top: '1px',
                            right: '1px',
                            bottom: '1px',
                            left: '1px',
                            borderRadius: '50%',
                            opacity: 1,
                            background: semanticColors.bodyBackground,
                        }
                    },
                    _a["." + classNames.checkHost + ":hover &, ." + classNames.checkHost + ":focus &, &:hover, &:focus"] = {
                        opacity: 1,
                    },
                    _a),
            },
            checked && [
                'is-checked',
                {
                    selectors: {
                        ':before': {
                            background: palette.themePrimary,
                            opacity: 1,
                            selectors: (_b = {},
                                _b[HighContrastSelector] = {
                                    background: 'Window',
                                },
                                _b),
                        },
                    },
                },
            ],
            className,
        ],
        circle: [
            classNames.circle,
            sharedCircleCheck,
            {
                color: palette.neutralSecondary,
                selectors: (_c = {},
                    _c[HighContrastSelector] = {
                        color: 'WindowText',
                    },
                    _c),
            },
            checked && {
                color: palette.white,
            },
        ],
        check: [
            classNames.check,
            sharedCircleCheck,
            {
                opacity: 0,
                color: palette.neutralSecondary,
                fontSize: IconFontSizes.medium,
                left: isRTL ? '-0.5px' : '.5px',
                selectors: (_d = {
                        ':hover': {
                            opacity: 1,
                        }
                    },
                    _d[HighContrastSelector] = {
                        MsHighContrastAdjust: 'none',
                    },
                    _d),
            },
            checked && {
                opacity: 1,
                color: palette.white,
                fontWeight: 900,
                selectors: (_e = {},
                    _e[HighContrastSelector] = {
                        border: 'none',
                        color: 'WindowText',
                    },
                    _e),
            },
        ],
        checkHost: classNames.checkHost,
    };
};
//# sourceMappingURL=Check.styles.js.map