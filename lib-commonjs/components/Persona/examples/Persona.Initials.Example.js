"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Persona_1 = require("office-ui-fabric-react/lib-commonjs/Persona");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var examplePersona = {
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
};
var personaWithInitials = tslib_1.__assign(tslib_1.__assign({}, examplePersona), { text: 'Maor Sharett', imageInitials: 'MS' });
exports.PersonaInitialsExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 10 } },
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Kat Larrson", size: Persona_1.PersonaSize.size24 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie", size: Persona_1.PersonaSize.size24 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie Lind", size: Persona_1.PersonaSize.size32 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie Boyl Lind", size: Persona_1.PersonaSize.size32 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie Boyl Carrie Lindqvist", size: Persona_1.PersonaSize.size40 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "+1 (111) 123-4567 X4567", size: Persona_1.PersonaSize.size40 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "+1 (555) 123-4567 X4567", size: Persona_1.PersonaSize.size48, allowPhoneInitials: true })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "\u5B8B\u667A\u6D0B", size: Persona_1.PersonaSize.size48 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "\uB0A8\uAD81 \uC131\uC885", size: Persona_1.PersonaSize.size56 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "\u062E\u0633\u0631\u0648 \u0631\u062D\u06CC\u0645\u06CC", size: Persona_1.PersonaSize.size56 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, personaWithInitials, { initialsColor: Persona_1.PersonaInitialsColor.lightBlue, size: Persona_1.PersonaSize.size72 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, personaWithInitials, { initialsColor: Persona_1.PersonaInitialsColor.magenta, size: Persona_1.PersonaSize.size100 })),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, personaWithInitials, { initialsColor: Persona_1.PersonaInitialsColor.teal, coinSize: 150 }))));
};
//# sourceMappingURL=Persona.Initials.Example.js.map