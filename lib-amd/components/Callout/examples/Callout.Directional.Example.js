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
    var theme = office_ui_fabric_react_1.getTheme();
    var checkBoxStyles = { root: { margin: '10px 0' } };
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
        calloutExampleButton: {
            width: '100%',
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
        subtext: [
            {
                margin: 0,
                fontWeight: office_ui_fabric_react_1.FontWeights.semilight,
            },
        ],
        link: [
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
            },
        ],
        actions: {
            position: 'relative',
            marginTop: 20,
            width: '100%',
            whiteSpace: 'nowrap',
        },
    });
    exports.CalloutDirectionalExample = function () {
        var _a = react_hooks_1.useBoolean(false), isCalloutVisible = _a[0], toggleIsCalloutVisible = _a[1].toggle;
        var _b = react_hooks_1.useBoolean(true), isBeakVisible = _b[0], toggleIsBeakVisible = _b[1].toggle;
        var _c = React.useState(), gapSpace = _c[0], setGapSpace = _c[1];
        var _d = React.useState(), beakWidth = _d[0], setBeakWidth = _d[1];
        var labelId = react_hooks_1.useId('callout-label');
        var descriptionId = react_hooks_1.useId('callout-description');
        var _e = React.useState(office_ui_fabric_react_1.DirectionalHint.bottomLeftEdge), directionalHint = _e[0], setDirectionalHint = _e[1];
        var onDirectionalChanged = function (event, option) {
            setDirectionalHint(option.key);
        };
        var onGapSlider = function (value) {
            setGapSpace(value);
        };
        var onBeakWidthSlider = function (value) {
            setBeakWidth(value);
        };
        var onShowBeakChange = function () {
            toggleIsBeakVisible();
            setBeakWidth(10);
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: styles.configArea },
                React.createElement(office_ui_fabric_react_1.Checkbox, { styles: checkBoxStyles, label: "Show beak", checked: isBeakVisible, onChange: onShowBeakChange }),
                React.createElement(office_ui_fabric_react_1.Slider, { max: 30, label: "Gap Space", min: 0, defaultValue: 0, onChange: onGapSlider }),
                isBeakVisible && (React.createElement(office_ui_fabric_react_1.Slider, { max: 50, label: "Beak Width", min: 10, defaultValue: 16, onChange: onBeakWidthSlider })),
                React.createElement(office_ui_fabric_react_1.Dropdown, { label: "Directional hint", selectedKey: directionalHint, options: DIRECTION_OPTIONS, onChange: onDirectionalChanged })),
            React.createElement("div", { className: styles.buttonArea },
                React.createElement(office_ui_fabric_react_1.DefaultButton, { className: styles.calloutExampleButton, onClick: toggleIsCalloutVisible, text: isCalloutVisible ? 'Hide callout' : 'Show callout' })),
            isCalloutVisible ? (React.createElement(office_ui_fabric_react_1.Callout, { ariaLabelledBy: labelId, ariaDescribedBy: descriptionId, className: styles.callout, gapSpace: gapSpace, target: "." + styles.buttonArea, isBeakVisible: isBeakVisible, beakWidth: beakWidth, onDismiss: toggleIsCalloutVisible, directionalHint: directionalHint, setInitialFocus: true },
                React.createElement("div", { className: styles.header },
                    React.createElement(office_ui_fabric_react_1.Text, { className: styles.title, id: labelId }, "All of your favorite people")),
                React.createElement("div", { className: styles.inner },
                    React.createElement(office_ui_fabric_react_1.Text, { className: styles.subtext, id: descriptionId }, "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom."),
                    React.createElement("div", { className: styles.actions },
                        React.createElement(office_ui_fabric_react_1.Link, { className: styles.link, href: "http://microsoft.com", target: "_blank" }, "Go to Microsoft"))))) : null));
    };
});
//# sourceMappingURL=Callout.Directional.Example.js.map