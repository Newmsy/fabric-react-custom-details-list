define(["require", "exports", "react", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Icon_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var iconClass = Styling_1.mergeStyles({
        fontSize: 50,
        height: 50,
        width: 50,
        margin: '0 25px',
    });
    exports.IconBasicExample = function () {
        // FontIcon is an optimized variant of standard Icon.
        // You could also use the standard Icon here.
        return (React.createElement("div", null,
            React.createElement(Icon_1.FontIcon, { iconName: "CompassNW", className: iconClass }),
            React.createElement(Icon_1.FontIcon, { iconName: "Dictionary", className: iconClass }),
            React.createElement(Icon_1.FontIcon, { iconName: "TrainSolid", className: iconClass })));
    };
});
//# sourceMappingURL=Icon.Basic.Example.js.map