define(["require", "exports", "react", "./examples/Separator.Basic.Example", "./examples/Separator.Theming.Example", "./examples/Separator.Icon.Example"], function (require, exports, React, Separator_Basic_Example_1, Separator_Theming_Example_1, Separator_Icon_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SeparatorBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Separator/examples/Separator.Basic.Example.tsx');
    var SeparatorThemingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Separator/examples/Separator.Theming.Example.tsx');
    var SeparatorIconExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Separator/examples/Separator.Icon.Example.tsx');
    exports.SeparatorPageProps = {
        title: 'Separator',
        componentName: 'Separator',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Separator',
        examples: [
            {
                title: 'Basic Separator with Text',
                code: SeparatorBasicExampleCode,
                view: React.createElement(Separator_Basic_Example_1.SeparatorBasicExample, null),
            },
            {
                title: 'Basic Themed Separator with Text',
                code: SeparatorThemingExampleCode,
                view: React.createElement(Separator_Theming_Example_1.SeparatorThemingExample, null),
            },
            {
                title: 'Separator With Icon',
                code: SeparatorIconExampleCode,
                view: React.createElement(Separator_Icon_Example_1.SeparatorIconExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Separator/docs/SeparatorOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Separator/docs/SeparatorDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Separator/docs/SeparatorDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Separator.doc.js.map