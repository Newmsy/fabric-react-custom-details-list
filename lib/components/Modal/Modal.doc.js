import * as React from 'react';
import { ModalBasicExample } from './examples/Modal.Basic.Example';
import { ModalModelessExample } from './examples/Modal.Modeless.Example';
var ModalBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Modal/examples/Modal.Basic.Example.tsx');
var ModalModelessExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Modal/examples/Modal.Modeless.Example.tsx');
export var ModalPageProps = {
    title: 'Modal',
    componentName: 'Modal',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Modal',
    examples: [
        {
            title: 'Modal',
            code: ModalBasicExampleCode,
            view: React.createElement(ModalBasicExample, null),
        },
        {
            title: 'Modeless Modal',
            code: ModalModelessExampleCode,
            view: React.createElement(ModalModelessExample, null),
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