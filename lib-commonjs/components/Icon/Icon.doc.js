"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icon_Basic_Example_1 = require("./examples/Icon.Basic.Example");
var Icon_Svg_Example_1 = require("./examples/Icon.Svg.Example");
var Icon_Color_Example_1 = require("./examples/Icon.Color.Example");
var Icon_ImageSheet_Example_1 = require("./examples/Icon.ImageSheet.Example");
var Icon_SvgFactory_Example_1 = require("./examples/Icon.SvgFactory.Example");
var IconBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.Basic.Example.tsx');
var IconSvgExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.Svg.Example.tsx');
var IconColorExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.Color.Example.tsx');
var IconImageSheetExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.ImageSheet.Example.tsx');
var IconSvgFactoryExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Icon/examples/Icon.SvgFactory.Example.tsx');
exports.IconPageProps = {
    title: 'Icon',
    componentName: 'Icon',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Icon',
    examples: [
        {
            title: 'Icon',
            code: IconBasicExampleCode,
            view: React.createElement(Icon_Basic_Example_1.IconBasicExample, null),
        },
        {
            title: 'Icon with custom color',
            code: IconColorExampleCode,
            view: React.createElement(Icon_Color_Example_1.IconColorExample, null),
        },
        {
            title: 'Icon using custom svg',
            code: IconSvgExampleCode,
            view: React.createElement(Icon_Svg_Example_1.IconSvgExample, null),
        },
        {
            title: 'Icon using image sheet',
            code: IconImageSheetExampleCode,
            view: React.createElement(Icon_ImageSheet_Example_1.IconImageSheetExample, null),
        },
        {
            title: 'Icon using svg factory',
            code: IconSvgFactoryExampleCode,
            view: React.createElement(Icon_SvgFactory_Example_1.IconSvgFactoryExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Icon/docs/IconOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Icon/docs/IconDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Icon/docs/IconDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
};
//# sourceMappingURL=Icon.doc.js.map