"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SearchBox_FullSize_Example_1 = require("./examples/SearchBox.FullSize.Example");
var SearchBox_Underlined_Example_1 = require("./examples/SearchBox.Underlined.Example");
var SearchBox_Disabled_Example_1 = require("./examples/SearchBox.Disabled.Example");
var SearchBox_CustomIcon_Example_1 = require("./examples/SearchBox.CustomIcon.Example");
var SearchBox_Small_Example_1 = require("./examples/SearchBox.Small.Example");
var SearchBoxFullSizeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/examples/SearchBox.FullSize.Example.tsx');
var SearchBoxUnderlinedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/examples/SearchBox.Underlined.Example.tsx');
var SearchBoxDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/examples/SearchBox.Disabled.Example.tsx');
var SearchBoxCustomIconExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/examples/SearchBox.CustomIcon.Example.tsx');
var SearchBoxSmallExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/examples/SearchBox.Small.Example.tsx');
exports.SearchBoxPageProps = {
    title: 'SearchBox',
    componentName: 'SearchBox',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/SearchBox',
    examples: [
        {
            title: 'Default SearchBox',
            code: SearchBoxFullSizeExampleCode,
            view: React.createElement(SearchBox_FullSize_Example_1.SearchBoxFullSizeExample, null),
        },
        {
            title: 'Underlined SearchBox',
            code: SearchBoxUnderlinedExampleCode,
            view: React.createElement(SearchBox_Underlined_Example_1.SearchBoxUnderlinedExample, null),
        },
        {
            title: 'Disabled SearchBoxes',
            code: SearchBoxDisabledExampleCode,
            view: React.createElement(SearchBox_Disabled_Example_1.SearchBoxDisabledExample, null),
        },
        {
            title: 'SearchBox with custom icon',
            code: SearchBoxCustomIconExampleCode,
            view: React.createElement(SearchBox_CustomIcon_Example_1.SearchBoxCustomIconExample, null),
        },
        {
            title: 'SearchBox with fixed width and custom event handling',
            code: SearchBoxSmallExampleCode,
            view: React.createElement(SearchBox_Small_Example_1.SearchBoxSmallExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/docs/SearchBoxOverview.md'),
    bestPractices: require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/docs/SearchBoxBestPractices.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/docs/SearchBoxDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/SearchBox/docs/SearchBoxDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=SearchBox.doc.js.map