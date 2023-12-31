define(["require", "exports", "react", "office-ui-fabric-react/lib/Link"], function (require, exports, React, Link_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkBasicExample = function () {
        return (React.createElement("div", null,
            React.createElement("p", null,
                "When a link has an href,",
                ' ',
                React.createElement(Link_1.Link, { href: "http://dev.office.com/fabric/components/link" }, "it renders as an anchor tag."),
                " Without an href,",
                ' ',
                React.createElement(Link_1.Link, null, "the link is rendered as a button"),
                ". You can also use the disabled attribute to create a",
                ' ',
                React.createElement(Link_1.Link, { disabled: true, href: "http://dev.office.com/fabric/components/link" }, "disabled link.")),
            React.createElement("p", null, "It's not recommended to use Links with imgs because Links are meant to render textual inline content. Buttons are inline-block or in the case of imgs, block. However, it is possible to create a linked image button by making a button with an unstyled variant and adding the img content and href source to that.")));
    };
});
//# sourceMappingURL=Link.Basic.Example.js.map