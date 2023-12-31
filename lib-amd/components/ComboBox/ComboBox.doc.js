define(["require", "exports", "react", "./examples/ComboBox.Basic.Example", "./examples/ComboBox.Toggles.Example", "./examples/ComboBox.Controlled.Example", "./examples/ComboBox.Virtualized.Example", "./examples/ComboBox.ErrorHandling.Example", "./examples/ComboBox.CustomStyled.Example"], function (require, exports, React, ComboBox_Basic_Example_1, ComboBox_Toggles_Example_1, ComboBox_Controlled_Example_1, ComboBox_Virtualized_Example_1, ComboBox_ErrorHandling_Example_1, ComboBox_CustomStyled_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComboBoxBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Basic.Example.tsx');
    var ComboBoxTogglesExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Toggles.Example.tsx');
    var ComboBoxControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Controlled.Example.tsx');
    var ComboBoxVirtualizedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.Virtualized.Example.tsx');
    var ComboBoxErrorHandlingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.ErrorHandling.Example.tsx');
    var ComboBoxCustomStyledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ComboBox/examples/ComboBox.CustomStyled.Example.tsx');
    exports.ComboBoxPageProps = {
        title: 'ComboBox',
        componentName: 'ComboBox',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ComboBox',
        examples: [
            {
                title: 'Basic uncontrolled ComboBox',
                code: ComboBoxBasicExampleCode,
                view: React.createElement(ComboBox_Basic_Example_1.ComboBoxBasicExample, null),
            },
            {
                title: 'ComboBox with toggleable autoComplete and allowFreeform',
                code: ComboBoxTogglesExampleCode,
                view: React.createElement(ComboBox_Toggles_Example_1.ComboBoxTogglesExample, null),
            },
            {
                title: 'Controlled ComboBox',
                code: ComboBoxControlledExampleCode,
                view: React.createElement(ComboBox_Controlled_Example_1.ComboBoxControlledExample, null),
            },
            {
                title: 'VirtualizedComboBox',
                code: ComboBoxVirtualizedExampleCode,
                view: React.createElement(ComboBox_Virtualized_Example_1.ComboBoxVirtualizedExample, null),
            },
            {
                title: 'ComboBox with error handling',
                code: ComboBoxErrorHandlingExampleCode,
                view: React.createElement(ComboBox_ErrorHandling_Example_1.ComboBoxErrorHandlingExample, null),
            },
            {
                title: 'ComboBox with custom styling',
                code: ComboBoxCustomStyledExampleCode,
                view: React.createElement(ComboBox_CustomStyled_Example_1.ComboBoxCustomStyledExample, null),
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
});
//# sourceMappingURL=ComboBox.doc.js.map