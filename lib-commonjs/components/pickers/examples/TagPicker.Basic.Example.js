"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Pickers_1 = require("office-ui-fabric-react/lib-commonjs/Pickers");
var Checkbox_1 = require("office-ui-fabric-react/lib-commonjs/Checkbox");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var rootClass = Styling_1.mergeStyles({
    maxWidth: 500,
});
var checkboxStyles = { root: { margin: '10px 0' } };
var _testTags = [
    'black',
    'blue',
    'brown',
    'cyan',
    'green',
    'magenta',
    'mauve',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'violet',
    'white',
    'yellow',
].map(function (item) { return ({ key: item, name: item }); });
var TagPickerBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(TagPickerBasicExample, _super);
    function TagPickerBasicExample(props) {
        var _this = _super.call(this, props) || this;
        // All pickers extend from BasePicker specifying the item type.
        _this._picker = React.createRef();
        _this._onDisabledButtonClick = function () {
            _this.setState({
                isPickerDisabled: !_this.state.isPickerDisabled,
            });
        };
        _this._onFilterChanged = function (filterText, tagList) {
            return filterText
                ? _testTags
                    .filter(function (tag) { return tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0; })
                    .filter(function (tag) { return !_this._listContainsDocument(tag, tagList); })
                : [];
        };
        _this._onFilterChangedNoFilter = function (filterText, tagList) {
            return filterText ? _testTags.filter(function (tag) { return tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0; }) : [];
        };
        _this._onItemSelected = function (item) {
            if (_this._picker.current && _this._listContainsDocument(item, _this._picker.current.items)) {
                return null;
            }
            return item;
        };
        _this.state = {
            isPickerDisabled: false,
        };
        return _this;
    }
    TagPickerBasicExample.prototype.render = function () {
        return (React.createElement("div", { className: rootClass },
            React.createElement(Checkbox_1.Checkbox, { styles: checkboxStyles, label: "Disable Tag Picker", checked: this.state.isPickerDisabled, onChange: this._onDisabledButtonClick }),
            "Filter items in suggestions: This picker will filter added items from the search suggestions.",
            React.createElement(Pickers_1.TagPicker, { removeButtonAriaLabel: "Remove", onResolveSuggestions: this._onFilterChanged, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: {
                    suggestionsHeaderText: 'Suggested Tags',
                    noResultsFoundText: 'No Color Tags Found',
                }, itemLimit: 2, disabled: this.state.isPickerDisabled, inputProps: {
                    onBlur: function (ev) { return console.log('onBlur called'); },
                    onFocus: function (ev) { return console.log('onFocus called'); },
                    'aria-label': 'Tag Picker',
                } }),
            React.createElement("br", null),
            "Filter items on selected: This picker will show already-added suggestions but will not add duplicate tags.",
            React.createElement(Pickers_1.TagPicker, { removeButtonAriaLabel: "Remove", componentRef: this._picker, onResolveSuggestions: this._onFilterChangedNoFilter, onItemSelected: this._onItemSelected, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: {
                    suggestionsHeaderText: 'Suggested Tags',
                    noResultsFoundText: 'No Color Tags Found',
                }, itemLimit: 2, disabled: this.state.isPickerDisabled, inputProps: {
                    onBlur: function (ev) { return console.log('onBlur called'); },
                    onFocus: function (ev) { return console.log('onFocus called'); },
                    'aria-label': 'Tag Picker',
                } })));
    };
    TagPickerBasicExample.prototype._getTextFromItem = function (item) {
        return item.name;
    };
    TagPickerBasicExample.prototype._listContainsDocument = function (tag, tagList) {
        if (!tagList || !tagList.length || tagList.length === 0) {
            return false;
        }
        return tagList.filter(function (compareTag) { return compareTag.key === tag.key; }).length > 0;
    };
    return TagPickerBasicExample;
}(React.Component));
exports.TagPickerBasicExample = TagPickerBasicExample;
//# sourceMappingURL=TagPicker.Basic.Example.js.map