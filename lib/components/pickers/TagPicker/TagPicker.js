import { __assign, __extends } from "tslib";
/* tslint:disable */
import * as React from 'react';
/* tslint:enable */
import { styled, initializeComponentRef } from '../../../Utilities';
import { BasePicker } from '../BasePicker';
import { getStyles } from '../BasePicker.styles';
import { TagItem } from './TagItem';
import { TagItemSuggestion } from './TagItemSuggestion';
/**
 * {@docCategory TagPicker}
 */
var TagPickerBase = /** @class */ (function (_super) {
    __extends(TagPickerBase, _super);
    function TagPickerBase(props) {
        var _this = _super.call(this, props) || this;
        initializeComponentRef(_this);
        return _this;
    }
    TagPickerBase.defaultProps = {
        onRenderItem: function (props) { return React.createElement(TagItem, __assign({}, props), props.item.name); },
        onRenderSuggestionsItem: function (props) { return React.createElement(TagItemSuggestion, null, props.name); },
    };
    return TagPickerBase;
}(BasePicker));
export { TagPickerBase };
export var TagPicker = styled(TagPickerBase, getStyles, undefined, {
    scope: 'TagPicker',
});
//# sourceMappingURL=TagPicker.js.map