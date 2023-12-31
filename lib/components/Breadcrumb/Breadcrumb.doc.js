import * as React from 'react';
import { BreadcrumbBasicExample } from './examples/Breadcrumb.Basic.Example';
import { BreadcrumbCollapsingExample } from './examples/Breadcrumb.Collapsing.Example';
import { BreadcrumbStaticExample } from './examples/Breadcrumb.Static.Example';
var BreadcrumbBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/examples/Breadcrumb.Basic.Example.tsx');
var BreadcrumbCollapsingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/examples/Breadcrumb.Collapsing.Example.tsx');
var BreadcrumbStaticExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Breadcrumb/examples/Breadcrumb.Static.Example.tsx');
export var BreadcrumbPageProps = {
    title: 'Breadcrumb',
    componentName: 'Breadcrumb',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Breadcrumb',
    examples: [
        {
            title: 'Breadcrumb rendering options',
            code: BreadcrumbBasicExampleCode,
            view: React.createElement(BreadcrumbBasicExample, null),
        },
        {
            title: 'Breadcrumb collapsing options',
            code: BreadcrumbCollapsingExampleCode,
            view: React.createElement(BreadcrumbCollapsingExample, null),
        },
        {
            title: 'Breadcrumb with static width ',
            code: BreadcrumbStaticExampleCode,
            view: React.createElement(BreadcrumbStaticExample, null),
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