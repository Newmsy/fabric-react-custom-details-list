"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SpinButton_Basic_Example_1 = require("./examples/SpinButton.Basic.Example");
var SpinButton_BasicDisabled_Example_1 = require("./examples/SpinButton.BasicDisabled.Example");
var SpinButton_Stateful_Example_1 = require("./examples/SpinButton.Stateful.Example");
var SpinButton_BasicWithIcon_Example_1 = require("./examples/SpinButton.BasicWithIcon.Example");
var SpinButton_BasicWithIconDisabled_Example_1 = require("./examples/SpinButton.BasicWithIconDisabled.Example");
var SpinButton_BasicWithEndPosition_Example_1 = require("./examples/SpinButton.BasicWithEndPosition.Example");
var SpinButton_CustomStyled_Example_1 = require("./examples/SpinButton.CustomStyled.Example");
var SpinButtonBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/examples/SpinButton.Basic.Example.tsx');
var SpinButtonBasicDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/examples/SpinButton.BasicDisabled.Example.tsx');
var SpinButtonStatefulExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/examples/SpinButton.Stateful.Example.tsx');
var SpinButtonBasicWithIconExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/examples/SpinButton.BasicWithIcon.Example.tsx');
var SpinButtonBasicWithIconDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/examples/SpinButton.BasicWithIconDisabled.Example.tsx');
var SpinButtonBasicWithEndPositionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/examples/SpinButton.BasicWithEndPosition.Example.tsx');
var SpinButtonCustomStyledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/examples/SpinButton.CustomStyled.Example.tsx');
exports.SpinButtonPageProps = {
    title: 'SpinButton',
    componentName: 'SpinButton',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/SpinButton',
    examples: [
        {
            title: 'Basic SpinButton',
            code: SpinButtonBasicExampleCode,
            view: React.createElement(SpinButton_Basic_Example_1.SpinButtonBasicExample, null),
        },
        {
            title: 'Basic Disabled SpinButton',
            code: SpinButtonBasicDisabledExampleCode,
            view: React.createElement(SpinButton_BasicDisabled_Example_1.SpinButtonBasicDisabledExample, null),
        },
        {
            title: 'Stateful SpinButton',
            code: SpinButtonStatefulExampleCode,
            view: React.createElement(SpinButton_Stateful_Example_1.SpinButtonStatefulExample, null),
        },
        {
            title: 'Basic SpinButton With Icon',
            code: SpinButtonBasicWithIconExampleCode,
            view: React.createElement(SpinButton_BasicWithIcon_Example_1.SpinButtonBasicWithIconExample, null),
        },
        {
            title: 'Basic SpinButton With Icon Disabled',
            code: SpinButtonBasicWithIconDisabledExampleCode,
            view: React.createElement(SpinButton_BasicWithIconDisabled_Example_1.SpinButtonBasicWithIconDisabledExample, null),
        },
        {
            title: 'Basic SpinButton With Icon and Positioned at the End',
            code: SpinButtonBasicWithEndPositionExampleCode,
            view: React.createElement(SpinButton_BasicWithEndPosition_Example_1.SpinButtonBasicWithEndPositionExample, null),
        },
        {
            title: 'Custom Styled SpinButton',
            code: SpinButtonCustomStyledExampleCode,
            view: React.createElement(SpinButton_CustomStyled_Example_1.SpinButtonCustomStyledExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/docs/SpinButtonOverview.md'),
    bestPractices: '',
    dos: require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/docs/SpinButtonDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/SpinButton/docs/SpinButtonDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
};
//# sourceMappingURL=SpinButton.doc.js.map