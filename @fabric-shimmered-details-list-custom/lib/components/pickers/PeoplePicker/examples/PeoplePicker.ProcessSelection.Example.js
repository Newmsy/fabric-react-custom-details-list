import { __assign } from "tslib";
import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { NormalPeoplePicker, ValidationState } from 'office-ui-fabric-react/lib/Pickers';
import { people, mru } from '@uifabric/example-data';
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
export var PeoplePickerProcessSelectionExample = function () {
    var _a = React.useState(false), delayResults = _a[0], setDelayResults = _a[1];
    var _b = React.useState(false), isPickerDisabled = _b[0], setIsPickerDisabled = _b[1];
    var _c = React.useState(mru), mostRecentlyUsed = _c[0], setMostRecentlyUsed = _c[1];
    var _d = React.useState(people), peopleList = _d[0], setPeopleList = _d[1];
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
        React.createElement(NormalPeoplePicker, { onResolveSuggestions: onFilterChanged, onEmptyInputFocus: returnMostRecentlyUsed, getTextFromItem: getTextFromItem, pickerSuggestionsProps: suggestionProps, className: 'ms-PeoplePicker', onRemoveSuggestion: onRemoveSuggestion, onValidateInput: validateInput, removeButtonAriaLabel: 'Remove', onItemSelected: onItemSelected, inputProps: {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker',
            }, componentRef: picker, resolveDelay: 300, disabled: isPickerDisabled }),
        React.createElement(Checkbox, { label: "Disable People Picker", checked: isPickerDisabled, onChange: onDisabledButtonClick, styles: checkboxStyles }),
        React.createElement(Checkbox, { label: "Delay Suggestion Results", defaultChecked: delayResults, onChange: onToggleDelayResultsChange, styles: checkboxStyles })));
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
        return ValidationState.valid;
    }
    else if (input.length > 1) {
        return ValidationState.warning;
    }
    else {
        return ValidationState.invalid;
    }
}
function onItemSelected(item) {
    var processedItem = __assign({}, item);
    processedItem.text = item.text + " (selected)";
    return new Promise(function (resolve, reject) { return setTimeout(function () { return resolve(processedItem); }, 250); });
}
//# sourceMappingURL=PeoplePicker.ProcessSelection.Example.js.map