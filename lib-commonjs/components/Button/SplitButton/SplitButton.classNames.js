"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../../Utilities");
var Styling_1 = require("../../../Styling");
exports.getClassNames = Utilities_1.memoizeFunction(function (styles, disabled, expanded, checked, primaryDisabled) {
    return {
        root: Styling_1.mergeStyles(styles.splitButtonMenuButton, expanded && [styles.splitButtonMenuButtonExpanded], disabled && [styles.splitButtonMenuButtonDisabled], checked && !disabled && [styles.splitButtonMenuButtonChecked]),
        splitButtonContainer: Styling_1.mergeStyles(styles.splitButtonContainer, !disabled &&
            checked && [
            styles.splitButtonContainerChecked,
            {
                selectors: {
                    ':hover': styles.splitButtonContainerCheckedHovered,
                },
            },
        ], !disabled &&
            !checked && [
            {
                selectors: {
                    ':hover': styles.splitButtonContainerHovered,
                    ':focus': styles.splitButtonContainerFocused,
                },
            },
        ], disabled && styles.splitButtonContainerDisabled),
        icon: Styling_1.mergeStyles(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled, !disabled && primaryDisabled && styles.splitButtonMenuIcon),
        flexContainer: Styling_1.mergeStyles(styles.splitButtonFlexContainer),
        divider: Styling_1.mergeStyles(styles.splitButtonDivider, (primaryDisabled || disabled) && styles.splitButtonDividerDisabled),
    };
});
//# sourceMappingURL=SplitButton.classNames.js.map