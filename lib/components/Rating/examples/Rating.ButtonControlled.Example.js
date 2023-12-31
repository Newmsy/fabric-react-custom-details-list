import * as React from 'react';
import { Rating } from 'office-ui-fabric-react/lib/Rating';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
export var RatingButtonControlledExample = function () {
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
        React.createElement(Rating, { rating: currentRating, max: 5, readOnly: true, allowZeroStars: true, getAriaLabel: getRatingAriaLabel, ariaLabelFormat: 'Select {0} of {1} stars' }),
        React.createElement(PrimaryButton, { text: 'Click to change rating to ' + (5 - currentRating), onClick: currentRatingToggle })));
};
//# sourceMappingURL=Rating.ButtonControlled.Example.js.map