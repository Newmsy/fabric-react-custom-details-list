define(["require", "exports", "react", "./examples/Pivot.Basic.Example", "./examples/Pivot.IconCount.Example", "./examples/Pivot.Large.Example", "./examples/Pivot.Tabs.Example", "./examples/Pivot.TabsLarge.Example", "./examples/Pivot.OnChange.Example", "./examples/Pivot.Remove.Example", "./examples/Pivot.Override.Example", "./examples/Pivot.Separate.Example"], function (require, exports, React, Pivot_Basic_Example_1, Pivot_IconCount_Example_1, Pivot_Large_Example_1, Pivot_Tabs_Example_1, Pivot_TabsLarge_Example_1, Pivot_OnChange_Example_1, Pivot_Remove_Example_1, Pivot_Override_Example_1, Pivot_Separate_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotRemoveExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Remove.Example.tsx');
    var PivotBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Basic.Example.tsx');
    var PivotLargeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Large.Example.tsx');
    var PivotTabsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Tabs.Example.tsx');
    var PivotTabsLargeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.TabsLarge.Example.tsx');
    var PivotOnChangeExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.OnChange.Example.tsx');
    var PivotIconCountExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.IconCount.Example.tsx');
    var PivotOverrideExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Override.Example.tsx');
    var PivotSeparateExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Pivot/examples/Pivot.Separate.Example.tsx');
    exports.PivotPageProps = {
        title: 'Pivot',
        componentName: 'Pivot',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Pivot',
        examples: [
            {
                title: 'Default Pivot',
                code: PivotBasicExampleCode,
                view: React.createElement(Pivot_Basic_Example_1.PivotBasicExample, null),
            },
            {
                title: 'Count and Icon',
                code: PivotIconCountExampleCode,
                view: React.createElement(Pivot_IconCount_Example_1.PivotIconCountExample, null),
            },
            {
                title: 'Large link size',
                code: PivotLargeExampleCode,
                view: React.createElement(Pivot_Large_Example_1.PivotLargeExample, null),
            },
            {
                title: 'Links of tab style',
                code: PivotTabsExampleCode,
                view: React.createElement(Pivot_Tabs_Example_1.PivotTabsExample, null),
            },
            {
                title: 'Links of large tab style',
                code: PivotTabsLargeExampleCode,
                view: React.createElement(Pivot_TabsLarge_Example_1.PivotTabsLargeExample, null),
            },
            {
                title: 'Trigger onchange event',
                code: PivotOnChangeExampleCode,
                view: React.createElement(Pivot_OnChange_Example_1.PivotOnChangeExample, null),
            },
            {
                title: 'Show/Hide pivot item',
                code: PivotRemoveExampleCode,
                view: React.createElement(Pivot_Remove_Example_1.PivotRemoveExample, null),
            },
            {
                title: 'Override selected item',
                code: PivotOverrideExampleCode,
                view: React.createElement(Pivot_Override_Example_1.PivotOverrideExample, null),
            },
            {
                title: 'Render content separately',
                code: PivotSeparateExampleCode,
                view: React.createElement(Pivot_Separate_Example_1.PivotSeparateExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Pivot/docs/PivotOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Pivot/docs/PivotDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Pivot/docs/PivotDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativePropsForComponentName: 'PivotItem',
        allowNativeProps: true,
    };
});
//# sourceMappingURL=Pivot.doc.js.map