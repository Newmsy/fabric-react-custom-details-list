define(["require", "exports", "react", "./examples/ResizeGroup.OverflowSet.Example", "./examples/ResizeGroup.FlexBox.Example", "./examples/ResizeGroup.VerticalOverflowSet.Example"], function (require, exports, React, ResizeGroup_OverflowSet_Example_1, ResizeGroup_FlexBox_Example_1, ResizeGroup_VerticalOverflowSet_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResizeGroupBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.OverflowSet.Example.tsx');
    var ResizeGroupVerticalExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.VerticalOverflowSet.Example.tsx');
    var ResizeGroupFlexBoxExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/examples/ResizeGroup.FlexBox.Example.tsx');
    exports.ResizeGroupPageProps = {
        title: 'ResizeGroup',
        componentName: 'ResizeGroup',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/ResizeGroup',
        examples: [
            {
                title: 'Use ResizeGroup to move commands into an overflow menu',
                code: ResizeGroupBasicExampleCode,
                view: React.createElement(ResizeGroup_OverflowSet_Example_1.ResizeGroupOverflowSetExample, null),
            },
            {
                title: 'Use a vertical ResizeGroup to move commands into an overflow menu',
                code: ResizeGroupVerticalExampleCode,
                view: React.createElement(ResizeGroup_VerticalOverflowSet_Example_1.ResizeGroupVerticalOverflowSetExample, null),
                isScrollable: false,
            },
            {
                title: 'Use ResizeGroup to prevent two groups of items from overlapping',
                code: ResizeGroupFlexBoxExampleCode,
                view: React.createElement(ResizeGroup_FlexBox_Example_1.FlexBoxResizeGroupExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/docs/ResizeGroupOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/docs/ResizeGroupDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/ResizeGroup/docs/ResizeGroupDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
    };
});
//# sourceMappingURL=ResizeGroup.doc.js.map