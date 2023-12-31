import * as React from 'react';
import { HoverCard, HoverCardType } from 'office-ui-fabric-react/lib/HoverCard';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
var classNames = mergeStyleSets({
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
export var HoverCardInstantDismissExample = function () {
    var hoverCard = React.useRef(null);
    var instantDismissCard = function () {
        if (hoverCard.current) {
            hoverCard.current.dismiss();
        }
    };
    var onRenderPlainCard = function () {
        return (React.createElement("div", { className: classNames.plainCard },
            React.createElement(DefaultButton, { onClick: instantDismissCard, text: "Instant Dismiss" })));
    };
    var plainCardProps = {
        onRenderPlainCard: onRenderPlainCard,
    };
    return (React.createElement(Fabric, null,
        React.createElement("p", null,
            "In cases where an instant dismiss of the card is needed, public method",
            React.createElement("i", null, "dismiss()"),
            " can be used through its ",
            React.createElement("i", null, "componentRef"),
            " prop."),
        React.createElement(HoverCard, { cardDismissDelay: 2000, type: HoverCardType.plain, plainCardProps: plainCardProps, componentRef: hoverCard, onCardHide: onCardHide },
            React.createElement("span", { className: classNames.target }, "Hover Over Me"))));
};
//# sourceMappingURL=HoverCard.InstantDismiss.Example.js.map