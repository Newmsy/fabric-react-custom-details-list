define(["require", "exports", "react", "./examples/TeachingBubble.Basic.Example", "./examples/TeachingBubble.Wide.Example", "./examples/TeachingBubble.Condensed.Example", "./examples/TeachingBubble.Illustration.Example", "./examples/TeachingBubble.WideIllustration.Example", "./examples/TeachingBubble.SmallHeadline.Example", "./examples/TeachingBubble.MultiStep.Example"], function (require, exports, React, TeachingBubble_Basic_Example_1, TeachingBubble_Wide_Example_1, TeachingBubble_Condensed_Example_1, TeachingBubble_Illustration_Example_1, TeachingBubble_WideIllustration_Example_1, TeachingBubble_SmallHeadline_Example_1, TeachingBubble_MultiStep_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TeachingBubbleBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Basic.Example.tsx');
    var TeachingBubbleWideExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Wide.Example.tsx');
    var TeachingBubbleCondensedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Condensed.Example.tsx');
    var TeachingBubbleIllustrationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Illustration.Example.tsx');
    var TeachingBubbleWideIllustrationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.WideIllustration.Example.tsx');
    var TeachingBubbleSmallHeadlineExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.SmallHeadline.Example.tsx');
    var TeachingBubbleMultiStepExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.MultiStep.Example.tsx');
    exports.TeachingBubblePageProps = {
        title: 'TeachingBubble',
        componentName: 'TeachingBubble',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/TeachingBubble',
        examples: [
            {
                title: 'TeachingBubble Basic',
                code: TeachingBubbleBasicExampleCode,
                view: React.createElement(TeachingBubble_Basic_Example_1.TeachingBubbleBasicExample, null),
            },
            {
                title: 'TeachingBubble Wide',
                code: TeachingBubbleWideExampleCode,
                view: React.createElement(TeachingBubble_Wide_Example_1.TeachingBubbleWideExample, null),
            },
            {
                title: 'TeachingBubble Condensed',
                code: TeachingBubbleCondensedExampleCode,
                view: React.createElement(TeachingBubble_Condensed_Example_1.TeachingBubbleCondensedExample, null),
            },
            {
                title: 'TeachingBubble with Illustration',
                code: TeachingBubbleIllustrationExampleCode,
                view: React.createElement(TeachingBubble_Illustration_Example_1.TeachingBubbleIllustrationExample, null),
            },
            {
                title: 'TeachingBubble Wide with Illustration',
                code: TeachingBubbleWideIllustrationExampleCode,
                view: React.createElement(TeachingBubble_WideIllustration_Example_1.TeachingBubbleWideIllustrationExample, null),
            },
            {
                title: 'TeachingBubble with small headline',
                code: TeachingBubbleSmallHeadlineExampleCode,
                view: React.createElement(TeachingBubble_SmallHeadline_Example_1.TeachingBubbleSmallHeadlineExample, null),
            },
            {
                title: 'TeachingBubble with multi-steps',
                code: TeachingBubbleMultiStepExampleCode,
                view: React.createElement(TeachingBubble_MultiStep_Example_1.TeachingBubbleMultiStepExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/docs/TeachingBubbleOverview.md'),
        dos: require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/docs/TeachingBubbleDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/docs/TeachingBubbleDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=TeachingBubble.doc.js.map