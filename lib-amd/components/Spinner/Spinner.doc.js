define(["require", "exports", "react", "./examples/Spinner.Basic.Example", "./examples/Spinner.Labeled.Example"], function (require, exports, React, Spinner_Basic_Example_1, Spinner_Labeled_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinnerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Spinner/examples/Spinner.Basic.Example.tsx');
    var SpinnerLabeledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Spinner/examples/Spinner.Labeled.Example.tsx');
    exports.SpinnerPageProps = {
        title: 'Spinner',
        componentName: 'Spinner',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Spinner',
        examples: [
            {
                title: 'Spinner sizes',
                code: SpinnerBasicExampleCode,
                view: React.createElement(Spinner_Basic_Example_1.SpinnerBasicExample, null),
            },
            {
                title: 'Spinner label positioning',
                code: SpinnerLabeledExampleCode,
                view: React.createElement(Spinner_Labeled_Example_1.SpinnerLabeledExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Spinner/docs/SpinnerOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Spinner/docs/SpinnerDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Spinner/docs/SpinnerDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Spinner.doc.js.map