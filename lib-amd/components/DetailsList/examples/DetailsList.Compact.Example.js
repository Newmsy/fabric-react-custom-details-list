define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Announced", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/MarqueeSelection", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, Announced_1, TextField_1, DetailsList_1, MarqueeSelection_1, Fabric_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleChildClass = Styling_1.mergeStyles({
        display: 'block',
        marginBottom: '10px',
    });
    var textFieldStyles = { root: { maxWidth: '300px' } };
    var DetailsListCompactExample = /** @class */ (function (_super) {
        tslib_1.__extends(DetailsListCompactExample, _super);
        function DetailsListCompactExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onFilter = function (ev, text) {
                _this.setState({
                    items: text ? _this._allItems.filter(function (i) { return i.name.toLowerCase().indexOf(text) > -1; }) : _this._allItems,
                });
            };
            _this._selection = new DetailsList_1.Selection({
                onSelectionChanged: function () { return _this.setState({ selectionDetails: _this._getSelectionDetails() }); },
            });
            _this._allItems = [];
            for (var i = 0; i < 200; i++) {
                _this._allItems.push({
                    key: i,
                    name: 'Item ' + i,
                    value: i,
                });
            }
            _this._columns = [
                { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
                { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
            ];
            _this.state = {
                items: _this._allItems,
                selectionDetails: _this._getSelectionDetails(),
            };
            return _this;
        }
        DetailsListCompactExample.prototype.render = function () {
            var _a = this.state, items = _a.items, selectionDetails = _a.selectionDetails;
            return (React.createElement(Fabric_1.Fabric, null,
                React.createElement("div", { className: exampleChildClass }, selectionDetails),
                React.createElement(Announced_1.Announced, { message: selectionDetails }),
                React.createElement(TextField_1.TextField, { className: exampleChildClass, label: "Filter by name:", onChange: this._onFilter, styles: textFieldStyles }),
                React.createElement(Announced_1.Announced, { message: "Number of items after filter applied: " + items.length + "." }),
                React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection },
                    React.createElement(DetailsList_1.DetailsList, { compact: true, items: items, columns: this._columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.justified, selection: this._selection, selectionPreservedOnEmptyClick: true, onItemInvoked: this._onItemInvoked, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox" }))));
        };
        DetailsListCompactExample.prototype._getSelectionDetails = function () {
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
        DetailsListCompactExample.prototype._onItemInvoked = function (item) {
            alert("Item invoked: " + item.name);
        };
        return DetailsListCompactExample;
    }(React.Component));
    exports.DetailsListCompactExample = DetailsListCompactExample;
});
//# sourceMappingURL=DetailsList.Compact.Example.js.map