"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var OverflowSet_Custom_Example_1 = require("./examples/OverflowSet.Custom.Example");
var OverflowSet_Basic_Example_1 = require("./examples/OverflowSet.Basic.Example");
var OverflowSet_Vertical_Example_1 = require("./examples/OverflowSet.Vertical.Example");
var OverflowSet_BasicReversed_Example_1 = require("./examples/OverflowSet.BasicReversed.Example");
var OverflowSetCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/OverflowSet/examples/OverflowSet.Custom.Example.tsx');
var OverflowSetBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/OverflowSet/examples/OverflowSet.Basic.Example.tsx');
var OverflowSetVerticalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/OverflowSet/examples/OverflowSet.Vertical.Example.tsx');
var OverflowSetBasicReversedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/OverflowSet/examples/OverflowSet.BasicReversed.Example.tsx');
exports.OverflowSetPageProps = {
    title: 'OverflowSet',
    componentName: 'OverflowSet',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/OverflowSet',
    examples: [
        {
            title: 'OverflowSet Basic Example',
            code: OverflowSetBasicExampleCode,
            view: React.createElement(OverflowSet_Basic_Example_1.OverflowSetBasicExample, null),
        },
        {
            title: 'OverflowSet Vertical Example',
            code: OverflowSetVerticalExampleCode,
            view: React.createElement(OverflowSet_Vertical_Example_1.OverflowSetVerticalExample, null),
        },
        {
            title: 'OverflowSet Custom Example',
            code: OverflowSetCustomExampleCode,
            view: React.createElement(OverflowSet_Custom_Example_1.OverflowSetCustomExample, null),
        },
        {
            title: 'OverflowSet Reversed Example',
            code: OverflowSetBasicReversedExampleCode,
            view: React.createElement(OverflowSet_BasicReversed_Example_1.OverflowSetBasicReversedExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/OverflowSet/docs/OverflowSetOverview.md'),
    bestPractices: '',
    dos: '',
    donts: '',
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
};
//# sourceMappingURL=OverflowSet.doc.js.map