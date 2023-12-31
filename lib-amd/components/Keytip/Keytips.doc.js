define(["require", "exports", "react", "./examples/Keytips.Basic.Example", "./examples/Keytips.Button.Example", "./examples/Keytips.CommandBar.Example", "./examples/Keytips.Overflow.Example", "./examples/Keytips.Dynamic.Example"], function (require, exports, React, Keytips_Basic_Example_1, Keytips_Button_Example_1, Keytips_CommandBar_Example_1, Keytips_Overflow_Example_1, Keytips_Dynamic_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeytipsBasicCode = require('!raw-loader!office-ui-fabric-react/src/components/Keytip/examples/Keytips.Basic.Example.tsx');
    var KeytipsButtonCode = require('!raw-loader!office-ui-fabric-react/src/components/Keytip/examples/Keytips.Button.Example.tsx');
    var KeytipsCommandBarCode = require('!raw-loader!office-ui-fabric-react/src/components/Keytip/examples/Keytips.CommandBar.Example.tsx');
    var KeytipsOverflowCode = require('!raw-loader!office-ui-fabric-react/src/components/Keytip/examples/Keytips.Overflow.Example.tsx');
    var KeytipsDynamicCode = require('!raw-loader!office-ui-fabric-react/src/components/Keytip/examples/Keytips.Dynamic.Example.tsx');
    exports.KeytipsPageProps = {
        title: 'Keytips',
        componentName: 'Keytips',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Keytips',
        examples: [
            {
                title: 'Keytips on Buttons',
                code: KeytipsButtonCode,
                view: React.createElement(Keytips_Button_Example_1.KeytipsButtonExample, null),
            },
            {
                title: 'Keytips in a CommandBar',
                code: KeytipsCommandBarCode,
                view: React.createElement(Keytips_CommandBar_Example_1.KeytipsCommandBarExample, null),
            },
            {
                title: 'Keytips in an OverflowWell',
                code: KeytipsOverflowCode,
                view: React.createElement(Keytips_Overflow_Example_1.KeytipsOverflowExample, null),
            },
            {
                title: 'Keytips in Pivots',
                code: KeytipsBasicCode,
                view: React.createElement(Keytips_Basic_Example_1.KeytipsBasicExample, null),
            },
            {
                title: 'Dyanmically updating keytips',
                code: KeytipsDynamicCode,
                view: React.createElement(Keytips_Dynamic_Example_1.KeytipsDynamicExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Keytip/docs/KeytipOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Keytip/docs/KeytipDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Keytip/docs/KeytipDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Keytips.doc.js.map