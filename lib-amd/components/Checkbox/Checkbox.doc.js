define(["require", "exports", "react", "./examples/Checkbox.Basic.Example", "./examples/Checkbox.Indeterminate.Example", "./examples/Checkbox.Other.Example"], function (require, exports, React, Checkbox_Basic_Example_1, Checkbox_Indeterminate_Example_1, Checkbox_Other_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckboxBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/examples/Checkbox.Basic.Example.tsx');
    var CheckboxOtherExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/examples/Checkbox.Other.Example.tsx');
    var CheckboxIndeterminateExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/examples/Checkbox.Indeterminate.Example.tsx');
    exports.CheckboxPageProps = {
        title: 'Checkbox',
        componentName: 'Checkbox',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Checkbox',
        examples: [
            {
                title: 'Basic Checkboxes',
                code: CheckboxBasicExampleCode,
                view: React.createElement(Checkbox_Basic_Example_1.CheckboxBasicExample, null),
            },
            {
                title: 'Other Implementation Examples',
                code: CheckboxOtherExampleCode,
                view: React.createElement(Checkbox_Other_Example_1.CheckboxOtherExample, null),
            },
            {
                title: 'Indeterminate Checkboxes',
                code: CheckboxIndeterminateExampleCode,
                view: React.createElement(Checkbox_Indeterminate_Example_1.CheckboxIndeterminateExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/docs/CheckboxOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/docs/CheckboxDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Checkbox/docs/CheckboxDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Checkbox.doc.js.map