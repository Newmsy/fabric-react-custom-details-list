"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ScrollablePane_Default_Example_1 = require("./examples/ScrollablePane.Default.Example");
var ScrollablePane_DetailsList_Example_1 = require("./examples/ScrollablePane.DetailsList.Example");
var ScrollablePaneDefaultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/examples/ScrollablePane.Default.Example.tsx');
var ScrollablePaneDetailsListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/examples/ScrollablePane.DetailsList.Example.tsx');
exports.ScrollablePanePageProps = {
    title: 'ScrollablePane',
    componentName: 'ScrollablePane',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ScrollablePane',
    examples: [
        {
            title: 'Default',
            code: ScrollablePaneDefaultExampleCode,
            view: React.createElement(ScrollablePane_Default_Example_1.ScrollablePaneDefaultExample, null),
            isScrollable: false,
        },
        {
            title: 'DetailsList Locked Header',
            code: ScrollablePaneDetailsListExampleCode,
            view: React.createElement(ScrollablePane_DetailsList_Example_1.ScrollablePaneDetailsListExample, null),
            isScrollable: false,
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/ScrollablePane/docs/ScrollablePaneDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
    nativePropsElement: ['a', 'button'],
};
//# sourceMappingURL=ScrollablePane.doc.js.map