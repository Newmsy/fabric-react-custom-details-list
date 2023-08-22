"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Rating_1 = require("office-ui-fabric-react/lib-commonjs/Rating");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
exports.RatingButtonControlledExample = function () {
    var _a = React.useState(5), currentRating = _a[0], setCurrentRating = _a[1];
    var currentRatingToggle = function () {
        if (currentRating === 0) {
            setCurrentRating(5);
        }
        else {
            setCurrentRating(0);
        }
    };
    var getRatingAriaLabel = function () { return "Rating value is " + currentRating + " of 5"; };
    return (React.createElement("div", null,
        React.createElement(Rating_1.Rating, { rating: currentRating, max: 5, readOnly: true, allowZeroStars: true, getAriaLabel: getRatingAriaLabel, ariaLabelFormat: 'Select {0} of {1} stars' }),
        React.createElement(Button_1.PrimaryButton, { text: 'Click to change rating to ' + (5 - currentRating), onClick: currentRatingToggle })));
};
//# sourceMappingURL=Rating.ButtonControlled.Example.js.map