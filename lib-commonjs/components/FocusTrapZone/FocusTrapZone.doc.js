"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FocusTrapZone_Box_Example_1 = require("./examples/FocusTrapZone.Box.Example");
var FocusTrapZoneBoxExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Box.Example.tsx');
var FocusTrapZone_Box_FocusOnCustomElement_Example_1 = require("./examples/FocusTrapZone.Box.FocusOnCustomElement.Example");
var FocusTrapZoneBoxCustomElementExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Box.FocusOnCustomElement.Example.tsx');
var FocusTrapZone_Box_Click_Example_1 = require("./examples/FocusTrapZone.Box.Click.Example");
var FocusTrapZoneBoxClickExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Box.Click.Example.tsx');
var FocusTrapZone_Nested_Example_1 = require("./examples/FocusTrapZone.Nested.Example");
var FocusTrapZoneNestedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.Nested.Example.tsx');
var FocusTrapZone_FocusZone_Example_1 = require("./examples/FocusTrapZone.FocusZone.Example");
var FocusTrapZoneFocusZoneExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.FocusZone.Example.tsx');
var FocusTrapZone_DialogInPanel_Example_1 = require("./examples/FocusTrapZone.DialogInPanel.Example");
var FocusTrapZoneDialogInPanelExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/examples/FocusTrapZone.DialogInPanel.Example.tsx');
exports.FocusTrapZonePageProps = {
    title: 'FocusTrapZone',
    componentName: 'FocusTrapZone',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/FocusTrapZone',
    examples: [
        {
            title: 'Simple box',
            code: FocusTrapZoneBoxExampleCode,
            view: React.createElement(FocusTrapZone_Box_Example_1.FocusTrapZoneBoxExample, null),
        },
        {
            title: 'Simple box with focus on custom focusable element',
            code: FocusTrapZoneBoxCustomElementExampleCode,
            view: React.createElement(FocusTrapZone_Box_FocusOnCustomElement_Example_1.FocusTrapZoneBoxCustomElementExample, null),
        },
        {
            title: 'Simple box with clicking outside trap zone enabled',
            code: FocusTrapZoneBoxClickExampleCode,
            view: React.createElement(FocusTrapZone_Box_Click_Example_1.FocusTrapZoneBoxClickExample, null),
        },
        {
            title: 'Multiple nested FocusTrapZones',
            code: FocusTrapZoneNestedExampleCode,
            view: React.createElement(FocusTrapZone_Nested_Example_1.FocusTrapZoneNestedExample, null),
        },
        {
            title: 'FocusTrapZone with FocusZones',
            code: FocusTrapZoneFocusZoneExampleCode,
            view: React.createElement(FocusTrapZone_FocusZone_Example_1.FocusTrapZoneFocusZoneExample, null),
        },
        {
            title: 'A Dialog nested in a Panel',
            code: FocusTrapZoneDialogInPanelExampleCode,
            view: React.createElement(FocusTrapZone_DialogInPanel_Example_1.FocusTrapZoneDialogInPanelExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/FocusTrapZone/docs/FocusTrapZoneOverview.md'),
    bestPractices: '',
    dos: '',
    donts: '',
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
};
//# sourceMappingURL=FocusTrapZone.doc.js.map