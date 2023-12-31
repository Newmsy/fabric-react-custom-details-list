import { __assign, __extends } from "tslib";
import * as React from 'react';
import { css, KeyCodes, initializeComponentRef } from '../../../Utilities';
import { SuggestionsCore } from './SuggestionsCore';
import * as stylesImport from './SuggestionsControl.scss';
import { hiddenContentStyle, mergeStyles } from '../../../Styling';
// tslint:disable-next-line:no-any
var styles = stylesImport;
export var SuggestionItemType;
(function (SuggestionItemType) {
    SuggestionItemType[SuggestionItemType["header"] = 0] = "header";
    SuggestionItemType[SuggestionItemType["suggestion"] = 1] = "suggestion";
    SuggestionItemType[SuggestionItemType["footer"] = 2] = "footer";
})(SuggestionItemType || (SuggestionItemType = {}));
var SuggestionsHeaderFooterItem = /** @class */ (function (_super) {
    __extends(SuggestionsHeaderFooterItem, _super);
    function SuggestionsHeaderFooterItem(props) {
        var _this = _super.call(this, props) || this;
        initializeComponentRef(_this);
        return _this;
    }
    SuggestionsHeaderFooterItem.prototype.render = function () {
        var _a;
        var _b = this.props, renderItem = _b.renderItem, onExecute = _b.onExecute, isSelected = _b.isSelected, id = _b.id, className = _b.className;
        return onExecute ? (React.createElement("div", { id: id, onClick: onExecute, className: css('ms-Suggestions-sectionButton', className, styles.actionButton, (_a = {},
                _a['is-selected ' + styles.buttonSelected] = isSelected,
                _a)) }, renderItem())) : (React.createElement("div", { id: id, className: css('ms-Suggestions-section', className, styles.suggestionsTitle) }, renderItem()));
    };
    return SuggestionsHeaderFooterItem;
}(React.Component));
export { SuggestionsHeaderFooterItem };
/**
 * Class when used with SuggestionsStore, renders a suggestions control with customizable headers and footers
 */
