define(["require", "exports", "tslib", "react", "../../../Utilities", "../../../Styling", "../PersonaPresence/index", "../../../Icon", "../../../Image", "../Persona.types", "../PersonaInitialsColor", "../PersonaConsts"], function (require, exports, tslib_1, React, Utilities_1, Styling_1, index_1, Icon_1, Image_1, Persona_types_1, PersonaInitialsColor_1, PersonaConsts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction({
        // There can be many PersonaCoin rendered with different sizes.
        // Therefore setting a larger cache size.
        cacheSize: 100,
    });
    /**
     * PersonaCoin with no default styles.
     * [Use the `getStyles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
     */
    var PersonaCoinBase = /** @class */ (function (_super) {
        tslib_1.__extends(PersonaCoinBase, _super);
        function PersonaCoinBase(props) {
            var _this = _super.call(this, props) || this;
            _this._onRenderCoin = function (props) {
                var _a = _this.props, coinSize = _a.coinSize, styles = _a.styles, imageUrl = _a.imageUrl, imageAlt = _a.imageAlt, imageShouldFadeIn = _a.imageShouldFadeIn, imageShouldStartVisible = _a.imageShouldStartVisible, theme = _a.theme, showUnknownPersonaCoin = _a.showUnknownPersonaCoin;
                // Render the Image component only if an image URL is provided
                if (!imageUrl) {
                    return null;
                }
                var size = _this.props.size;
                var classNames = getClassNames(styles, {
                    theme: theme,
                    size: size,
                    showUnknownPersonaCoin: showUnknownPersonaCoin,
                });
                var dimension = coinSize || PersonaConsts_1.sizeToPixels[size];
                return (React.createElement(Image_1.Image, { className: classNames.image, imageFit: Image_1.ImageFit.cover, src: imageUrl, width: dimension, height: dimension, alt: imageAlt, shouldFadeIn: imageShouldFadeIn, shouldStartVisible: imageShouldStartVisible, onLoadingStateChange: _this._onPhotoLoadingStateChange }));
            };
            _this._onRenderInitials = function (props) {
                var imageInitials = props.imageInitials;
                var allowPhoneInitials = props.allowPhoneInitials, showUnknownPersonaCoin = props.showUnknownPersonaCoin;
                if (showUnknownPersonaCoin) {
                    return React.createElement(Icon_1.Icon, { iconName: "Help" });
                }
                var isRTL = Utilities_1.getRTL(_this.props.theme);
                imageInitials = imageInitials || Utilities_1.getInitials(_this._getText(), isRTL, allowPhoneInitials);
                return imageInitials !== '' ? React.createElement("span", null, imageInitials) : React.createElement(Icon_1.Icon, { iconName: "Contact" });
            };
            _this._onPhotoLoadingStateChange = function (loadState) {
                _this.setState({
                    isImageLoaded: loadState === Image_1.ImageLoadState.loaded,
                    isImageError: loadState === Image_1.ImageLoadState.error,
                });
                _this.props.onPhotoLoadingStateChange && _this.props.onPhotoLoadingStateChange(loadState);
            };
            
            _this.state = {
                isImageLoaded: false,
                isImageError: false,
            };
            return _this;
        }
        // tslint:disable-next-line function-name
        PersonaCoinBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
            if (nextProps.imageUrl !== this.props.imageUrl) {
                this.setState({
                    isImageLoaded: false,
                    isImageError: false,
                });
            }
        };
        PersonaCoinBase.prototype.render = function () {
            var _a = this.props, className = _a.className, coinProps = _a.coinProps, showUnknownPersonaCoin = _a.showUnknownPersonaCoin, coinSize = _a.coinSize, styles = _a.styles, imageUrl = _a.imageUrl, isOutOfOffice = _a.isOutOfOffice, 
            // tslint:disable:deprecation
            _b = _a.onRenderCoin, 
            // tslint:disable:deprecation
            onRenderCoin = _b === void 0 ? this._onRenderCoin : _b, _c = _a.onRenderPersonaCoin, onRenderPersonaCoin = _c === void 0 ? onRenderCoin : _c, 
            // tslint:enable:deprecation
            _d = _a.onRenderInitials, 
            // tslint:enable:deprecation
            onRenderInitials = _d === void 0 ? this._onRenderInitials : _d, presence = _a.presence, presenceTitle = _a.presenceTitle, presenceColors = _a.presenceColors, showInitialsUntilImageLoads = _a.showInitialsUntilImageLoads, theme = _a.theme;
            var size = this.props.size;
            var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
            var divCoinProps = Utilities_1.getNativeProps(coinProps || {}, Utilities_1.divProperties);
            var coinSizeStyle = coinSize ? { width: coinSize, height: coinSize } : undefined;
            var hideImage = showUnknownPersonaCoin;
            var personaPresenceProps = {
                coinSize: coinSize,
                isOutOfOffice: isOutOfOffice,
                presence: presence,
                presenceTitle: presenceTitle,
                presenceColors: presenceColors,
                size: size,
                theme: theme,
            };
            // Use getStyles from props, or fall back to getStyles from styles file.
            var classNames = getClassNames(styles, {
                theme: theme,
                className: coinProps && coinProps.className ? coinProps.className : className,
                size: size,
                coinSize: coinSize,
                showUnknownPersonaCoin: showUnknownPersonaCoin,
            });
            var shouldRenderInitials = Boolean(!this.state.isImageLoaded &&
                ((showInitialsUntilImageLoads && imageUrl) || !imageUrl || this.state.isImageError || hideImage));
            return (React.createElement("div", tslib_1.__assign({ role: "presentation" }, divProps, { className: classNames.coin }),
                // tslint:disable-next-line:deprecation
                size !== Persona_types_1.PersonaSize.size8 && size !== Persona_types_1.PersonaSize.size10 && size !== Persona_types_1.PersonaSize.tiny ? (React.createElement("div", tslib_1.__assign({ role: "presentation" }, divCoinProps, { className: classNames.imageArea, style: coinSizeStyle }),
                    shouldRenderInitials && (React.createElement("div", { className: Styling_1.mergeStyles(classNames.initials, !showUnknownPersonaCoin && { backgroundColor: PersonaInitialsColor_1.getPersonaInitialsColor(this.props) }), style: coinSizeStyle, "aria-hidden": "true" }, onRenderInitials(this.props, this._onRenderInitials))),
                    !hideImage && onRenderPersonaCoin(this.props, this._onRenderCoin),
                    React.createElement(index_1.PersonaPresence, tslib_1.__assign({}, personaPresenceProps)))) : // Otherwise, render just PersonaPresence.
                    this.props.presence ? (React.createElement(index_1.PersonaPresence, tslib_1.__assign({}, personaPresenceProps))) : (
                    // Just render Contact Icon if there isn't a Presence prop.
                    React.createElement(Icon_1.Icon, { iconName: "Contact", className: classNames.size10WithoutPresenceIcon })),
                this.props.children));
        };
        /**
         * Deprecation helper for getting text.
         */
        PersonaCoinBase.prototype._getText = function () {
            // tslint:disable-next-line:deprecation
            return this.props.text || this.props.primaryText || '';
        };
        PersonaCoinBase.defaultProps = {
            size: Persona_types_1.PersonaSize.size48,
            presence: Persona_types_1.PersonaPresence.none,
            imageAlt: '',
        };
        return PersonaCoinBase;
    }(React.Component));
    exports.PersonaCoinBase = PersonaCoinBase;
});
//# sourceMappingURL=PersonaCoin.base.js.map