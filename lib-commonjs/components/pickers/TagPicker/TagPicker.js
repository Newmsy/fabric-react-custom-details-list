"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable */
var React = require("react");
/* tslint:enable */
var Utilities_1 = require("../../../Utilities");
var BasePicker_1 = require("../BasePicker");
var BasePicker_styles_1 = require("../BasePicker.styles");
var TagItem_1 = require("./TagItem");
var TagItemSuggestion_1 = require("./TagItemSuggestion");
/**
 * {@docCategory TagPicker}
 */
var TagPickerBase = /** @class */ (function (_super) {
    tslib_1.__extends(TagPickerBase, _super);
    function TagPickerBase(props) {
        var _this = _super.call(this, props) || this;
        Utilities_1.initializeComponentRef(_this);
        return _this;
    }
    TagPickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(TagItem_1.TagItem, tslib_1.__assign({}, props), props.item.name); },
        onRenderSuggestionsItem: function (props) { return React.createElement(TagItemSuggestion_1.TagItemSuggestion, null, props.name); },
    };
    return TagPickerBase;
}(BasePicker_1.BasePicker));
exports.TagPickerBase = TagPickerBase;
exports.TagPicker = Utilities_1.styled(TagPickerBase, BasePicker_styles_1.getStyles, undefined, {
    scope: 'TagPicker',
});
//# sourceMappingURL=TagPicker.js.map