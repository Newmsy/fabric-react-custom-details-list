define(["require", "exports", "react", "./examples/MarqueeSelection.Basic.Example"], function (require, exports, React, MarqueeSelection_Basic_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MarqueeSelectionBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/MarqueeSelection/examples/MarqueeSelection.Basic.Example.tsx');
    exports.MarqueeSelectionPageProps = {
        title: 'MarqueeSelection',
        componentName: 'MarqueeSelection',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/MarqueeSelection',
        examples: [
            {
                title: 'Basic Selection Example',
                code: MarqueeSelectionBasicExampleCode,
                view: React.createElement(MarqueeSelection_Basic_Example_1.MarqueeSelectionBasicExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/MarqueeSelection/docs/MarqueeSelectionOverview.md'),
        bestPractices: '',
        dos: '',
        donts: '',
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=MarqueeSelection.doc.js.map