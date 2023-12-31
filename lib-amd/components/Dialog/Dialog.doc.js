define(["require", "exports", "react", "./examples/Dialog.Basic.Example", "./examples/Dialog.LargeHeader.Example", "./examples/Dialog.Blocking.Example", "./examples/Dialog.TopOffsetFixed.Example", "./examples/Dialog.Modeless.Example"], function (require, exports, React, Dialog_Basic_Example_1, Dialog_LargeHeader_Example_1, Dialog_Blocking_Example_1, Dialog_TopOffsetFixed_Example_1, Dialog_Modeless_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.Basic.Example.tsx');
    var DialogLargeHeaderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.LargeHeader.Example.tsx');
    var DialogBlockingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.Blocking.Example.tsx');
    var DialogTopOffsetFixedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.TopOffsetFixed.Example.tsx');
    var DialogModelessExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Dialog/examples/Dialog.Modeless.Example.tsx');
    exports.DialogPageProps = {
        title: 'Dialog',
        componentName: 'Dialog',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Dialog',
        examples: [
            {
                title: 'Default Dialog',
                code: DialogBasicExampleCode,
                view: React.createElement(Dialog_Basic_Example_1.DialogBasicExample, null),
            },
            {
                title: 'Dialog with large header and ChoiceGroup',
                code: DialogLargeHeaderExampleCode,
                view: (React.createElement(React.Fragment, null,
                    React.createElement("p", null, "Use this Dialog sparingly, when calling extra attention to the content. It can be used in situations where you want to teach the user something or notify them of an important change."),
                    React.createElement(Dialog_LargeHeader_Example_1.DialogLargeHeaderExample, null))),
            },
            {
                title: 'Blocking Dialog',
                code: DialogBlockingExampleCode,
                view: (React.createElement(React.Fragment, null,
                    React.createElement("p", null, "A blocking Dialog disables all other actions and commands on the page behind it. They should be used very sparingly, only when it is critical that the user makes a choice or provides information before they can proceed. Blocking Dialogs are generally used for irreversible or potentially destructive tasks."),
                    React.createElement(Dialog_Blocking_Example_1.DialogBlockingExample, null))),
            },
            {
                title: 'Dialog with Top Offset Fixed',
                code: DialogTopOffsetFixedExampleCode,
                view: (React.createElement(React.Fragment, null,
                    React.createElement("p", null, "This Dialog maintains its top position and expands only the bottom, offering a more stable appearance when a Dialog's content changes dynamically."),
                    React.createElement(Dialog_TopOffsetFixed_Example_1.DialogTopOffsetFixedExample, null))),
            },
            {
                title: 'Modeless Dialog',
                code: DialogModelessExampleCode,
                view: React.createElement(Dialog_Modeless_Example_1.DialogModelessExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Dialog/docs/DialogOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Dialog/docs/DialogDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Dialog/docs/DialogDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Dialog.doc.js.map