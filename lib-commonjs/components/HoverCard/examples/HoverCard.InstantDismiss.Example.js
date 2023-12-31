"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HoverCard_1 = require("office-ui-fabric-react/lib-commonjs/HoverCard");
var Fabric_1 = require("office-ui-fabric-react/lib-commonjs/Fabric");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var classNames = Styling_1.mergeStyleSets({
    plainCard: {
        width: 200,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    target: {
        fontWeight: '600',
        display: 'inline-block',
        border: '1px dashed #605e5c',
        padding: 5,
        borderRadius: 2,
    },
});
var onCardHide = function () {
    console.log('I am now hidden');
};
exports.HoverCardInstantDismissExample = function () {
    var hoverCard = React.useRef(null);
    var instantDismissCard = function () {
        if (hoverCard.current) {
            hoverCard.current.dismiss();
        }
    };
    var onRenderPlainCard = function () {
        return (React.createElement("div", { className: classNames.plainCard },
            React.createElement(Button_1.DefaultButton, { onClick: instantDismissCard, text: "Instant Dismiss" })));
    };
    var plainCardProps = {
        onRenderPlainCard: onRenderPlainCard,
    };
    return (React.createElement(Fabric_1.Fabric, null,
        React.createElement("p", null,
            "In cases where an instant dismiss of the card is needed, public method",
            React.createElement("i", null, "dismiss()"),
            " can be used through its ",
            React.createElement("i", null, "componentRef"),
            " prop."),
        React.createElement(HoverCard_1.HoverCard, { cardDismissDelay: 2000, type: HoverCard_1.HoverCardType.plain, plainCardProps: plainCardProps, componentRef: hoverCard, onCardHide: onCardHide },
            React.createElement("span", { className: classNames.target }, "Hover Over Me"))));
};
//# sourceMappingURL=HoverCard.InstantDismiss.Example.js.map