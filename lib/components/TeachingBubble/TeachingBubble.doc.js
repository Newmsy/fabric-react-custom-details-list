import * as React from 'react';
import { TeachingBubbleBasicExample } from './examples/TeachingBubble.Basic.Example';
import { TeachingBubbleWideExample } from './examples/TeachingBubble.Wide.Example';
import { TeachingBubbleCondensedExample } from './examples/TeachingBubble.Condensed.Example';
import { TeachingBubbleIllustrationExample } from './examples/TeachingBubble.Illustration.Example';
import { TeachingBubbleWideIllustrationExample } from './examples/TeachingBubble.WideIllustration.Example';
import { TeachingBubbleSmallHeadlineExample } from './examples/TeachingBubble.SmallHeadline.Example';
import { TeachingBubbleMultiStepExample } from './examples/TeachingBubble.MultiStep.Example';
var TeachingBubbleBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Basic.Example.tsx');
var TeachingBubbleWideExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Wide.Example.tsx');
var TeachingBubbleCondensedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Condensed.Example.tsx');
var TeachingBubbleIllustrationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Illustration.Example.tsx');
var TeachingBubbleWideIllustrationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.WideIllustration.Example.tsx');
var TeachingBubbleSmallHeadlineExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.SmallHeadline.Example.tsx');
var TeachingBubbleMultiStepExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.MultiStep.Example.tsx');
export var TeachingBubblePageProps = {
    title: 'TeachingBubble',
    componentName: 'TeachingBubble',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/TeachingBubble',
    examples: [
        {
            title: 'TeachingBubble Basic',
            code: TeachingBubbleBasicExampleCode,
            view: React.createElement(TeachingBubbleBasicExample, null),
        },
        {
            title: 'TeachingBubble Wide',
            code: TeachingBubbleWideExampleCode,
            view: React.createElement(TeachingBubbleWideExample, null),
        },
        {
            title: 'TeachingBubble Condensed',
            code: TeachingBubbleCondensedExampleCode,
            view: React.createElement(TeachingBubbleCondensedExample, null),
        },
        {
            title: 'TeachingBubble with Illustration',
            code: TeachingBubbleIllustrationExampleCode,
            view: React.createElement(TeachingBubbleIllustrationExample, null),
        },
        {
            title: 'TeachingBubble Wide with Illustration',
            code: TeachingBubbleWideIllustrationExampleCode,
            view: React.createElement(TeachingBubbleWideIllustrationExample, null),
        },
        {
            title: 'TeachingBubble with small headline',
            code: TeachingBubbleSmallHeadlineExampleCode,
            view: React.createElement(TeachingBubbleSmallHeadlineExample, null),
        },
        {
            title: 'TeachingBubble with multi-steps',
            code: TeachingBubbleMultiStepExampleCode,
            view: React.createElement(TeachingBubbleMultiStepExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/docs/TeachingBubbleOverview.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/docs/TeachingBubbleDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/docs/TeachingBubbleDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=TeachingBubble.doc.js.map