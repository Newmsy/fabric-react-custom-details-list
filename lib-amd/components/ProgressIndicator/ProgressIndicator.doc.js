define(["require", "exports", "react", "./examples/ProgressIndicator.Basic.Example", "./examples/ProgressIndicator.Indeterminate.Example"], function (require, exports, React, ProgressIndicator_Basic_Example_1, ProgressIndicator_Indeterminate_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressIndicatorBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ProgressIndicator/examples/ProgressIndicator.Basic.Example.tsx');
    var ProgressIndicatorIndeterminateExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ProgressIndicator/examples/ProgressIndicator.Indeterminate.Example.tsx');
    exports.ProgressIndicatorPageProps = {
        title: 'ProgressIndicator',
        componentName: 'ProgressIndicator',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ProgressIndicator',
        examples: [
            {
                title: 'Default ProgressIndicator',
                code: ProgressIndicatorBasicExampleCode,
                view: React.createElement(ProgressIndicator_Basic_Example_1.ProgressIndicatorBasicExample, null),
            },
            {
                title: 'Indeterminate ProgressIndicator',
                code: ProgressIndicatorIndeterminateExampleCode,
                view: React.createElement(ProgressIndicator_Indeterminate_Example_1.ProgressIndicatorIndeterminateExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/ProgressIndicator/docs/ProgressIndicatorOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/ProgressIndicator/docs/ProgressIndicatorDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/ProgressIndicator/docs/ProgressIndicatorDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=ProgressIndicator.doc.js.map