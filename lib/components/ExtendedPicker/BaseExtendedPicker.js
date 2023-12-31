import { __assign, __extends } from "tslib";
import * as React from 'react';
import { KeyCodes, css, initializeComponentRef } from '../../Utilities';
import { Autofill } from '../../Autofill';
import * as stylesImport from './BaseExtendedPicker.scss';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { Selection, SelectionMode, SelectionZone } from '../../Selection';
// tslint:disable-next-line:no-any
var styles = stylesImport;
var BaseExtendedPicker = /** @class */ (function (_super) {
    __extends(BaseExtendedPicker, _super);
    function BaseExtendedPicker(basePickerProps) {
        var _this = _super.call(this, basePickerProps) || this;
        _this.floatingPicker = React.createRef();
        _this.selectedItemsList = React.createRef();
        _this.root = React.createRef();
        _this.input = React.createRef();
        _this.onSelectionChange = function () {
            _this.forceUpdate();
        };
        _this.onInputChange = function (value, composing) {
            // We don't want to update the picker's suggestions when the input is still being composed
            if (!composing) {
                _this.setState({ queryString: value });
                if (_this.floatingPicker.current) {
                    _this.floatingPicker.current.onQueryStringChanged(value);
                }
            }
        };
        _this.onInputFocus = function (ev) {
            if (_this.selectedItemsList.current) {
                _this.selectedItemsList.current.unselectAll();
            }
            if (_this.props.inputProps && _this.props.inputProps.onFocus) {
                _this.props.inputProps.onFocus(ev);
            }
        };
        _this.onInputClick = function (ev) {
            if (_this.selectedItemsList.current) {
                _this.selectedItemsList.current.unselectAll();
            }
            if (_this.floatingPicker.current && _this.inputElement) {
                // Update the value if the input value is empty or is different than the current inputText from the floatingPicker
                var shoudUpdateValue = _this.inputElement.value === '' || _this.inputElement.value !== _this.floatingPicker.current.inputText;
                _this.floatingPicker.current.showPicker(shoudUpdateValue);
            }
        };
        // This is protected because we may expect the backspace key to work differently in a different kind of picker.
        // This lets the subclass override it and provide it's own onBackspace. For an example see the BasePickerListBelow
        _this.onBackspace = function (ev) {
            if (ev.which !== KeyCodes.backspace) {
                return;
            }
            if (_this.selectedItemsList.current && _this.items.length) {
                if (_this.input.current &&
                    !_this.input.current.isValueSelected &&
                    _this.input.current.inputElement === document.activeElement &&
                    _this.input.current.cursorLocation === 0) {
                    if (_this.floatingPicker.current) {
                        _this.floatingPicker.current.hidePicker();
                    }
                    ev.preventDefault();
                    _this.selectedItemsList.current.removeItemAt(_this.items.length - 1);
                    _this._onSelectedItemsChanged();
                }
                else if (_this.selectedItemsList.current.hasSelectedItems()) {
                    if (_this.floatingPicker.current) {
                        _this.floatingPicker.current.hidePicker();
                    }
                    ev.preventDefault();
                    _this.selectedItemsList.current.removeSelectedItems();
                    _this._onSelectedItemsChanged();
                }
            }
        };
        _this.onCopy = function (ev) {
            if (_this.selectedItemsList.current) {
                // Pass it down into the selected items list
                _this.selectedItemsList.current.onCopy(ev);
            }
        };
        _this.onPaste = function (ev) {
            if (_this.props.onPaste) {
                var inputText = ev.clipboardData.getData('Text');
                ev.preventDefault();
                _this.props.onPaste(inputText);
            }
        };
        _this._onSuggestionSelected = function (item) {
            var currentRenderedQueryString = _this.props.currentRenderedQueryString;
            var queryString = _this.state.queryString;
            if (currentRenderedQueryString === undefined || currentRenderedQueryString === queryString) {
                var processedItem = _this.props.onItemSelected
                    ? _this.props.onItemSelected(item)
                    : item;
                if (processedItem === null) {
                    return;
                }
                var processedItemObject = processedItem;
                var processedItemPromiseLike = processedItem;
                var newItem_1;
                if (processedItemPromiseLike && processedItemPromiseLike.then) {
                    processedItemPromiseLike.then(function (resolvedProcessedItem) {
                        newItem_1 = resolvedProcessedItem;
                        _this._addProcessedItem(newItem_1);
                    });
                }
                else {
                    newItem_1 = processedItemObject;
                    _this._addProcessedItem(newItem_1);
                }
            }
        };
        _this._onSelectedItemsChanged = function () {
            _this.focus();
        };
        /**
         * The floating picker is the source of truth for if the menu has been opened or not.
         *
         * Because this isn't tracked inside the state of this component, we need to
         * force an update here to keep the rendered output that depends on the picker being open
         * in sync with the state
         *
         * Called when the suggestions is shown or closed
         */
        _this._onSuggestionsShownOrHidden = function () {
            _this.forceUpdate();
        };
        initializeComponentRef(_this);
        _this.selection = new Selection({ onSelectionChanged: function () { return _this.onSelectionChange(); } });
        _this.state = {
            queryString: '',
            suggestionItems: _this.props.suggestionItems ? _this.props.suggestionItems : null,
            selectedItems: _this.props.defaultSelectedItems
                ? _this.props.defaultSelectedItems
                : _this.props.selectedItems
                    ? _this.props.selectedItems
                    : null,
        };
        _this.floatingPickerProps = _this.props.floatingPickerProps;
        _this.selectedItemsListProps = _this.props.selectedItemsListProps;
        return _this;
    }
    Object.defineProperty(BaseExtendedPicker.prototype, "items", {
        // tslint:disable-next-line:no-any
        get: function () {
            return this.state.selectedItems
                ? this.state.selectedItems
                : this.selectedItemsList.current
                    ? this.selectedItemsList.current.items
                    : null;
        },
        enumerable: true,
        configurable: true
    });
    BaseExtendedPicker.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    // tslint:disable-next-line function-name
    BaseExtendedPicker.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (newProps.floatingPickerProps) {
            this.floatingPickerProps = newProps.floatingPickerProps;
        }
        if (newProps.selectedItemsListProps) {
            this.selectedItemsListProps = newProps.selectedItemsListProps;
        }
        if (newProps.selectedItems) {
            this.setState({ selectedItems: newProps.selectedItems });
        }
    };
    BaseExtendedPicker.prototype.focus = function () {
        if (this.input.current) {
            this.input.current.focus();
        }
    };
    BaseExtendedPicker.prototype.clearInput = function () {
        if (this.input.current) {
            this.input.current.clear();
        }
    };
    Object.defineProperty(BaseExtendedPicker.prototype, "inputElement", {
        get: function () {
            return this.input.current && this.input.current.inputElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseExtendedPicker.prototype, "highlightedItems", {
        get: function () {
            return this.selectedItemsList.current ? this.selectedItemsList.current.highlightedItems() : [];
        },
        enumerable: true,
        configurable: true
    });
    BaseExtendedPicker.prototype.render = function () {
        var _a = this.props, className = _a.className, inputProps = _a.inputProps, disabled = _a.disabled, focusZoneProps = _a.focusZoneProps;
        var activeDescendant = this.floatingPicker.current && this.floatingPicker.current.currentSelectedSuggestionIndex !== -1
            ? 'sug-' + this.floatingPicker.current.currentSelectedSuggestionIndex
            : undefined;
        var isExpanded = this.floatingPicker.current ? this.floatingPicker.current.isSuggestionsShown : false;
        return (React.createElement("div", { ref: this.root, className: css('ms-BasePicker ms-BaseExtendedPicker', className ? className : ''), onKeyDown: this.onBackspace, onCopy: this.onCopy },
            React.createElement(FocusZone, __assign({ direction: FocusZoneDirection.bidirectional }, focusZoneProps),
                React.createElement(SelectionZone, { selection: this.selection, selectionMode: SelectionMode.multiple },
                    React.createElement("div", { className: css('ms-BasePicker-text', styles.pickerText), role: 'list' },
                        this.props.headerComponent,
                        this.renderSelectedItemsList(),
                        this.canAddItems() && (React.createElement(Autofill, __assign({}, inputProps, { className: css('ms-BasePicker-input', styles.pickerInput), ref: this.input, onFocus: this.onInputFocus, onClick: this.onInputClick, onInputValueChange: this.onInputChange, "aria-activedescendant": activeDescendant, "aria-owns": isExpanded ? 'suggestion-list' : undefined, "aria-expanded": isExpanded, "aria-haspopup": "true", role: "combobox", disabled: disabled, onPaste: this.onPaste })))))),
            this.renderFloatingPicker()));
    };
    BaseExtendedPicker.prototype.canAddItems = function () {
        var itemLimit = this.props.itemLimit;
        return itemLimit === undefined || this.items.length < itemLimit;
    };
    BaseExtendedPicker.prototype.renderFloatingPicker = function () {
        var FloatingPicker = this.props.onRenderFloatingPicker;
        return (React.createElement(FloatingPicker, __assign({ componentRef: this.floatingPicker, onChange: this._onSuggestionSelected, onSuggestionsHidden: this._onSuggestionsShownOrHidden, onSuggestionsShown: this._onSuggestionsShownOrHidden, inputElement: this.input.current ? this.input.current.inputElement : undefined, selectedItems: this.items, suggestionItems: this.props.suggestionItems ? this.props.suggestionItems : undefined }, this.floatingPickerProps)));
    };
    BaseExtendedPicker.prototype.renderSelectedItemsList = function () {
        var SelectedItems = this.props.onRenderSelectedItems;
        return (React.createElement(SelectedItems, __assign({ componentRef: this.selectedItemsList, selection: this.selection, selectedItems: this.props.selectedItems ? this.props.selectedItems : undefined, onItemsDeleted: this.props.selectedItems ? this.props.onItemsRemoved : undefined }, this.selectedItemsListProps)));
    };
    BaseExtendedPicker.prototype._addProcessedItem = function (newItem) {
        // If this is a controlled component, call the on item selected callback
        // Otherwise add it to the selectedItemsList
        if (this.props.onItemAdded) {
            this.props.onItemAdded(newItem);
        }
        if (this.selectedItemsList.current) {
            this.selectedItemsList.current.addItems([newItem]);
        }
        if (this.input.current) {
            this.input.current.clear();
        }
        if (this.floatingPicker.current) {
            this.floatingPicker.current.hidePicker();
        }
        this.focus();
    };
    return BaseExtendedPicker;
}(React.Component));
export { BaseExtendedPicker };
//# sourceMappingURL=BaseExtendedPicker.js.map