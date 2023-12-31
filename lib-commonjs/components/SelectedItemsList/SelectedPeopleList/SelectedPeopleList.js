"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable */
var React = require("react");
/* tslint:enable */
var BaseSelectedItemsList_1 = require("../BaseSelectedItemsList");
var ExtendedSelectedItem_1 = require("./Items/ExtendedSelectedItem");
var SelectedItemWithContextMenu_1 = require("./Items/SelectedItemWithContextMenu");
var EditingItem_1 = require("./Items/EditingItem");
/**
 * {@docCategory SelectedPeopleList}
 */
var BasePeopleSelectedItemsList = /** @class */ (function (_super) {
    tslib_1.__extends(BasePeopleSelectedItemsList, _super);
    function BasePeopleSelectedItemsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BasePeopleSelectedItemsList;
}(BaseSelectedItemsList_1.BaseSelectedItemsList));
exports.BasePeopleSelectedItemsList = BasePeopleSelectedItemsList;
/**
 * Standard People Picker.
 */
var SelectedPeopleList = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedPeopleList, _super);
    function SelectedPeopleList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderItems = function () {
            var items = _this.state.items;
            // tslint:disable-next-line:no-any
            return items.map(function (item, index) { return _this._renderItem(item, index); });
        };
        _this._beginEditing = function (item) {
            item.isEditing = true;
            _this.forceUpdate();
        };
        // tslint:disable-next-line:no-any
        _this._completeEditing = function (oldItem, newItem) {
            oldItem.isEditing = false;
            _this.replaceItem(oldItem, newItem);
        };
        return _this;
    }
    // tslint:disable-next-line:no-any
    SelectedPeopleList.prototype._renderItem = function (item, index) {
        var _this = this;
        var removeButtonAriaLabel = this.props.removeButtonAriaLabel;
        var expandGroup = this.props.onExpandGroup;
        var props = {
            item: item,
            index: index,
            key: item.key ? item.key : index,
            selected: this.selection.isIndexSelected(index),
            onRemoveItem: function () { return _this.removeItem(item); },
            onItemChange: this.onItemChange,
            removeButtonAriaLabel: removeButtonAriaLabel,
            onCopyItem: function (itemToCopy) { return _this.copyItems([itemToCopy]); },
            onExpandItem: expandGroup ? function () { return expandGroup(item); } : undefined,
            menuItems: this._createMenuItems(item),
        };
        var hasContextMenu = props.menuItems.length > 0;
        if (item.isEditing && hasContextMenu) {
            return (React.createElement(EditingItem_1.EditingItem, tslib_1.__assign({}, props, { onRenderFloatingPicker: this.props.onRenderFloatingPicker, floatingPickerProps: this.props.floatingPickerProps, onEditingComplete: this._completeEditing, getEditingItemText: this.props.getEditingItemText })));
        }
        else {
            // This cast is here because we are guaranteed that onRenderItem is set
            // from static defaultProps
            // TODO: Move this component to composition with required onRenderItem to remove
            // this cast.
            var onRenderItem = this.props.onRenderItem;
            var renderedItem = onRenderItem(props);
            return hasContextMenu ? (React.createElement(SelectedItemWithContextMenu_1.SelectedItemWithContextMenu, { key: props.key, renderedItem: renderedItem, beginEditing: this._beginEditing, menuItems: this._createMenuItems(props.item), item: props.item })) : (renderedItem);
        }
    };
    // tslint:disable-next-line:no-any
    SelectedPeopleList.prototype._createMenuItems = function (item) {
        var _this = this;
        var menuItems = [];
        if (this.props.editMenuItemText && this.props.getEditingItemText) {
            menuItems.push({
                key: 'Edit',
                text: this.props.editMenuItemText,
                onClick: function (ev, menuItem) {
                    _this._beginEditing(menuItem.data);
                },
                data: item,
            });
        }
        if (this.props.removeMenuItemText) {
            menuItems.push({
                key: 'Remove',
                text: this.props.removeMenuItemText,
                onClick: function (ev, menuItem) {
                    _this.removeItem(menuItem.data);
                },
                data: item,
            });
        }
        if (this.props.copyMenuItemText) {
            menuItems.push({
                key: 'Copy',
                text: this.props.copyMenuItemText,
                onClick: function (ev, menuItem) {
                    if (_this.props.onCopyItems) {
                        _this.copyItems([menuItem.data]);
                    }
                },
                data: item,
            });
        }
        return menuItems;
    };
    // tslint:disable-next-line:no-any
    SelectedPeopleList.defaultProps = {
        onRenderItem: function (props) { return React.createElement(ExtendedSelectedItem_1.ExtendedSelectedItem, tslib_1.__assign({}, props)); },
    };
    return SelectedPeopleList;
}(BasePeopleSelectedItemsList));
exports.SelectedPeopleList = SelectedPeopleList;
//# sourceMappingURL=SelectedPeopleList.js.map