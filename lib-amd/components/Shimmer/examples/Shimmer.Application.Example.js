define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Utilities", "@uifabric/example-data", "office-ui-fabric-react/lib/index", "office-ui-fabric-react/lib/ShimmeredDetailsList"], function (require, exports, tslib_1, React, Utilities_1, example_data_1, index_1, ShimmeredDetailsList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fileIcons = [
        { name: 'accdb' },
        { name: 'audio' },
        { name: 'code' },
        { name: 'csv' },
        { name: 'docx' },
        { name: 'dotx' },
        { name: 'mpt' },
        { name: 'model' },
        { name: 'one' },
        { name: 'onetoc' },
        { name: 'pdf' },
        { name: 'photo' },
        { name: 'pptx' },
        { name: 'presentation' },
        { name: 'potx' },
        { name: 'pub' },
        { name: 'rtf' },
        { name: 'spreadsheet' },
        { name: 'txt' },
        { name: 'vector' },
        { name: 'vsdx' },
        { name: 'xlsx' },
        { name: 'xltx' },
        { name: 'xsn' },
    ];
    var ITEMS_COUNT = 200;
    var INTERVAL_DELAY = 2500;
    var _items;
    var ShimmerApplicationExample = /** @class */ (function (_super) {
        tslib_1.__extends(ShimmerApplicationExample, _super);
        function ShimmerApplicationExample(props) {
            var _this = _super.call(this, props) || this;
            _this._loadData = function () {
                _this._lastIntervalId = _this._async.setInterval(function () {
                    var randomQuantity = Math.floor(Math.random() * 10) + 1;
                    var itemsCopy = _this.state.items.slice(0);
                    itemsCopy.splice.apply(itemsCopy, tslib_1.__spreadArrays([_this._lastIndexWithData,
                        randomQuantity], _items.slice(_this._lastIndexWithData, _this._lastIndexWithData + randomQuantity)));
                    _this._lastIndexWithData += randomQuantity;
                    _this.setState({
                        items: itemsCopy,
                    });
                }, INTERVAL_DELAY);
            };
            _this._onLoadData = function (ev, checked) {
                if (!_items) {
                    _items = example_data_1.createListItems(ITEMS_COUNT);
                    _items.map(function (item) {
                        var randomFileType = _this._randomFileIcon();
                        item.thumbnail = randomFileType.url;
                    });
                }
                var items;
                var randomQuantity = Math.floor(Math.random() * 10) + 1;
                if (checked) {
                    items = _items.slice(0, randomQuantity).concat(new Array(ITEMS_COUNT - randomQuantity));
                    _this._lastIndexWithData = randomQuantity;
                    _this._loadData();
                }
                else {
                    items = [];
                    _this._async.clearInterval(_this._lastIntervalId);
                }
                _this.setState({
                    isDataLoaded: checked,
                    items: items,
                });
            };
            _this._onRenderItemColumn = function (item, index, column) {
                if (column.key === 'thumbnail') {
                    return React.createElement("img", { src: item.thumbnail });
                }
                return item[column.key];
            };
            _this.state = {
                items: [],
                columns: _buildColumns(),
                isDataLoaded: false,
            };
            _this._async = new Utilities_1.Async(_this);
            return _this;
        }
        ShimmerApplicationExample.prototype.componentWillUnmount = function () {
            this._async.dispose();
        };
        ShimmerApplicationExample.prototype.render = function () {
            var _a = this.state, items = _a.items, columns = _a.columns, isDataLoaded = _a.isDataLoaded;
            return (React.createElement("div", null,
                React.createElement(index_1.Toggle, { label: "Toggle to load content", style: { display: 'block', marginBottom: '20px' }, checked: isDataLoaded, onChange: this._onLoadData, onText: "Content", offText: "Shimmer" }),
                React.createElement("div", null,
                    React.createElement(ShimmeredDetailsList_1.ShimmeredDetailsList, { setKey: "items", items: items, columns: columns, selectionMode: index_1.SelectionMode.none, onRenderItemColumn: this._onRenderItemColumn, enableShimmer: !isDataLoaded, ariaLabelForShimmer: "Content is being fetched", ariaLabelForGrid: "Item details", listProps: { renderedWindowsAhead: 0, renderedWindowsBehind: 0 } }))));
        };
        ShimmerApplicationExample.prototype._randomFileIcon = function () {
            var docType = fileIcons[Math.floor(Math.random() * fileIcons.length) + 0].name;
            return {
                docType: docType,
                url: "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/" + docType + ".svg",
            };
        };
        return ShimmerApplicationExample;
    }(React.Component));
    exports.ShimmerApplicationExample = ShimmerApplicationExample;
    function _buildColumns() {
        var _item = example_data_1.createListItems(1);
        var columns = index_1.buildColumns(_item);
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            if (column.key === 'thumbnail') {
                column.name = 'FileType';
                column.minWidth = 16;
                column.maxWidth = 16;
                column.isIconOnly = true;
                column.iconName = 'Page';
                break;
            }
        }
        return columns;
    }
});
//# sourceMappingURL=Shimmer.Application.Example.js.map