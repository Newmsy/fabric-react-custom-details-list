"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_Default_Example_1 = require("./examples/Button.Default.Example");
var Button_ContextualMenu_Example_1 = require("./examples/Button.ContextualMenu.Example");
var Button_Compound_Example_1 = require("./examples/Button.Compound.Example");
var Button_Action_Example_1 = require("./examples/Button.Action.Example");
var Button_CommandBar_Example_1 = require("./examples/Button.CommandBar.Example");
var Button_Command_Example_1 = require("./examples/Button.Command.Example");
var Button_Icon_Example_1 = require("./examples/Button.Icon.Example");
var Button_IconWithTooltip_Example_1 = require("./examples/Button.IconWithTooltip.Example");
var Button_Anchor_Example_1 = require("./examples/Button.Anchor.Example");
var Button_ScreenReader_Example_1 = require("./examples/Button.ScreenReader.Example");
var Button_Split_Example_1 = require("./examples/Button.Split.Example");
var Button_CustomSplit_Example_1 = require("./examples/Button.CustomSplit.Example");
var Button_Toggle_Example_1 = require("./examples/Button.Toggle.Example");
var ButtonActionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Action.Example.tsx');
var ButtonAnchorExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Anchor.Example.tsx');
var ButtonCommandBarExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.CommandBar.Example.tsx');
var ButtonCompoundExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Compound.Example.tsx');
var ButtonContextualMenuExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.ContextualMenu.Example.tsx');
var ButtonCustomSplitExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.CustomSplit.Example.tsx');
var ButtonDefaultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Default.Example.tsx');
var ButtonIconExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Icon.Example.tsx');
var ButtonIconWithTooltipExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.IconWithTooltip.Example.tsx');
var ButtonScreenReaderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.ScreenReader.Example.tsx');
var ButtonSplitExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Split.Example.tsx');
var ButtonToggleExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Toggle.Example.tsx');
var ButtonCommandExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Command.Example.tsx');
/**
 * Exports a function because the documentation of this page requires some interactivity that is passed in here
 * as a prop.
 * @param props Props that are specific to generating page props for ButtonPage
 */
exports.ButtonPageProps = function (props) { return ({
    title: 'Button',
    componentName: 'ButtonExample',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Button',
    examples: [
        {
            title: 'Default Button',
            code: ButtonDefaultExampleCode,
            view: React.createElement(Button_Default_Example_1.ButtonDefaultExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Compound Button',
            code: ButtonCompoundExampleCode,
            view: React.createElement(Button_Compound_Example_1.ButtonCompoundExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Command Bar Button',
            code: ButtonCommandBarExampleCode,
            view: React.createElement(Button_CommandBar_Example_1.ButtonCommandBarExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Split Button',
            code: ButtonSplitExampleCode,
            view: React.createElement(Button_Split_Example_1.ButtonSplitExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Icon Button',
            code: ButtonIconExampleCode,
            view: React.createElement(Button_Icon_Example_1.ButtonIconExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Icon Button with Tooltip',
            code: ButtonIconWithTooltipExampleCode,
            view: React.createElement(Button_IconWithTooltip_Example_1.ButtonIconWithTooltipExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Contextual Menu Button',
            code: ButtonContextualMenuExampleCode,
            view: React.createElement(Button_ContextualMenu_Example_1.ButtonContextualMenuExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Action Button',
            code: ButtonActionExampleCode,
            view: React.createElement(Button_Action_Example_1.ButtonActionExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Command Button',
            code: ButtonCommandExampleCode,
            view: React.createElement(Button_Command_Example_1.ButtonCommandExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Button-like Anchor',
            code: ButtonAnchorExampleCode,
            view: React.createElement(Button_Anchor_Example_1.ButtonAnchorExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Button with Aria Description for Screen Reader',
            code: ButtonScreenReaderExampleCode,
            view: React.createElement(Button_ScreenReader_Example_1.ButtonScreenReaderExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Custom Split Button',
            code: ButtonCustomSplitExampleCode,
            view: React.createElement(Button_CustomSplit_Example_1.ButtonSplitCustomExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Toggle Button',
            code: ButtonToggleExampleCode,
            view: React.createElement(Button_Toggle_Example_1.ButtonToggleExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
    ],
    allowNativeProps: true,
    nativePropsElement: ['a', 'button'],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/Button/docs/ButtonOverview.md'),
    dos: require('!raw-loader!office-ui-fabric-react/src/components/Button/docs/ButtonDos.md'),
    donts: require('!raw-loader!office-ui-fabric-react/src/components/Button/docs/ButtonDonts.md'),
    isHeaderVisible: true,
    isFeedbackVisible: true,
}); };
//# sourceMappingURL=Button.doc.js.map