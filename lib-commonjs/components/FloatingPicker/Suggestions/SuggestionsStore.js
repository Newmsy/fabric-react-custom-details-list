"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SuggestionsStore = /** @class */ (function () {
    function SuggestionsStore(options) {
        var _this = this;
        this._isSuggestionModel = function (value) {
            return value.item !== undefined;
        };
        this._ensureSuggestionModel = function (suggestion) {
            if (_this._isSuggestionModel(suggestion)) {
                return suggestion;
            }
            else {
                return {
                    item: suggestion,
                    selected: false,
                    ariaLabel: _this.getAriaLabel !== undefined
                        ? _this.getAriaLabel(suggestion)
                        : suggestion.name || // tslint:disable-line:no-any
                            suggestion.text ||
                            suggestion.primaryText,
                };
            }
        };
        this.suggestions = [];
        this.getAriaLabel = options && options.getAriaLabel;
    }
    SuggestionsStore.prototype.updateSuggestions = function (newSuggestions) {
        if (newSuggestions && newSuggestions.length > 0) {
            this.suggestions = this.convertSuggestionsToSuggestionItems(newSuggestions);
        }
        else {
            this.suggestions = [];
        }
    };
    SuggestionsStore.prototype.getSuggestions = function () {
        return this.suggestions;
    };
    SuggestionsStore.prototype.getSuggestionAtIndex = function (index) {
        return this.suggestions[index];
    };
    SuggestionsStore.prototype.removeSuggestion = function (index) {
        this.suggestions.splice(index, 1);
    };
    SuggestionsStore.prototype.convertSuggestionsToSuggestionItems = function (suggestions) {
        return Array.isArray(suggestions) ? suggestions.map(this._ensureSuggestionModel) : [];
    };
    return SuggestionsStore;
}());
exports.SuggestionsStore = SuggestionsStore;
//# sourceMappingURL=SuggestionsStore.js.map