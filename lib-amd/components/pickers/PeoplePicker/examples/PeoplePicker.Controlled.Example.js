define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Checkbox", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Pickers", "@uifabric/example-data"], function (require, exports, tslib_1, React, Button_1, Checkbox_1, Persona_1, Pickers_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var suggestionProps = {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts',
    };
    var checkboxStyles = {
        root: {
            marginTop: 10,
        },
    };
    var defaultButtonStyles = { root: { height: 'auto' } };
    exports.PeoplePickerControlledExample = function () {
        var _a = React.useState([]), currentSelectedItems = _a[0], setCurrentSelectedItems = _a[1];
        var _b = React.useState(false), delayResults = _b[0], setDelayResults = _b[1];
        var _c = React.useState(false), isPickerDisabled = _c[0], setIsPickerDisabled = _c[1];
        var peopleList = React.useState(example_data_1.people)[0];
        var picker = React.useRef(null);
        var onFilterChanged = function (filterText, currentPersonas, limitResults) {
            if (filterText) {
                var filteredPersonas = filterPersonasByText(filterText);
                filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
                filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
                return filterPromise(filteredPersonas);
            }
            else {
                return [];
            }
        };
        var filterPersonasByText = function (filterText) {
            return peopleList.filter(function (item) { return doesTextStartWith(item.text, filterText); });
        };
        var filterPromise = function (personasToReturn) {
            if (delayResults) {
                return convertResultsToPromise(personasToReturn);
            }
            else {
                return personasToReturn;
            }
        };
        var onItemsChange = function (items) {
            setCurrentSelectedItems(items);
        };
        var controlledItems = [];
        for (var i = 0; i < 5; i++) {
            var item = peopleList[i];
            if (currentSelectedItems.indexOf(item) === -1) {
                controlledItems.push(peopleList[i]);
            }
        }
        var onDisabledButtonClick = function () {
            setIsPickerDisabled(!isPickerDisabled);
        };
        var onToggleDelayResultsChange = function () {
            setDelayResults(!delayResults);
        };
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(Pickers_1.NormalPeoplePicker, { onResolveSuggestions: onFilterChanged, getTextFromItem: getTextFromItem, pickerSuggestionsProps: suggestionProps, className: 'ms-PeoplePicker', key: 'controlled', selectedItems: currentSelectedItems, onChange: onItemsChange, inputProps: {
                        onBlur: function (ev) { return console.log('onBlur called'); },
                        onFocus: function (ev) { return console.log('onFocus called'); },
                    }, componentRef: picker, resolveDelay: 300, disabled: isPickerDisabled }),
                React.createElement("label", null, " Click to Add a person "),
                controlledItems.map(function (item, index) { return (React.createElement("div", { key: index },
                    React.createElement(Button_1.DefaultButton, { styles: defaultButtonStyles, 
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick: function () { return setCurrentSelectedItems(currentSelectedItems.concat([item])); } },
                        React.createElement(Persona_1.Persona, tslib_1.__assign({}, item))))); })),
            React.createElement(Checkbox_1.Checkbox, { label: "Disable People Picker", checked: isPickerDisabled, onChange: onDisabledButtonClick, styles: checkboxStyles }),
            React.createElement(Checkbox_1.Checkbox, { label: "Delay Suggestion Results", defaultChecked: delayResults, onChange: onToggleDelayResultsChange, styles: checkboxStyles })));
    };
    function doesTextStartWith(text, filterText) {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }
    function removeDuplicates(personas, possibleDupes) {
        return personas.filter(function (persona) { return !listContainsPersona(persona, possibleDupes); });
    }
    function listContainsPersona(persona, personas) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(function (item) { return item.text === persona.text; }).length > 0;
    }
    function convertResultsToPromise(results) {
        return new Promise(function (resolve, reject) { return setTimeout(function () { return resolve(results); }, 2000); });
    }
    function getTextFromItem(persona) {
        return persona.text;
    }
});
//# sourceMappingURL=PeoplePicker.Controlled.Example.js.map