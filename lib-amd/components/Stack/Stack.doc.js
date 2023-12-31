define(["require", "exports", "react", "./examples/Stack.Vertical.Basic.Example", "./examples/Stack.Vertical.Reversed.Example", "./examples/Stack.Vertical.Spacing.Example", "./examples/Stack.Vertical.Grow.Example", "./examples/Stack.Vertical.Shrink.Example", "./examples/Stack.Vertical.Wrap.Example", "./examples/Stack.Vertical.WrapAdvanced.Example", "./examples/Stack.Vertical.WrapNested.Example", "./examples/Stack.Vertical.VerticalAlign.Example", "./examples/Stack.Vertical.HorizontalAlign.Example", "./examples/Stack.Vertical.Configure.Example", "./examples/Stack.Horizontal.Basic.Example", "./examples/Stack.Horizontal.Reversed.Example", "./examples/Stack.Horizontal.Spacing.Example", "./examples/Stack.Horizontal.Grow.Example", "./examples/Stack.Horizontal.Shrink.Example", "./examples/Stack.Horizontal.Wrap.Example", "./examples/Stack.Horizontal.WrapAdvanced.Example", "./examples/Stack.Horizontal.WrapNested.Example", "./examples/Stack.Horizontal.HorizontalAlign.Example", "./examples/Stack.Horizontal.VerticalAlign.Example", "./examples/Stack.Horizontal.Configure.Example"], function (require, exports, React, Stack_Vertical_Basic_Example_1, Stack_Vertical_Reversed_Example_1, Stack_Vertical_Spacing_Example_1, Stack_Vertical_Grow_Example_1, Stack_Vertical_Shrink_Example_1, Stack_Vertical_Wrap_Example_1, Stack_Vertical_WrapAdvanced_Example_1, Stack_Vertical_WrapNested_Example_1, Stack_Vertical_VerticalAlign_Example_1, Stack_Vertical_HorizontalAlign_Example_1, Stack_Vertical_Configure_Example_1, Stack_Horizontal_Basic_Example_1, Stack_Horizontal_Reversed_Example_1, Stack_Horizontal_Spacing_Example_1, Stack_Horizontal_Grow_Example_1, Stack_Horizontal_Shrink_Example_1, Stack_Horizontal_Wrap_Example_1, Stack_Horizontal_WrapAdvanced_Example_1, Stack_Horizontal_WrapNested_Example_1, Stack_Horizontal_HorizontalAlign_Example_1, Stack_Horizontal_VerticalAlign_Example_1, Stack_Horizontal_Configure_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VerticalStackBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Basic.Example.tsx');
    var VerticalStackReversedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Reversed.Example.tsx');
    var VerticalStackSpacingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Spacing.Example.tsx');
    var VerticalStackGrowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Grow.Example.tsx');
    var VerticalStackShrinkExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Shrink.Example.tsx');
    var VerticalStackWrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Wrap.Example.tsx');
    var VerticalStackWrapAdvancedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.WrapAdvanced.Example.tsx');
    var VerticalStackWrapNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.WrapNested.Example.tsx');
    var VerticalStackVerticalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.VerticalAlign.Example.tsx');
    var VerticalStackHorizontalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.HorizontalAlign.Example.tsx');
    var VerticalStackConfigureExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Configure.Example.tsx');
    var HorizontalStackBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Basic.Example.tsx');
    var HorizontalStackReversedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Reversed.Example.tsx');
    var HorizontalStackSpacingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Spacing.Example.tsx');
    var HorizontalStackGrowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Grow.Example.tsx');
    var HorizontalStackShrinkExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Shrink.Example.tsx');
    var HorizontalStackWrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Wrap.Example.tsx');
    var HorizontalStackWrapAdvancedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.WrapAdvanced.Example.tsx');
    var HorizontalStackWrapNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.WrapNested.Example.tsx');
    var HorizontalStackHorizontalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.HorizontalAlign.Example.tsx');
    var HorizontalStackVerticalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.VerticalAlign.Example.tsx');
    var HorizontalStackConfigureExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Configure.Example.tsx');
    exports.StackPageProps = {
        title: 'Stack',
        componentName: 'Stack',
        componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Stack',
        examples: [
            {
                title: 'Basic Vertical Stack',
                code: VerticalStackBasicExampleCode,
                view: React.createElement(Stack_Vertical_Basic_Example_1.VerticalStackBasicExample, null),
            },
            {
                title: 'Reversed Basic Vertical Stack',
                code: VerticalStackReversedExampleCode,
                view: React.createElement(Stack_Vertical_Reversed_Example_1.VerticalStackReversedExample, null),
            },
            {
                title: 'Vertical Stack - Gap and Padding Sizes',
                code: VerticalStackSpacingExampleCode,
                view: React.createElement(Stack_Vertical_Spacing_Example_1.VerticalStackSpacingExample, null),
            },
            {
                title: 'Vertical Stack - Growing Items',
                code: VerticalStackGrowExampleCode,
                view: React.createElement(Stack_Vertical_Grow_Example_1.VerticalStackGrowExample, null),
            },
            {
                title: 'Vertical Stack - Shrinking Items',
                code: VerticalStackShrinkExampleCode,
                view: React.createElement(Stack_Vertical_Shrink_Example_1.VerticalStackShrinkExample, null),
            },
            {
                title: 'Vertical Stack - Wrapping - Basic',
                code: VerticalStackWrapExampleCode,
                view: React.createElement(Stack_Vertical_Wrap_Example_1.VerticalStackWrapExample, null),
            },
            {
                title: 'Vertical Stack - Wrapping - Advanced',
                code: VerticalStackWrapAdvancedExampleCode,
                view: React.createElement(Stack_Vertical_WrapAdvanced_Example_1.VerticalStackWrapAdvancedExample, null),
            },
            {
                title: 'Vertical Stack - Wrapping - Nested',
                code: VerticalStackWrapNestedExampleCode,
                view: React.createElement(Stack_Vertical_WrapNested_Example_1.VerticalStackWrapNestedExample, null),
            },
            {
                title: 'Vertical Stack - Vertical Alignments',
                code: VerticalStackVerticalAlignExampleCode,
                view: React.createElement(Stack_Vertical_VerticalAlign_Example_1.VerticalStackVerticalAlignExample, null),
            },
            {
                title: 'Vertical Stack - Horizontal Alignments',
                code: VerticalStackHorizontalAlignExampleCode,
                view: React.createElement(Stack_Vertical_HorizontalAlign_Example_1.VerticalStackHorizontalAlignExample, null),
            },
            {
                title: 'Vertical Stack - Configure Properties',
                code: VerticalStackConfigureExampleCode,
                view: React.createElement(Stack_Vertical_Configure_Example_1.VerticalStackConfigureExample, null),
            },
            {
                title: 'Basic Horizontal Stack',
                code: HorizontalStackBasicExampleCode,
                view: React.createElement(Stack_Horizontal_Basic_Example_1.HorizontalStackBasicExample, null),
            },
            {
                title: 'Reversed Basic Horizontal Stack',
                code: HorizontalStackReversedExampleCode,
                view: React.createElement(Stack_Horizontal_Reversed_Example_1.HorizontalStackReversedExample, null),
            },
            {
                title: 'Horizontal Stack - Gap and Padding Sizes',
                code: HorizontalStackSpacingExampleCode,
                view: React.createElement(Stack_Horizontal_Spacing_Example_1.HorizontalStackSpacingExample, null),
            },
            {
                title: 'Horizontal Stack - Growing Items',
                code: HorizontalStackGrowExampleCode,
                view: React.createElement(Stack_Horizontal_Grow_Example_1.HorizontalStackGrowExample, null),
            },
            {
                title: 'Horizontal Stack - Shrinking Items',
                code: HorizontalStackShrinkExampleCode,
                view: React.createElement(Stack_Horizontal_Shrink_Example_1.HorizontalStackShrinkExample, null),
            },
            {
                title: 'Horizontal Stack - Wrapping - Basic',
                code: HorizontalStackWrapExampleCode,
                view: React.createElement(Stack_Horizontal_Wrap_Example_1.HorizontalStackWrapExample, null),
            },
            {
                title: 'Horizontal Stack - Wrapping - Advanced',
                code: HorizontalStackWrapAdvancedExampleCode,
                view: React.createElement(Stack_Horizontal_WrapAdvanced_Example_1.HorizontalStackWrapAdvancedExample, null),
            },
            {
                title: 'Horizontal Stack - Wrapping - Nested',
                code: HorizontalStackWrapNestedExampleCode,
                view: React.createElement(Stack_Horizontal_WrapNested_Example_1.HorizontalStackWrapNestedExample, null),
            },
            {
                title: 'Horizontal Stack - Horizontal Alignments',
                code: HorizontalStackHorizontalAlignExampleCode,
                view: React.createElement(Stack_Horizontal_HorizontalAlign_Example_1.HorizontalStackHorizontalAlignExample, null),
            },
            {
                title: 'Horizontal Stack - Vertical Alignments',
                code: HorizontalStackVerticalAlignExampleCode,
                view: React.createElement(Stack_Horizontal_VerticalAlign_Example_1.HorizontalStackVerticalAlignExample, null),
            },
            {
                title: 'Horizontal Stack - Configure Properties',
                code: HorizontalStackConfigureExampleCode,
                view: React.createElement(Stack_Horizontal_Configure_Example_1.HorizontalStackConfigureExample, null),
            },
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/Stack/docs/StackOverview.md'),
        bestPractices: '',
        dos: require('!raw-loader!office-ui-fabric-react/src/components/Stack/docs/StackDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/Stack/docs/StackDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true,
        allowNativeProps: true,
    };
});
//# sourceMappingURL=Stack.doc.js.map