define(["require", "exports", "tslib", "react", "../../Utilities", "../../Icon", "../../FocusZone", "./Rating.types"], function (require, exports, tslib_1, React, Utilities_1, Icon_1, FocusZone_1, Rating_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var RatingStar = function (props) {
        var icon = props.icon || 'FavoriteStarFill';
        return (React.createElement("div", { className: props.classNames.ratingStar, key: props.id },
            React.createElement(Icon_1.Icon, { className: props.classNames.ratingStarBack, iconName: icon }),
            !props.disabled && (React.createElement(Icon_1.Icon, { className: props.classNames.ratingStarFront, iconName: icon, style: { width: props.fillPercentage + '%' } }))));
    };
    var RatingBase = /** @class */ (function (_super) {
        tslib_1.__extends(RatingBase, _super);
        function RatingBase(props) {
            var _this = _super.call(this, props) || this;
            Utilities_1.initializeComponentRef(_this);
            Utilities_1.warnDeprecations('Rating', props, { onChanged: 'onChange' });
            _this._id = Utilities_1.getId('Rating');
            _this._min = _this.props.allowZeroStars ? 0 : 1;
            // tslint:disable:deprecation
            if (_this.props.min !== undefined && _this.props.min !== 1) {
                _this._min = _this.props.min;
            }
            // tslint:enable:deprecation
            _this._labelId = Utilities_1.getId('RatingLabel');
            _this.state = {
                rating: _this._getInitialValue(props),
            };
            return _this;
        }
        RatingBase.prototype.render = function () {
            var _a, _b, _c;
            var _d = this.props, disabled = _d.disabled, getAriaLabel = _d.getAriaLabel, styles = _d.styles, max = _d.max, readOnly = _d.readOnly, size = _d.size, theme = _d.theme, _e = _d.icon, icon = _e === void 0 ? 'FavoriteStarFill' : _e, _f = _d.unselectedIcon, unselectedIcon = _f === void 0 ? 'FavoriteStar' : _f;
            var id = this._id;
            var stars = [];
            var starIds = [];
            var rating = this._getRating();
            var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
            this._classNames = getClassNames(styles, {
                disabled: disabled,
                readOnly: readOnly,
                theme: theme,
            });
            for (var i = this._min; i <= max; i++) {
                if (i !== 0) {
                    var fillPercentage = this._getFillingPercentage(i);
                    var ratingStarProps = {
                        fillPercentage: fillPercentage,
                        disabled: disabled,
                        classNames: this._classNames,
                        icon: fillPercentage > 0 ? icon : unselectedIcon,
                    };
                    starIds.push(this._getStarId(i - 1));
                    stars.push(React.createElement("button", tslib_1.__assign({ className: Utilities_1.css(this._classNames.ratingButton, (_a = {},
                            _a[this._classNames.ratingStarIsLarge] = size === Rating_types_1.RatingSize.Large,
                            _a[this._classNames.ratingStarIsSmall] = size !== Rating_types_1.RatingSize.Large,
                            _a)), id: starIds[i - 1], key: i }, (i === Math.ceil(rating) ? { 'data-is-current': true } : {}), { onFocus: this._onFocus.bind(this, i), onClick: this._onFocus.bind(this, i), disabled: disabled || readOnly ? true : false, role: "presentation", type: "button" }),
                        this._getLabel(i),
                        React.createElement(RatingStar, tslib_1.__assign({ key: i + 'rating' }, ratingStarProps))));
                }
            }
            var ariaLabel = getAriaLabel ? getAriaLabel(rating ? rating : 0, max) : undefined;
            // When in read-only mode, we allow focus (per ARIA standards) and set up ARIA attributes to indicate element
            // is read-only. https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
            var readOnlyProps = readOnly
                ? {
                    allowFocusRoot: true,
                    disabled: true,
                    'aria-label': ariaLabel,
                    'aria-readonly': true,
                    'data-is-focusable': true,
                    tabIndex: 0,
                }
                : undefined;
            return (React.createElement("div", tslib_1.__assign({ className: Utilities_1.css('ms-Rating-star', this._classNames.root, (_b = {},
                    _b[this._classNames.rootIsLarge] = size === Rating_types_1.RatingSize.Large,
                    _b[this._classNames.rootIsSmall] = size !== Rating_types_1.RatingSize.Large,
                    _b)), "aria-label": !readOnly ? ariaLabel : '', id: id }, divProps),
                React.createElement(FocusZone_1.FocusZone, tslib_1.__assign({ direction: FocusZone_1.FocusZoneDirection.horizontal, className: Utilities_1.css(this._classNames.ratingFocusZone, (_c = {},
                        _c[this._classNames.rootIsLarge] = size === Rating_types_1.RatingSize.Large,
                        _c[this._classNames.rootIsSmall] = size !== Rating_types_1.RatingSize.Large,
                        _c)), defaultActiveElement: rating ? starIds[Math.ceil(rating) - 1] && '#' + starIds[Math.ceil(rating) - 1] : undefined }, readOnlyProps), stars)));
        };
        RatingBase.prototype._getStarId = function (index) {
            return this._id + '-star-' + index;
        };
        RatingBase.prototype._onFocus = function (value, ev) {
            if (Math.ceil(this.state.rating) !== value) {
                this.setState({
                    rating: value,
                });
                // tslint:disable-next-line:deprecation
                var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
                if (onChange) {
                    onChange(ev, value);
                }
                if (onChanged) {
                    onChanged(value);
                }
            }
        };
        RatingBase.prototype._getLabel = function (rating) {
            var text = this.props.ariaLabelFormat || '';
            return (React.createElement("span", { id: this._labelId + "-" + rating, className: this._classNames.labelText }, Utilities_1.format(text, rating, this.props.max)));
        };
        RatingBase.prototype._getInitialValue = function (props) {
            if (typeof props.rating === 'undefined') {
                return this._min;
            }
            if (props.rating === null) {
                return undefined;
            }
            return this._getClampedRating(props.rating);
        };
        RatingBase.prototype._getClampedRating = function (rating) {
            return Math.min(Math.max(rating, this._min), this.props.max);
        };
        RatingBase.prototype._getRating = function () {
            if (this.props.rating !== undefined) {
                return this._getClampedRating(this.props.rating);
            }
            if (this.state.rating !== undefined && this.state.rating !== null) {
                return this._getClampedRating(this.state.rating);
            }
            return 0;
        };
        RatingBase.prototype._getFillingPercentage = function (starPosition) {
            var rating = this._getRating();
            var ceilValue = Math.ceil(rating);
            var fillPercentage = 100;
            if (starPosition === rating) {
                fillPercentage = 100;
            }
            else if (starPosition === ceilValue) {
                fillPercentage = 100 * (rating % 1);
            }
            else if (starPosition > ceilValue) {
                fillPercentage = 0;
            }
            return fillPercentage;
        };
        RatingBase.defaultProps = {
            min: 1,
            max: 5,
        };
        return RatingBase;
    }(React.Component));
    exports.RatingBase = RatingBase;
});
//# sourceMappingURL=Rating.base.js.map