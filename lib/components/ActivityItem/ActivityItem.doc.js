import * as React from 'react';
import { ActivityItemBasicExample } from './examples/ActivityItem.Basic.Example';
import { ActivityItemPersonaExample } from './examples/ActivityItem.Persona.Example';
import { ActivityItemCompactExample } from './examples/ActivityItem.Compact.Example';
var ActivityItemBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/examples/ActivityItem.Basic.Example.tsx');
var ActivityItemPersonaExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/examples/ActivityItem.Persona.Example.tsx');
var ActivityItemCompactExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/examples/ActivityItem.Compact.Example.tsx');
export var ActivityItemPageProps = {
    title: 'ActivityItem',
    componentName: 'ActivityItem',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ActivityItem',
    examples: [
        {
            title: 'Activity Items with Icons',
            code: ActivityItemBasicExampleCode,
            view: React.createElement(ActivityItemBasicExample, null),
        },
        {
            title: 'Activity Items with Personas',
            code: ActivityItemPersonaExampleCode,
            view: React.createElement(ActivityItemPersonaExample, null),
        },
        {
            title: 'Compact Activity Items',
            code: ActivityItemCompactExampleCode,
            view: React.createElement(ActivityItemCompactExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/docs/ActivityItemOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/docs/ActivityItemDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/docs/ActivityItemDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=ActivityItem.doc.js.map