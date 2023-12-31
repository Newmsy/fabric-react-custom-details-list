define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/Fabric"], function (require, exports, tslib_1, React, DetailsList_1, Fabric_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetailsListAnimationExample = /** @class */ (function (_super) {
        tslib_1.__extends(DetailsListAnimationExample, _super);
        function DetailsListAnimationExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onItemInvoked = function (item) {
                alert("Item invoked: " + item.name);
            };
            // Populate with items for demos.
            _this._allItems = [];
            for (var i = 0; i < 200; i++) {
                _this._allItems.push({
                    key: i,
                    name: 'Item ' + i,
                    value: i,
                });
            }
            _this._columns = [
                {
                    key: 'column1',
                    name: 'Name',
                    fieldName: 'name',
                    minWidth: 100,
                    maxWidth: 200,
                    isResizable: true,
                    getValueKey: _this._getValueKey,
                },
                { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
            ];
            _this.state = {
                items: _this._allItems,
            };
            return _this;
        }
        DetailsListAnimationExample.prototype.componentDidMount = function () {
            var _this = this;
            var LOREM_IPSUM = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
                'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt ').split(' ');
            var loremIndex = 0;
            function _lorem(wordCount) {
                var startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
                loremIndex = startIndex + wordCount;
                return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
            }
            var updateTimerFunc = function () {
                var newItems = _this.state.items.slice();
                var i = Math.floor(Math.random() * 10);
                newItems[i] = tslib_1.__assign(tslib_1.__assign({}, newItems[i]), { value: Math.floor(Math.random() * 2), name: _lorem(1) });
                _this.setState({ items: newItems });
                _this.forceUpdate();
            };
            this._updateTimer = setInterval(updateTimerFunc, 2000);
        };
        DetailsListAnimationExample.prototype.componentWillUnmount = function () {
            clearInterval(this._updateTimer);
        };
        DetailsListAnimationExample.prototype.render = function () {
            var items = this.state.items;
            return (React.createElement(Fabric_1.Fabric, null,
                React.createElement(DetailsList_1.DetailsList, { items: items, columns: this._columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox", onItemInvoked: this._onItemInvoked, enableUpdateAnimations: true, getCellValueKey: this._getCellValueKey })));
        };
        DetailsListAnimationExample.prototype._getValueKey = function (item, index, column) {
            var key = item && column && column.fieldName ? item[column.fieldName] : index;
            return key.toString();
        };
        DetailsListAnimationExample.prototype._getCellValueKey = function (item, index, column) {
            var key = item && column && column.fieldName ? item[column.fieldName] : index;
            return key.toString();
        };
        return DetailsListAnimationExample;
    }(React.Component));
    exports.DetailsListAnimationExample = DetailsListAnimationExample;
});
//# sourceMappingURL=DetailsList.Animation.Example.js.map