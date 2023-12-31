var _a, _b;
import { FontWeights, concatStyleSets, getFocusStyle, HighContrastSelector, getPlaceholderStyles, hiddenContentStyle, getInputFocusStyle, } from '../../Styling';
import { memoizeFunction } from '../../Utilities';
var ComboBoxHeight = 32;
var ComboBoxLineHeight = 30;
var ComboBoxCaretDownWidth = 32;
var ComboBoxOptionHeight = 36;
var getDisabledStyles = memoizeFunction(function (theme) {
    var _a;
    var semanticColors = theme.semanticColors;
    return {
        backgroundColor: semanticColors.disabledBackground,
        color: semanticColors.disabledText,
        cursor: 'default',
        selectors: (_a = {
                ':after': {
                    borderColor: semanticColors.disabledBackground,
                }
            },
            _a[HighContrastSelector] = {
                color: 'GrayText',
                selectors: {
                    ':after': {
                        borderColor: 'GrayText',
                    },
                },
            },
            _a),
    };
});
var listOptionHighContrastStyles = {
    selectors: (_a = {},
        _a[HighContrastSelector] = {
            backgroundColor: 'Highlight',
            borderColor: 'Highlight',
            color: 'HighlightText',
            MsHighContrastAdjust: 'none',
        },
        _a),
};
var inputHighContrastStyles = {
    selectors: (_b = {},
        _b[HighContrastSelector] = {
            color: 'WindowText',
            backgroundColor: 'Window',
            MsHighContrastAdjust: 'none',
        },
        _b),
};
export var getOptionStyles = memoizeFunction(function (theme, customStylesForAllOptions, customOptionStylesForCurrentOption, isPending, isHidden) {
    var _a;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var option = {
        textHoveredColor: semanticColors.menuItemTextHovered,
        textSelectedColor: palette.neutralDark,
        textDisabledColor: semanticColors.disabledText,
        backgroundHoveredColor: semanticColors.menuItemBackgroundHovered,
        backgroundPressedColor: semanticColors.menuItemBackgroundPressed,
    };
    var optionStyles = {
        root: [
            theme.fonts.medium,
            {
                backgroundColor: isPending ? option.backgroundHoveredColor : 'transparent',
                boxSizing: 'border-box',
                cursor: 'pointer',
                display: isHidden ? 'none' : 'block',
                width: '100%',
                height: 'auto',
                minHeight: ComboBoxOptionHeight,
                lineHeight: '20px',
                padding: '0 8px',
                position: 'relative',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                borderRadius: 0,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                textAlign: 'left',
                selectors: (_a = {},
                    _a[HighContrastSelector] = {
                        borderColor: 'Background',
                    },
                    _a['&.ms-Checkbox'] = {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    _a['&.ms-Button--command:hover:active'] = {
                        backgroundColor: option.backgroundPressedColor,
                    },
                    _a['.ms-Checkbox-label'] = {
                        width: '100%',
                    },
                    _a),
            },
        ],
        rootHovered: {
            backgroundColor: option.backgroundHoveredColor,
            color: option.textHoveredColor,
        },
        rootFocused: {
            backgroundColor: option.backgroundHoveredColor,
        },
        rootChecked: [
            {
                backgroundColor: 'transparent',
                color: option.textSelectedColor,
                selectors: {
                    ':hover': [
                        {
                            backgroundColor: option.backgroundHoveredColor,
                        },
                        listOptionHighContrastStyles,
                    ],
                },
            },
            getFocusStyle(theme, { inset: -1, isFocusedOnly: false }),
            listOptionHighContrastStyles,
        ],
        rootDisabled: {
            color: option.textDisabledColor,
            cursor: 'default',
        },
        optionText: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            minWidth: '0px',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            display: 'inline-block',
        },
        optionTextWrapper: {
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
        },
    };
    return concatStyleSets(optionStyles, customStylesForAllOptions, customOptionStylesForCurrentOption);
});
export var getCaretDownButtonStyles = memoizeFunction(function (theme, customStyles) {
    var _a, _b;
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var caret = {
        buttonTextColor: semanticColors.bodySubtext,
        buttonTextHoveredCheckedColor: semanticColors.buttonTextChecked,
        buttonBackgroundHoveredColor: semanticColors.listItemBackgroundHovered,
        buttonBackgroundCheckedColor: semanticColors.listItemBackgroundChecked,
        buttonBackgroundCheckedHoveredColor: semanticColors.listItemBackgroundCheckedHovered,
    };
    var buttonHighContrastStyles = {
        selectors: (_a = {},
            _a[HighContrastSelector] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none',
            },
            _a),
    };
    var styles = {
        root: {
            color: caret.buttonTextColor,
            fontSize: fonts.small.fontSize,
            position: 'absolute',
            top: 0,
            height: '100%',
            lineHeight: ComboBoxLineHeight,
            width: ComboBoxCaretDownWidth,
            textAlign: 'center',
            cursor: 'default',
            selectors: (_b = {},
                _b[HighContrastSelector] = {
                    backgroundColor: 'ButtonFace',
                    borderColor: 'ButtonText',
                    color: 'ButtonText',
                    MsHighContrastAdjust: 'none',
                },
                _b),
        },
        icon: {
            fontSize: fonts.small.fontSize,
        },
        rootHovered: [
            {
                backgroundColor: caret.buttonBackgroundHoveredColor,
                color: caret.buttonTextHoveredCheckedColor,
                cursor: 'pointer',
            },
            buttonHighContrastStyles,
        ],
        rootPressed: [
            {
                backgroundColor: caret.buttonBackgroundCheckedColor,
                color: caret.buttonTextHoveredCheckedColor,
            },
            buttonHighContrastStyles,
        ],
        rootChecked: [
            {
                backgroundColor: caret.buttonBackgroundCheckedColor,
                color: caret.buttonTextHoveredCheckedColor,
            },
            buttonHighContrastStyles,
        ],
        rootCheckedHovered: [
            {
                backgroundColor: caret.buttonBackgroundCheckedHoveredColor,
                color: caret.buttonTextHoveredCheckedColor,
            },
            buttonHighContrastStyles,
        ],
        rootDisabled: [
            getDisabledStyles(theme),
            {
                position: 'absolute',
            },
        ],
    };
    return concatStyleSets(styles, customStyles);
});
export var getStyles = memoizeFunction(function (theme, customStyles, comboBoxOptionWidth) {
    var _a, _b, _c, _d, _e;
    var semanticColors = theme.semanticColors, fonts = theme.fonts, effects = theme.effects;
    var root = {
        textColor: semanticColors.inputText,
        borderColor: semanticColors.inputBorder,
        borderHoveredColor: semanticColors.inputBorderHovered,
        borderPressedColor: semanticColors.inputFocusBorderAlt,
        borderFocusedColor: semanticColors.inputFocusBorderAlt,
        backgroundColor: semanticColors.inputBackground,
        erroredColor: semanticColors.errorText,
    };
    var option = {
        headerTextColor: semanticColors.menuHeader,
        dividerBorderColor: semanticColors.bodyDivider,
    };
    // placeholder style variables
    var placeholderHighContrastStyles = {
        selectors: (_a = {},
            _a[HighContrastSelector] = {
                color: 'GrayText',
            },
            _a),
    };
    var placeholderStyles = [
        {
            color: semanticColors.inputPlaceholderText,
        },
        placeholderHighContrastStyles,
    ];
    var placeholderStylesHovered = [
        {
            color: semanticColors.inputTextHovered,
        },
        placeholderHighContrastStyles,
    ];
    var disabledPlaceholderStyles = [
        {
            color: semanticColors.disabledText,
        },
        placeholderHighContrastStyles,
    ];
    var ComboBoxRootHighContrastFocused = {
        color: 'HighlightText',
        backgroundColor: 'Window',
        MsHighContrastAdjust: 'none',
        selectors: {
            ':after': {
                borderColor: 'Highlight',
            },
        },
    };
    var focusBorderStyles = getInputFocusStyle(root.borderPressedColor, effects.roundedCorner2, 'border', 0);
    var styles = {
        container: {},
        label: {},
        labelDisabled: {},
        root: [
            theme.fonts.medium,
            {
                boxShadow: 'none',
                marginLeft: '0',
                paddingRight: ComboBoxCaretDownWidth,
                paddingLeft: 9,
                color: root.textColor,
                position: 'relative',
                outline: '0',
                userSelect: 'none',
                backgroundColor: root.backgroundColor,
                cursor: 'text',
                display: 'block',
                height: ComboBoxHeight,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                boxSizing: 'border-box',
                selectors: {
                    '.ms-Label': {
                        display: 'inline-block',
                        marginBottom: '8px',
                    },
                    '&.is-open': {
                        selectors: (_b = {},
                            _b[HighContrastSelector] = ComboBoxRootHighContrastFocused,
                            _b),
                    },
                    // setting border using pseudo-element here in order to
                    // prevent chevron button to overlap ComboBox border under certain resolutions
                    ':after': {
                        pointerEvents: 'none',
                        content: "''",
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: root.borderColor,
                        borderRadius: effects.roundedCorner2,
                    },
                },
            },
        ],
        rootHovered: {
            selectors: (_c = {
                    ':after': {
                        borderColor: root.borderHoveredColor,
                    },
                    '.ms-ComboBox-Input': [
                        {
                            color: semanticColors.inputTextHovered,
                        },
                        getPlaceholderStyles(placeholderStylesHovered),
                        inputHighContrastStyles,
                    ]
                },
                _c[HighContrastSelector] = {
                    color: 'HighlightText',
                    backgroundColor: 'Window',
                    MsHighContrastAdjust: 'none',
                    selectors: {
                        ':after': {
                            borderColor: 'Highlight',
                        },
                    },
                },
                _c),
        },
        rootPressed: [
            {
                position: 'relative',
                selectors: (_d = {},
                    _d[HighContrastSelector] = ComboBoxRootHighContrastFocused,
                    _d),
            },
        ],
        rootFocused: [
            {
                selectors: (_e = {
                        '.ms-ComboBox-Input': [
                            {
                                color: semanticColors.inputTextHovered,
                            },
                            inputHighContrastStyles,
                        ]
                    },
                    _e[HighContrastSelector] = ComboBoxRootHighContrastFocused,
                    _e),
            },
            focusBorderStyles,
        ],
        rootDisabled: getDisabledStyles(theme),
        rootError: {
            selectors: {
                ':after': {
                    borderColor: root.erroredColor,
                },
                ':hover:after': {
                    borderColor: semanticColors.inputBorderHovered,
                },
            },
        },
        rootDisallowFreeForm: {},
        input: [
            getPlaceholderStyles(placeholderStyles),
            {
                backgroundColor: root.backgroundColor,
                color: root.textColor,
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                borderStyle: 'none',
                outline: 'none',
                font: 'inherit',
                textOverflow: 'ellipsis',
                padding: '0',
                selectors: {
                    '::-ms-clear': {
                        display: 'none',
                    },
                },
            },
            inputHighContrastStyles,
        ],
        inputDisabled: [getDisabledStyles(theme), getPlaceholderStyles(disabledPlaceholderStyles)],
        errorMessage: [
            theme.fonts.small,
            {
                color: root.erroredColor,
                marginTop: '5px',
            },
        ],
        callout: {
            boxShadow: effects.elevation8,
        },
        optionsContainerWrapper: {
            width: comboBoxOptionWidth,
        },
        optionsContainer: {
            display: 'block',
        },
        screenReaderText: hiddenContentStyle,
        header: [
            fonts.medium,
            {
                fontWeight: FontWeights.semibold,
                color: option.headerTextColor,
                backgroundColor: 'none',
                borderStyle: 'none',
                height: ComboBoxOptionHeight,
                lineHeight: ComboBoxOptionHeight,
                cursor: 'default',
                padding: '0 8px',
                userSelect: 'none',
                textAlign: 'left',
            },
        ],
        divider: {
            height: 1,
            backgroundColor: option.dividerBorderColor,
        },
    };
    return concatStyleSets(styles, customStyles);
});
//# sourceMappingURL=ComboBox.styles.js.map