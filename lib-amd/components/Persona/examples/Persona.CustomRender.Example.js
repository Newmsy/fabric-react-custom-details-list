define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/Stack", "@uifabric/example-data"], function (require, exports, tslib_1, React, Persona_1, Icon_1, Stack_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var personaStyles = { root: { margin: '0 0 10px 0' } };
    var iconStyles = { root: { marginRight: 5 } };
    exports.PersonaCustomRenderExample = function () {
        var examplePersona = {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'AL',
            text: 'Annie Lindqvist',
            secondaryText: 'Software Engineer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
        };
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 10 } },
            React.createElement("div", null, "Custom icon in secondary text"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, presence: Persona_1.PersonaPresence.offline, onRenderSecondaryText: _onRenderSecondaryText, styles: personaStyles, imageAlt: "Annie Lindqvist, status is offline." }))));
    };
    function _onRenderSecondaryText(props) {
        return (React.createElement("div", null,
            React.createElement(Icon_1.Icon, { iconName: "Suitcase", styles: iconStyles }),
            props.secondaryText));
    }
});
//# sourceMappingURL=Persona.CustomRender.Example.js.map