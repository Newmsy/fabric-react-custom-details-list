"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Breadcrumb_Basic_Example_1 = require("./examples/Breadcrumb.Basic.Example");
var Breadcrumb_Collapsing_Example_1 = require("./examples/Breadcrumb.Collapsing.Example");
var Breadcrumb_Static_Example_1 = require("./examples/Breadcrumb.Static.Example");
var BreadcrumbBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/examples/Breadcrumb.Basic.Example.tsx');
var BreadcrumbCollapsingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/examples/Breadcrumb.Collapsing.Example.tsx');
var BreadcrumbStaticExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/examples/Breadcrumb.Static.Example.tsx');
exports.BreadcrumbPageProps = {
    title: 'Breadcrumb',
    componentName: 'Breadcrumb',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Breadcrumb',
    examples: [
        {
            title: 'Breadcrumb rendering options',
            code: BreadcrumbBasicExampleCode,
            view: React.createElement(Breadcrumb_Basic_Example_1.BreadcrumbBasicExample, null),
        },
        {
            title: 'Breadcrumb collapsing options',
            code: BreadcrumbCollapsingExampleCode,
            view: React.createElement(Breadcrumb_Collapsing_Example_1.BreadcrumbCollapsingExample, null),
        },
        {
            title: 'Breadcrumb with static width ',
            code: BreadcrumbStaticExampleCode,
            view: React.createElement(Breadcrumb_Static_Example_1.BreadcrumbStaticExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/docs/BreadcrumbOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/docs/BreadcrumbDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/docs/BreadcrumbDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=Breadcrumb.doc.js.map