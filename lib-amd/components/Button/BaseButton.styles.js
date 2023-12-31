define(["require", "exports", "../../Utilities", "../../Styling"], function (require, exports, Utilities_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var noOutline = {
        outline: 0,
    };
    var iconStyle = function (fontSize) {
        return {
            fontSize: fontSize,
            margin: '0 4px',
            height: '16px',
            lineHeight: '16px',
            textAlign: 'center',
            flexShrink: 0,
        };
    };
    /**
     * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
     * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
     * mixing class names together.
     */
    exports.getStyles = Utilities_1.memoizeFunction(function (theme) {
        var _a;
        var semanticColors = theme.semanticColors, effects = theme.effects, fonts = theme.fonts;
        var border = semanticColors.buttonBorder;
        var disabledBackground = semanticColors.disabledBackground;
        var disabledText = semanticColors.disabledText;
        var buttonHighContrastFocus = {
            left: -2,
            top: -2,
            bottom: -2,
            right: -2,
            border: 'none',
            outlineColor: 'ButtonText',
        };
        return {
            root: [
                Styling_1.getFocusStyle(theme, { inset: 1, highContrastStyle: buttonHighContrastFocus, borderColor: 'transparent' }),
                theme.fonts.medium,
                {
                    boxSizing: 'border-box',
                    border: '1px solid ' + border,
                    userSelect: 'none',
                    display: 'inline-block',
                    textDecoration: 'none',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '0 16px',
                    borderRadius: effects.roundedCorner2,
                    selectors: {
                        // IE11 workaround for preventing shift of child elements of a button when active.
                        ':active > *': {
                            position: 'relative',
                            left: 0,
                            top: 0,
                        },
                    },
                },
            ],
            rootDisabled: [
                Styling_1.getFocusStyle(theme, { inset: 1, highContrastStyle: buttonHighContrastFocus, borderColor: 'transparent' }),
                {
                    backgroundColor: disabledBackground,
                    borderColor: disabledBackground,
                    color: disabledText,
                    cursor: 'default',
                    pointerEvents: 'none',
                    selectors: (_a = {
                            ':hover': noOutline,
                            ':focus': noOutline
                        },
                        _a[Styling_1.HighContrastSelector] = {
                            color: 'grayText',
                            borderColor: 'grayText',
                        },
                        _a),
                },
            ],
            iconDisabled: {
                color: disabledText,
            },
            menuIconDisabled: {
                color: disabledText,
            },
            flexContainer: {
                display: 'flex',
                height: '100%',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
            },
            description: {
                display: 'block',
            },
            textContainer: {
                flexGrow: 1,
                display: 'block',
            },
            icon: iconStyle(fonts.mediumPlus.fontSize),
            menuIcon: iconStyle(fonts.small.fontSize),
            label: {
                margin: '0 4px',
                lineHeight: '100%',
                display: 'block',
            },
            screenReaderText: Styling_1.hiddenContentStyle,
        };
    });
});
//# sourceMappingURL=BaseButton.styles.js.map