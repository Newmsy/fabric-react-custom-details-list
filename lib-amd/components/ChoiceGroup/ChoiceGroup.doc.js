define(["require", "exports", "react", "./examples/ChoiceGroup.Basic.Example", "./examples/ChoiceGroup.Controlled.Example", "./examples/ChoiceGroup.Label.Example", "./examples/ChoiceGroup.Custom.Example", "./examples/ChoiceGroup.Image.Example", "./examples/ChoiceGroup.Icon.Example"], function (require, exports, React, ChoiceGroup_Basic_Example_1, ChoiceGroup_Controlled_Example_1, ChoiceGroup_Label_Example_1, ChoiceGroup_Custom_Example_1, ChoiceGroup_Image_Example_1, ChoiceGroup_Icon_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChoiceGroupBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/examples/ChoiceGroup.Basic.Example.tsx');
    var ChoiceGroupControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/examples/ChoiceGroup.Controlled.Example.tsx');
    var ChoiceGroupLabelExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/examples/ChoiceGroup.Label.Example.tsx');
    var ChoiceGroupCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/examples/ChoiceGroup.Custom.Example.tsx');
    var ChoiceGroupImageExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/examples/ChoiceGroup.Image.Example.tsx');
    var ChoiceGroupIconExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/examples/ChoiceGroup.Icon.Example.tsx');
    exports.ChoiceGroupPageProps = {
        title: 'ChoiceGroup',
        componentName: 'ChoiceGroup',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ChoiceGroup',
        examples: [
            {
                title: 'Basic ChoiceGroup',
                code: ChoiceGroupBasicExampleCode,
                view: React.createElement(ChoiceGroup_Basic_Example_1.ChoiceGroupBasicExample, null),
            },
            {
                title: 'Controlled ChoiceGroup',
                code: ChoiceGroupControlledExampleCode,
                view: React.createElement(ChoiceGroup_Controlled_Example_1.ChoiceGroupControlledExample, null),
            },
            {
                title: 'ChoiceGroup with images',
                code: ChoiceGroupImageExampleCode,
                view: React.createElement(ChoiceGroup_Image_Example_1.ChoiceGroupImageExample, null),
            },
            {
                title: 'ChoiceGroup with icons',
                code: ChoiceGroupIconExampleCode,
                view: React.createElement(ChoiceGroup_Icon_Example_1.ChoiceGroupIconExample, null),
            },
            {
                title: 'ChoiceGroup with a custom label',
                code: ChoiceGroupLabelExampleCode,
                view: React.createElement(ChoiceGroup_Label_Example_1.ChoiceGroupLabelExample, null),
            },
            {
                title: 'ChoiceGroup with custom option rendering',
                code: ChoiceGroupCustomExampleCode,
                view: React.createElement(ChoiceGroup_Custom_Example_1.ChoiceGroupCustomExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/docs/ChoiceGroupOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/docs/ChoiceGroupDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/ChoiceGroup/docs/ChoiceGroupDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
        nativePropsElement: 'input',
    };
});
//# sourceMappingURL=ChoiceGroup.doc.js.map