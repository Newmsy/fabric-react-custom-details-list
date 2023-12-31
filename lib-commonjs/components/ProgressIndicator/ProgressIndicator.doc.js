"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ProgressIndicator_Basic_Example_1 = require("./examples/ProgressIndicator.Basic.Example");
var ProgressIndicator_Indeterminate_Example_1 = require("./examples/ProgressIndicator.Indeterminate.Example");
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
//# sourceMappingURL=ProgressIndicator.doc.js.map