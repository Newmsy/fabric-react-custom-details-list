define(["require", "exports", "office-ui-fabric-react/lib/Persona", "@uifabric/example-data"], function (require, exports, Persona_1, example_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** @deprecated Use the version from `@uifabric/example-data` instead. */
    exports.facepilePersonas = [
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            personaName: 'Annie Lindqvist',
            data: '50%',
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            personaName: 'Aaron Reid',
            data: '$1,000',
        },
        {
            personaName: 'Alex Lundberg',
            data: '75%',
            onClick: function (ev, persona) {
                return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
            },
        },
        {
            personaName: 'Roko Kolar',
            data: '4 hrs',
        },
        {
            imageInitials: 'CB',
            personaName: 'Christian Bergqvist',
            initialsColor: Persona_1.PersonaInitialsColor.green,
            data: '25%',
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric',
            initialsColor: Persona_1.PersonaInitialsColor.lightBlue,
            data: 'Emp1234',
            onClick: function (ev, persona) {
                return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
            },
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett',
            initialsColor: Persona_1.PersonaInitialsColor.lightGreen,
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'PV',
            personaName: 'Annie Lindqvist2',
            initialsColor: Persona_1.PersonaInitialsColor.lightPink,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'AR',
            personaName: 'Aaron Reid2',
            initialsColor: Persona_1.PersonaInitialsColor.magenta,
            data: 'Emp1234',
            onClick: function (ev, persona) {
                return alert('You clicked on ' + persona.personaName + '. Extra data: ' + persona.data);
            },
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'AL',
            personaName: 'Alex Lundberg2',
            initialsColor: Persona_1.PersonaInitialsColor.orange,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'RK',
            personaName: 'Roko Kolar2',
            initialsColor: Persona_1.PersonaInitialsColor.pink,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'CB',
            personaName: 'Christian Bergqvist2',
            initialsColor: Persona_1.PersonaInitialsColor.purple,
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric2',
            // tslint:disable-next-line:deprecation
            initialsColor: Persona_1.PersonaInitialsColor.red,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.teal,
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Another A Name',
            initialsColor: Persona_1.PersonaInitialsColor.blue,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Another A Name (So Many A names!)',
            initialsColor: Persona_1.PersonaInitialsColor.darkBlue,
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Another Anecdotal A Name',
            initialsColor: Persona_1.PersonaInitialsColor.darkGreen,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Anerobic A Name',
            initialsColor: Persona_1.PersonaInitialsColor.darkRed,
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Aerobic A Name',
            initialsColor: Persona_1.PersonaInitialsColor.green,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.lightBlue,
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric2',
            initialsColor: Persona_1.PersonaInitialsColor.lightGreen,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.lightPink,
        },
        {
            imageUrl: example_data_1.TestImages.personaFemale,
            imageInitials: 'VL',
            personaName: 'Valentina Lovric2',
            initialsColor: Persona_1.PersonaInitialsColor.magenta,
        },
        {
            imageUrl: example_data_1.TestImages.personaMale,
            imageInitials: 'MS',
            personaName: 'Maor Sharett2',
            initialsColor: Persona_1.PersonaInitialsColor.orange,
        },
    ];
});
//# sourceMappingURL=FacepileExampleData.js.map