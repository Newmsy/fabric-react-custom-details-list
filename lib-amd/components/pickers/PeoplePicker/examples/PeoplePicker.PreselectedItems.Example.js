define(["require", "exports", "react", "office-ui-fabric-react/lib/Checkbox", "office-ui-fabric-react/lib/Pickers", "@uifabric/example-data"], function (require, exports, React, Checkbox_1, Pickers_1, example_data_1) {
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
    exports.PeoplePickerPreselectedItemsExample = function () {
        var _a = React.useState(false), delayResults = _a[0], setDelayResults = _a[1];
        var _b = React.useState(false), isPickerDisabled = _b[0], setIsPickerDisabled = _b[1];
        var _c = React.useState(example_data_1.mru), mostRecentlyUsed = _c[0], setMostRecentlyUsed = _c[1];
        var _d = React.useState(example_data_1.people), peopleList = _d[0], setPeopleList = _d[1];
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
        var returnMostRecentlyUsed = function (currentPersonas) {
            setMostRecentlyUsed(removeDuplicates(mostRecentlyUsed, currentPersonas));
            return filterPromise(mostRecentlyUsed);
        };
        var onRemoveSuggestion = function (item) {
            var indexPeopleList = peopleList.indexOf(item);
            var indexMostRecentlyUsed = mostRecentlyUsed.indexOf(item);
            if (indexPeopleList >= 0) {
                var newPeople = peopleList
                    .slice(0, indexPeopleList)
                    .concat(peopleList.slice(indexPeopleList + 1));
                setPeopleList(newPeople);
            }
            if (indexMostRecentlyUsed >= 0) {
                var newSuggestedPeople = mostRecentlyUsed
                    .slice(0, indexMostRecentlyUsed)
                    .concat(mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
                setMostRecentlyUsed(newSuggestedPeople);
            }
        };
        var onDisabledButtonClick = function () {
            setIsPickerDisabled(!isPickerDisabled);
        };
        var onToggleDelayResultsChange = function () {
            setDelayResults(!delayResults);
        };
        return (React.createElement("div", null,
            React.createElement(Pickers_1.CompactPeoplePicker, { onResolveSuggestions: onFilterChanged, onEmptyInputFocus: returnMostRecentlyUsed, getTextFromItem: getTextFromItem, className: 'ms-PeoplePicker', defaultSelectedItems: peopleList.slice(0, 3), key: 'list', pickerSuggestionsProps: suggestionProps, onRemoveSuggestion: onRemoveSuggestion, onValidateInput: validateInput, inputProps: {
                    onBlur: function (ev) { return console.log('onBlur called'); },
                    onFocus: function (ev) { return console.log('onFocus called'); },
                    'aria-label': 'People Picker',
                }, componentRef: picker, resolveDelay: 300, disabled: isPickerDisabled }),
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
    function validateInput(input) {
        if (input.indexOf('@') !== -1) {
            return Pickers_1.ValidationState.valid;
        }
        else if (input.length > 1) {
            return Pickers_1.ValidationState.warning;
        }
        else {
            return Pickers_1.ValidationState.invalid;
        }
    }
});
//# sourceMappingURL=PeoplePicker.PreselectedItems.Example.js.map