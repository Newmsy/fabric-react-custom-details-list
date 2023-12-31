"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Persona_1 = require("office-ui-fabric-react/lib-commonjs/Persona");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var example_data_1 = require("@uifabric/example-data");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var customCoinClass = Styling_1.mergeStyles({
    borderRadius: 20,
    display: 'block',
});
var examplePersona = {
    imageInitials: 'TR',
    text: 'Ted Randall',
    secondaryText: 'Project Manager',
    optionalText: 'Available at 4:00pm',
};
exports.PersonaCustomCoinRenderExample = function () {
    return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 10 } },
        React.createElement("div", null, "Custom render function in place of persona coin's image"),
        React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, presence: Persona_1.PersonaPresence.online, onRenderCoin: _onRenderCoin, imageAlt: "Ted Randall, status is available at 4 PM", imageUrl: example_data_1.TestImages.personaMale, coinSize: 72 }))));
};
function _onRenderCoin(props) {
    var coinSize = props.coinSize, imageAlt = props.imageAlt, imageUrl = props.imageUrl;
    return React.createElement("img", { src: imageUrl, alt: imageAlt, width: coinSize, height: coinSize, className: customCoinClass });
}
//# sourceMappingURL=Persona.CustomCoinRender.Example.js.map