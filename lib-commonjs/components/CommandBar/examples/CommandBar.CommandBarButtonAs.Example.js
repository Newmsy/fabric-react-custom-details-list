"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var CommandBar_1 = require("office-ui-fabric-react/lib-commonjs/CommandBar");
var Callout_1 = require("office-ui-fabric-react/lib-commonjs/Callout");
var Coachmark_1 = require("office-ui-fabric-react/lib-commonjs/Coachmark");
var TeachingBubble_1 = require("office-ui-fabric-react/lib-commonjs/TeachingBubble");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
/** Command bar button with a coachmark and teaching bubble */
var CoachmarkCommandBarButton = function (props) {
    var targetButton = React.useRef(null);
    var defaultRender = props.defaultRender, isCoachmarkVisible = props.isCoachmarkVisible, onDismiss = props.onDismiss, buttonProps = tslib_1.__rest(props, ["defaultRender", "isCoachmarkVisible", "onDismiss"]);
    var ButtonComponent = defaultRender || Button_1.CommandBarButton;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: targetButton },
            React.createElement(ButtonComponent, tslib_1.__assign({}, buttonProps))),
        isCoachmarkVisible && (React.createElement(Coachmark_1.Coachmark, { target: targetButton.current, positioningContainerProps: {
                directionalHint: Callout_1.DirectionalHint.bottomCenter,
            }, ariaAlertText: "A Coachmark has appeared", ariaDescribedBy: "coachmark-desc1", ariaLabelledBy: "coachmark-label1", ariaLabelledByText: "Coachmark notification" },
            React.createElement(TeachingBubble_1.TeachingBubbleContent, { headline: "Example Title", hasCloseButton: true, closeButtonAriaLabel: "Close", onDismiss: onDismiss, ariaDescribedBy: "example-description1", ariaLabelledBy: "example-label1" }, "Welcome to the land of Coachmarks!")))));
};
var overflowButtonProps = {
    ariaLabel: 'More commands',
};
/** Command bar which renders the Share button with a coachmark */
// tslint:disable-next-line:max-line-length
var IndividualCommandBarButtonAsExample = function (props) {
    var onDismissCoachmark = props.onDismissCoachmark, isCoachmarkVisible = props.isCoachmarkVisible;
    var items = React.useMemo(function () {
        var CoachmarkButtonWrapper = function (p) {
            return (React.createElement(CoachmarkCommandBarButton, tslib_1.__assign({}, p, { isCoachmarkVisible: isCoachmarkVisible, onDismiss: onDismissCoachmark })));
        };
        return [
            { key: 'newItem', text: 'New', iconProps: { iconName: 'Add' }, onClick: function () { return console.log('New'); } },
            { key: 'upload', text: 'Upload', iconProps: { iconName: 'Upload' }, onClick: function () { return console.log('Upload'); } },
            {
                key: 'share',
                text: 'Share',
                iconProps: { iconName: 'Share' },
                // The Share button will have a coachmark
                commandBarButtonAs: CoachmarkButtonWrapper,
                onClick: function () { return console.log('Share'); },
            },
            {
                key: 'download',
                text: 'Download',
                iconProps: { iconName: 'Download' },
                onClick: function () { return console.log('Download'); },
            },
        ];
    }, [props.onDismissCoachmark, props.isCoachmarkVisible]);
    return (React.createElement(CommandBar_1.CommandBar, { overflowButtonProps: overflowButtonProps, items: items, ariaLabel: "Use left and right arrow keys to navigate between commands" }));
};
exports.IndividualCommandBarButtonAsExampleWrapper = function () {
    var _a = React.useState(true), isCoachmarkVisible = _a[0], setIsCoachmarkVisible = _a[1];
    var onDismissCoachmark = React.useCallback(function () { return setIsCoachmarkVisible(false); }, []);
    return (React.createElement(IndividualCommandBarButtonAsExample, { onDismissCoachmark: onDismissCoachmark, isCoachmarkVisible: isCoachmarkVisible }));
};
//# sourceMappingURL=CommandBar.CommandBarButtonAs.Example.js.map