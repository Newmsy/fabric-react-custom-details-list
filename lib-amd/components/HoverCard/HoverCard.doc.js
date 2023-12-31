define(["require", "exports", "react", "./examples/HoverCard.Basic.Example", "./examples/HoverCard.PlainCard.Example", "./examples/HoverCard.Target.Example", "./examples/HoverCard.InstantDismiss.Example", "./examples/HoverCard.EventListenerTarget.Example"], function (require, exports, React, HoverCard_Basic_Example_1, HoverCard_PlainCard_Example_1, HoverCard_Target_Example_1, HoverCard_InstantDismiss_Example_1, HoverCard_EventListenerTarget_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HoverCardBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.Basic.Example.tsx');
    var HoverCardTargetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.Target.Example.tsx');
    var HoverCardPlainCardExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.PlainCard.Example.tsx');
    var HoverCardInstantDismissExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.InstantDismiss.Example.tsx');
    var HoverCardEventListenerTargetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.EventListenerTarget.Example.tsx');
    exports.HoverCardPageProps = {
        title: 'HoverCard',
        componentName: 'HoverCard',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/HoverCard',
        examples: [
            {
                title: 'Example 1: Expanding HoverCard wrapping an element',
                code: HoverCardBasicExampleCode,
                view: React.createElement(HoverCard_Basic_Example_1.HoverCardBasicExample, null),
            },
            {
                title: 'Example 2: Expanding HoverCard using Target, DirectionalHint and custom HotKey',
                code: HoverCardTargetExampleCode,
                view: React.createElement(HoverCard_Target_Example_1.HoverCardTargetExample, null),
            },
            {
                title: 'Example 3: Plain HoverCard wrapping an element',
                code: HoverCardPlainCardExampleCode,
                view: React.createElement(HoverCard_PlainCard_Example_1.HoverCardPlainCardExample, null),
            },
            {
                title: 'Example 4: Plain HoverCard with instant dismiss from within the card button click',
                code: HoverCardInstantDismissExampleCode,
                view: React.createElement(HoverCard_InstantDismiss_Example_1.HoverCardInstantDismissExample, null),
            },
            {
                title: 'Example 5: HoverCard using eventListenerTarget to trigger card open',
                code: HoverCardEventListenerTargetExampleCode,
                view: React.createElement(HoverCard_EventListenerTarget_Example_1.HoverCardEventListenerTargetExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/docs/HoverCardOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/docs/HoverCardDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/docs/HoverCardDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
    };
});
//# sourceMappingURL=HoverCard.doc.js.map