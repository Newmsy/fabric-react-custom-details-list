import * as React from 'react';
import { CoachmarkBasicExample } from './examples/Coachmark.Basic.Example';
var CoachmarkBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/examples/Coachmark.Basic.Example.tsx');
export var CoachmarkPageProps = {
    title: 'Coachmark',
    componentName: 'Coachmark',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Coachmark',
    examples: [
        {
            title: 'Coachmark Basic',
            code: CoachmarkBasicExampleCode,
            view: React.createElement(CoachmarkBasicExample, null),
            isScrollable: false,
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/docs/CoachmarkOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/docs/CoachmarkDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Coachmark/docs/CoachmarkDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Coachmark.doc.js.map