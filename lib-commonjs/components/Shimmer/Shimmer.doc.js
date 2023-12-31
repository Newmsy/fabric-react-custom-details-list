"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Shimmer_Basic_Example_1 = require("./examples/Shimmer.Basic.Example");
var Shimmer_CustomElements_Example_1 = require("./examples/Shimmer.CustomElements.Example");
var Shimmer_LoadData_Example_1 = require("./examples/Shimmer.LoadData.Example");
var Shimmer_Application_Example_1 = require("./examples/Shimmer.Application.Example");
var Shimmer_Styling_Example_1 = require("./examples/Shimmer.Styling.Example");
var ShimmerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/examples/Shimmer.Basic.Example.tsx');
var ShimmerCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/examples/Shimmer.CustomElements.Example.tsx');
var ShimmerStylingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/examples/Shimmer.Styling.Example.tsx');
var ShimmerLoadDataExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/examples/Shimmer.LoadData.Example.tsx');
var ShimmerApplicationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/examples/Shimmer.Application.Example.tsx');
exports.ShimmerPageProps = {
    title: 'Shimmer',
    componentName: 'ShimmerExample',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Shimmer',
    examples: [
        {
            title: 'Shimmer with basic elements using the ~shimmerElements~ prop',
            code: ShimmerBasicExampleCode,
            view: React.createElement(Shimmer_Basic_Example_1.ShimmerBasicExample, null),
        },
        {
            title: 'Shimmer with custom elements using the ~customElementsGroup~ prop',
            code: ShimmerCustomExampleCode,
            view: React.createElement(Shimmer_CustomElements_Example_1.ShimmerCustomElementsExample, null),
        },
        {
            title: 'Shimmer swapping with the content it replaces',
            code: ShimmerLoadDataExampleCode,
            view: React.createElement(Shimmer_LoadData_Example_1.ShimmerLoadDataExample, null),
        },
        {
            title: 'Shimmered DetailsList simulating loading data asynchronously',
            code: ShimmerApplicationExampleCode,
            view: React.createElement(Shimmer_Application_Example_1.ShimmerApplicationExample, null),
        },
        {
            title: 'Shimmer styles customizations',
            code: ShimmerStylingExampleCode,
            view: React.createElement(Shimmer_Styling_Example_1.ShimmerStylingExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/docs/ShimmerOverview.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/docs/ShimmerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/docs/ShimmerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Shimmer.doc.js.map