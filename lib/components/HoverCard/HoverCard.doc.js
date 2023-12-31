import * as React from 'react';
import { HoverCardBasicExample } from './examples/HoverCard.Basic.Example';
import { HoverCardPlainCardExample } from './examples/HoverCard.PlainCard.Example';
import { HoverCardTargetExample } from './examples/HoverCard.Target.Example';
import { HoverCardInstantDismissExample } from './examples/HoverCard.InstantDismiss.Example';
import { HoverCardEventListenerTargetExample } from './examples/HoverCard.EventListenerTarget.Example';
var HoverCardBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.Basic.Example.tsx');
var HoverCardTargetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.Target.Example.tsx');
var HoverCardPlainCardExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.PlainCard.Example.tsx');
var HoverCardInstantDismissExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.InstantDismiss.Example.tsx');
var HoverCardEventListenerTargetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/HoverCard/examples/HoverCard.EventListenerTarget.Example.tsx');
export var HoverCardPageProps = {
    title: 'HoverCard',
    componentName: 'HoverCard',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/HoverCard',
    examples: [
        {
            title: 'Example 1: Expanding HoverCard wrapping an element',
            code: HoverCardBasicExampleCode,
            view: React.createElement(HoverCardBasicExample, null),
        },
        {
            title: 'Example 2: Expanding HoverCard using Target, DirectionalHint and custom HotKey',
            code: HoverCardTargetExampleCode,
            view: React.createElement(HoverCardTargetExample, null),
        },
        {
            title: 'Example 3: Plain HoverCard wrapping an element',
            code: HoverCardPlainCardExampleCode,
            view: React.createElement(HoverCardPlainCardExample, null),
        },
        {
            title: 'Example 4: Plain HoverCard with instant dismiss from within the card button click',
            code: HoverCardInstantDismissExampleCode,
            view: React.createElement(HoverCardInstantDismissExample, null),
        },
        {
            title: 'Example 5: HoverCard using eventListenerTarget to trigger card open',
            code: HoverCardEventListenerTargetExampleCode,
            view: React.createElement(HoverCardEventListenerTargetExample, null),
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
//# sourceMappingURL=HoverCard.doc.js.map