"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Announced_SearchResults_Example_1 = require("./examples/Announced.SearchResults.Example");
var AnnouncedSearchResultsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Announced/examples/Announced.SearchResults.Example.tsx');
var Announced_LazyLoading_Example_1 = require("./examples/Announced.LazyLoading.Example");
var AnnouncedLazyLoadingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Announced/examples/Announced.LazyLoading.Example.tsx');
var Announced_BulkOperations_Example_1 = require("./examples/Announced.BulkOperations.Example");
var AnnouncedBulkOperationsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Announced/examples/Announced.BulkOperations.Example.tsx');
var Announced_QuickActions_Example_1 = require("./examples/Announced.QuickActions.Example");
var AnnouncedQuickActionsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Announced/examples/Announced.QuickActions.Example.tsx');
exports.AnnouncedPageProps = {
    title: 'Use Cases',
    componentName: 'Announced',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/experiments/src/components/Announced',
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/AnnouncedOverview.md'),
    isHeaderVisible: false,
};
exports.AnnouncedQuickActionsPageProps = {
    title: 'Quick Actions',
    componentName: 'Quick Actions',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Announced',
    examples: [
        {
            title: 'Quick actions',
            code: AnnouncedQuickActionsExampleCode,
            view: React.createElement(Announced_QuickActions_Example_1.AnnouncedQuickActionsExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/QuickActions/Overview.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/QuickActions/Dos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/QuickActions/Donts.md'),
    isHeaderVisible: false,
};
exports.AnnouncedSearchResultsPageProps = {
    title: 'Search Results',
    componentName: 'Search Results',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Announced',
    examples: [
        {
            title: 'Search results',
            code: AnnouncedSearchResultsExampleCode,
            view: React.createElement(Announced_SearchResults_Example_1.AnnouncedSearchResultsExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/SearchResults/Overview.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/SearchResults/Dos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/SearchResults/Donts.md'),
    isHeaderVisible: false,
};
exports.AnnouncedLazyLoadingPageProps = {
    title: 'Asynchronous',
    componentName: 'Asynchronous',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Announced',
    examples: [
        {
            title: 'Asynchronous',
            code: AnnouncedLazyLoadingExampleCode,
            view: React.createElement(Announced_LazyLoading_Example_1.AnnouncedLazyLoadingExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/Asynchronous/Overview.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/Asynchronous/Dos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/Asynchronous/Donts.md'),
    isHeaderVisible: false,
};
exports.AnnouncedBulkOperationsPageProps = {
    title: 'Bulk Long Running',
    componentName: 'Bulk Long Running',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Announced',
    examples: [
        {
            title: 'Bulk long running',
            code: AnnouncedBulkOperationsExampleCode,
            view: React.createElement(Announced_BulkOperations_Example_1.AnnouncedBulkOperationsExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/BulkLongRunning/Overview.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/BulkLongRunning/Dos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Announced/docs/BulkLongRunning/Donts.md'),
    isHeaderVisible: false,
};
//# sourceMappingURL=Announced.doc.js.map