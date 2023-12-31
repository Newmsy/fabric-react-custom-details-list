import * as React from 'react';
import { CommandBarBasicExample } from './examples/CommandBar.Basic.Example';
import { CommandBarButtonAsExample } from './examples/CommandBar.ButtonAs.Example';
import { IndividualCommandBarButtonAsExampleWrapper } from './examples/CommandBar.CommandBarButtonAs.Example';
import { CommandBarSplitDisabledExample } from './examples/CommandBar.SplitDisabled.Example';
var CommandBarBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.Basic.Example.tsx');
var CommandBarButtonAsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.ButtonAs.Example.tsx');
var IndividualCommandBarButtonAsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.CommandBarButtonAs.Example.tsx');
var CommandBarSplitDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.SplitDisabled.Example.tsx');
export var CommandBarPageProps = {
    title: 'CommandBar',
    componentName: 'CommandBar',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/CommandBar',
    examples: [
        {
            title: 'CommandBar with overflowing menu items',
            code: CommandBarBasicExampleCode,
            view: React.createElement(CommandBarBasicExample, null),
        },
        {
            title: 'CommandBar custom buttons and overflow menu',
            code: CommandBarButtonAsExampleCode,
            view: React.createElement(CommandBarButtonAsExample, null),
        },
        {
            title: 'CommandBar with coachmark on individual button',
            code: IndividualCommandBarButtonAsExampleCode,
            view: React.createElement(IndividualCommandBarButtonAsExampleWrapper, null),
        },
        {
            title: 'CommandBar with split and disabled buttons',
            code: CommandBarSplitDisabledExampleCode,
            view: React.createElement(CommandBarSplitDisabledExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/docs/CommandBarOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/docs/CommandBarDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/docs/CommandBarDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=CommandBar.doc.js.map