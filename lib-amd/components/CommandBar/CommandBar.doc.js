define(["require", "exports", "react", "./examples/CommandBar.Basic.Example", "./examples/CommandBar.ButtonAs.Example", "./examples/CommandBar.CommandBarButtonAs.Example", "./examples/CommandBar.SplitDisabled.Example"], function (require, exports, React, CommandBar_Basic_Example_1, CommandBar_ButtonAs_Example_1, CommandBar_CommandBarButtonAs_Example_1, CommandBar_SplitDisabled_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommandBarBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.Basic.Example.tsx');
    var CommandBarButtonAsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.ButtonAs.Example.tsx');
    var IndividualCommandBarButtonAsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.CommandBarButtonAs.Example.tsx');
    var CommandBarSplitDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/examples/CommandBar.SplitDisabled.Example.tsx');
    exports.CommandBarPageProps = {
        title: 'CommandBar',
        componentName: 'CommandBar',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/CommandBar',
        examples: [
            {
                title: 'CommandBar with overflowing menu items',
                code: CommandBarBasicExampleCode,
                view: React.createElement(CommandBar_Basic_Example_1.CommandBarBasicExample, null),
            },
            {
                title: 'CommandBar custom buttons and overflow menu',
                code: CommandBarButtonAsExampleCode,
                view: React.createElement(CommandBar_ButtonAs_Example_1.CommandBarButtonAsExample, null),
            },
            {
                title: 'CommandBar with coachmark on individual button',
                code: IndividualCommandBarButtonAsExampleCode,
                view: React.createElement(CommandBar_CommandBarButtonAs_Example_1.IndividualCommandBarButtonAsExampleWrapper, null),
            },
            {
                title: 'CommandBar with split and disabled buttons',
                code: CommandBarSplitDisabledExampleCode,
                view: React.createElement(CommandBar_SplitDisabled_Example_1.CommandBarSplitDisabledExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/docs/CommandBarOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/docs/CommandBarDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/CommandBar/docs/CommandBarDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=CommandBar.doc.js.map