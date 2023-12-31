define(["require", "exports", "tslib", "react", "../../../Utilities", "../../../Button", "../../../Spinner", "../../../Announced", "./Suggestions.types", "./SuggestionsItem", "./SuggestionsItem.styles", "./Suggestions.scss"], function (require, exports, tslib_1, React, Utilities_1, Button_1, Spinner_1, Announced_1, Suggestions_types_1, SuggestionsItem_1, SuggestionsItem_styles_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var legacyStyles = stylesImport;
    var getClassNames = Utilities_1.classNamesFunction();
    var StyledSuggestionsItem = Utilities_1.styled(SuggestionsItem_1.SuggestionsItem, SuggestionsItem_styles_1.getStyles, undefined, { scope: 'SuggestionItem' });
    /**
     * {@docCategory Pickers}
     */
    var Suggestions = /** @class */ (function (_super) {
        tslib_1.__extends(Suggestions, _super);
        function Suggestions(suggestionsProps) {
            var _this = _super.call(this, suggestionsProps) || this;
            _this._forceResolveButton = React.createRef();
            _this._searchForMoreButton = React.createRef();
            _this._selectedElement = React.createRef();
            /**
             * Returns true if the event was handled, false otherwise
             */
            _this.tryHandleKeyDown = function (keyCode, currentSuggestionIndex) {
                var isEventHandled = false;
                var newSelectedActionType = null;
                var currentSelectedAction = _this.state.selectedActionType;
                var suggestionLength = _this.props.suggestions.length;
                if (keyCode === Utilities_1.KeyCodes.down) {
                    switch (currentSelectedAction) {
                        case Suggestions_types_1.SuggestionActionType.forceResolve:
                            if (suggestionLength > 0) {
                                _this._refocusOnSuggestions(keyCode);
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.none;
                            }
                            else if (_this._searchForMoreButton.current) {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.searchMore;
                            }
                            else {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.forceResolve;
                            }
                            break;
                        case Suggestions_types_1.SuggestionActionType.searchMore:
                            if (_this._forceResolveButton.current) {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.forceResolve;
                            }
                            else if (suggestionLength > 0) {
                                _this._refocusOnSuggestions(keyCode);
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.none;
                            }
                            else {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.searchMore;
                            }
                            break;
                        case Suggestions_types_1.SuggestionActionType.none:
                            if (currentSuggestionIndex === -1 && _this._forceResolveButton.current) {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.forceResolve;
                            }
                            break;
                    }
                }
                else if (keyCode === Utilities_1.KeyCodes.up) {
                    switch (currentSelectedAction) {
                        case Suggestions_types_1.SuggestionActionType.forceResolve:
                            if (_this._searchForMoreButton.current) {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.searchMore;
                            }
                            else if (suggestionLength > 0) {
                                _this._refocusOnSuggestions(keyCode);
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.none;
                            }
                            break;
                        case Suggestions_types_1.SuggestionActionType.searchMore:
                            if (suggestionLength > 0) {
                                _this._refocusOnSuggestions(keyCode);
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.none;
                            }
                            else if (_this._forceResolveButton.current) {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.forceResolve;
                            }
                            break;
                        case Suggestions_types_1.SuggestionActionType.none:
                            if (currentSuggestionIndex === -1 && _this._searchForMoreButton.current) {
                                newSelectedActionType = Suggestions_types_1.SuggestionActionType.searchMore;
                            }
                            break;
                    }
                }
                if (newSelectedActionType !== null) {
                    _this.setState({ selectedActionType: newSelectedActionType });
                    isEventHandled = true;
                }
                return isEventHandled;
            };
            _this._getAlertText = function () {
                var _a = _this.props, isLoading = _a.isLoading, isSearching = _a.isSearching, suggestions = _a.suggestions, suggestionsAvailableAlertText = _a.suggestionsAvailableAlertText, noResultsFoundText = _a.noResultsFoundText;
                if (!isLoading && !isSearching) {
                    if (suggestions.length > 0) {
                        return suggestionsAvailableAlertText || '';
                    }
                    if (noResultsFoundText) {
                        return noResultsFoundText;
                    }
                }
                return '';
            };
            _this._getMoreResults = function () {
                if (_this.props.onGetMoreResults) {
                    _this.props.onGetMoreResults();
                }
            };
            _this._forceResolve = function () {
                if (_this.props.createGenericItem) {
                    _this.props.createGenericItem();
                }
            };
            _this._shouldShowForceResolve = function () {
                return _this.props.showForceResolve ? _this.props.showForceResolve() : false;
            };
            _this._onClickTypedSuggestionsItem = function (item, index) {
                return function (ev) {
                    _this.props.onSuggestionClick(ev, item, index);
                };
            };
            _this._refocusOnSuggestions = function (keyCode) {
                if (typeof _this.props.refocusSuggestions === 'function') {
                    _this.props.refocusSuggestions(keyCode);
                }
            };
            _this._onRemoveTypedSuggestionsItem = function (item, index) {
                return function (ev) {
                    var onSuggestionRemove = _this.props.onSuggestionRemove;
                    onSuggestionRemove(ev, item, index);
                    ev.stopPropagation();
                };
            };
            Utilities_1.initializeComponentRef(_this);
            _this.state = {
                selectedActionType: Suggestions_types_1.SuggestionActionType.none,
            };
            return _this;
        }
        Suggestions.prototype.componentDidMount = function () {
            this.scrollSelected();
            this.activeSelectedElement = this._selectedElement ? this._selectedElement.current : null;
        };
        Suggestions.prototype.componentDidUpdate = function () {
            // Only scroll to selected element if the selected element has changed. Otherwise do nothing.
            // This prevents some odd behavior where scrolling the active element out of view and clicking on a selected element
            // will trigger a focus event and not give the clicked element the click.
            if (this._selectedElement.current && this.activeSelectedElement !== this._selectedElement.current) {
                this.scrollSelected();
                this.activeSelectedElement = this._selectedElement.current;
            }
        };
        Suggestions.prototype.render = function () {
            var _a, _b;
            var _this = this;
            var _c = this.props, forceResolveText = _c.forceResolveText, mostRecentlyUsedHeaderText = _c.mostRecentlyUsedHeaderText, searchForMoreText = _c.searchForMoreText, className = _c.className, moreSuggestionsAvailable = _c.moreSuggestionsAvailable, noResultsFoundText = _c.noResultsFoundText, suggestions = _c.suggestions, isLoading = _c.isLoading, isSearching = _c.isSearching, loadingText = _c.loadingText, onRenderNoResultFound = _c.onRenderNoResultFound, searchingText = _c.searchingText, isMostRecentlyUsedVisible = _c.isMostRecentlyUsedVisible, resultsMaximumNumber = _c.resultsMaximumNumber, resultsFooterFull = _c.resultsFooterFull, resultsFooter = _c.resultsFooter, _d = _c.isResultsFooterVisible, isResultsFooterVisible = _d === void 0 ? true : _d, suggestionsHeaderText = _c.suggestionsHeaderText, suggestionsClassName = _c.suggestionsClassName, theme = _c.theme, styles = _c.styles, suggestionsListId = _c.suggestionsListId;
            // TODO
            // Clean this up by leaving only the first part after removing support for SASS.
            // Currently we can not remove the SASS styles from Suggestions class because it
            // might be used by consumers separately from pickers extending from BasePicker
            // and have not used the new 'styles' prop. Because it's expecting a type parameter,
            // we can not use the 'styled' function without adding some helpers which can break
            // downstream consumers who did not use the new helpers.
            // We check for 'styles' prop which is going to be injected by the 'styled' HOC
            // in BasePicker when the typed Suggestions class is ready to be rendered. If the check
            // passes we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
            // then we just use the old SASS styles instead.
            this._classNames = styles
                ? getClassNames(styles, {
                    theme: theme,
                    className: className,
                    suggestionsClassName: suggestionsClassName,
                    forceResolveButtonSelected: this.state.selectedActionType === Suggestions_types_1.SuggestionActionType.forceResolve,
                    searchForMoreButtonSelected: this.state.selectedActionType === Suggestions_types_1.SuggestionActionType.searchMore,
                })
                : {
                    root: Utilities_1.css('ms-Suggestions', className, legacyStyles.root),
                    title: Utilities_1.css('ms-Suggestions-title', legacyStyles.suggestionsTitle),
                    searchForMoreButton: Utilities_1.css('ms-SearchMore-button', legacyStyles.actionButton, (_a = {},
                        _a['is-selected ' + legacyStyles.buttonSelected] = this.state.selectedActionType === Suggestions_types_1.SuggestionActionType.searchMore,
                        _a)),
                    forceResolveButton: Utilities_1.css('ms-forceResolve-button', legacyStyles.actionButton, (_b = {},
                        _b['is-selected ' + legacyStyles.buttonSelected] = this.state.selectedActionType === Suggestions_types_1.SuggestionActionType.forceResolve,
                        _b)),
                    suggestionsAvailable: Utilities_1.css('ms-Suggestions-suggestionsAvailable', legacyStyles.suggestionsAvailable),
                    suggestionsContainer: Utilities_1.css('ms-Suggestions-container', legacyStyles.suggestionsContainer, suggestionsClassName),
                    noSuggestions: Utilities_1.css('ms-Suggestions-none', legacyStyles.suggestionsNone),
                };
            var spinnerStyles = this._classNames.subComponentStyles
                ? this._classNames.subComponentStyles.spinner
                : undefined;
            // TODO: cleanup after refactor of pickers to composition pattern and remove SASS support.
            var spinnerClassNameOrStyles = styles
                ? { styles: spinnerStyles }
                : { className: Utilities_1.css('ms-Suggestions-spinner', legacyStyles.suggestionsSpinner) };
            var noResults = function () {
                return noResultsFoundText ? React.createElement("div", { className: _this._classNames.noSuggestions }, noResultsFoundText) : null;
            };
            // MostRecently Used text should supercede the header text if it's there and available.
            var headerText = suggestionsHeaderText;
            if (isMostRecentlyUsedVisible && mostRecentlyUsedHeaderText) {
                headerText = mostRecentlyUsedHeaderText;
            }
            var footerTitle = undefined;
            if (isResultsFooterVisible) {
                footerTitle = suggestions.length >= resultsMaximumNumber ? resultsFooterFull : resultsFooter;
            }
            var hasNoSuggestions = (!suggestions || !suggestions.length) && !isLoading;
            var divProps = hasNoSuggestions || isLoading ? { role: 'dialog', id: suggestionsListId } : {};
            return (React.createElement("div", tslib_1.__assign({ className: this._classNames.root }, divProps),
                React.createElement(Announced_1.Announced, { message: this._getAlertText(), "aria-live": "polite" }),
                headerText ? React.createElement("div", { className: this._classNames.title }, headerText) : null,
                forceResolveText && this._shouldShowForceResolve() && (React.createElement(Button_1.CommandButton, { componentRef: this._forceResolveButton, className: this._classNames.forceResolveButton, onClick: this._forceResolve, "data-automationid": 'sug-forceResolve' }, forceResolveText)),
                isLoading && React.createElement(Spinner_1.Spinner, tslib_1.__assign({}, spinnerClassNameOrStyles, { label: loadingText })),
                hasNoSuggestions
                    ? onRenderNoResultFound
                        ? onRenderNoResultFound(undefined, noResults)
                        : noResults()
                    : this._renderSuggestions(),
                searchForMoreText && moreSuggestionsAvailable && (React.createElement(Button_1.CommandButton, { componentRef: this._searchForMoreButton, className: this._classNames.searchForMoreButton, iconProps: { iconName: 'Search' }, onClick: this._getMoreResults }, searchForMoreText)),
                isSearching ? React.createElement(Spinner_1.Spinner, tslib_1.__assign({}, spinnerClassNameOrStyles, { label: searchingText })) : null,
                footerTitle && !moreSuggestionsAvailable && !isMostRecentlyUsedVisible && !isSearching ? (React.createElement("div", { className: this._classNames.title }, footerTitle(this.props))) : null));
        };
        Suggestions.prototype.hasSuggestedAction = function () {
            return !!this._searchForMoreButton.current || !!this._forceResolveButton.current;
        };
        Suggestions.prototype.hasSuggestedActionSelected = function () {
            return this.state.selectedActionType !== Suggestions_types_1.SuggestionActionType.none;
        };
        Suggestions.prototype.executeSelectedAction = function () {
            switch (this.state.selectedActionType) {
                case Suggestions_types_1.SuggestionActionType.forceResolve:
                    this._forceResolve();
                    break;
                case Suggestions_types_1.SuggestionActionType.searchMore:
                    this._getMoreResults();
                    break;
            }
        };
        Suggestions.prototype.focusAboveSuggestions = function () {
            if (this._forceResolveButton.current) {
                this.setState({ selectedActionType: Suggestions_types_1.SuggestionActionType.forceResolve });
            }
            else if (this._searchForMoreButton.current) {
                this.setState({ selectedActionType: Suggestions_types_1.SuggestionActionType.searchMore });
            }
        };
        Suggestions.prototype.focusBelowSuggestions = function () {
            if (this._searchForMoreButton.current) {
                this.setState({ selectedActionType: Suggestions_types_1.SuggestionActionType.searchMore });
            }
            else if (this._forceResolveButton.current) {
                this.setState({ selectedActionType: Suggestions_types_1.SuggestionActionType.forceResolve });
            }
        };
        Suggestions.prototype.focusSearchForMoreButton = function () {
            if (this._searchForMoreButton.current) {
                this._searchForMoreButton.current.focus();
            }
        };
        // TODO get the element to scroll into view properly regardless of direction.
        Suggestions.prototype.scrollSelected = function () {
            if (this._selectedElement.current && this._selectedElement.current.scrollIntoView !== undefined) {
                this._selectedElement.current.scrollIntoView(false);
            }
        };
        Suggestions.prototype._renderSuggestions = function () {
            var _this = this;
            var _a = this.props, onRenderSuggestion = _a.onRenderSuggestion, removeSuggestionAriaLabel = _a.removeSuggestionAriaLabel, suggestionsItemClassName = _a.suggestionsItemClassName, resultsMaximumNumber = _a.resultsMaximumNumber, showRemoveButtons = _a.showRemoveButtons, suggestionsContainerAriaLabel = _a.suggestionsContainerAriaLabel, suggestionsListId = _a.suggestionsListId;
            var suggestions = this.props.suggestions;
            var StyledTypedSuggestionsItem = StyledSuggestionsItem;
            var selectedIndex = -1;
            suggestions.some(function (element, index) {
                if (element.selected) {
                    selectedIndex = index;
                    return true;
                }
                return false;
            });
            if (resultsMaximumNumber) {
                suggestions =
                    selectedIndex >= resultsMaximumNumber
                        ? suggestions.slice(selectedIndex - resultsMaximumNumber + 1, selectedIndex + 1)
                        : suggestions.slice(0, resultsMaximumNumber);
            }
            if (suggestions.length === 0) {
                return null;
            }
            return (React.createElement("div", { className: this._classNames.suggestionsContainer, id: suggestionsListId, role: "listbox", "aria-label": suggestionsContainerAriaLabel }, suggestions.map(function (suggestion, index) { return (React.createElement("div", { ref: suggestion.selected ? _this._selectedElement : undefined, 
                // tslint:disable-next-line:no-string-literal
                key: suggestion.item['key'] ? suggestion.item['key'] : index, id: 'sug-' + index, "aria-selected": suggestion.selected, role: "option", "aria-label": suggestion.ariaLabel },
                React.createElement(StyledTypedSuggestionsItem, { suggestionModel: suggestion, RenderSuggestion: onRenderSuggestion, onClick: _this._onClickTypedSuggestionsItem(suggestion.item, index), className: suggestionsItemClassName, showRemoveButton: showRemoveButtons, removeButtonAriaLabel: removeSuggestionAriaLabel, onRemoveItem: _this._onRemoveTypedSuggestionsItem(suggestion.item, index) }))); })));
        };
        return Suggestions;
    }(React.Component));
    exports.Suggestions = Suggestions;
});
//# sourceMappingURL=Suggestions.js.map