import * as React from 'react';
import { ComboBoxBasicExample } from './examples/ComboBox.Basic.Example';
import { ComboBoxTogglesExample } from './examples/ComboBox.Toggles.Example';
import { ComboBoxControlledExample } from './examples/ComboBox.Controlled.Example';
import { ComboBoxVirtualizedExample } from './examples/ComboBox.Virtualized.Example';
import { ComboBoxErrorHandlingExample } from './examples/ComboBox.ErrorHandling.Example';
import { ComboBoxCustomStyledExample } from './examples/ComboBox.CustomStyled.Example';
var ComboBoxBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Basic.Example.tsx');
var ComboBoxTogglesExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Toggles.Example.tsx');
var ComboBoxControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Controlled.Example.tsx');
var ComboBoxVirtualizedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Virtualized.Example.tsx');
var ComboBoxErrorHandlingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.ErrorHandling.Example.tsx');
var ComboBoxCustomStyledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.CustomStyled.Example.tsx');
export var ComboBoxPageProps = {
    title: 'ComboBox',
    componentName: 'ComboBox',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ComboBox',
    examples: [
        {
            title: 'Basic uncontrolled ComboBox',
            code: ComboBoxBasicExampleCode,
            view: React.createElement(ComboBoxBasicExample, null),
        },
        {
            title: 'ComboBox with toggleable autoComplete and allowFreeform',
            code: ComboBoxTogglesExampleCode,
            view: React.createElement(ComboBoxTogglesExample, null),
        },
        {
            title: 'Controlled ComboBox',
            code: ComboBoxControlledExampleCode,
            view: React.createElement(ComboBoxControlledExample, null),
        },
        {
            title: 'VirtualizedComboBox',
            code: ComboBoxVirtualizedExampleCode,
            view: React.createElement(ComboBoxVirtualizedExample, null),
        },
        {
            title: 'ComboBox with error handling',
            code: ComboBoxErrorHandlingExampleCode,
            view: React.createElement(ComboBoxErrorHandlingExample, null),
        },
        {
            title: 'ComboBox with custom styling',
            code: ComboBoxCustomStyledExampleCode,
            view: React.createElement(ComboBoxCustomStyledExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/docs/ComboBoxOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/docs/ComboBoxDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/docs/ComboBoxDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
};
//# sourceMappingURL=ComboBox.doc.js.map