import * as React from 'react';
import { RatingBasicExample } from './examples/Rating.Basic.Example';
import { RatingButtonControlledExample } from './examples/Rating.ButtonControlled.Example';
var RatingBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Rating/examples/Rating.Basic.Example.tsx');
var RatingButtonControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Rating/examples/Rating.ButtonControlled.Example.tsx');
export var RatingPageProps = {
    title: 'Rating',
    componentName: 'Rating',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Rating',
    examples: [
        {
            title: 'Rating',
            code: RatingBasicExampleCode,
            view: React.createElement(RatingBasicExample, null),
        },
        {
            title: 'Button Controlled Rating',
            code: RatingButtonControlledExampleCode,
            view: React.createElement(RatingButtonControlledExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Rating/docs/RatingOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Rating/docs/RatingDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Rating/docs/RatingDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Rating.doc.js.map