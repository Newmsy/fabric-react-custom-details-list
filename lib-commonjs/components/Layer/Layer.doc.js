"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Layer_Basic_Example_1 = require("./examples/Layer.Basic.Example");
var Layer_Hosted_Example_1 = require("./examples/Layer.Hosted.Example");
var Layer_Customized_Example_1 = require("./examples/Layer.Customized.Example");
var Layer_NestedLayers_Example_1 = require("./examples/Layer.NestedLayers.Example");
var LayerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Layer/examples/Layer.Basic.Example.tsx');
var LayerHostedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Layer/examples/Layer.Hosted.Example.tsx');
var LayerCustomizedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Layer/examples/Layer.Customized.Example.tsx');
var LayerNestedLayersExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Layer/examples/Layer.NestedLayers.Example.tsx');
exports.LayerPageProps = {
    title: 'Layer',
    componentName: 'Layer',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Layer',
    examples: [
        {
            title: 'Basic layered content',
            code: LayerBasicExampleCode,
            view: React.createElement(Layer_Basic_Example_1.LayerBasicExample, null),
        },
        {
            title: 'Using LayerHost to control projection',
            code: LayerHostedExampleCode,
            view: React.createElement(Layer_Hosted_Example_1.LayerHostedExample, null),
        },
        {
            title: 'Using Customizer to control the default layer behavior',
            code: LayerCustomizedExampleCode,
            view: React.createElement(Layer_Customized_Example_1.LayerCustomizedExample, null),
        },
        {
            title: 'Nested Layers Example',
            code: LayerNestedLayersExampleCode,
            view: React.createElement(Layer_NestedLayers_Example_1.LayerNestedLayersExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Layer/docs/LayerOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Layer/docs/LayerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Layer/docs/LayerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Layer.doc.js.map