import * as React from 'react';
import { FloatingPeoplePickerTypesExample } from '../PeoplePicker/examples/FloatingPeoplePicker.Basic.Example';
var FloatingPeoplePickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/examples/FloatingPeoplePicker.Basic.Example.tsx');
export var FloatingPeoplePickerPageProps = {
    title: 'FloatingPeoplePicker',
    componentName: 'FloatingPeoplePicker',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/FloatingPeoplePicker',
    examples: [
        {
            title: 'Floating People Picker',
            code: FloatingPeoplePickerBasicExampleCode,
            view: React.createElement(FloatingPeoplePickerTypesExample, null),
        },
    ],
    propertiesTablesSources: [
        require('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/BaseFloatingPicker.types.ts'),
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerOverview.md'),
    bestPractices: require('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerBestPractices.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/FloatingPicker/PeoplePicker/docs/FloatingPeoplePickerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=FloatingPeoplePicker.doc.js.map