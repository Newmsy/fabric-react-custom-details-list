"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../../Utilities");
var EditingItem_styles_1 = require("./EditingItem.styles");
var EditingItem = /** @class */ (function (_super) {
    tslib_1.__extends(EditingItem, _super);
    function EditingItem(props) {
        var _this = _super.call(this, props) || this;
        _this._editingFloatingPicker = React.createRef();
        _this._renderEditingSuggestions = function () {
            var FloatingPicker = _this.props.onRenderFloatingPicker;
            var floatingPickerProps = _this.props.floatingPickerProps;
            if (!FloatingPicker || !floatingPickerProps) {
                return React.createElement(React.Fragment, null);
            }
            return (React.createElement(FloatingPicker, tslib_1.__assign({ componentRef: _this._editingFloatingPicker, onChange: _this._onSuggestionSelected, inputElement: _this._editingInput, selectedItems: [] }, floatingPickerProps)));
        };
        _this._resolveInputRef = function (ref) {
            _this._editingInput = ref;
            _this.forceUpdate(function () {
                _this._editingInput.focus();
            });
        };
        _this._onInputClick = function () {
            _this._editingFloatingPicker.current && _this._editingFloatingPicker.current.showPicker(true /*updatevalue*/);
        };
        _this._onInputBlur = function (ev) {
            if (_this._editingFloatingPicker.current && ev.relatedTarget !== null) {
                var target = ev.relatedTarget;
                if (target.className.indexOf('ms-Suggestions-itemButton') === -1 &&
                    target.className.indexOf('ms-Suggestions-sectionButton') === -1) {
                    _this._editingFloatingPicker.current.forceResolveSuggestion();
                }
            }
        };
        _this._onInputChange = function (ev) {
            var value = ev.target.value;
            if (value === '') {
                if (_this.props.onRemoveItem) {
                    _this.props.onRemoveItem();
                }
            }
            else {
                _this._editingFloatingPicker.current && _this._editingFloatingPicker.current.onQueryStringChanged(value);
            }
        };
        _this._onSuggestionSelected = function (item) {
            _this.props.onEditingComplete(_this.props.item, item);
        };
        Utilities_1.initializeComponentRef(_this);
        _this.state = { contextualMenuVisible: false };
        return _this;
    }
    EditingItem.prototype.componentDidMount = function () {
        var getEditingItemText = this.props.getEditingItemText;
        var itemText = getEditingItemText(this.props.item);
        this._editingFloatingPicker.current && this._editingFloatingPicker.current.onQueryStringChanged(itemText);
        this._editingInput.value = itemText;
        this._editingInput.focus();
    };
    EditingItem.prototype.render = function () {
        var itemId = Utilities_1.getId();
        var nativeProps = Utilities_1.getNativeProps(this.props, Utilities_1.inputProperties);
        var getClassNames = Utilities_1.classNamesFunction();
        var classNames = getClassNames(EditingItem_styles_1.getStyles);
        return (React.createElement("div", { "aria-labelledby": 'editingItemPersona-' + itemId, className: classNames.root },
            React.createElement("input", tslib_1.__assign({ autoCapitalize: 'off', autoComplete: 'off' }, nativeProps, { ref: this._resolveInputRef, onChange: this._onInputChange, onKeyDown: this._onInputKeyDown, onBlur: this._onInputBlur, onClick: this._onInputClick, "data-lpignore": true, className: classNames.input, id: itemId })),
            this._renderEditingSuggestions()));
    };
    EditingItem.prototype._onInputKeyDown = function (ev) {
        if (ev.which === Utilities_1.KeyCodes.backspace || ev.which === Utilities_1.KeyCodes.del) {
            ev.stopPropagation();
        }
    };
    return EditingItem;
}(React.Component));
exports.EditingItem = EditingItem;
//# sourceMappingURL=EditingItem.js.map