var SuggestionsControl = /** @class */ (function (_super) {
    __extends(SuggestionsControl, _super);
    function SuggestionsControl(suggestionsProps) {
        var _this = _super.call(this, suggestionsProps) || this;
        _this._selectedElement = React.createRef();
        _this._suggestions = React.createRef();
        _this.SuggestionsOfProperType = SuggestionsCore;
        initializeComponentRef(_this);
        _this.state = {
            selectedHeaderIndex: -1,
            selectedFooterIndex: -1,
            suggestions: suggestionsProps.suggestions,
        };
        return _this;
    }
    SuggestionsControl.prototype.componentDidMount = function () {
        this.resetSelectedItem();
    };
    SuggestionsControl.prototype.componentDidUpdate = function () {
        this.scrollSelected();
    };
    // tslint:disable-next-line function-name
    SuggestionsControl.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        var _this = this;
        if (newProps.suggestions) {
            this.setState({ suggestions: newProps.suggestions }, function () {
                _this.resetSelectedItem();
            });
        }
    };
    SuggestionsControl.prototype.componentWillUnmount = function () {
        var _a;
        (_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.deselectAllSuggestions();
    };
    SuggestionsControl.prototype.render = function () {
        var _a = this.props, className = _a.className, headerItemsProps = _a.headerItemsProps, footerItemsProps = _a.footerItemsProps, suggestionsAvailableAlertText = _a.suggestionsAvailableAlertText;
        var screenReaderTextStyles = mergeStyles(hiddenContentStyle);
        var shouldAlertSuggestionsAvailableText = this.state.suggestions && this.state.suggestions.length > 0 && suggestionsAvailableAlertText;
        return (React.createElement("div", { className: css('ms-Suggestions', className ? className : '', styles.root) },
            headerItemsProps && this.renderHeaderItems(),
            this._renderSuggestions(),
            footerItemsProps && this.renderFooterItems(),
            shouldAlertSuggestionsAvailableText ? (React.createElement("span", { role: "alert", "aria-live": "polite", className: screenReaderTextStyles }, suggestionsAvailableAlertText)) : null));
    };
    Object.defineProperty(SuggestionsControl.prototype, "currentSuggestion", {
        get: function () {
            var _a;
            return ((_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.getCurrentItem()) || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuggestionsControl.prototype, "currentSuggestionIndex", {
        get: function () {
            return this._suggestions.current ? this._suggestions.current.currentIndex : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuggestionsControl.prototype, "selectedElement", {
        get: function () {
            var _a;
            return this._selectedElement.current ? this._selectedElement.current : (_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.selectedElement;
        },
        enumerable: true,
        configurable: true
    });
    SuggestionsControl.prototype.hasSuggestionSelected = function () {
        var _a;
        return ((_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.hasSuggestionSelected()) || false;
    };
    SuggestionsControl.prototype.hasSelection = function () {
        var _a = this.state, selectedHeaderIndex = _a.selectedHeaderIndex, selectedFooterIndex = _a.selectedFooterIndex;
        return selectedHeaderIndex !== -1 || this.hasSuggestionSelected() || selectedFooterIndex !== -1;
    };
    SuggestionsControl.prototype.executeSelectedAction = function () {
        var _a;
        var _b = this.props, headerItemsProps = _b.headerItemsProps, footerItemsProps = _b.footerItemsProps;
        var _c = this.state, selectedHeaderIndex = _c.selectedHeaderIndex, selectedFooterIndex = _c.selectedFooterIndex;
        if (headerItemsProps && selectedHeaderIndex !== -1 && selectedHeaderIndex < headerItemsProps.length) {
            var selectedHeaderItem = headerItemsProps[selectedHeaderIndex];
            if (selectedHeaderItem.onExecute) {
                selectedHeaderItem.onExecute();
            }
        }
        else if ((_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.hasSuggestionSelected()) {
            this.props.completeSuggestion();
        }
        else if (footerItemsProps && selectedFooterIndex !== -1 && selectedFooterIndex < footerItemsProps.length) {
            var selectedFooterItem = footerItemsProps[selectedFooterIndex];
            if (selectedFooterItem.onExecute) {
                selectedFooterItem.onExecute();
            }
        }
    };
    SuggestionsControl.prototype.removeSuggestion = function (index) {
        var _a, _b;
        (_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.removeSuggestion(index ? index : (_b = this._suggestions.current) === null || _b === void 0 ? void 0 : _b.currentIndex);
    };
    /**
     * Handles the key down, returns true, if the event was handled, false otherwise
     * @param keyCode - The keyCode to handle
     */
    SuggestionsControl.prototype.handleKeyDown = function (keyCode) {
        var _a, _b, _c, _d;
        var _e = this.state, selectedHeaderIndex = _e.selectedHeaderIndex, selectedFooterIndex = _e.selectedFooterIndex;
        var isKeyDownHandled = false;
        if (keyCode === KeyCodes.down) {
            if (selectedHeaderIndex === -1 &&
                !((_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.hasSuggestionSelected()) &&
                selectedFooterIndex === -1) {
                this.selectFirstItem();
            }
            else if (selectedHeaderIndex !== -1) {
                this.selectNextItem(SuggestionItemType.header);
                isKeyDownHandled = true;
            }
            else if ((_b = this._suggestions.current) === null || _b === void 0 ? void 0 : _b.hasSuggestionSelected()) {
                this.selectNextItem(SuggestionItemType.suggestion);
                isKeyDownHandled = true;
            }
            else if (selectedFooterIndex !== -1) {
                this.selectNextItem(SuggestionItemType.footer);
                isKeyDownHandled = true;
            }
        }
        else if (keyCode === KeyCodes.up) {
            if (selectedHeaderIndex === -1 &&
                !((_c = this._suggestions.current) === null || _c === void 0 ? void 0 : _c.hasSuggestionSelected()) &&
                selectedFooterIndex === -1) {
                this.selectLastItem();
            }
            else if (selectedHeaderIndex !== -1) {
                this.selectPreviousItem(SuggestionItemType.header);
                isKeyDownHandled = true;
            }
            else if ((_d = this._suggestions.current) === null || _d === void 0 ? void 0 : _d.hasSuggestionSelected()) {
                this.selectPreviousItem(SuggestionItemType.suggestion);
                isKeyDownHandled = true;
            }
            else if (selectedFooterIndex !== -1) {
                this.selectPreviousItem(SuggestionItemType.footer);
                isKeyDownHandled = true;
            }
        }
        else if (keyCode === KeyCodes.enter || keyCode === KeyCodes.tab) {
            if (this.hasSelection()) {
                this.executeSelectedAction();
                isKeyDownHandled = true;
            }
        }
        return isKeyDownHandled;
    };
    // TODO get the element to scroll into view properly regardless of direction.
    SuggestionsControl.prototype.scrollSelected = function () {
        if (this._selectedElement.current) {
            this._selectedElement.current.scrollIntoView(false);
        }
    };
    SuggestionsControl.prototype.renderHeaderItems = function () {
        var _this = this;
        var _a = this.props, headerItemsProps = _a.headerItemsProps, suggestionsHeaderContainerAriaLabel = _a.suggestionsHeaderContainerAriaLabel;
        var selectedHeaderIndex = this.state.selectedHeaderIndex;
        return headerItemsProps ? (React.createElement("div", { className: css('ms-Suggestions-headerContainer', styles.suggestionsContainer), id: "suggestionHeader-list", role: "list", "aria-label": suggestionsHeaderContainerAriaLabel }, headerItemsProps.map(function (headerItemProps, index) {
            var isSelected = selectedHeaderIndex !== -1 && selectedHeaderIndex === index;
            return headerItemProps.shouldShow() ? (React.createElement("div", { ref: isSelected ? _this._selectedElement : undefined, id: 'sug-header' + index, key: 'sug-header' + index, role: "listitem", "aria-label": headerItemProps.ariaLabel },
                React.createElement(SuggestionsHeaderFooterItem, { id: 'sug-header-item' + index, isSelected: isSelected, renderItem: headerItemProps.renderItem, onExecute: headerItemProps.onExecute, className: headerItemProps.className }))) : null;
        }))) : null;
    };
    SuggestionsControl.prototype.renderFooterItems = function () {
        var _this = this;
        var _a = this.props, footerItemsProps = _a.footerItemsProps, suggestionsFooterContainerAriaLabel = _a.suggestionsFooterContainerAriaLabel;
        var selectedFooterIndex = this.state.selectedFooterIndex;
        return footerItemsProps ? (React.createElement("div", { className: css('ms-Suggestions-footerContainer', styles.suggestionsContainer), id: "suggestionFooter-list", role: "list", "aria-label": suggestionsFooterContainerAriaLabel }, footerItemsProps.map(function (footerItemProps, index) {
            var isSelected = selectedFooterIndex !== -1 && selectedFooterIndex === index;
            return footerItemProps.shouldShow() ? (React.createElement("div", { ref: isSelected ? _this._selectedElement : undefined, id: 'sug-footer' + index, key: 'sug-footer' + index, role: "listitem", "aria-label": footerItemProps.ariaLabel },
                React.createElement(SuggestionsHeaderFooterItem, { id: 'sug-footer-item' + index, isSelected: isSelected, renderItem: footerItemProps.renderItem, onExecute: footerItemProps.onExecute, className: footerItemProps.className }))) : null;
        }))) : null;
    };
    SuggestionsControl.prototype._renderSuggestions = function () {
        var TypedSuggestions = this.SuggestionsOfProperType;
        return React.createElement(TypedSuggestions, __assign({ ref: this._suggestions }, this.props, { suggestions: this.state.suggestions }));
    };
    /**
     * Selects the next selectable item
     */
    SuggestionsControl.prototype.selectNextItem = function (itemType, originalItemType) {
        // If the recursive calling has not found a selectable item in the other suggestion item type groups
        // And the method is being called again with the original item type,
        // Select the first selectable item of this suggestion item type group (could be the currently selected item)
        if (itemType === originalItemType) {
            this._selectNextItemOfItemType(itemType);
            return;
        }
        var startedItemType = originalItemType !== undefined ? originalItemType : itemType;
        // Try to set the selection to the next selectable item, of the same suggestion item type group
        // If this is the original item type, use the current index
        var selectionChanged = this._selectNextItemOfItemType(itemType, startedItemType === itemType ? this._getCurrentIndexForType(itemType) : undefined);
        // If the selection did not change, try to select from the next suggestion type group
        if (!selectionChanged) {
            this.selectNextItem(this._getNextItemSectionType(itemType), startedItemType);
        }
    };
    /**
     * Selects the previous selectable item
     */
    SuggestionsControl.prototype.selectPreviousItem = function (itemType, originalItemType) {
        // If the recursive calling has not found a selectable item in the other suggestion item type groups
        // And the method is being called again with the original item type,
        // Select the last selectable item of this suggestion item type group (could be the currently selected item)
        if (itemType === originalItemType) {
            this._selectPreviousItemOfItemType(itemType);
            return;
        }
        var startedItemType = originalItemType !== undefined ? originalItemType : itemType;
        // Try to set the selection to the previous selectable item, of the same suggestion item type group
        var selectionChanged = this._selectPreviousItemOfItemType(itemType, startedItemType === itemType ? this._getCurrentIndexForType(itemType) : undefined);
        // If the selection did not change, try to select from the previous suggestion type group
        if (!selectionChanged) {
            this.selectPreviousItem(this._getPreviousItemSectionType(itemType), startedItemType);
        }
    };
    /**
     * Resets the selected state and selects the first selectable item
     */
    SuggestionsControl.prototype.resetSelectedItem = function () {
        var _a;
        this.setState({ selectedHeaderIndex: -1, selectedFooterIndex: -1 });
        (_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.deselectAllSuggestions();
        // Select the first item if the shouldSelectFirstItem prop is not set or it is set and it returns true
        if (this.props.shouldSelectFirstItem === undefined || this.props.shouldSelectFirstItem()) {
            this.selectFirstItem();
        }
    };
    /**
     * Selects the first item
     */
    SuggestionsControl.prototype.selectFirstItem = function () {
        if (this._selectNextItemOfItemType(SuggestionItemType.header)) {
            return;
        }
        if (this._selectNextItemOfItemType(SuggestionItemType.suggestion)) {
            return;
        }
        this._selectNextItemOfItemType(SuggestionItemType.footer);
    };
    /**
     * Selects the last item
     */
    SuggestionsControl.prototype.selectLastItem = function () {
        if (this._selectPreviousItemOfItemType(SuggestionItemType.footer)) {
            return;
        }
        if (this._selectPreviousItemOfItemType(SuggestionItemType.suggestion)) {
            return;
        }
        this._selectPreviousItemOfItemType(SuggestionItemType.header);
    };
    /**
     * Selects the next item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index, default is -1
     */
    SuggestionsControl.prototype._selectNextItemOfItemType = function (itemType, currentIndex) {
        if (currentIndex === void 0) { currentIndex = -1; }
        var _a, _b;
        if (itemType === SuggestionItemType.suggestion) {
            if (this.state.suggestions.length > currentIndex + 1) {
                (_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.setSelectedSuggestion(currentIndex + 1);
                this.setState({ selectedHeaderIndex: -1, selectedFooterIndex: -1 });
                return true;
            }
        }
        else {
            var isHeader = itemType === SuggestionItemType.header;
            var itemProps = isHeader ? this.props.headerItemsProps : this.props.footerItemsProps;
            if (itemProps && itemProps.length > currentIndex + 1) {
                for (var i = currentIndex + 1; i < itemProps.length; i++) {
                    var item = itemProps[i];
                    if (item.onExecute && item.shouldShow()) {
                        this.setState({ selectedHeaderIndex: isHeader ? i : -1 });
                        this.setState({ selectedFooterIndex: isHeader ? -1 : i });
                        (_b = this._suggestions.current) === null || _b === void 0 ? void 0 : _b.deselectAllSuggestions();
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * Selects the previous item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index. If none is provided, the default is the items length of specified type
     */
    SuggestionsControl.prototype._selectPreviousItemOfItemType = function (itemType, currentIndex) {
        var _a, _b;
        if (itemType === SuggestionItemType.suggestion) {
            var index = currentIndex !== undefined ? currentIndex : this.state.suggestions.length;
            if (index > 0) {
                (_a = this._suggestions.current) === null || _a === void 0 ? void 0 : _a.setSelectedSuggestion(index - 1);
                this.setState({ selectedHeaderIndex: -1, selectedFooterIndex: -1 });
                return true;
            }
        }
        else {
            var isHeader = itemType === SuggestionItemType.header;
            var itemProps = isHeader ? this.props.headerItemsProps : this.props.footerItemsProps;
            if (itemProps) {
                var index = currentIndex !== undefined ? currentIndex : itemProps.length;
                if (index > 0) {
                    for (var i = index - 1; i >= 0; i--) {
                        var item = itemProps[i];
                        if (item.onExecute && item.shouldShow()) {
                            this.setState({ selectedHeaderIndex: isHeader ? i : -1 });
                            this.setState({ selectedFooterIndex: isHeader ? -1 : i });
                            (_b = this._suggestions.current) === null || _b === void 0 ? void 0 : _b.deselectAllSuggestions();
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    SuggestionsControl.prototype._getCurrentIndexForType = function (itemType) {
        switch (itemType) {
            case SuggestionItemType.header:
                return this.state.selectedHeaderIndex;
            case SuggestionItemType.suggestion:
                return this._suggestions.current.currentIndex;
            case SuggestionItemType.footer:
                return this.state.selectedFooterIndex;
        }
    };
    SuggestionsControl.prototype._getNextItemSectionType = function (itemType) {
        switch (itemType) {
            case SuggestionItemType.header:
                return SuggestionItemType.suggestion;
            case SuggestionItemType.suggestion:
                return SuggestionItemType.footer;
            case SuggestionItemType.footer:
                return SuggestionItemType.header;
        }
    };
    SuggestionsControl.prototype._getPreviousItemSectionType = function (itemType) {
        switch (itemType) {
            case SuggestionItemType.header:
                return SuggestionItemType.footer;
            case SuggestionItemType.suggestion:
                return SuggestionItemType.header;
            case SuggestionItemType.footer:
                return SuggestionItemType.suggestion;
        }
    };
    return SuggestionsControl;
}(React.Component));
export { SuggestionsControl };
//# sourceMappingURL=SuggestionsControl.js.map