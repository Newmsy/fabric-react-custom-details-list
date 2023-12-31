"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FocusZone_Photos_Example_1 = require("./examples/FocusZone.Photos.Example");
var FocusZone_List_Example_1 = require("./examples/FocusZone.List.Example");
var FocusZone_Disabled_Example_1 = require("./examples/FocusZone.Disabled.Example");
var FocusZone_Tabbable_Example_1 = require("./examples/FocusZone.Tabbable.Example");
var FocusZone_HorizontalMenu_Example_1 = require("./examples/FocusZone.HorizontalMenu.Example");
var FocusZonePhotosExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.Photos.Example.tsx');
var FocusZoneListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.List.Example.tsx');
var FocusZoneDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.Disabled.Example.tsx');
var FocusZoneTabbableCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.Tabbable.Example.tsx');
var FocusZoneHorizontalMenuExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.HorizontalMenu.Example.tsx');
exports.FocusZonePageProps = {
    title: 'FocusZone',
    componentName: 'FocusZone',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/FocusZone',
    examples: [
        {
            title: 'Non-uniform photos within bidirectional FocusZone',
            code: FocusZonePhotosExampleCode,
            view: React.createElement(FocusZone_Photos_Example_1.FocusZonePhotosExample, null),
        },
        {
            title: 'Nesting FocusZones in list rows',
            code: FocusZoneListExampleCode,
            view: React.createElement(FocusZone_List_Example_1.FocusZoneListExample, null),
        },
        {
            title: 'Disabled FocusZone',
            code: FocusZoneDisabledExampleCode,
            view: React.createElement(FocusZone_Disabled_Example_1.FocusZoneDisabledExample, null),
        },
        {
            title: 'Tabbable FocusZone',
            code: FocusZoneTabbableCode,
            view: React.createElement(FocusZone_Tabbable_Example_1.FocusZoneTabbableExample, null),
        },
        {
            title: 'Horizontal menu in FocusZone with all arrows key navigation',
            code: FocusZoneHorizontalMenuExampleCode,
            view: React.createElement(FocusZone_HorizontalMenu_Example_1.FocusZoneHorizontalMenuExample, null),
        },
    ],
    overview: require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/docs/FocusZoneOverview.md'),
    bestPractices: '',
    dos: '',
    donts: '',
    isHeaderVisible: true,
    isFeedbackVisible: true,
    allowNativeProps: true,
};
//# sourceMappingURL=FocusZone.doc.js.map