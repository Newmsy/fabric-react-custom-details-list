define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Checkbox", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Stack", "@uifabric/example-data"], function (require, exports, tslib_1, React, Persona_1, Checkbox_1, Label_1, Stack_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersonaBasicExample = function () {
        var _a = React.useState(true), renderDetails = _a[0], updateRenderDetails = _a[1];
        var onChange = function (ev, checked) {
            updateRenderDetails(!!checked);
        };
        var examplePersona = {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'AL',
            text: 'Annie Lindqvist',
            secondaryText: 'Software Engineer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
        };
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 10 } },
            React.createElement(Checkbox_1.Checkbox, { label: "Include persona details", checked: renderDetails, onChange: onChange }),
            React.createElement(Label_1.Label, null, "Size 8 Persona, with no presence"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size8, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, no presence detected" })),
            React.createElement(Label_1.Label, null, "Size 8 Persona, with presence"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size8, presence: Persona_1.PersonaPresence.offline, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is offline" })),
            React.createElement(Label_1.Label, null, "Size 24 Persona"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size24, presence: Persona_1.PersonaPresence.online, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is online" })),
            React.createElement(Label_1.Label, null, "Size 32 Persona"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size32, presence: Persona_1.PersonaPresence.online, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is online" })),
            React.createElement(Label_1.Label, null, "Size 40 Persona"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size40, presence: Persona_1.PersonaPresence.away, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is away" })),
            React.createElement(Label_1.Label, null, "Size 48 Persona (default) "),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { hidePersonaDetails: !renderDetails, presence: Persona_1.PersonaPresence.busy, imageAlt: "Annie Lindqvist, status is busy" })),
            React.createElement(Label_1.Label, null, "Size 56 Persona (default) "),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size56, hidePersonaDetails: !renderDetails, presence: Persona_1.PersonaPresence.online, imageAlt: "Annie Lindqvist, status is online" })),
            React.createElement(Label_1.Label, null, "Size 72 Persona"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, presence: Persona_1.PersonaPresence.dnd, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is dnd" })),
            React.createElement(Label_1.Label, null, "Size 100 Persona"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size100, presence: Persona_1.PersonaPresence.blocked, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is blocked" })),
            React.createElement(Label_1.Label, null, "Size 120 Persona"),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size120, presence: Persona_1.PersonaPresence.away, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is away" }))));
    };
});
//# sourceMappingURL=Persona.Basic.Example.js.map