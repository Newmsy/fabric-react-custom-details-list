"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ActivityItem_Basic_Example_1 = require("./examples/ActivityItem.Basic.Example");
var ActivityItem_Persona_Example_1 = require("./examples/ActivityItem.Persona.Example");
var ActivityItem_Compact_Example_1 = require("./examples/ActivityItem.Compact.Example");
var ActivityItemBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/examples/ActivityItem.Basic.Example.tsx');
var ActivityItemPersonaExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/examples/ActivityItem.Persona.Example.tsx');
var ActivityItemCompactExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ActivityItem/examples/ActivityItem.Compact.Example.tsx');
exports.ActivityItemPageProps = {
    title: 'ActivityItem',
    componentName: 'ActivityItem',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ActivityItem',
    examples: [
        {
            title: 'Activity Items with Icons',
            code: ActivityItemBasicExampleCode,
            view: React.createElement(ActivityItem_Basic_Example_1.ActivityItemBasicExample, null),
        },
        {
            title: 'Activity Items with Personas',
            code: ActivityItemPersonaExampleCode,
            view: React.createElement(ActivityItem_Persona_Example_1.ActivityItemPersonaExample, null),
        },
        {
            title: 'Compact Activity Items',
            code: ActivityItemCompactExampleCode,
            view: React.createElement(ActivityItem_Compact_Example_1.ActivityItemCompactExample, null),
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