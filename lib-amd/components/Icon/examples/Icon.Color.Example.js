define(["require", "exports", "react", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Icon_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var iconClass = Styling_1.mergeStyles({
        fontSize: 50,
        height: 50,
        width: 50,
        margin: '0 25px',
    });
    var classNames = Styling_1.mergeStyleSets({
        deepSkyBlue: [{ color: 'deepskyblue' }, iconClass],
        greenYellow: [{ color: 'greenyellow' }, iconClass],
        salmon: [{ color: 'salmon' }, iconClass],
    });
    exports.IconColorExample = function () {
        // FontIcon is an optimized variant of standard Icon.
        // You could also use the standard Icon here.
        return (React.createElement("div", null,
            React.createElement(Icon_1.FontIcon, { iconName: "CompassNW", className: classNames.deepSkyBlue }),
            React.createElement(Icon_1.FontIcon, { iconName: "Dictionary", className: classNames.greenYellow }),
            React.createElement(Icon_1.FontIcon, { iconName: "TrainSolid", className: classNames.salmon })));
    };
});
//# sourceMappingURL=Icon.Color.Example.js.map