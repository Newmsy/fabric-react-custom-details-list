import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Facepile } from 'office-ui-fabric-react/lib/Facepile';
import { PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { facepilePersonas } from '@uifabric/example-data';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { useBoolean } from '@uifabric/react-hooks';
var styles = mergeStyleSets({
    container: {
        maxWidth: 300,
    },
    control: {
        paddingTop: 20,
    },
    slider: {
        margin: '10px 0',
    },
    checkbox: {
        paddingTop: 15,
    },
    dropdown: {
        paddingTop: 0,
        margin: '10px 0',
    },
});
var dropdownOptions = [
    { key: PersonaSize.size8, text: PersonaSize[PersonaSize.size8] },
    { key: PersonaSize.size24, text: PersonaSize[PersonaSize.size24] },
    { key: PersonaSize.size32, text: PersonaSize[PersonaSize.size32] },
    { key: PersonaSize.size40, text: PersonaSize[PersonaSize.size40] },
    { key: PersonaSize.size48, text: PersonaSize[PersonaSize.size48] },
];
var checkboxStyles = { root: { margin: '10px 0' } };
var getPersonaPresence = function (personaName) {
    var presences = [
        PersonaPresence.away,
        PersonaPresence.busy,
        PersonaPresence.online,
        PersonaPresence.offline,
        PersonaPresence.offline,
    ];
    return presences[personaName.charCodeAt(1) % 5];
};
export var FacepileBasicExample = function () {
    var _a = useBoolean(true), imagesFadeIn = _a[0], toggleImagesFadeIn = _a[1].toggle;
    var _b = React.useState(3), numberOfFaces = _b[0], setNumberOfFaces = _b[1];
    var _c = React.useState(PersonaSize.size32), personaSize = _c[0], setPersonaSize = _c[1];
    var personas = React.useMemo(function () { return facepilePersonas.slice(0, numberOfFaces); }, [numberOfFaces]);
    var overflowPersonas = React.useMemo(function () { return facepilePersonas.slice(numberOfFaces); }, [numberOfFaces]);
    var getPersonaProps = React.useCallback(function (persona) { return ({
        imageShouldFadeIn: imagesFadeIn,
        presence: getPersonaPresence(persona.personaName),
    }); }, [imagesFadeIn]);
    var onChangePersonaSize = function (event, value) {
        setPersonaSize(value.key);
    };
    var onChangePersonaNumber = function (value) {
        setNumberOfFaces(value);
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement(Facepile, { personaSize: personaSize, personas: personas, overflowPersonas: overflowPersonas, getPersonaProps: getPersonaProps, ariaDescription: "To move through the items use left and right arrow keys.", ariaLabel: "Example list of Facepile personas" }),
        React.createElement("div", { className: styles.control },
            React.createElement(Slider, { label: "Number of Personas:", className: styles.slider, min: 1, max: 5, step: 1, showValue: true, value: numberOfFaces, onChange: onChangePersonaNumber }),
            React.createElement(Dropdown, { label: "Persona Size:", selectedKey: personaSize, className: styles.dropdown, options: dropdownOptions, onChange: onChangePersonaSize }),
            React.createElement(Checkbox, { className: styles.checkbox, styles: checkboxStyles, label: "Fade In", checked: imagesFadeIn, onChange: toggleImagesFadeIn }))));
};
//# sourceMappingURL=Facepile.Basic.Example.js.map