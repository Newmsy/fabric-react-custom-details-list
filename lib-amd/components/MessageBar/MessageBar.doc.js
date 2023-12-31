define(["require", "exports", "react", "./examples/MessageBar.Basic.Example"], function (require, exports, React, MessageBar_Basic_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MessageBarBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/MessageBar/examples/MessageBar.Basic.Example.tsx');
    exports.MessageBarPageProps = {
        title: 'MessageBar',
        componentName: 'MessageBar',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/MessageBar',
        examples: [
            {
                title: 'Various MessageBar types',
                code: MessageBarBasicExampleCode,
                view: React.createElement(MessageBar_Basic_Example_1.MessageBarBasicExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/MessageBar/docs/MessageBarOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/MessageBar/docs/MessageBarDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/MessageBar/docs/MessageBarDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=MessageBar.doc.js.map