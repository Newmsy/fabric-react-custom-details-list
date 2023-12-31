"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Styling_1 = require("../../Styling");
var positioning_1 = require("../../utilities/positioning");
exports.getClassNames = Utilities_1.memoizeFunction(function (styles, disabled, isFocused, keyboardSpinDirection, labelPosition, className) {
    if (labelPosition === void 0) { labelPosition = positioning_1.Position.start; }
    if (className === void 0) { className = undefined; }
    return {
        root: Styling_1.mergeStyles(styles.root, className),
        labelWrapper: Styling_1.mergeStyles(styles.labelWrapper, _getStyleForLabelBasedOnPosition(labelPosition, styles)),
        icon: Styling_1.mergeStyles(styles.icon, disabled && styles.iconDisabled),
        label: Styling_1.mergeStyles(styles.label),
        spinButtonWrapper: Styling_1.mergeStyles(styles.spinButtonWrapper, _getStyleForRootBasedOnPosition(labelPosition, styles), !disabled && [
            {
                selectors: {
                    ':hover': styles.spinButtonWrapperHovered,
                },
            },
            isFocused && {
                // This is to increase the specificity of the focus styles
                // and make it equal to that of the hover styles.
                selectors: {
                    '&&': styles.spinButtonWrapperFocused,
                },
            },
        ], disabled && styles.spinButtonWrapperDisabled),
        input: Styling_1.mergeStyles('ms-spinButton-input', styles.input, !disabled && {
            selectors: {
                '::selection': styles.inputTextSelected,
            },
        }, disabled && styles.inputDisabled),
        arrowBox: Styling_1.mergeStyles(styles.arrowButtonsContainer, disabled && styles.arrowButtonsContainerDisabled),
    };
});
/**
 * Returns the Style corresponding to the label position
 */
function _getStyleForLabelBasedOnPosition(labelPosition, styles) {
    switch (labelPosition) {
        case positioning_1.Position.start:
            return styles.labelWrapperStart;
        case positioning_1.Position.end:
            return styles.labelWrapperEnd;
        case positioning_1.Position.top:
            return styles.labelWrapperTop;
        case positioning_1.Position.bottom:
            return styles.labelWrapperBottom;
    }
}
/**
 * Returns the Style corresponding to the label position
 */
function _getStyleForRootBasedOnPosition(labelPosition, styles) {
    switch (labelPosition) {
        case positioning_1.Position.top:
        case positioning_1.Position.bottom:
            return styles.spinButtonWrapperTopBottom;
        default:
            return {};
    }
}
//# sourceMappingURL=SpinButton.classNames.js.map