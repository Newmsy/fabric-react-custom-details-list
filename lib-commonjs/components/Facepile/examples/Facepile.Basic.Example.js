"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Checkbox_1 = require("office-ui-fabric-react/lib-commonjs/Checkbox");
var Dropdown_1 = require("office-ui-fabric-react/lib-commonjs/Dropdown");
var Facepile_1 = require("office-ui-fabric-react/lib-commonjs/Facepile");
var Persona_1 = require("office-ui-fabric-react/lib-commonjs/Persona");
var Slider_1 = require("office-ui-fabric-react/lib-commonjs/Slider");
var example_data_1 = require("@uifabric/example-data");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var react_hooks_1 = require("@uifabric/react-hooks");
var styles = Styling_1.mergeStyleSets({
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
    { key: Persona_1.PersonaSize.size8, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size8] },
    { key: Persona_1.PersonaSize.size24, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size24] },
    { key: Persona_1.PersonaSize.size32, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size32] },
    { key: Persona_1.PersonaSize.size40, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size40] },
    { key: Persona_1.PersonaSize.size48, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size48] },
];
var checkboxStyles = { root: { margin: '10px 0' } };
var getPersonaPresence = function (personaName) {
    var presences = [
        Persona_1.PersonaPresence.away,
        Persona_1.PersonaPresence.busy,
        Persona_1.PersonaPresence.online,
        Persona_1.PersonaPresence.offline,
        Persona_1.PersonaPresence.offline,
    ];
    return presences[personaName.charCodeAt(1) % 5];
};
exports.FacepileBasicExample = function () {
    var _a = react_hooks_1.useBoolean(true), imagesFadeIn = _a[0], toggleImagesFadeIn = _a[1].toggle;
    var _b = React.useState(3), numberOfFaces = _b[0], setNumberOfFaces = _b[1];
    var _c = React.useState(Persona_1.PersonaSize.size32), personaSize = _c[0], setPersonaSize = _c[1];
    var personas = React.useMemo(function () { return example_data_1.facepilePersonas.slice(0, numberOfFaces); }, [numberOfFaces]);
    var overflowPersonas = React.useMemo(function () { return example_data_1.facepilePersonas.slice(numberOfFaces); }, [numberOfFaces]);
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
        React.createElement(Facepile_1.Facepile, { personaSize: personaSize, personas: personas, overflowPersonas: overflowPersonas, getPersonaProps: getPersonaProps, ariaDescription: "To move through the items use left and right arrow keys.", ariaLabel: "Example list of Facepile personas" }),
        React.createElement("div", { className: styles.control },
            React.createElement(Slider_1.Slider, { label: "Number of Personas:", className: styles.slider, min: 1, max: 5, step: 1, showValue: true, value: numberOfFaces, onChange: onChangePersonaNumber }),
            React.createElement(Dropdown_1.Dropdown, { label: "Persona Size:", selectedKey: personaSize, className: styles.dropdown, options: dropdownOptions, onChange: onChangePersonaSize }),
            React.createElement(Checkbox_1.Checkbox, { className: styles.checkbox, styles: checkboxStyles, label: "Fade In", checked: imagesFadeIn, onChange: toggleImagesFadeIn }))));
};
//# sourceMappingURL=Facepile.Basic.Example.js.map