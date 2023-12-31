"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Persona_1 = require("office-ui-fabric-react/lib-commonjs/Persona");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var example_data_1 = require("@uifabric/example-data");
exports.UnknownPersonaExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 10 } },
        React.createElement(Persona_1.Persona, { showUnknownPersonaCoin: true, text: "Maor Sharett", secondaryText: "Designer", size: Persona_1.PersonaSize.size40, imageAlt: "Maor Sharett, status unknown" }),
        React.createElement(Persona_1.Persona, { showUnknownPersonaCoin: true, text: "Kat Larrson", secondaryText: "Designer", tertiaryText: "Unverified sender", size: Persona_1.PersonaSize.size72, imageUrl: example_data_1.TestImages.personaFemale, imageAlt: "Kat Larrson, status unknown" })));
};
//# sourceMappingURL=Persona.UnknownPersona.Example.js.map