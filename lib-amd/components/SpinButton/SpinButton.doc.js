define(["require", "exports", "react", "./examples/SpinButton.Basic.Example", "./examples/SpinButton.BasicDisabled.Example", "./examples/SpinButton.Stateful.Example", "./examples/SpinButton.BasicWithIcon.Example", "./examples/SpinButton.BasicWithIconDisabled.Example", "./examples/SpinButton.BasicWithEndPosition.Example", "./examples/SpinButton.CustomStyled.Example"], function (require, exports, React, SpinButton_Basic_Example_1, SpinButton_BasicDisabled_Example_1, SpinButton_Stateful_Example_1, SpinButton_BasicWithIcon_Example_1, SpinButton_BasicWithIconDisabled_Example_1, SpinButton_BasicWithEndPosition_Example_1, SpinButton_CustomStyled_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=SpinButton.doc.js.map