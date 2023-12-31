define(["require", "exports", "tslib", "react", "../../../Utilities", "../../../Pickers", "./SuggestionsCore.scss"], function (require, exports, tslib_1, React, Utilities_1, Pickers_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable-next-line:no-any
    var styles = stylesImport;
    /**
     * Class when used with SuggestionsStore, renders a basic suggestions control
     */
    var SuggestionsCore = /** @class */ (function (_super) {
        tslib_1.__extends(SuggestionsCore, _super);
        function SuggestionsCore(suggestionsProps) {
            var _this = _super.call(this, suggestionsProps) || this;
            _this._selectedElement = React.createRef();
            _this.SuggestionsItemOfProperType = Pickers_1.SuggestionsItem;
            _this._onClickTypedSuggestionsItem = function (item, index) {
                return function (ev) {
                    _this.props.onSuggestionClick(ev, item, index);
                };
            };
            _this._onRemoveTypedSuggestionsItem = function (item, index) {
                return function (ev) {
                    var onSuggestionRemove = _this.props.onSuggestionRemove;
                    onSuggestionRemove(ev, item, index);
                    ev.stopPropagation();
                };
            };
            Utilities_1.initializeComponentRef(_this);
            _this.currentIndex = -1;
            return _this;
        }
        /**
         * Increments the selected suggestion index
         */
        SuggestionsCore.prototype.nextSuggestion = function () {
            var suggestions = this.props.suggestions;
            if (suggestions && suggestions.length > 0) {
                if (this.currentIndex === -1) {
                    this.setSelectedSuggestion(0);
                    return true;
                }
                else if (this.currentIndex < suggestions.length - 1) {
                    this.setSelectedSuggestion(this.currentIndex + 1);
                    return true;
                }
                else if (this.props.shouldLoopSelection && this.currentIndex === suggestions.length - 1) {
                    this.setSelectedSuggestion(0);
                    return true;
                }
            }
            return false;
        };
        /**
         * Decrements the selected suggestion index
         */
        SuggestionsCore.prototype.previousSuggestion = function () {
            var suggestions = this.props.suggestions;
            if (suggestions && suggestions.length > 0) {
                if (this.currentIndex === -1) {
                    this.setSelectedSuggestion(suggestions.length - 1);
                    return true;
                }
                else if (this.currentIndex > 0) {
                    this.setSelectedSuggestion(this.currentIndex - 1);
                    return true;
                }
                else if (this.props.shouldLoopSelection && this.currentIndex === 0) {
                    this.setSelectedSuggestion(suggestions.length - 1);
                    return true;
                }
            }
            return false;
        };
        Object.defineProperty(SuggestionsCore.prototype, "selectedElement", {
            get: function () {
                return this._selectedElement.current || undefined;
            },
            enumerable: true,
            configurable: true
        });
        SuggestionsCore.prototype.getCurrentItem = function () {
            return this.props.suggestions[this.currentIndex];
        };
        SuggestionsCore.prototype.getSuggestionAtIndex = function (index) {
            return this.props.suggestions[index];
        };
        SuggestionsCore.prototype.hasSuggestionSelected = function () {
            return this.currentIndex !== -1 && this.currentIndex < this.props.suggestions.length;
        };
        SuggestionsCore.prototype.removeSuggestion = function (index) {
            this.props.suggestions.splice(index, 1);
        };
        SuggestionsCore.prototype.deselectAllSuggestions = function () {
            if (this.currentIndex > -1 && this.props.suggestions[this.currentIndex]) {
                this.props.suggestions[this.currentIndex].selected = false;
                this.currentIndex = -1;
                this.forceUpdate();
            }
        };
        SuggestionsCore.prototype.setSelectedSuggestion = function (index) {
            var suggestions = this.props.suggestions;
            if (index > suggestions.length - 1 || index < 0) {
                this.currentIndex = 0;
                this.currentSuggestion.selected = false;
                this.currentSuggestion = suggestions[0];
                this.currentSuggestion.selected = true;
            }
            else {
                if (this.currentIndex > -1 && suggestions[this.currentIndex]) {
                    suggestions[this.currentIndex].selected = false;
                }
                suggestions[index].selected = true;
                this.currentIndex = index;
                this.currentSuggestion = suggestions[index];
            }
            this.forceUpdate();
        };
        SuggestionsCore.prototype.componentDidUpdate = function () {
            this.scrollSelected();
        };
        SuggestionsCore.prototype.render = function () {
            var _this = this;
            var _a = this.props, onRenderSuggestion = _a.onRenderSuggestion, suggestionsItemClassName = _a.suggestionsItemClassName, resultsMaximumNumber = _a.resultsMaximumNumber, showRemoveButtons = _a.showRemoveButtons, suggestionsContainerAriaLabel = _a.suggestionsContainerAriaLabel;
            var TypedSuggestionsItem = this.SuggestionsItemOfProperType;
            var suggestions = this.props.suggestions;
            if (resultsMaximumNumber) {
                suggestions = suggestions.slice(0, resultsMaximumNumber);
            }
            return (React.createElement("div", { className: Utilities_1.css('ms-Suggestions-container', styles.suggestionsContainer), id: "suggestion-list", role: "list", "aria-label": suggestionsContainerAriaLabel }, suggestions.map(function (suggestion, index) { return (React.createElement("div", { ref: suggestion.selected || index === _this.currentIndex ? _this._selectedElement : undefined, 
                // tslint:disable
                key: suggestion.item['key'] ? suggestion.item['key'] : index, 
                // tslint:enable
                id: 'sug-' + index, role: "listitem", "aria-label": suggestion.ariaLabel },
                React.createElement(TypedSuggestionsItem, { id: 'sug-item' + index, suggestionModel: suggestion, 
                    // tslint:disable-next-line:no-any
                    RenderSuggestion: onRenderSuggestion, onClick: _this._onClickTypedSuggestionsItem(suggestion.item, index), className: suggestionsItemClassName, showRemoveButton: showRemoveButtons, onRemoveItem: _this._onRemoveTypedSuggestionsItem(suggestion.item, index), isSelectedOverride: index === _this.currentIndex }))); })));
        };
        // TODO get the element to scroll into view properly regardless of direction.
        SuggestionsCore.prototype.scrollSelected = function () {
            var _a;
            if (((_a = this._selectedElement.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView) !== undefined) {
                this._selectedElement.current.scrollIntoView(false);
            }
        };
        return SuggestionsCore;
    }(React.Component));
    exports.SuggestionsCore = SuggestionsCore;
});
//# sourceMappingURL=SuggestionsCore.js.map