"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Announced_1 = require("office-ui-fabric-react/lib-commonjs/Announced");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var MarqueeSelection_1 = require("office-ui-fabric-react/lib-commonjs/MarqueeSelection");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var Dialog_1 = require("office-ui-fabric-react/lib-commonjs/Dialog");
var TextField_1 = require("office-ui-fabric-react/lib-commonjs/TextField");
var _items = [];
var _columns = ['Name', 'Modified', 'Modified By', 'File Size'].map(function (name) {
    var fieldName = name.replace(' ', '').toLowerCase();
    return {
        fieldName: fieldName,
        name: name,
        key: fieldName,
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
    };
});
var iconButtonStyles = { root: { float: 'right', height: 'inherit' } };
var _names = [
    'Annie Lindqvist',
    'Aaron Reid',
    'Alex Lundberg',
    'Roko Kolar',
    'Christian Bergqvist',
    'Valentina Lovric',
    'Makenzie Sharett',
];
function getMockDateString() {
    return 'Thu Jan 05 2017‌';
}
var AnnouncedQuickActionsExample = /** @class */ (function (_super) {
    tslib_1.__extends(AnnouncedQuickActionsExample, _super);
    function AnnouncedQuickActionsExample(props) {
        var _this = _super.call(this, props) || this;
        _this._detailsList = React.createRef();
        _this._textField = React.createRef();
        _this._onRenderRow = function (props) {
            return React.createElement(DetailsList_1.DetailsRow, tslib_1.__assign({}, props));
        };
        _this._onRenderItemColumn = function (item, index, column) {
            var fieldContent = item[column.fieldName];
            if (column.key === 'name') {
                return (React.createElement("div", null,
                    fieldContent,
                    React.createElement(Button_1.IconButton, { menuIconProps: { iconName: 'MoreVertical' }, role: "button", "aria-haspopup": true, "aria-label": "Show actions", styles: iconButtonStyles, menuProps: {
                            items: [
                                {
                                    key: 'delete',
                                    text: 'Delete',
                                    onClick: function () { return _this._deleteItem(index); },
                                },
                                {
                                    key: 'rename',
                                    text: 'Rename',
                                    onClick: function () { return _this._renameItem(item, index); },
                                },
                            ],
                        } })));
            }
            else {
                return React.createElement("span", null, fieldContent);
            }
        };
        _this._renderAnnounced = function () {
            var announced = _this.state.announced;
            return announced;
        };
        _this._deleteItem = function (index) {
            var items = _this.state.items;
            items.splice(items.indexOf(items[index]), 1);
            _this.setState({
                items: tslib_1.__spreadArrays(items),
                announced: React.createElement(Announced_1.Announced, { message: "Item deleted", "aria-live": "assertive" }),
            });
            return;
        };
        _this._closeRenameDialog = function () {
            _this.setState({
                renameDialogOpen: false,
            });
        };
        _this._async = new Utilities_1.Async(_this);
        // Populate with items for demos.
        if (_items.length === 0) {
            for (var i = 0; i < 20; i++) {
                _items.push({
                    key: i,
                    name: 'Item ' + i,
                    modified: getMockDateString(),
                    modifiedby: _names[Math.floor(Math.random() * _names.length)],
                    filesize: Math.floor(Math.random() * 30).toString() + ' MB',
                });
            }
        }
        _this._selection = new DetailsList_1.Selection({
            onSelectionChanged: function () { return _this.setState({ selectionDetails: _this._getSelectionDetails() }); },
        });
        _this.state = {
            items: _items,
            selectionDetails: _this._getSelectionDetails(),
            renameDialogOpen: false,
            dialogContent: undefined,
            announced: undefined,
        };
        return _this;
    }
    AnnouncedQuickActionsExample.prototype.componentDidUpdate = function (prevState) {
        var _this = this;
        if (prevState.announced !== this.state.announced && this.state.announced !== undefined) {
            this._async.setTimeout(function () {
                _this.setState({
                    announced: undefined,
                });
            }, 2000);
        }
    };
    AnnouncedQuickActionsExample.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    AnnouncedQuickActionsExample.prototype.render = function () {
        var _a = this.state, items = _a.items, renameDialogOpen = _a.renameDialogOpen, dialogContent = _a.dialogContent;
        return (React.createElement(React.Fragment, null,
            this._renderAnnounced(),
            React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection },
                React.createElement(DetailsList_1.DetailsList, { componentRef: this._detailsList, items: items, columns: _columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, selection: this._selection, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", onRenderItemColumn: this._onRenderItemColumn, onRenderRow: this._onRenderRow }),
                React.createElement(Dialog_1.Dialog, { hidden: !renameDialogOpen, onDismiss: this._closeRenameDialog, closeButtonAriaLabel: "Close" }, dialogContent))));
    };
    AnnouncedQuickActionsExample.prototype._renameItem = function (item, index) {
        this.setState({
            renameDialogOpen: true,
            dialogContent: (React.createElement(React.Fragment, null,
                React.createElement(TextField_1.TextField, { componentRef: this._textField, label: "Rename", defaultValue: item.name }),
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: this._updateItemName.bind(this, index), text: "Save" })))),
        });
        return;
    };
    AnnouncedQuickActionsExample.prototype._updateItemName = function (index) {
        if (this._textField && this._textField.current) {
            var items = this.state.items;
            items[index].name = this._textField.current.value || items[index].name;
            this.setState({
                renameDialogOpen: false,
                items: tslib_1.__spreadArrays(items),
                announced: React.createElement(Announced_1.Announced, { message: "Item renamed", "aria-live": "assertive" }),
            });
        }
        else {
            return;
        }
    };
    AnnouncedQuickActionsExample.prototype._getSelectionDetails = function () {
        var selectionCount = this._selection.getSelectedCount();
        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + this._selection.getSelection()[0].name;
            default:
                return selectionCount + " items selected";
        }
    };
    return AnnouncedQuickActionsExample;
}(React.Component));
exports.AnnouncedQuickActionsExample = AnnouncedQuickActionsExample;
//# sourceMappingURL=Announced.QuickActions.Example.js.map