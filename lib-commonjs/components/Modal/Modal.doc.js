"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Modal_Basic_Example_1 = require("./examples/Modal.Basic.Example");
var Modal_Modeless_Example_1 = require("./examples/Modal.Modeless.Example");
var ModalBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Modal/examples/Modal.Basic.Example.tsx');
var ModalModelessExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Modal/examples/Modal.Modeless.Example.tsx');
exports.ModalPageProps = {
    title: 'Modal',
    componentName: 'Modal',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Modal',
    examples: [
        {
            title: 'Modal',
            code: ModalBasicExampleCode,
            view: React.createElement(Modal_Basic_Example_1.ModalBasicExample, null),
        },
        {
            title: 'Modeless Modal',
            code: ModalModelessExampleCode,
            view: React.createElement(Modal_Modeless_Example_1.ModalModelessExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Modal/docs/ModalOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Modal/docs/ModalDos.md'),
    accessibility: require('!raw-loader!office-ui-fabric-react/src/components/Modal/docs/ModalA11y.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Modal/docs/ModalDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Modal.doc.js.map