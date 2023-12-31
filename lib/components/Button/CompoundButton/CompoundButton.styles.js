import { concatStyleSets, FontWeights, HighContrastSelector } from '../../../Styling';
import { memoizeFunction } from '../../../Utilities';
import { getStyles as getBaseButtonStyles } from '../BaseButton.styles';
import { getStyles as getSplitButtonStyles } from '../SplitButton/SplitButton.styles';
import { primaryStyles, standardStyles } from '../ButtonThemes';
export var getStyles = memoizeFunction(function (theme, customStyles, primary) {
    var _a, _b, _c, _d, _e;
    var fonts = theme.fonts, palette = theme.palette;
    var baseButtonStyles = getBaseButtonStyles(theme);
    var splitButtonStyles = getSplitButtonStyles(theme);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '16px 12px',
        },
        flexContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: '',
        },
        textContainer: {
            textAlign: 'left',
        },
        icon: {
            fontSize: '2em',
            lineHeight: '1em',
            height: '1em',
            margin: '0px 8px 0px 0px',
            flexBasis: '1em',
            flexShrink: '0',
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%',
            fontWeight: FontWeights.semibold,
        },
        description: [
            fonts.small,
            {
                lineHeight: '100%',
            },
        ],
    };
    var standardCompoundTheme = {
        description: {
            color: palette.neutralSecondary,
        },
        descriptionHovered: {
            color: palette.neutralDark,
        },
        descriptionPressed: {
            color: 'inherit',
        },
        descriptionChecked: {
            color: 'inherit',
        },
        descriptionDisabled: {
            color: 'inherit',
        },
    };
    var primaryCompoundTheme = {
        description: {
            color: palette.white,
            selectors: (_a = {},
                _a[HighContrastSelector] = {
                    backgroundColor: 'WindowText',
                    color: 'Window',
                    MsHighContrastAdjust: 'none',
                },
                _a),
        },
        descriptionHovered: {
            color: palette.white,
            selectors: (_b = {},
                _b[HighContrastSelector] = {
                    backgroundColor: 'Highlight',
                    color: 'Window',
                },
                _b),
        },
        descriptionPressed: {
            color: 'inherit',
            selectors: (_c = {},
                _c[HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none',
                },
                _c),
        },
        descriptionChecked: {
            color: 'inherit',
            selectors: (_d = {},
                _d[HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none',
                },
                _d),
        },
        descriptionDisabled: {
            color: 'inherit',
            selectors: (_e = {},
                _e[HighContrastSelector] = {
                    color: 'inherit',
                },
                _e),
        },
    };
    return concatStyleSets(baseButtonStyles, compoundButtonStyles, primary ? primaryStyles(theme) : standardStyles(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
});
//# sourceMappingURL=CompoundButton.styles.js.map