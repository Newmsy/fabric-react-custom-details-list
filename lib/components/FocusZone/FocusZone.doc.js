import * as React from 'react';
import { FocusZonePhotosExample } from './examples/FocusZone.Photos.Example';
import { FocusZoneListExample } from './examples/FocusZone.List.Example';
import { FocusZoneDisabledExample } from './examples/FocusZone.Disabled.Example';
import { FocusZoneTabbableExample } from './examples/FocusZone.Tabbable.Example';
import { FocusZoneHorizontalMenuExample } from './examples/FocusZone.HorizontalMenu.Example';
var FocusZonePhotosExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.Photos.Example.tsx');
var FocusZoneListExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.List.Example.tsx');
var FocusZoneDisabledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.Disabled.Example.tsx');
var FocusZoneTabbableCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.Tabbable.Example.tsx');
var FocusZoneHorizontalMenuExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/FocusZone/examples/FocusZone.HorizontalMenu.Example.tsx');
export var FocusZonePageProps = {
    title: 'FocusZone',
    componentName: 'FocusZone',
    componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/office-ui-fabric-react/src/components/FocusZone',
    examples: [
        {
            title: 'Non-uniform photos within bidirectional FocusZone',
            code: FocusZonePhotosExampleCode,
            view: React.createElement(FocusZonePhotosExample, null),
        },
        {
            title: 'Nesting FocusZones in list rows',
            code: FocusZoneListExampleCode,
            view: React.createElement(FocusZoneListExample, null),
        },
        {
            title: 'Disabled FocusZone',
            code: FocusZoneDisabledExampleCode,
            view: React.createElement(FocusZoneDisabledExample, null),
        },
        {
            title: 'Tabbable FocusZone',
            code: FocusZoneTabbableCode,
            view: React.createElement(FocusZoneTabbableExample, null),
        },
        {
            title: 'Horizontal menu in FocusZone with all arrows key navigation',
            code: FocusZoneHorizontalMenuExampleCode,
            view: React.createElement(FocusZoneHorizontalMenuExample, null),
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