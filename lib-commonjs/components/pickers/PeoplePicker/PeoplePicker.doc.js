"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PeoplePicker_Normal_Example_1 = require("./examples/PeoplePicker.Normal.Example");
var PeoplePicker_Compact_Example_1 = require("./examples/PeoplePicker.Compact.Example");
var PeoplePicker_List_Example_1 = require("./examples/PeoplePicker.List.Example");
var PeoplePicker_PreselectedItems_Example_1 = require("./examples/PeoplePicker.PreselectedItems.Example");
var PeoplePicker_LimitedSearch_Example_1 = require("./examples/PeoplePicker.LimitedSearch.Example");
var PeoplePicker_ProcessSelection_Example_1 = require("./examples/PeoplePicker.ProcessSelection.Example");
var PeoplePicker_Controlled_Example_1 = require("./examples/PeoplePicker.Controlled.Example");
var PeoplePickerNormalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.Normal.Example.tsx');
var PeoplePickerCompactExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.Compact.Example.tsx');
var PeoplePickerListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.List.Example.tsx');
var PeoplePickerPreselectedItemsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.PreselectedItems.Example.tsx');
var PeoplePickerLimitedSearchExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.LimitedSearch.Example.tsx');
var PeoplePickerProcessSelectionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.ProcessSelection.Example.tsx');
var PeoplePickerControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/examples/PeoplePicker.Controlled.Example.tsx');
exports.PeoplePickerPageProps = {
    title: 'PeoplePicker',
    componentName: 'PeoplePicker',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/PeoplePicker',
    examples: [
        {
            title: 'Normal People Picker',
            code: PeoplePickerNormalExampleCode,
            view: React.createElement(PeoplePicker_Normal_Example_1.PeoplePickerNormalExample, null),
        },
        {
            title: 'Compact People Picker',
            code: PeoplePickerCompactExampleCode,
            view: React.createElement(PeoplePicker_Compact_Example_1.PeoplePickerCompactExample, null),
        },
        {
            title: 'List People Picker',
            code: PeoplePickerListExampleCode,
            view: React.createElement(PeoplePicker_List_Example_1.PeoplePickerListExample, null),
        },
        {
            title: 'People Picker with Preselected Items',
            code: PeoplePickerPreselectedItemsExampleCode,
            view: React.createElement(PeoplePicker_PreselectedItems_Example_1.PeoplePickerPreselectedItemsExample, null),
        },
        {
            title: 'People Picker with Limited Search',
            code: PeoplePickerLimitedSearchExampleCode,
            view: React.createElement(PeoplePicker_LimitedSearch_Example_1.PeoplePickerLimitedSearchExample, null),
        },
        {
            title: 'People Picker with Processed Selection',
            code: PeoplePickerProcessSelectionExampleCode,
            view: React.createElement(PeoplePicker_ProcessSelection_Example_1.PeoplePickerProcessSelectionExample, null),
        },
        {
            title: 'Controlled People Picker',
            code: PeoplePickerControlledExampleCode,
            view: React.createElement(PeoplePicker_Controlled_Example_1.PeoplePickerControlledExample, null),
        },
    ],
    propertiesTablesSources: [
        require('!raw-loader!office-ui-fabric-react/src/components/pickers/BasePicker.types.ts'),
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerOverview.md'),
    bestPractices: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerBestPractices.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/pickers/PeoplePicker/docs/PeoplePickerDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=PeoplePicker.doc.js.map