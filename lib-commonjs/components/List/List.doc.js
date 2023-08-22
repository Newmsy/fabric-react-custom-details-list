"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_Basic_Example_1 = require("./examples/List.Basic.Example");
var List_Grid_Example_1 = require("./examples/List.Grid.Example");
var List_Scrolling_Example_1 = require("./examples/List.Scrolling.Example");
var List_Ghosting_Example_1 = require("./examples/List.Ghosting.Example");
var ListBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/List/examples/List.Basic.Example.tsx');
var ListGridExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/List/examples/List.Grid.Example.tsx');
var ListScrollingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/List/examples/List.Scrolling.Example.tsx');
var ListGhostingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/List/examples/List.Ghosting.Example.tsx');
exports.ListPageProps = {
    title: 'List',
    componentName: 'ListExample',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/List',
    examples: [
        {
            title: 'List of 5000 grid items',
            code: ListGridExampleCode,
            view: React.createElement(List_Grid_Example_1.ListGridExample, null),
        },
        {
            title: 'List of 5000 variable height items',
            code: ListBasicExampleCode,
            view: React.createElement(List_Basic_Example_1.ListBasicExample, null),
        },
        {
            title: 'Scrolling items into view',
            code: ListScrollingExampleCode,
            view: React.createElement(List_Scrolling_Example_1.ListScrollingExample, null),
        },
        {
            title: 'Rendering ghost items while the list is scrolling',
            code: ListGhostingExampleCode,
            view: React.createElement(List_Ghosting_Example_1.ListGhostingExample, null),
        },
    ],
    allowNativeProps: true,
    overview: require('!raw-loader!office-ui-fabric-react/src/components/List/docs/ListOverview.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=List.doc.js.map