import { concatStyleSets, HighContrastSelector, IconFontSizes, getInputFocusStyle, } from '../../Styling';
import { memoizeFunction } from '../../Utilities';
var ARROW_BUTTON_WIDTH = 23;
var ARROW_BUTTON_ICON_SIZE = 8;
var DEFAULT_HEIGHT = 32;
var DEFAULT_MIN_WIDTH = 86;
var LABEL_MARGIN = 10;
var _getDisabledStyles = memoizeFunction(function (theme) {
    var _a;
    var semanticColors = theme.semanticColors;
    var SpinButtonTextColorDisabled = semanticColors.disabledText;
    var SpinButtonBackgroundColorDisabled = semanticColors.disabledBackground;
    return {
        backgroundColor: SpinButtonBackgroundColorDisabled,
        pointerEvents: 'none',
        cursor: 'default',
        color: SpinButtonTextColorDisabled,
        selectors: (_a = {
                ':after': {
                    borderColor: SpinButtonBackgroundColorDisabled,
                }
            },
            _a[HighContrastSelector] = {
                color: 'GrayText',
            },
            _a),
    };
});
export var getArrowButtonStyles = memoizeFunction(function (theme, isUpArrow, customSpecificArrowStyles) {
    var _a, _b, _c;
    var palette = theme.palette, semanticColors = theme.semanticColors, effects = theme.effects;
    // TODO: after updating the semanticColor slots all this need to be reevaluated.
    var ArrowButtonTextColor = palette.neutralSecondary;
    var ArrowButtonTextColorHovered = semanticColors.buttonText;
    var ArrowButtonTextColorPressed = semanticColors.buttonText;
    var ArrowButtonBackgroundHovered = semanticColors.buttonBackgroundHovered;
    var ArrowButtonBackgroundPressed = semanticColors.buttonBackgroundPressed;
    var defaultArrowButtonStyles = {
        root: {
            outline: 'none',
            display: 'block',
            height: '50%',
            width: ARROW_BUTTON_WIDTH,
            padding: 0,
            backgroundColor: 'transparent',
            textAlign: 'center',
            cursor: 'default',
            color: ArrowButtonTextColor,
            selectors: {
                '&.ms-DownButton': {
                    borderRadius: "0 0 " + effects.roundedCorner2 + " 0",
                },
                '&.ms-UpButton': {
                    borderRadius: "0 " + effects.roundedCorner2 + " 0 0",
                },
            },
        },
        rootHovered: {
            backgroundColor: ArrowButtonBackgroundHovered,
            color: ArrowButtonTextColorHovered,
        },
        rootChecked: {
            backgroundColor: ArrowButtonBackgroundPressed,
            color: ArrowButtonTextColorPressed,
            selectors: (_a = {},
                _a[HighContrastSelector] = {
                    backgroundColor: 'Highlight',
                    color: 'HighlightText',
                },
                _a),
        },
        rootPressed: {
            backgroundColor: ArrowButtonBackgroundPressed,
            color: ArrowButtonTextColorPressed,
            selectors: (_b = {},
                _b[HighContrastSelector] = {
                    backgroundColor: 'Highlight',
                    color: 'HighlightText',
                },
                _b),
        },
        rootDisabled: {
            opacity: 0.5,
            selectors: (_c = {},
                _c[HighContrastSelector] = {
                    color: 'GrayText',
                    opacity: 1,
                },
                _c),
        },
        icon: {
            fontSize: ARROW_BUTTON_ICON_SIZE,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
        },
    };
    // No specific styles needed as of now.
    var defaultUpArrowButtonStyles = {};
    var defaultDownArrowButtonStyles = {};
    return concatStyleSets(defaultArrowButtonStyles, isUpArrow ? defaultUpArrowButtonStyles : defaultDownArrowButtonStyles, customSpecificArrowStyles);
});
export var getStyles = memoizeFunction(function (theme, customStyles) {
    var _a, _b;
    var palette = theme.palette, semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
    var SpinButtonRootBorderColor = semanticColors.inputBorder;
    var SpinButtonRootBackgroundColor = semanticColors.inputBackground;
    var SpinButtonRootBorderColorHovered = semanticColors.inputBorderHovered;
    var SpinButtonRootBorderColorFocused = semanticColors.inputFocusBorderAlt;
    var SpinButtonInputTextColor = semanticColors.inputText;
    var SpinButtonInputTextColorSelected = palette.white;
    var SpinButtonInputBackgroundColorSelected = semanticColors.inputBackgroundChecked;
    var SpinButtonIconDisabledColor = semanticColors.disabledText;
    var defaultStyles = {
        root: {
            outline: 'none',
            fontSize: fonts.medium.fontSize,
            width: '100%',
            minWidth: DEFAULT_MIN_WIDTH,
        },
        labelWrapper: {
            display: 'inline-flex',
            alignItems: 'center',
        },
        labelWrapperStart: {
            height: DEFAULT_HEIGHT,
            float: 'left',
            marginRight: LABEL_MARGIN,
        },
        labelWrapperEnd: {
            height: DEFAULT_HEIGHT,
            float: 'right',
            marginLeft: LABEL_MARGIN,
        },
        labelWrapperTop: {
            // Due to the lineHeight set on the label (below), the height of the wrapper (contains icon+label)
            // ends up 1px taller than a standard label height, causing the vertical alignment to be off when
            // the SpinButton is displayed with the label on top next to other form fields.
            // Decrease the wrapper's effective height slightly to compensate.
            marginBottom: -1,
        },
        labelWrapperBottom: {},
        icon: {
            padding: '0 5px',
            fontSize: IconFontSizes.large,
        },
        iconDisabled: {
            color: SpinButtonIconDisabledColor,
        },
        label: {
            pointerEvents: 'none',
            // centering the label with the icon by forcing the exact same height as the icon.
            lineHeight: IconFontSizes.large,
        },
        labelDisabled: {},
        spinButtonWrapper: {
            display: 'flex',
            position: 'relative',
            boxSizing: 'border-box',
            height: DEFAULT_HEIGHT,
            minWidth: DEFAULT_MIN_WIDTH,
            selectors: {
                // setting border using pseudo-element here in order to prevent:
                // input and chevron buttons to overlap border under certain resolutions
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
                    borderColor: SpinButtonRootBorderColor,
                    borderRadius: effects.roundedCorner2,
                },
            },
        },
        spinButtonWrapperTopBottom: {
            width: '100%',
        },
        spinButtonWrapperHovered: {
            selectors: (_a = {
                    ':after': {
                        borderColor: SpinButtonRootBorderColorHovered,
                    }
                },
                _a[HighContrastSelector] = {
                    selectors: {
                        ':after': {
                            borderColor: 'Highlight',
                        },
                    },
                },
                _a),
        },
        spinButtonWrapperFocused: getInputFocusStyle(SpinButtonRootBorderColorFocused, effects.roundedCorner2),
        spinButtonWrapperDisabled: _getDisabledStyles(theme),
        input: {
            boxSizing: 'border-box',
            boxShadow: 'none',
            borderStyle: 'none',
            flex: 1,
            margin: 0,
            fontSize: fonts.medium.fontSize,
            color: SpinButtonInputTextColor,
            backgroundColor: SpinButtonRootBackgroundColor,
            height: '100%',
            padding: '0 8px 0 9px',
            outline: 0,
            display: 'block',
            minWidth: DEFAULT_MIN_WIDTH - ARROW_BUTTON_WIDTH - 2,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            cursor: 'text',
            userSelect: 'text',
            borderRadius: effects.roundedCorner2 + " 0 0 " + effects.roundedCorner2,
        },
        inputTextSelected: {
            backgroundColor: SpinButtonInputBackgroundColorSelected,
            color: SpinButtonInputTextColorSelected,
            selectors: (_b = {},
                _b[HighContrastSelector] = {
                    backgroundColor: 'Highlight',
                    borderColor: 'Highlight',
                    color: 'HighlightText',
                },
                _b),
        },
        inputDisabled: _getDisabledStyles(theme),
        arrowButtonsContainer: {
            display: 'block',
            height: '100%',
            cursor: 'default',
        },
        arrowButtonsContainerDisabled: _getDisabledStyles(theme),
    };
    return concatStyleSets(defaultStyles, customStyles);
});
//# sourceMappingURL=SpinButton.styles.js.map