import * as React from 'react';
import { ButtonDefaultExample } from './examples/Button.Default.Example';
import { ButtonContextualMenuExample } from './examples/Button.ContextualMenu.Example';
import { ButtonCompoundExample } from './examples/Button.Compound.Example';
import { ButtonActionExample } from './examples/Button.Action.Example';
import { ButtonCommandBarExample } from './examples/Button.CommandBar.Example';
import { ButtonCommandExample } from './examples/Button.Command.Example';
import { ButtonIconExample } from './examples/Button.Icon.Example';
import { ButtonIconWithTooltipExample } from './examples/Button.IconWithTooltip.Example';
import { ButtonAnchorExample } from './examples/Button.Anchor.Example';
import { ButtonScreenReaderExample } from './examples/Button.ScreenReader.Example';
import { ButtonSplitExample } from './examples/Button.Split.Example';
import { ButtonSplitCustomExample } from './examples/Button.CustomSplit.Example';
import { ButtonToggleExample } from './examples/Button.Toggle.Example';
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
export var ButtonPageProps = function (props) { return ({
    title: 'Button',
    componentName: 'ButtonExample',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/Button',
    examples: [
        {
            title: 'Default Button',
            code: ButtonDefaultExampleCode,
            view: React.createElement(ButtonDefaultExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Compound Button',
            code: ButtonCompoundExampleCode,
            view: React.createElement(ButtonCompoundExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Command Bar Button',
            code: ButtonCommandBarExampleCode,
            view: React.createElement(ButtonCommandBarExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Split Button',
            code: ButtonSplitExampleCode,
            view: React.createElement(ButtonSplitExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Icon Button',
            code: ButtonIconExampleCode,
            view: React.createElement(ButtonIconExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Icon Button with Tooltip',
            code: ButtonIconWithTooltipExampleCode,
            view: React.createElement(ButtonIconWithTooltipExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Contextual Menu Button',
            code: ButtonContextualMenuExampleCode,
            view: React.createElement(ButtonContextualMenuExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Action Button',
            code: ButtonActionExampleCode,
            view: React.createElement(ButtonActionExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Command Button',
            code: ButtonCommandExampleCode,
            view: React.createElement(ButtonCommandExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Button-like Anchor',
            code: ButtonAnchorExampleCode,
            view: React.createElement(ButtonAnchorExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Button with Aria Description for Screen Reader',
            code: ButtonScreenReaderExampleCode,
            view: React.createElement(ButtonScreenReaderExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Custom Split Button',
            code: ButtonCustomSplitExampleCode,
            view: React.createElement(ButtonSplitCustomExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
        },
        {
            title: 'Toggle Button',
            code: ButtonToggleExampleCode,
            view: React.createElement(ButtonToggleExample, { disabled: props.areButtonsDisabled, checked: props.areButtonsChecked }),
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