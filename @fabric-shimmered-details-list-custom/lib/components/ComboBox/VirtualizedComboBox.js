import { __assign, __extends } from "tslib";
import * as React from 'react';
import { ComboBox } from './ComboBox';
import { List } from '../../List';
import { initializeComponentRef } from '../../Utilities';
var VirtualizedComboBox = /** @class */ (function (_super) {
    __extends(VirtualizedComboBox, _super);
    function VirtualizedComboBox(props) {
        var _this = _super.call(this, props) || this;
        /** The combo box element */
        _this._comboBox = React.createRef();
        /** The virtualized list element */
        _this._list = React.createRef();
        _this._onRenderList = function (props) {
            var onRenderItem = props.onRenderItem;
            // Render virtualized list
            return (React.createElement(List, { componentRef: _this._list, role: "listbox", items: props.options, onRenderCell: onRenderItem ? function (item) { return onRenderItem(item); } : function () { return null; } }));
        };
        _this._onScrollToItem = function (itemIndex) {
            // We are using the List component, call scrollToIndex
            _this._list.current && _this._list.current.scrollToIndex(itemIndex);
        };
        initializeComponentRef(_this);
        return _this;
    }
    Object.defineProperty(VirtualizedComboBox.prototype, "selectedOptions", {
        /**
         * All selected options
         */
        get: function () {
            if (this._comboBox.current) {
                return this._comboBox.current.selectedOptions;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    VirtualizedComboBox.prototype.dismissMenu = function () {
        if (this._comboBox.current) {
            return this._comboBox.current.dismissMenu();
        }
    };
    VirtualizedComboBox.prototype.focus = function (shouldOpenOnFocus, useFocusAsync) {
        if (this._comboBox.current) {
            this._comboBox.current.focus(shouldOpenOnFocus, useFocusAsync);
            return true;
        }
        return false;
    };
    VirtualizedComboBox.prototype.render = function () {
        return (React.createElement(ComboBox, __assign({}, this.props, { componentRef: this._comboBox, onRenderList: this._onRenderList, onScrollToItem: this._onScrollToItem })));
    };
    return VirtualizedComboBox;
}(React.Component));
export { VirtualizedComboBox };
//# sourceMappingURL=VirtualizedComboBox.js.map