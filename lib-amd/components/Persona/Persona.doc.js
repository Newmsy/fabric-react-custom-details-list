define(["require", "exports", "react", "./examples/Persona.Initials.Example", "./examples/Persona.Basic.Example", "./examples/Persona.Alternate.Example", "./examples/Persona.Colors.Example", "./examples/Persona.CustomRender.Example", "./examples/Persona.CustomCoinRender.Example", "./examples/Persona.UnknownPersona.Example", "./examples/Persona.Presence.Example"], function (require, exports, React, Persona_Initials_Example_1, Persona_Basic_Example_1, Persona_Alternate_Example_1, Persona_Colors_Example_1, Persona_CustomRender_Example_1, Persona_CustomCoinRender_Example_1, Persona_UnknownPersona_Example_1, Persona_Presence_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PersonaInitialsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Initials.Example.tsx');
    var PersonaBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Basic.Example.tsx');
    var PersonaAlternateExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Alternate.Example.tsx');
    var PersonaColorsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Colors.Example.tsx');
    var PersonaCustomRenderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.CustomRender.Example.tsx');
    var PersonaCustomCoinRenderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.CustomCoinRender.Example.tsx');
    var UnknownPersonaExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.UnknownPersona.Example.tsx');
    var PersonaPresenceExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Presence.Example.tsx');
    exports.PersonaPageProps = {
        title: 'Persona',
        componentName: 'Persona',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Persona',
        examples: [
            {
                title: 'Persona in various sizes',
                code: PersonaBasicExampleCode,
                view: React.createElement(Persona_Basic_Example_1.PersonaBasicExample, null),
            },
            {
                title: 'Alternative small personas',
                code: PersonaAlternateExampleCode,
                view: React.createElement(Persona_Alternate_Example_1.PersonaAlternateExample, null),
            },
            {
                title: 'Persona with initials',
                code: PersonaInitialsExampleCode,
                view: React.createElement(Persona_Initials_Example_1.PersonaInitialsExample, null),
            },
            {
                title: 'PersonaCoin colors',
                code: PersonaColorsExampleCode,
                view: React.createElement(Persona_Colors_Example_1.PersonaColorsExample, null),
            },
            {
                title: 'Rendering custom persona text',
                code: PersonaCustomRenderExampleCode,
                view: React.createElement(Persona_CustomRender_Example_1.PersonaCustomRenderExample, null),
            },
            {
                title: 'Rendering custom coin',
                code: PersonaCustomCoinRenderExampleCode,
                view: React.createElement(Persona_CustomCoinRender_Example_1.PersonaCustomCoinRenderExample, null),
            },
            {
                title: 'Rendering unknown persona coin',
                code: UnknownPersonaExampleCode,
                view: React.createElement(Persona_UnknownPersona_Example_1.UnknownPersonaExample, null),
            },
            {
                title: 'Persona Presence',
                code: PersonaPresenceExampleCode,
                view: React.createElement(Persona_Presence_Example_1.PersonaPresenceExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Persona/docs/PersonaOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Persona/docs/PersonaDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Persona/docs/PersonaDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
    };
});
//# sourceMappingURL=Persona.doc.js.map