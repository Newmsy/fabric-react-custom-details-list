define(["require", "exports", "tslib", "../../../Utilities", "../BaseFloatingPicker", "./PeoplePickerItems/SuggestionItemDefault", "./PeoplePicker.scss"], function (require, exports, tslib_1, Utilities_1, BaseFloatingPicker_1, SuggestionItemDefault_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory FloatingPeoplePicker}
     */
    var BaseFloatingPeoplePicker = /** @class */ (function (_super) {
        tslib_1.__extends(BaseFloatingPeoplePicker, _super);
        function BaseFloatingPeoplePicker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BaseFloatingPeoplePicker;
    }(BaseFloatingPicker_1.BaseFloatingPicker));
    exports.BaseFloatingPeoplePicker = BaseFloatingPeoplePicker;
    var FloatingPeoplePicker = /** @class */ (function (_super) {
        tslib_1.__extends(FloatingPeoplePicker, _super);
        function FloatingPeoplePicker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // tslint:disable-next-line:no-any
        FloatingPeoplePicker.defaultProps = {
            onRenderSuggestionsItem: function (props, itemProps) {
                return SuggestionItemDefault_1.SuggestionItemNormal(tslib_1.__assign({}, props), tslib_1.__assign({}, itemProps));
            },
            createGenericItem: createItem,
        };
        return FloatingPeoplePicker;
    }(BaseFloatingPeoplePicker));
    exports.FloatingPeoplePicker = FloatingPeoplePicker;
    function createItem(name, isValid) {
        // tslint:disable-next-line:no-any
        var personaToConvert = {
            key: name,
            primaryText: name,
            imageInitials: '!',
            isValid: isValid,
        };
        if (!isValid) {
            personaToConvert.imageInitials = Utilities_1.getInitials(name, Utilities_1.getRTL());
        }
        return personaToConvert;
    }
    exports.createItem = createItem;
});
//# sourceMappingURL=FloatingPeoplePicker.js.map