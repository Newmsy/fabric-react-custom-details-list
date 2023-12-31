"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ExtendedPicker_1 = require("office-ui-fabric-react/lib-commonjs/ExtendedPicker");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var FloatingPicker_1 = require("office-ui-fabric-react/lib-commonjs/FloatingPicker");
var SelectedItemsList_1 = require("office-ui-fabric-react/lib-commonjs/SelectedItemsList");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var example_data_1 = require("@uifabric/example-data");
var ExtendedPeoplePickerBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(ExtendedPeoplePickerBasicExample, _super);
    function ExtendedPeoplePickerBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._picker = React.createRef();
        _this._getEditingItemText = function (item) {
            return item.text;
        };
        _this._onSetFocusButtonClicked = function () {
            if (_this._picker.current) {
                _this._picker.current.focus();
            }
        };
        _this._onExpandItem = function (item) {
            var picker = _this._picker.current;
            var selectedItemsList = picker && picker.selectedItemsList.current;
            if (selectedItemsList) {
                // tslint:disable-next-line:no-any
                selectedItemsList.replaceItem(item, _this._getExpandedGroupItems(item));
            }
        };
        _this._onRemoveSuggestion = function (item) {
            var _a = _this.state, peopleList = _a.peopleList, mruState = _a.mostRecentlyUsed;
            var itemIndex = peopleList.indexOf(item);
            var itemMruIndex = mruState.indexOf(item);
            var stateUpdate = {};
            if (itemIndex >= 0) {
                stateUpdate.peopleList = peopleList.slice(0, itemIndex).concat(peopleList.slice(itemIndex + 1));
            }
            if (itemMruIndex >= 0) {
                stateUpdate.mostRecentlyUsed = mruState.slice(0, itemMruIndex).concat(mruState.slice(itemMruIndex + 1));
            }
            _this.setState(stateUpdate);
        };
        _this._onFilterChanged = function (filterText, currentPersonas) {
            var filteredPersonas = [];
            if (filterText) {
                filteredPersonas = _this.state.peopleList.filter(function (item) {
                    return _startsWith(item.text || '', filterText);
                });
                filteredPersonas = _this._removeDuplicates(filteredPersonas, currentPersonas);
            }
            return _this._convertResultsToPromise(filteredPersonas);
        };
        _this._returnMostRecentlyUsed = function () {
            var mostRecentlyUsed = _this.state.mostRecentlyUsed;
            var items = (_this._picker.current && _this._picker.current.items) || [];
            mostRecentlyUsed = _this._removeDuplicates(mostRecentlyUsed, items);
            return _this._convertResultsToPromise(mostRecentlyUsed);
        };
        _this._shouldShowForceResolve = function () {
            var picker = _this._picker.current;
            var floatingPicker = picker && picker.floatingPicker.current;
            return !!floatingPicker && _this._validateInput(floatingPicker.inputText) && floatingPicker.suggestions.length === 0;
        };
        _this._shouldShowSuggestedContacts = function () {
            var picker = _this._picker.current;
            return !!(picker && picker.inputElement) && picker.inputElement.value === '';
        };
        _this._onInputChanged = function () {
            _this.setState({ searchMoreAvailable: true });
        };
        _this._validateInput = function (input) {
            return input.indexOf('@') !== -1;
        };
        _this.state = {
            peopleList: example_data_1.people,
            mostRecentlyUsed: example_data_1.mru,
            searchMoreAvailable: true,
        };
        _this._suggestionProps = {
            showRemoveButtons: true,
            headerItemsProps: [
                {
                    renderItem: function () {
                        var picker = _this._picker.current;
                        return (React.createElement("div", { className: _this._classNames.headerItem },
                            "Use this address: ",
                            picker && picker.inputElement ? picker.inputElement.value : ''));
                    },
                    shouldShow: function () {
                        var picker = _this._picker.current;
                        return !!(picker && picker.inputElement) && picker.inputElement.value.indexOf('@') > -1;
                    },
                    onExecute: function () {
                        var picker = _this._picker.current;
                        var floatingPicker = picker && picker.floatingPicker.current;
                        if (floatingPicker) {
                            floatingPicker.forceResolveSuggestion();
                        }
                    },
                    ariaLabel: 'Use the typed address',
                },
                {
                    renderItem: function () {
                        return React.createElement("div", { className: _this._classNames.headerItem }, "Suggested Contacts");
                    },
                    shouldShow: _this._shouldShowSuggestedContacts,
                },
            ],
            footerItemsProps: [
                {
                    renderItem: function () {
                        return React.createElement("div", { className: _this._classNames.footerItem }, "No results");
                    },
                    shouldShow: function () {
                        var picker = _this._picker.current;
                        var floatingPicker = picker && picker.floatingPicker.current;
                        return !!floatingPicker && floatingPicker.suggestions.length === 0;
                    },
                },
                {
                    renderItem: function () {
                        return React.createElement("div", { className: _this._classNames.footerItem }, "Search for more");
                    },
                    onExecute: function () {
                        _this.setState({ searchMoreAvailable: false });
                    },
                    shouldShow: function () {
                        return _this.state.searchMoreAvailable && !_this._shouldShowSuggestedContacts();
                    },
                    ariaLabel: 'Search more',
                },
            ],
            shouldSelectFirstItem: function () {
                return !_this._shouldShowSuggestedContacts();
            },
        };
        _this._floatingPickerProps = {
            suggestionsStore: new FloatingPicker_1.SuggestionsStore(),
            onResolveSuggestions: _this._onFilterChanged,
            getTextFromItem: function (persona) { return persona.text || ''; },
            pickerSuggestionsProps: _this._suggestionProps,
            key: 'normal',
            onRemoveSuggestion: _this._onRemoveSuggestion,
            onValidateInput: _this._validateInput,
            onZeroQuerySuggestion: _this._returnMostRecentlyUsed,
            showForceResolve: _this._shouldShowForceResolve,
            onInputChanged: _this._onInputChanged,
            onSuggestionsHidden: function () {
                console.log('FLOATINGPICKER: hidden');
            },
            onSuggestionsShown: function () {
                console.log('FLOATINGPICKER: shown');
            },
        };
        _this._selectedItemsListProps = {
            onCopyItems: _this._onCopyItems,
            onExpandGroup: _this._onExpandItem,
            removeMenuItemText: 'Remove',
            copyMenuItemText: 'Copy name',
            editMenuItemText: 'Edit',
            getEditingItemText: _this._getEditingItemText,
            onRenderFloatingPicker: FloatingPicker_1.FloatingPeoplePicker,
            floatingPickerProps: _this._floatingPickerProps,
        };
        _this._focusZoneProps = {
            shouldInputLoseFocusOnArrowKey: function () { return true; },
            handleTabKey: FocusZone_1.FocusZoneTabbableElements.all,
        };
        return _this;
    }
    ExtendedPeoplePickerBasicExample.prototype.render = function () {
        var theme = Styling_1.getTheme();
        this._classNames = Styling_1.mergeStyleSets({
            picker: { maxWidth: 400, marginBottom: 15 },
            headerItem: {
                borderBottom: '1px solid ' + theme.palette.neutralLight,
                padding: '8px 12px',
            },
            footerItem: {
                borderBottom: '1px solid ' + theme.palette.neutralLight,
                height: 60,
                paddingLeft: 12,
            },
            to: { padding: '0 10px' },
        });
        return (React.createElement("div", null,
            this._renderExtendedPicker(),
            React.createElement(Button_1.PrimaryButton, { text: "Set focus", onClick: this._onSetFocusButtonClicked })));
    };
    ExtendedPeoplePickerBasicExample.prototype._renderExtendedPicker = function () {
        return (React.createElement(ExtendedPicker_1.ExtendedPeoplePicker, { floatingPickerProps: this._floatingPickerProps, selectedItemsListProps: this._selectedItemsListProps, onRenderFloatingPicker: FloatingPicker_1.FloatingPeoplePicker, onRenderSelectedItems: SelectedItemsList_1.SelectedPeopleList, className: this._classNames.picker, key: "normal", inputProps: {
                onBlur: function () { return console.log('onBlur called'); },
                onFocus: function () { return console.log('onFocus called'); },
                'aria-label': 'People Picker',
            }, componentRef: this._picker, headerComponent: this._renderHeader(), focusZoneProps: this._focusZoneProps }));
    };
    ExtendedPeoplePickerBasicExample.prototype._renderHeader = function () {
        return (React.createElement("div", { className: this._classNames.to, "data-is-focusable": true }, "To:"));
    };
    ExtendedPeoplePickerBasicExample.prototype._onCopyItems = function (items) {
        return items.map(function (item) { return item.text; }).join(', ');
    };
    ExtendedPeoplePickerBasicExample.prototype._listContainsPersona = function (persona, personas) {
        return !!personas && personas.some(function (item) { return item.text === persona.text; });
    };
    ExtendedPeoplePickerBasicExample.prototype._removeDuplicates = function (personas, possibleDupes) {
        var _this = this;
        return personas.filter(function (persona) { return !_this._listContainsPersona(persona, possibleDupes); });
    };
    ExtendedPeoplePickerBasicExample.prototype._convertResultsToPromise = function (results) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(results); }, 150); });
    };
    ExtendedPeoplePickerBasicExample.prototype._getExpandedGroupItems = function (item) {
        return item.text === 'Group One' ? example_data_1.groupOne : item.text === 'Group Two' ? example_data_1.groupTwo : [];
    };
    return ExtendedPeoplePickerBasicExample;
}(React.Component));
exports.ExtendedPeoplePickerBasicExample = ExtendedPeoplePickerBasicExample;
function _startsWith(text, filterText) {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
}
//# sourceMappingURL=ExtendedPeoplePicker.Basic.Example.js.map