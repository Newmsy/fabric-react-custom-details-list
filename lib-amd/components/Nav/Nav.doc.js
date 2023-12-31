define(["require", "exports", "react", "./examples/Nav.Basic.Example", "./examples/Nav.FabricDemoApp.Example", "./examples/Nav.Nested.Example", "./examples/Nav.CustomGroupHeaders.Example"], function (require, exports, React, Nav_Basic_Example_1, Nav_FabricDemoApp_Example_1, Nav_Nested_Example_1, Nav_CustomGroupHeaders_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.Basic.Example.tsx');
    var NavFabricDemoAppExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.FabricDemoApp.Example.tsx');
    var NavNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.Nested.Example.tsx');
    var NavCustomGroupHeadersExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Nav/examples/Nav.CustomGroupHeaders.Example.tsx');
    exports.NavPageProps = {
        title: 'Nav',
        componentName: 'Nav',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Nav',
        examples: [
            {
                title: 'Basic nav with sample links',
                code: NavBasicExampleCode,
                view: React.createElement(Nav_Basic_Example_1.NavBasicExample, null),
            },
            {
                title: 'Nav similar to the one in this demo app',
                code: NavFabricDemoAppExampleCode,
                view: React.createElement(Nav_FabricDemoApp_Example_1.NavFabricDemoAppExample, null),
            },
            {
                title: 'Nav with nested links',
                code: NavNestedExampleCode,
                view: React.createElement(Nav_Nested_Example_1.NavNestedExample, null),
            },
            {
                title: 'Nav with custom group header',
                code: NavCustomGroupHeadersExampleCode,
                view: React.createElement(Nav_CustomGroupHeaders_Example_1.NavCustomGroupHeadersExample, null),
            },
        ],
        propertiesTablesSources: [require('!raw-loader!office-ui-fabric-react/src/components/Nav/Nav.types.ts')],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Nav/docs/NavOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Nav/docs/NavDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Nav/docs/NavDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
    };
});
//# sourceMappingURL=Nav.doc.js.map