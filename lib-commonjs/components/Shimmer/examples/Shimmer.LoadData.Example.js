"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Shimmer_1 = require("office-ui-fabric-react/lib-commonjs/Shimmer");
var Persona_1 = require("office-ui-fabric-react/lib-commonjs/Persona");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var react_hooks_1 = require("@uifabric/react-hooks");
var wrapperClass = Styling_1.mergeStyles({
    padding: 2,
    selectors: {
        '& > .ms-Shimmer-container': {
            margin: '10px 0',
        },
    },
});
var wrapperStyles = { display: 'flex' };
var getCustomElements = function () {
    return (React.createElement("div", { style: wrapperStyles },
        React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [
                { type: Shimmer_1.ShimmerElementType.circle, height: 40 },
                { type: Shimmer_1.ShimmerElementType.gap, width: 16, height: 40 },
            ] }),
        React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, width: "100%", shimmerElements: [
                { type: Shimmer_1.ShimmerElementType.line, width: '100%', height: 10, verticalAlign: 'bottom' },
                { type: Shimmer_1.ShimmerElementType.line, width: '90%', height: 8 },
                { type: Shimmer_1.ShimmerElementType.gap, width: '10%', height: 20 },
            ] })));
};
exports.ShimmerLoadDataExample = function () {
    var _a = React.useState({}), examplePersona = _a[0], setExamplePersona = _a[1];
    var _b = React.useState(''), contentOne = _b[0], setContentOne = _b[1];
    var _c = react_hooks_1.useBoolean(false), isDataLoadedOne = _c[0], toggleIsDataLoadedOne = _c[1].toggle;
    var _d = react_hooks_1.useBoolean(false), isDataLoadedTwo = _d[0], toggleIsDataLoadedTwo = _d[1].toggle;
    var getContentOne = function (ev, checked) {
        toggleIsDataLoadedOne();
        setContentOne(!isDataLoadedOne ? 'Congratulations!!! You have successfully loaded the content. ' : '');
    };
    var getContentTwo = function (ev, checked) {
        toggleIsDataLoadedTwo();
        setExamplePersona(!isDataLoadedTwo
            ? {
                imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
                imageInitials: 'AL',
                primaryText: 'Annie Lindqvist',
                secondaryText: 'Software Engineer',
            }
            : {});
    };
    return (React.createElement("div", { className: wrapperClass },
        React.createElement(Toggle_1.Toggle, { checked: isDataLoadedOne, onChange: getContentOne, onText: "Toggle to show shimmer", offText: "Toggle to load content" }),
        React.createElement(Shimmer_1.Shimmer, { isDataLoaded: isDataLoadedOne, ariaLabel: "Loading content" },
            React.createElement("div", { style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    lineHeight: '1',
                    minHeight: '16px',
                } },
                contentOne,
                contentOne,
                contentOne)),
        React.createElement(Toggle_1.Toggle, { checked: isDataLoadedTwo, onChange: getContentTwo, onText: "Toggle to show shimmer", offText: "Toggle to load content" }),
        React.createElement(Shimmer_1.Shimmer, { customElementsGroup: getCustomElements(), width: "300", isDataLoaded: isDataLoadedTwo },
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size40, presence: Persona_1.PersonaPresence.away })))));
};
//# sourceMappingURL=Shimmer.LoadData.Example.js.map