"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Icon_1 = require("office-ui-fabric-react/lib-commonjs/Icon");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var example_data_1 = require("@uifabric/example-data");
var classNames = Styling_1.mergeStyleSets({
    image: {
        display: 'inline-block',
        position: 'relative',
    },
    one: {
        width: 48,
        height: 44,
        marginLeft: 27,
    },
    oneImage: {
        left: -6,
        top: -4,
    },
    check: {
        width: 35,
        height: 43,
        marginLeft: 55,
    },
    checkImage: {
        left: -60,
        top: -5,
    },
    lock: {
        width: 35,
        height: 42,
        marginLeft: 65,
    },
    lockImage: {
        width: -109,
        top: -5,
    },
});
exports.IconImageSheetExample = function () {
    // ImageIcon is an optimized variant of standard Icon.
    // You could also use the standard Icon here (adding the prop `iconType={IconType.image}`).
    return (React.createElement("div", null,
        React.createElement(Icon_1.ImageIcon, { className: classNames.one, imageProps: {
                src: example_data_1.TestImages.iconOne,
                className: Utilities_1.css(classNames.image, classNames.oneImage),
            } }),
        React.createElement(Icon_1.ImageIcon, { className: classNames.check, imageProps: {
                src: example_data_1.TestImages.iconOne,
                className: Utilities_1.css(classNames.image, classNames.checkImage),
            } }),
        React.createElement(Icon_1.ImageIcon, { className: classNames.lock, imageProps: {
                src: example_data_1.TestImages.iconOne,
                className: Utilities_1.css(classNames.image, classNames.lockImage),
            } })));
};
//# sourceMappingURL=Icon.ImageSheet.Example.js.map