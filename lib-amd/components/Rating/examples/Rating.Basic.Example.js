define(["require", "exports", "react", "office-ui-fabric-react/lib/Rating", "office-ui-fabric-react/lib/Styling"], function (require, exports, React, Rating_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getRatingComponentAriaLabel = function (rating, maxRating) {
        return "Rating value is " + rating + " of " + maxRating;
    };
    var customTheme = Styling_1.createTheme(Styling_1.getTheme());
    customTheme.semanticColors.bodySubtext = '#DFDFDF';
    customTheme.semanticColors.bodyTextChecked = '#1E9FE8';
    exports.RatingBasicExample = function () {
        var _a = React.useState(1), largeStarRating = _a[0], setLargeStarsRating = _a[1];
        var _b = React.useState(3), smallStarRating = _b[0], setSmallStarRating = _b[1];
        var _c = React.useState(1), tenStarRating = _c[0], setTenStarRatingg = _c[1];
        var _d = React.useState(2.5), customIconStarRating = _d[0], setCustomIconStarRating = _d[1];
        var _e = React.useState(1), themedStarRating = _e[0], setThemedStarRating = _e[1];
        var onLargeStarChange = function (ev, rating) {
            setLargeStarsRating(rating);
        };
        var onSmallStarChange = function (ev, rating) {
            setSmallStarRating(rating);
        };
        var onTenStarChange = function (ev, rating) {
            setTenStarRatingg(rating);
        };
        var onCustomIconStarChange = function (ev, rating) {
            setCustomIconStarRating(rating);
        };
        var onThemedStarChange = function (ev, rating) {
            setThemedStarRating(rating);
        };
        return (React.createElement("div", null,
            "Large Stars:",
            React.createElement(Rating_1.Rating, { min: 1, max: 5, size: Rating_1.RatingSize.Large, rating: largeStarRating, getAriaLabel: getRatingComponentAriaLabel, onChange: onLargeStarChange, ariaLabelFormat: 'Select {0} of {1} stars' }),
            "Small Stars",
            React.createElement(Rating_1.Rating, { id: "small", min: 1, max: 5, rating: smallStarRating, onChange: onSmallStarChange, getAriaLabel: getRatingComponentAriaLabel, ariaLabelFormat: 'Select {0} of {1} stars' }),
            "10 Small Stars",
            React.createElement(Rating_1.Rating, { min: 1, max: 10, rating: tenStarRating, onChange: onTenStarChange, getAriaLabel: getRatingComponentAriaLabel, ariaLabelFormat: 'Select {0} of {1} stars' }),
            "Disabled:",
            React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: 1, disabled: true, ariaLabelFormat: 'Select {0} of {1} stars' }),
            "Half star in readOnly mode:",
            React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: 2.5, getAriaLabel: getRatingComponentAriaLabel, readOnly: true, ariaLabelFormat: 'Select {0} of {1} stars' }),
            "Custom icons:",
            React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: customIconStarRating, onChange: onCustomIconStarChange, getAriaLabel: getRatingComponentAriaLabel, ariaLabelFormat: 'Select {0} of {1} stars', icon: "StarburstSolid", unselectedIcon: "Starburst" }),
            "Themed star",
            React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: themedStarRating, onChange: onThemedStarChange, getAriaLabel: getRatingComponentAriaLabel, ariaLabelFormat: 'Select {0} of {1} stars', theme: customTheme })));
    };
});
//# sourceMappingURL=Rating.Basic.Example.js.map