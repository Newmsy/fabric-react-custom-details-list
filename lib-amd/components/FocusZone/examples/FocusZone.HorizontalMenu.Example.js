define(["require", "exports", "react", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/Button"], function (require, exports, React, Utilities_1, FocusZone_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ITEMS = Utilities_1.createArray(5, function (index) { return ({
        key: index.toString(),
        name: 'Item-' + index,
    }); });
    exports.FocusZoneHorizontalMenuExample = function () {
        return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.domOrder, role: "menubar" }, ITEMS.map(function (item) { return (React.createElement(Button_1.DefaultButton, { key: item.name, role: "menuitem" }, item.name)); })));
    };
});
//# sourceMappingURL=FocusZone.HorizontalMenu.Example.js.map