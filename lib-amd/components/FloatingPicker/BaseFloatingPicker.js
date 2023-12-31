define(["require", "exports", "tslib", "react", "./BaseFloatingPicker.scss", "../../Utilities", "../../Callout", "./Suggestions/SuggestionsControl"], function (require, exports, tslib_1, React, stylesImport, Utilities_1, Callout_1, SuggestionsControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable-next-line:no-any
    var styles = stylesImport;
    var BaseFloatingPicker = /** @class */ (function (_super) {
        tslib_1.__extends(BaseFloatingPicker, _super);
        function BaseFloatingPicker(basePickerProps) {
            var _this = _super.call(this, basePickerProps) || this;
            _this.root = React.createRef();
            _this.suggestionsControl = React.createRef();
            _this.SuggestionsControlOfProperType = SuggestionsControl_1.SuggestionsControl;
            _this.isComponentMounted = false;
            _this.onQueryStringChanged = function (queryString) {
                if (queryString !== _this.state.queryString) {
                    _this.setState({
                        queryString: queryString,
                    });
                    if (_this.props.onInputChanged) {
                        _this.props.onInputChanged(queryString);
                    }
                    _this.updateValue(queryString);
                }
            };
            _this.hidePicker = function () {
                var wasShownBeforeUpdate = _this.isSuggestionsShown;
                _this.setState({
                    suggestionsVisible: false,
                });
                if (_this.props.onSuggestionsHidden && wasShownBeforeUpdate) {
                    _this.props.onSuggestionsHidden();
                }
            };
            _this.showPicker = function (updateValue) {
                if (updateValue === void 0) { updateValue = false; }
                var wasShownBeforeUpdate = _this.isSuggestionsShown;
                _this.setState({
                    suggestionsVisible: true,
                });
                // Update the suggestions if updateValue == true
                var value = _this.props.inputElement ? _this.props.inputElement.value : '';
                if (updateValue) {
                    _this.updateValue(value);
                }
                if (_this.props.onSuggestionsShown && !wasShownBeforeUpdate) {
                    _this.props.onSuggestionsShown();
                }
            };
            _this.completeSuggestion = function () {
                if (_this.suggestionsControl.current && _this.suggestionsControl.current.hasSuggestionSelected()) {
                    _this.onChange(_this.suggestionsControl.current.currentSuggestion.item);
                }
            };
            _this.onSuggestionClick = function (ev, item, index) {
                _this.onChange(item);
                _this._updateSuggestionsVisible(false /*shouldShow*/);
            };
            _this.onSuggestionRemove = function (ev, item, index) {
                if (_this.props.onRemoveSuggestion) {
                    _this.props.onRemoveSuggestion(item);
                }
                if (_this.suggestionsControl.current) {
                    _this.suggestionsControl.current.removeSuggestion(index);
                }
            };
            _this.onKeyDown = function (ev) {
                if (!_this.state.suggestionsVisible ||
                    (_this.props.inputElement && !_this.props.inputElement.contains(ev.target))) {
                    return;
                }
                // tslint:disable-next-line:deprecation
                var keyCode = ev.which;
                switch (keyCode) {
                    case Utilities_1.KeyCodes.escape:
                        _this.hidePicker();
                        ev.preventDefault();
                        ev.stopPropagation();
                        break;
                    case Utilities_1.KeyCodes.tab:
                    case Utilities_1.KeyCodes.enter:
                        if (!ev.shiftKey &&
                            !ev.ctrlKey &&
                            _this.suggestionsControl.current &&
                            _this.suggestionsControl.current.handleKeyDown(keyCode)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        else {
                            _this._onValidateInput();
                        }
                        break;
                    case Utilities_1.KeyCodes.del:
                        if (_this.props.onRemoveSuggestion &&
                            _this.suggestionsControl.current &&
                            _this.suggestionsControl.current.hasSuggestionSelected &&
                            _this.suggestionsControl.current.currentSuggestion &&
                            ev.shiftKey) {
                            _this.props.onRemoveSuggestion(_this.suggestionsControl.current.currentSuggestion.item);
                            _this.suggestionsControl.current.removeSuggestion();
                            _this.forceUpdate();
                            ev.stopPropagation();
                        }
                        break;
                    case Utilities_1.KeyCodes.up:
                        if (_this.suggestionsControl.current && _this.suggestionsControl.current.handleKeyDown(keyCode)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            _this._updateActiveDescendant();
                        }
                        break;
                    case Utilities_1.KeyCodes.down:
                        if (_this.suggestionsControl.current && _this.suggestionsControl.current.handleKeyDown(keyCode)) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            _this._updateActiveDescendant();
                        }
                        break;
                }
            };
            _this._onValidateInput = function () {
                if (_this.state.queryString && _this.props.onValidateInput && _this.props.createGenericItem) {
                    var itemToConvert = _this.props.createGenericItem(_this.state.queryString, _this.props.onValidateInput(_this.state.queryString));
                    var convertedItems = _this.suggestionStore.convertSuggestionsToSuggestionItems([itemToConvert]);
                    _this.onChange(convertedItems[0].item);
                }
            };
            _this._async = new Utilities_1.Async(_this);
            Utilities_1.initializeComponentRef(_this);
            _this.suggestionStore = basePickerProps.suggestionsStore;
            _this.state = {
                queryString: '',
                didBind: false,
            };
            return _this;
        }
        Object.defineProperty(BaseFloatingPicker.prototype, "inputText", {
            get: function () {
                return this.state.queryString;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseFloatingPicker.prototype, "suggestions", {
            // tslint:disable-next-line:no-any
            get: function () {
                return this.suggestionStore.suggestions;
            },
            enumerable: true,
            configurable: true
        });
        BaseFloatingPicker.prototype.forceResolveSuggestion = function () {
            if (this.suggestionsControl.current && this.suggestionsControl.current.hasSuggestionSelected()) {
                this.completeSuggestion();
            }
            else {
                this._onValidateInput();
            }
        };
        Object.defineProperty(BaseFloatingPicker.prototype, "currentSelectedSuggestionIndex", {
            get: function () {
                return this.suggestionsControl.current ? this.suggestionsControl.current.currentSuggestionIndex : -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseFloatingPicker.prototype, "isSuggestionsShown", {
            get: function () {
                return this.state.suggestionsVisible === undefined ? false : this.state.suggestionsVisible;
            },
            enumerable: true,
            configurable: true
        });
        BaseFloatingPicker.prototype.componentDidMount = function () {
            this._bindToInputElement();
            this.isComponentMounted = true;
            this._onResolveSuggestions = this._async.debounce(this._onResolveSuggestions, this.props.resolveDelay);
        };
        BaseFloatingPicker.prototype.componentDidUpdate = function () {
            this._bindToInputElement();
        };
        BaseFloatingPicker.prototype.componentWillUnmount = function () {
            this._unbindFromInputElement();
            this.isComponentMounted = false;
        };
        // tslint:disable-next-line function-name
        BaseFloatingPicker.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
            if (newProps.suggestionItems) {
                this.updateSuggestions(newProps.suggestionItems);
            }
        };
        BaseFloatingPicker.prototype.updateSuggestions = function (suggestions, forceUpdate) {
            if (forceUpdate === void 0) { forceUpdate = false; }
            this.suggestionStore.updateSuggestions(suggestions);
            if (forceUpdate) {
                this.forceUpdate();
            }
        };
        BaseFloatingPicker.prototype.render = function () {
            var className = this.props.className;
            return (React.createElement("div", { ref: this.root, className: Utilities_1.css('ms-BasePicker ms-BaseFloatingPicker', className ? className : '') }, this.renderSuggestions()));
        };
        BaseFloatingPicker.prototype.renderSuggestions = function () {
            var TypedSuggestionsControl = this.SuggestionsControlOfProperType;
            return this.state.suggestionsVisible ? (React.createElement(Callout_1.Callout, tslib_1.__assign({ className: styles.callout, isBeakVisible: false, gapSpace: 5, target: this.props.inputElement, onDismiss: this.hidePicker, directionalHint: Callout_1.DirectionalHint.bottomLeftEdge, directionalHintForRTL: Callout_1.DirectionalHint.bottomRightEdge, calloutWidth: this.props.calloutWidth ? this.props.calloutWidth : 0 }, this.props.pickerCalloutProps),
                React.createElement(TypedSuggestionsControl, tslib_1.__assign({ onRenderSuggestion: this.props.onRenderSuggestionsItem, onSuggestionClick: this.onSuggestionClick, onSuggestionRemove: this.onSuggestionRemove, suggestions: this.suggestionStore.getSuggestions(), componentRef: this.suggestionsControl, completeSuggestion: this.completeSuggestion, shouldLoopSelection: false }, this.props.pickerSuggestionsProps)))) : null;
        };
        BaseFloatingPicker.prototype.onSelectionChange = function () {
            this.forceUpdate();
        };
        BaseFloatingPicker.prototype.updateValue = function (updatedValue) {
            if (updatedValue === '') {
                this.updateSuggestionWithZeroState();
            }
            else {
                this._onResolveSuggestions(updatedValue);
            }
        };
        BaseFloatingPicker.prototype.updateSuggestionWithZeroState = function () {
            if (this.props.onZeroQuerySuggestion) {
                var onEmptyInputFocus = this.props.onZeroQuerySuggestion;
                var suggestions = onEmptyInputFocus(this.props.selectedItems);
                this.updateSuggestionsList(suggestions);
            }
            else {
                this.hidePicker();
            }
        };
        BaseFloatingPicker.prototype.updateSuggestionsList = function (suggestions) {
            var _this = this;
            var suggestionsArray = suggestions;
            var suggestionsPromiseLike = suggestions;
            // Check to see if the returned value is an array, if it is then just pass it into the next function.
            // If the returned value is not an array then check to see if it's a promise or PromiseLike.
            // If it is then resolve it asynchronously.
            if (Array.isArray(suggestionsArray)) {
                this.updateSuggestions(suggestionsArray, true /*forceUpdate*/);
            }
            else if (suggestionsPromiseLike && suggestionsPromiseLike.then) {
                // Ensure that the promise will only use the callback if it was the most recent one.
                var promise_1 = (this.currentPromise = suggestionsPromiseLike);
                promise_1.then(function (newSuggestions) {
                    // Only update if the next promise has not yet resolved and
                    // the floating picker is still mounted.
                    if (promise_1 === _this.currentPromise && _this.isComponentMounted) {
                        _this.updateSuggestions(newSuggestions, true /*forceUpdate*/);
                    }
                });
            }
        };
        BaseFloatingPicker.prototype.onChange = function (item) {
            if (this.props.onChange) {
                this.props.onChange(item);
            }
        };
        BaseFloatingPicker.prototype._updateActiveDescendant = function () {
            if (this.props.inputElement && this.suggestionsControl.current && this.suggestionsControl.current.selectedElement) {
                var selectedElId = this.suggestionsControl.current.selectedElement.getAttribute('id');
                if (selectedElId) {
                    this.props.inputElement.setAttribute('aria-activedescendant', selectedElId);
                }
            }
        };
        BaseFloatingPicker.prototype._onResolveSuggestions = function (updatedValue) {
            var suggestions = this.props.onResolveSuggestions(updatedValue, this.props.selectedItems);
            this._updateSuggestionsVisible(true /*shouldShow*/);
            if (suggestions !== null) {
                this.updateSuggestionsList(suggestions);
            }
        };
        BaseFloatingPicker.prototype._updateSuggestionsVisible = function (shouldShow) {
            if (shouldShow) {
                this.showPicker();
            }
            else {
                this.hidePicker();
            }
        };
        BaseFloatingPicker.prototype._bindToInputElement = function () {
            if (this.props.inputElement && !this.state.didBind) {
                this.props.inputElement.addEventListener('keydown', this.onKeyDown);
                this.setState({ didBind: true });
            }
        };
        BaseFloatingPicker.prototype._unbindFromInputElement = function () {
            if (this.props.inputElement && this.state.didBind) {
                this.props.inputElement.removeEventListener('keydown', this.onKeyDown);
                this.setState({ didBind: false });
            }
        };
        return BaseFloatingPicker;
    }(React.Component));
    exports.BaseFloatingPicker = BaseFloatingPicker;
});
//# sourceMappingURL=BaseFloatingPicker.js.map