"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SelectedPeopleList_Basic_Example_1 = require("../examples/SelectedPeopleList.Basic.Example");
var SelectedPeopleList_Controlled_Example_1 = require("../examples/SelectedPeopleList.Controlled.Example");
var SelectedPeopleListBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SelectedItemsList/examples/SelectedPeopleList.Basic.Example.tsx');
var SelectedPeopleListControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SelectedItemsList/examples/SelectedPeopleList.Controlled.Example.tsx');
exports.SelectedPeopleListPageProps = {
    title: 'SelectedPeopleList',
    componentName: 'SelectedPeopleList',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/SelectedPeopleList',
    examples: [
        {
            title: 'Selected People List (uncontrolled)',
            code: SelectedPeopleListBasicExampleCode,
            view: React.createElement(SelectedPeopleList_Basic_Example_1.SelectedPeopleListBasicExample, null),
        },
        {
            title: 'Selected People List (controlled)',
            code: SelectedPeopleListControlledExampleCode,
            view: React.createElement(SelectedPeopleList_Controlled_Example_1.SelectedPeopleListControlledExample, null),
        },
    ],
    propertiesTablesSources: [
        require('!raw-loader!office-ui-fabric-react/src/components/SelectedItemsList/BaseSelectedItemsList.types.ts'),
    ],
    overview: '',
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/SelectedItemsList/docs/SelectedPeopleListDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/SelectedItemsList/docs/SelectedPeopleListDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=SelectedPeopleList.doc.js.map