"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FloatingPicker_1 = require("office-ui-fabric-react/lib-commonjs/FloatingPicker");
var SearchBox_1 = require("office-ui-fabric-react/lib-commonjs/SearchBox");
var example_data_1 = require("@uifabric/example-data");
var react_hooks_1 = require("@uifabric/react-hooks");
var searchBoxWrapperStyling = { width: 208 };
var getTextFromItem = function (persona) {
    return persona.text || '';
};
var listContainsPersona = function (persona, personas) {
    return !!personas && personas.some(function (item) { return item.text === persona.text; });
};
var validateInput = function (input) {
    return input.indexOf('@') !== -1;
};
var startsWith = function (text, filterText) {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
};
exports.FloatingPeoplePickerTypesExample = function () {
    var inputElementRef = React.useRef(null);
    var suggestionsStore = react_hooks_1.useConst(function () { return new FloatingPicker_1.SuggestionsStore(); });
    var _a = React.useState(example_data_1.people), peopleList = _a[0], setPeopleList = _a[1];
    var _b = React.useState(''), searchValue = _b[0], setSearchValue = _b[1];
    var picker = React.useRef(null);
    var onFocus = function () {
        if (picker.current) {
            picker.current.showPicker();
        }
    };
    var onSearchChange = function (ev, newValue) {
        if (newValue !== searchValue && picker.current) {
            setSearchValue(newValue);
            picker.current.onQueryStringChanged(newValue);
        }
    };
    var onPickerChange = function (selectedSuggestion) {
        setSearchValue(selectedSuggestion.text || '');
        if (picker.current) {
            picker.current.hidePicker();
        }
    };
    var onRemoveSuggestion = function (item) {
        var itemIndex = peopleList.indexOf(item);
        if (itemIndex >= 0) {
            setPeopleList(peopleList.slice(0, itemIndex).concat(peopleList.slice(itemIndex + 1)));
        }
    };
    var suggestionProps = react_hooks_1.useConst(function () {
        return {
            footerItemsProps: [
                {
                    renderItem: function () {
                        return React.createElement(React.Fragment, null,
                            "Showing ",
                            picker.current ? picker.current.suggestions.length : 0,
                            " results");
                    },
                    shouldShow: function () {
                        return !!picker.current && picker.current.suggestions.length > 0;
                    },
                },
            ],
        };
    });
    var onFilterChanged = function (filterText, currentPersonas) {
        if (filterText) {
            // Filter by items starting with the current filter text, then remove duplicates
            return peopleList
                .filter(function (item) { return startsWith(item.text || '', filterText); })
                .filter(function (persona) { return !listContainsPersona(persona, currentPersonas); });
        }
        return [];
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: searchBoxWrapperStyling, ref: inputElementRef },
            React.createElement(SearchBox_1.SearchBox, { placeholder: "Search for person", onChange: onSearchChange, value: searchValue, onFocus: onFocus })),
        React.createElement(FloatingPicker_1.FloatingPeoplePicker, { suggestionsStore: suggestionsStore, onResolveSuggestions: onFilterChanged, getTextFromItem: getTextFromItem, pickerSuggestionsProps: suggestionProps, key: "normal", onRemoveSuggestion: onRemoveSuggestion, onValidateInput: validateInput, componentRef: picker, onChange: onPickerChange, inputElement: inputElementRef.current, resolveDelay: 300 })));
};
//# sourceMappingURL=FloatingPeoplePicker.Basic.Example.js.map