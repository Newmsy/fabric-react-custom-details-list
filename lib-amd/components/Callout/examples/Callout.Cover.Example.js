define(["require", "exports", "react", "office-ui-fabric-react", "@uifabric/react-hooks"], function (require, exports, React, office_ui_fabric_react_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DIRECTION_OPTIONS = [
        { key: office_ui_fabric_react_1.DirectionalHint.topLeftEdge, text: 'Top Left Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.topCenter, text: 'Top Center' },
        { key: office_ui_fabric_react_1.DirectionalHint.topRightEdge, text: 'Top Right Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.topAutoEdge, text: 'Top Auto Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.bottomLeftEdge, text: 'Bottom Left Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.bottomCenter, text: 'Bottom Center' },
        { key: office_ui_fabric_react_1.DirectionalHint.bottomRightEdge, text: 'Bottom Right Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.bottomAutoEdge, text: 'Bottom Auto Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.leftTopEdge, text: 'Left Top Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.leftCenter, text: 'Left Center' },
        { key: office_ui_fabric_react_1.DirectionalHint.leftBottomEdge, text: 'Left Bottom Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.rightTopEdge, text: 'Right Top Edge' },
        { key: office_ui_fabric_react_1.DirectionalHint.rightCenter, text: 'Right Center' },
        { key: office_ui_fabric_react_1.DirectionalHint.rightBottomEdge, text: 'Right Bottom Edge' },
    ];
    var styles = office_ui_fabric_react_1.mergeStyleSets({
        buttonArea: {
            verticalAlign: 'top',
            display: 'inline-block',
            textAlign: 'center',
            margin: '0 100px',
            minWidth: 130,
            height: 32,
        },
        configArea: {
            minWidth: '300px',
            display: 'inline-block',
        },
        callout: {
            maxWidth: 300,
        },
        header: {
            padding: '18px 24px 12px',
        },
        title: [
            {
                margin: 0,
                fontWeight: office_ui_fabric_react_1.FontWeights.semilight,
            },
        ],
        inner: {
            height: '100%',
            padding: '0 24px 20px',
        },
    });
    exports.CalloutCoverExample = function () {
        var _a = react_hooks_1.useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
        var _b = React.useState(office_ui_fabric_react_1.DirectionalHint.bottomLeftEdge), directionalHint = _b[0], setDirectionalHint = _b[1];
        var onDirectionalChanged = function (event, option) {
            setDirectionalHint(option.key);
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: styles.configArea },
                React.createElement(office_ui_fabric_react_1.Dropdown, { label: "Directional hint", selectedKey: directionalHint, options: DIRECTION_OPTIONS, onChange: onDirectionalChanged })),
            React.createElement("div", { className: styles.buttonArea },
                React.createElement(office_ui_fabric_react_1.DefaultButton, { text: isCalloutVisible ? 'Hide callout' : 'Show callout', onClick: toggleIsCalloutVisible })),
            isCalloutVisible ? (React.createElement(office_ui_fabric_react_1.Callout, { className: styles.callout, onDismiss: toggleIsCalloutVisible, target: "." + styles.buttonArea, directionalHint: directionalHint, coverTarget: true, isBeakVisible: false, gapSpace: 0, setInitialFocus: true },
                React.createElement("div", { className: styles.header },
                    React.createElement(office_ui_fabric_react_1.Text, { className: styles.title }, "I'm covering the target!")),
                React.createElement("div", { className: styles.inner },
                    React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: toggleIsCalloutVisible, text: "Click to dismiss" })))) : null));
    };
});
//# sourceMappingURL=Callout.Cover.Example.js.map