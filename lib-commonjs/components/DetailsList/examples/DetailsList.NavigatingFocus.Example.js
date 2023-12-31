"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var Link_1 = require("office-ui-fabric-react/lib-commonjs/Link");
var DetailsListNavigatingFocusExample = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsListNavigatingFocusExample, _super);
    function DetailsListNavigatingFocusExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: generateItems(''),
            key: 0,
        };
        _this._columns = [
            {
                key: 'filepath',
                name: 'File path',
                onRender: function (item) { return (
                // tslint:disable-next-line:jsx-no-lambda
                React.createElement(Link_1.Link, { key: item, onClick: function () { return _this._navigate(item); } }, item)); },
            },
            {
                key: 'size',
                name: 'Size',
                onRender: function (item) { return '4 KB'; },
            },
        ];
        _this._navigate = function (name) {
            _this.setState({
                items: generateItems(name + ' / '),
                initialFocusedIndex: 0,
                // Simulate navigation by updating the list's key, which causes it to re-render
                key: _this.state.key + 1,
            });
        };
        return _this;
    }
    DetailsListNavigatingFocusExample.prototype.render = function () {
        // By default, when the list is re-rendered on navigation or some other event,
        // focus goes to the list container and the user has to tab back into the list body.
        // Setting initialFocusedIndex makes focus go directly to a particular item instead.
        return (React.createElement(DetailsList_1.DetailsList, { key: this.state.key, items: this.state.items, columns: this._columns, onItemInvoked: this._navigate, initialFocusedIndex: this.state.initialFocusedIndex, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", checkButtonAriaLabel: "Row checkbox" }));
    };
    return DetailsListNavigatingFocusExample;
}(React.Component));
exports.DetailsListNavigatingFocusExample = DetailsListNavigatingFocusExample;
function generateItems(parent) {
    return Array.prototype.map.call('ABCDEFGHI', function (name) { return parent + 'Folder ' + name; });
}
//# sourceMappingURL=DetailsList.NavigatingFocus.Example.js.map