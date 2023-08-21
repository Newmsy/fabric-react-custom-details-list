"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GroupedList_Basic_Example_1 = require("./examples/GroupedList.Basic.Example");
var GroupedList_Custom_Example_1 = require("./examples/GroupedList.Custom.Example");
var GroupedList_CustomCheckbox_Example_1 = require("./examples/GroupedList.CustomCheckbox.Example");
var GroupedListBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/GroupedList/examples/GroupedList.Basic.Example.tsx');
var GroupedListCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/GroupedList/examples/GroupedList.Custom.Example.tsx');
var GroupedListCustomCheckboxExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/GroupedList/examples/GroupedList.CustomCheckbox.Example.tsx');
exports.GroupedListPageProps = {
    title: 'GroupedList',
    componentName: 'GroupedList',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/GroupedList',
    examples: [
        {
            title: 'GroupedList basic example',
            code: GroupedListBasicExampleCode,
            view: React.createElement(GroupedList_Basic_Example_1.GroupedListBasicExample, null),
        },
        {
            title: 'GroupedList example with custom header and footer',
            code: GroupedListCustomExampleCode,
            view: React.createElement(GroupedList_Custom_Example_1.GroupedListCustomExample, null),
        },
        {
            title: 'GroupedList example with custom checkbox',
            code: GroupedListCustomCheckboxExampleCode,
            view: React.createElement(GroupedList_CustomCheckbox_Example_1.GroupedListCustomCheckboxExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/GroupedList/docs/GroupedListOverview.md'),
    bestPractices: '',
    dos: '',
    donts: '',
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=GroupedList.doc.js.map