import * as React from 'react';
import { createArray } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
var ITEMS = createArray(5, function (index) { return ({
    key: index.toString(),
    name: 'Item-' + index,
}); });
export var FocusZoneHorizontalMenuExample = function () {
    return (React.createElement(FocusZone, { direction: FocusZoneDirection.domOrder, role: "menubar" }, ITEMS.map(function (item) { return (React.createElement(DefaultButton, { key: item.name, role: "menuitem" }, item.name)); })));
};
//# sourceMappingURL=FocusZone.HorizontalMenu.Example.js.map