import * as React from 'react';
import { FacepileAddFaceExample } from './examples/Facepile.AddFace.Example';
import { FacepileBasicExample } from './examples/Facepile.Basic.Example';
import { FacepileOverflowExample } from './examples/Facepile.Overflow.Example';
var FacepileAddFaceExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Facepile/examples/Facepile.AddFace.Example.tsx');
var FacepileBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Facepile/examples/Facepile.Basic.Example.tsx');
var FacepileOverflowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Facepile/examples/Facepile.Overflow.Example.tsx');
export var FacepilePageProps = {
    title: 'Facepile',
    componentName: 'Facepile',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Facepile',
    examples: [
        {
            title: 'Facepile with size, presence, and fade in options',
            code: FacepileBasicExampleCode,
            view: React.createElement(FacepileBasicExample, null),
        },
        {
            title: 'Facepile with overflow buttons',
            code: FacepileOverflowExampleCode,
            view: React.createElement(FacepileOverflowExample, null),
        },
        {
            title: 'Facepile with face adding functionality',
            code: FacepileAddFaceExampleCode,
            view: React.createElement(FacepileAddFaceExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Facepile/docs/FacepileOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Facepile/docs/FacepileDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Facepile/docs/FacepileDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Facepile.doc.js.map