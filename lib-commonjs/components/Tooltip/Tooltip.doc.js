"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Tooltip_Custom_Example_1 = require("./examples/Tooltip.Custom.Example");
var Tooltip_Basic_Example_1 = require("./examples/Tooltip.Basic.Example");
var Tooltip_Display_Example_1 = require("./examples/Tooltip.Display.Example");
var Tooltip_Interactive_Example_1 = require("./examples/Tooltip.Interactive.Example");
var Tooltip_Overflow_Example_1 = require("./examples/Tooltip.Overflow.Example");
var Tooltip_AbsolutePosition_Example_1 = require("./examples/Tooltip.AbsolutePosition.Example");
var TooltipBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Basic.Example.tsx');
var TooltipDisplayExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Display.Example.tsx');
var TooltipCustomExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Custom.Example.tsx');
var TooltipInteractiveExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Interactive.Example.tsx');
var TooltipOverflowExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.Overflow.Example.tsx');
var TooltipAbsolutePositionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/examples/Tooltip.AbsolutePosition.Example.tsx');
exports.TooltipPageProps = {
    title: 'Tooltip',
    componentName: 'Tooltip',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Tooltip',
    examples: [
        {
            title: 'Default Tooltip',
            code: TooltipBasicExampleCode,
            view: React.createElement(Tooltip_Basic_Example_1.TooltipBasicExample, null),
        },
        {
            title: 'Tooltip wrapping inline or inline-block elements',
            code: TooltipDisplayExampleCode,
            view: React.createElement(Tooltip_Display_Example_1.TooltipDisplayExample, null),
        },
        {
            title: 'Tooltip with custom content',
            code: TooltipCustomExampleCode,
            view: React.createElement(Tooltip_Custom_Example_1.TooltipCustomExample, null),
        },
        {
            title: 'Tooltip with a closing delay',
            code: TooltipInteractiveExampleCode,
            view: React.createElement(Tooltip_Interactive_Example_1.TooltipInteractiveExample, null),
        },
        {
            title: 'Tooltip only on overflow',
            code: TooltipOverflowExampleCode,
            view: React.createElement(Tooltip_Overflow_Example_1.TooltipOverflowExample, null),
        },
        {
            title: 'Tooltip on absolutely-positioned element',
            code: TooltipAbsolutePositionExampleCode,
            view: React.createElement(Tooltip_AbsolutePosition_Example_1.TooltipAbsolutePositionExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Tooltip/docs/TooltipOverview.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
};
//# sourceMappingURL=Tooltip.doc.js.map