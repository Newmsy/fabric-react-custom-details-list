"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// Vertical Stack Examples
var Stack_Vertical_Basic_Example_1 = require("./examples/Stack.Vertical.Basic.Example");
var VerticalStackBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Basic.Example.tsx');
var Stack_Vertical_Reversed_Example_1 = require("./examples/Stack.Vertical.Reversed.Example");
var VerticalStackReversedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Reversed.Example.tsx');
var Stack_Vertical_Spacing_Example_1 = require("./examples/Stack.Vertical.Spacing.Example");
var VerticalStackSpacingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Spacing.Example.tsx');
var Stack_Vertical_Grow_Example_1 = require("./examples/Stack.Vertical.Grow.Example");
var VerticalStackGrowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Grow.Example.tsx');
var Stack_Vertical_Shrink_Example_1 = require("./examples/Stack.Vertical.Shrink.Example");
var VerticalStackShrinkExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Shrink.Example.tsx');
var Stack_Vertical_Wrap_Example_1 = require("./examples/Stack.Vertical.Wrap.Example");
var VerticalStackWrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Wrap.Example.tsx');
var Stack_Vertical_WrapAdvanced_Example_1 = require("./examples/Stack.Vertical.WrapAdvanced.Example");
var VerticalStackWrapAdvancedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.WrapAdvanced.Example.tsx');
var Stack_Vertical_WrapNested_Example_1 = require("./examples/Stack.Vertical.WrapNested.Example");
var VerticalStackWrapNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.WrapNested.Example.tsx');
var Stack_Vertical_VerticalAlign_Example_1 = require("./examples/Stack.Vertical.VerticalAlign.Example");
var VerticalStackVerticalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.VerticalAlign.Example.tsx');
var Stack_Vertical_HorizontalAlign_Example_1 = require("./examples/Stack.Vertical.HorizontalAlign.Example");
var VerticalStackHorizontalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.HorizontalAlign.Example.tsx');
var Stack_Vertical_Configure_Example_1 = require("./examples/Stack.Vertical.Configure.Example");
var VerticalStackConfigureExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Vertical.Configure.Example.tsx');
// Horizontal Stack Examples
var Stack_Horizontal_Basic_Example_1 = require("./examples/Stack.Horizontal.Basic.Example");
var HorizontalStackBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Basic.Example.tsx');
var Stack_Horizontal_Reversed_Example_1 = require("./examples/Stack.Horizontal.Reversed.Example");
var HorizontalStackReversedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Reversed.Example.tsx');
var Stack_Horizontal_Spacing_Example_1 = require("./examples/Stack.Horizontal.Spacing.Example");
var HorizontalStackSpacingExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Spacing.Example.tsx');
var Stack_Horizontal_Grow_Example_1 = require("./examples/Stack.Horizontal.Grow.Example");
var HorizontalStackGrowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Grow.Example.tsx');
var Stack_Horizontal_Shrink_Example_1 = require("./examples/Stack.Horizontal.Shrink.Example");
var HorizontalStackShrinkExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Shrink.Example.tsx');
var Stack_Horizontal_Wrap_Example_1 = require("./examples/Stack.Horizontal.Wrap.Example");
var HorizontalStackWrapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.Wrap.Example.tsx');
var Stack_Horizontal_WrapAdvanced_Example_1 = require("./examples/Stack.Horizontal.WrapAdvanced.Example");
var HorizontalStackWrapAdvancedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.WrapAdvanced.Example.tsx');
var Stack_Horizontal_WrapNested_Example_1 = require("./examples/Stack.Horizontal.WrapNested.Example");
var HorizontalStackWrapNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.WrapNested.Example.tsx');
var Stack_Horizontal_HorizontalAlign_Example_1 = require("./examples/Stack.Horizontal.HorizontalAlign.Example");
var HorizontalStackHorizontalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.HorizontalAlign.Example.tsx');
var Stack_Horizontal_VerticalAlign_Example_1 = require("./examples/Stack.Horizontal.VerticalAlign.Example");
var HorizontalStackVerticalAlignExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Stack/examples/Stack.Horizontal.VerticalAlign.Example.tsx');
var Stack_Horizontal_Configure_Example_1 = require("./examples/Stack.Horizontal.Configure.Example");
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
//# sourceMappingURL=Stack.doc.js.map