define(["require", "exports", "react", "office-ui-fabric-react/lib/HoverCard", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react"], function (require, exports, React, HoverCard_1, Fabric_1, Styling_1, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = Styling_1.mergeStyleSets({
        plainCard: {
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        textField: {
            paddingRight: 200,
        },
    });
    var onRenderPlainCard = function () {
        return React.createElement("div", { className: classNames.plainCard }, "plain card");
    };
    exports.HoverCardEventListenerTargetExample = function () {
        var _a = React.useState(), target = _a[0], setTarget = _a[1];
        var _b = React.useState(), eventListenerTarget = _b[0], setEventListenerTarget = _b[1];
        var plainCardProps = {
            onRenderPlainCard: onRenderPlainCard,
            directionalHint: HoverCard_1.DirectionalHint.rightTopEdge,
        };
        var onSetTarget = function (element) {
            setTarget(element);
        };
        var onSetEventListenerTarget = function (element) {
            setEventListenerTarget(element);
        };
        return (React.createElement(Fabric_1.Fabric, null,
            React.createElement("p", null, "Using the target to tag hover card on the right side of Emoji icon, and using eventListenerTarget to launch the card only when hovering over the text field, hovering over the icon doesn't trigger card open."),
            React.createElement("span", { ref: onSetTarget },
                React.createElement("span", { ref: onSetEventListenerTarget, className: classNames.textField }, "Hover Zone"),
                React.createElement(office_ui_fabric_react_1.IconButton, { iconProps: { iconName: 'Emoji2' }, title: 'Emoji' }),
                React.createElement(HoverCard_1.HoverCard, { plainCardProps: plainCardProps, type: HoverCard_1.HoverCardType.plain, target: target, eventListenerTarget: eventListenerTarget }))));
    };
});
//# sourceMappingURL=HoverCard.EventListenerTarget.Example.js.map