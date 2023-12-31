import { __extends, __spreadArrays } from "tslib";
import * as React from 'react';
import { ExtendedPeoplePicker } from 'office-ui-fabric-react/lib/ExtendedPicker';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { SuggestionsStore, FloatingPeoplePicker, } from 'office-ui-fabric-react/lib/FloatingPicker';
import { SelectedPeopleList, } from 'office-ui-fabric-react/lib/SelectedItemsList';
import { FocusZoneTabbableElements } from 'office-ui-fabric-react/lib/FocusZone';
import { mergeStyleSets, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { people, mru, groupOne, groupTwo } from '@uifabric/example-data';
var ExtendedPeoplePickerControlledExample = /** @class */ (function (_super) {
    __extends(ExtendedPeoplePickerControlledExample, _super);
    function ExtendedPeoplePickerControlledExample(props) {
        var _this = _super.call(this, props) || this;
        _this._picker = React.createRef();
        _this._getEditingItemText = function (item) {
            return item.text || '';
        };
        _this._onSetFocusButtonClicked = function () {
            if (_this._picker.current) {
                _this._picker.current.focus();
            }
        };
        _this._onExpandItem = function (item) {
            var currentlySelectedItems = _this.state.currentlySelectedItems;
            var indexToRemove = currentlySelectedItems.indexOf(item);
            var newItems = currentlySelectedItems;
            newItems.splice.apply(newItems, __spreadArrays([indexToRemove, 1], _this._getExpandedGroupItems(item)));
            _this.setState({ currentlySelectedItems: newItems });
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
            _this.setState({ suggestionItems: filteredPersonas });
            return null;
        };
        _this._returnMostRecentlyUsed = function () {
            var mostRecentlyUsed = _this.state.mostRecentlyUsed;
            var items = (_this._picker.current && _this._picker.current.items) || [];
            mostRecentlyUsed = _this._removeDuplicates(mostRecentlyUsed, items);
            _this.setState({ suggestionItems: mostRecentlyUsed });
            return null;
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
        _this._onItemAdded = function (selectedSuggestion) {
            _this.setState({ currentlySelectedItems: _this.state.currentlySelectedItems.concat(selectedSuggestion) });
        };
        _this._onItemsRemoved = function (items) {
            var newItems = _this.state.currentlySelectedItems.filter(function (value) { return items.indexOf(value) === -1; });
            _this.setState({ currentlySelectedItems: newItems });
        };
        _this._validateInput = function (input) {
            return input.indexOf('@') !== -1;
        };
        _this.state = {
            peopleList: people,
            mostRecentlyUsed: mru,
            searchMoreAvailable: true,
            currentlySelectedItems: [],
            suggestionItems: [],
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
            suggestionsStore: new SuggestionsStore(),
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
            onRenderFloatingPicker: FloatingPeoplePicker,
            floatingPickerProps: _this._floatingPickerProps,
        };
        _this._focusZoneProps = {
            shouldInputLoseFocusOnArrowKey: function () { return true; },
            handleTabKey: FocusZoneTabbableElements.all,
        };
        return _this;
    }
    ExtendedPeoplePickerControlledExample.prototype.render = function () {
        var theme = getTheme();
        this._classNames = mergeStyleSets({
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
            React.createElement(PrimaryButton, { text: "Set focus", onClick: this._onSetFocusButtonClicked })));
    };
    ExtendedPeoplePickerControlledExample.prototype._renderExtendedPicker = function () {
        return (React.createElement(ExtendedPeoplePicker, { selectedItems: this.state.currentlySelectedItems, suggestionItems: this.state.suggestionItems, onItemAdded: this._onItemAdded, onItemsRemoved: this._onItemsRemoved, floatingPickerProps: this._floatingPickerProps, selectedItemsListProps: this._selectedItemsListProps, onRenderFloatingPicker: FloatingPeoplePicker, onRenderSelectedItems: SelectedPeopleList, className: this._classNames.picker, key: "normal", inputProps: {
                onBlur: function () { return console.log('onBlur called'); },
                onFocus: function () { return console.log('onFocus called'); },
                'aria-label': 'People Picker',
            }, componentRef: this._picker, headerComponent: this._renderHeader(), focusZoneProps: this._focusZoneProps }));
    };
    ExtendedPeoplePickerControlledExample.prototype._renderHeader = function () {
        return (React.createElement("div", { className: this._classNames.to, "data-is-focusable": true }, "To:"));
    };
    ExtendedPeoplePickerControlledExample.prototype._onCopyItems = function (items) {
        return items.map(function (item) { return item.text; }).join(', ');
    };
    ExtendedPeoplePickerControlledExample.prototype._listContainsPersona = function (persona, personas) {
        return !!personas && personas.some(function (item) { return item.text === persona.text; });
    };
    ExtendedPeoplePickerControlledExample.prototype._removeDuplicates = function (personas, possibleDupes) {
        var _this = this;
        return personas.filter(function (persona) { return !_this._listContainsPersona(persona, possibleDupes); });
    };
    ExtendedPeoplePickerControlledExample.prototype._getExpandedGroupItems = function (item) {
        return item.text === 'Group One' ? groupOne : item.text === 'Group Two' ? groupTwo : [];
    };
    return ExtendedPeoplePickerControlledExample;
}(React.Component));
export { ExtendedPeoplePickerControlledExample };
function _startsWith(text, filterText) {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
}
//# sourceMappingURL=ExtendedPeoplePicker.Controlled.Example.js.map