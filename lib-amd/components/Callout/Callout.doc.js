define(["require", "exports", "react", "./examples/Callout.Basic.Example", "./examples/Callout.Status.Example", "./examples/Callout.FocusTrap.Example", "./examples/Callout.Directional.Example", "./examples/Callout.Cover.Example"], function (require, exports, React, Callout_Basic_Example_1, Callout_Status_Example_1, Callout_FocusTrap_Example_1, Callout_Directional_Example_1, Callout_Cover_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalloutBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Callout/examples/Callout.Basic.Example.tsx');
    var StatusCalloutExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Callout/examples/Callout.Status.Example.tsx');
    var CalloutFocusTrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Callout/examples/Callout.FocusTrap.Example.tsx');
    var CalloutDirectionalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Callout/examples/Callout.Directional.Example.tsx');
    var CalloutCoverExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Callout/examples/Callout.Cover.Example.tsx');
    exports.CalloutPageProps = {
        title: 'Callout',
        componentName: 'Callout',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Callout',
        examples: [
            {
                title: 'Default Callout',
                code: CalloutBasicExampleCode,
                view: React.createElement(Callout_Basic_Example_1.CalloutBasicExample, null),
            },
            {
                title: 'FocusTrapCallout Variant',
                code: CalloutFocusTrapExampleCode,
                view: React.createElement(Callout_FocusTrap_Example_1.CalloutFocusTrapExample, null),
            },
            {
                title: 'Non-focusable Callout with accessible text',
                code: StatusCalloutExampleCode,
                view: React.createElement(Callout_Status_Example_1.StatusCalloutExample, null),
            },
            {
                title: 'Callout with directional hint',
                code: CalloutDirectionalExampleCode,
                view: React.createElement(Callout_Directional_Example_1.CalloutDirectionalExample, null),
            },
            {
                title: 'Callout that covers the target element',
                code: CalloutCoverExampleCode,
                view: React.createElement(Callout_Cover_Example_1.CalloutCoverExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Callout/docs/CalloutOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Callout/docs/CalloutDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Callout/docs/CalloutDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Callout.doc.js.map