"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DetailsList_Basic_Example_1 = require("./examples/DetailsList.Basic.Example");
var DetailsListBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.Basic.Example.tsx');
var DetailsList_Animation_Example_1 = require("./examples/DetailsList.Animation.Example");
var DetailsListAnimationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.Animation.Example.tsx');
var DetailsList_Compact_Example_1 = require("./examples/DetailsList.Compact.Example");
var DetailsListCompactExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.Compact.Example.tsx');
var DetailsList_CustomColumns_Example_1 = require("./examples/DetailsList.CustomColumns.Example");
var DetailsListCustomColumnsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.CustomColumns.Example.tsx');
var DetailsList_CustomRows_Example_1 = require("./examples/DetailsList.CustomRows.Example");
var DetailsListCustomRowsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.CustomRows.Example.tsx');
var DetailsList_CustomGroupHeaders_Example_1 = require("./examples/DetailsList.CustomGroupHeaders.Example");
var DetailsListCustomGroupHeadersExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.CustomGroupHeaders.Example.tsx');
var DetailsList_Advanced_Example_1 = require("./examples/DetailsList.Advanced.Example");
var DetailsListAdvancedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.Advanced.Example.tsx');
var DetailsList_Grouped_Example_1 = require("./examples/DetailsList.Grouped.Example");
var DetailsListGroupedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.Grouped.Example.tsx');
var DetailsList_Grouped_Large_Example_1 = require("./examples/DetailsList.Grouped.Large.Example");
var DetailsListGroupedLargeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.Grouped.Large.Example.tsx');
var DetailsList_DragDrop_Example_1 = require("./examples/DetailsList.DragDrop.Example");
var DetailsListDragDropExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.DragDrop.Example.tsx');
var DetailsList_Documents_Example_1 = require("./examples/DetailsList.Documents.Example");
var DetailsListDocumentsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.Documents.Example.tsx');
var DetailsList_NavigatingFocus_Example_1 = require("./examples/DetailsList.NavigatingFocus.Example");
var DetailsListNavigatingFocusExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.NavigatingFocus.Example.tsx');
var Shimmer_Application_Example_1 = require("../Shimmer/examples/Shimmer.Application.Example");
var DetailsListShimmerExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Shimmer/examples/Shimmer.Application.Example.tsx');
var DetailsList_CustomFooter_Example_1 = require("./examples/DetailsList.CustomFooter.Example");
var DetailsListCustomFooterExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.CustomFooter.Example.tsx');
exports.DetailsListPageProps = {
    title: 'DetailsList',
    componentName: 'DetailsList',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/DetailsList',
    examples: [
        {
            title: 'DetailsList with 500 documents, sorting, filtering, marquee selection, justified columns',
            code: DetailsListDocumentsExampleCode,
            view: React.createElement(DetailsList_Documents_Example_1.DetailsListDocumentsExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/docs/DetailsListOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/docs/DetailsListDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/DetailsList/docs/DetailsListDonts.md'),
    isHeaderVisible: true,
};
function generateProps(example) {
    return {
        title: example.title,
        componentName: 'DetailsList',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/DetailsList',
        examples: [example],
        isHeaderVisible: false,
        isFeedbackVisible: true,
    };
}
exports.DetailsListBasicPageProps = generateProps({
    title: 'Simple DetailsList with filtering and marquee selection',
    code: DetailsListBasicExampleCode,
    view: React.createElement(DetailsList_Basic_Example_1.DetailsListBasicExample, null),
});
exports.DetailsListAnimationPageProps = generateProps({
    title: 'DetailsList with Row animation when cell content changed',
    code: DetailsListAnimationExampleCode,
    view: React.createElement(DetailsList_Animation_Example_1.DetailsListAnimationExample, null),
});
exports.DetailsListCompactPageProps = generateProps({
    title: 'Compact DetailsList with filtering and marquee selection',
    code: DetailsListCompactExampleCode,
    view: React.createElement(DetailsList_Compact_Example_1.DetailsListCompactExample, null),
});
exports.DetailsListSimpleGroupedPageProps = generateProps({
    title: 'Simple grouped DetailsList',
    code: DetailsListGroupedExampleCode,
    view: React.createElement(DetailsList_Grouped_Example_1.DetailsListGroupedExample, null),
});
exports.DetailsListLargeGroupedPageProps = generateProps({
    title: 'Large grouped DetailsList',
    code: DetailsListGroupedLargeExampleCode,
    view: React.createElement(DetailsList_Grouped_Large_Example_1.DetailsListGroupedLargeExample, null),
});
exports.DetailsListCustomColumnsPageProps = generateProps({
    title: 'Rendering custom item columns with sorting',
    code: DetailsListCustomColumnsExampleCode,
    view: React.createElement(DetailsList_CustomColumns_Example_1.DetailsListCustomColumnsExample, null),
});
exports.DetailsListCustomRowsPageProps = generateProps({
    title: 'Rendering custom item rows',
    code: DetailsListCustomRowsExampleCode,
    view: React.createElement(DetailsList_CustomRows_Example_1.DetailsListCustomRowsExample, null),
});
exports.DetailsListCustomGroupHeadersPageProps = generateProps({
    title: 'Rendering custom group headers',
    code: DetailsListCustomGroupHeadersExampleCode,
    view: React.createElement(DetailsList_CustomGroupHeaders_Example_1.DetailsListCustomGroupHeadersExample, null),
});
exports.DetailsListAdvancedPageProps = generateProps({
    title: 'Advanced DetailsList of 5000 items with variable row heights',
    code: DetailsListAdvancedExampleCode,
    view: React.createElement(DetailsList_Advanced_Example_1.DetailsListAdvancedExample, null),
});
exports.DetailsListDragDropPageProps = generateProps({
    title: 'DetailsList supporting drag and drop',
    code: DetailsListDragDropExampleCode,
    view: React.createElement(DetailsList_DragDrop_Example_1.DetailsListDragDropExample, null),
});
exports.DetailsListNavigatingFocusPageProps = generateProps({
    title: 'Navigating to new content while preserving keyboard focus',
    code: DetailsListNavigatingFocusExampleCode,
    view: React.createElement(DetailsList_NavigatingFocus_Example_1.DetailsListNavigatingFocusExample, null),
});
exports.DetailsListShimmerPageProps = generateProps({
    title: 'Shimmered DetailsList - usually shown while retrieving data',
    code: DetailsListShimmerExampleCode,
    view: React.createElement(Shimmer_Application_Example_1.ShimmerApplicationExample, null),
});
exports.DetailsListCustomFooterPageProps = generateProps({
    title: 'Rendering custom DetailsList footer',
    code: DetailsListCustomFooterExampleCode,
    view: React.createElement(DetailsList_CustomFooter_Example_1.DetailsListCustomFooterExample, null),
});
//# sourceMappingURL=DetailsList.doc.js.map