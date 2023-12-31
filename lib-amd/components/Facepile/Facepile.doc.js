define(["require", "exports", "react", "./examples/Facepile.AddFace.Example", "./examples/Facepile.Basic.Example", "./examples/Facepile.Overflow.Example"], function (require, exports, React, Facepile_AddFace_Example_1, Facepile_Basic_Example_1, Facepile_Overflow_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FacepileAddFaceExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Facepile/examples/Facepile.AddFace.Example.tsx');
    var FacepileBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Facepile/examples/Facepile.Basic.Example.tsx');
    var FacepileOverflowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Facepile/examples/Facepile.Overflow.Example.tsx');
    exports.FacepilePageProps = {
        title: 'Facepile',
        componentName: 'Facepile',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Facepile',
        examples: [
            {
                title: 'Facepile with size, presence, and fade in options',
                code: FacepileBasicExampleCode,
                view: React.createElement(Facepile_Basic_Example_1.FacepileBasicExample, null),
            },
            {
                title: 'Facepile with overflow buttons',
                code: FacepileOverflowExampleCode,
                view: React.createElement(Facepile_Overflow_Example_1.FacepileOverflowExample, null),
            },
            {
                title: 'Facepile with face adding functionality',
                code: FacepileAddFaceExampleCode,
                view: React.createElement(Facepile_AddFace_Example_1.FacepileAddFaceExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Facepile/docs/FacepileOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Facepile/docs/FacepileDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Facepile/docs/FacepileDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Facepile.doc.js.map