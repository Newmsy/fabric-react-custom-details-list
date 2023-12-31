define(["require", "exports", "react", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Stack", "@uifabric/example-data"], function (require, exports, React, Persona_1, Stack_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnknownPersonaExample = function () {
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 10 } },
            React.createElement(Persona_1.Persona, { showUnknownPersonaCoin: true, text: "Maor Sharett", secondaryText: "Designer", size: Persona_1.PersonaSize.size40, imageAlt: "Maor Sharett, status unknown" }),
            React.createElement(Persona_1.Persona, { showUnknownPersonaCoin: true, text: "Kat Larrson", secondaryText: "Designer", tertiaryText: "Unverified sender", size: Persona_1.PersonaSize.size72, imageUrl: example_data_1.TestImages.personaFemale, imageAlt: "Kat Larrson, status unknown" })));
    };
});
//# sourceMappingURL=Persona.UnknownPersona.Example.js.map