"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../../Utilities");
var Persona_1 = require("../../../../Persona");
var Button_1 = require("../../../../Button");
var BasePicker_types_1 = require("../../BasePicker.types");
var PeoplePickerItem_styles_1 = require("./PeoplePickerItem.styles");
var getClassNames = Utilities_1.classNamesFunction();
exports.PeoplePickerItemBase = function (props) {
    var item = props.item, onRemoveItem = props.onRemoveItem, index = props.index, selected = props.selected, removeButtonAriaLabel = props.removeButtonAriaLabel, styles = props.styles, theme = props.theme, className = props.className, disabled = props.disabled;
    var itemId = Utilities_1.getId();
    var classNames = getClassNames(styles, {
        theme: theme,
        className: className,
        selected: selected,
        disabled: disabled,
        invalid: item.ValidationState === BasePicker_types_1.ValidationState.warning,
    });
    var personaStyles = classNames.subComponentStyles
        ? classNames.subComponentStyles.persona
        : undefined;
    var personaCoinStyles = classNames.subComponentStyles
        ? classNames.subComponentStyles.personaCoin
        : undefined;
    return (React.createElement("div", { className: classNames.root, "data-is-focusable": !disabled, "data-is-sub-focuszone": true, "data-selection-index": index, role: 'listitem', "aria-labelledby": 'selectedItemPersona-' + itemId },
        React.createElement("div", { className: classNames.itemContent, id: 'selectedItemPersona-' + itemId },
            React.createElement(Persona_1.Persona, tslib_1.__assign({ size: Persona_1.PersonaSize.size24, styles: personaStyles, coinProps: { styles: personaCoinStyles } }, item))),
        React.createElement(Button_1.IconButton, { onClick: onRemoveItem, disabled: disabled, iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, className: classNames.removeButton, ariaLabel: removeButtonAriaLabel })));
};
exports.PeoplePickerItem = Utilities_1.styled(exports.PeoplePickerItemBase, PeoplePickerItem_styles_1.getStyles, undefined, { scope: 'PeoplePickerItem' });
//# sourceMappingURL=PeoplePickerItem.js.map