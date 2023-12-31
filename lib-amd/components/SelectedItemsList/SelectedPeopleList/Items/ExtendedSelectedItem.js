define(["require", "exports", "tslib", "react", "../../../../Utilities", "../../../../Persona", "../../../../Button", "./ExtendedSelectedItem.scss"], function (require, exports, tslib_1, React, Utilities_1, Persona_1, Button_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable-next-line:no-any
    var styles = stylesImport;
    var ExtendedSelectedItem = /** @class */ (function (_super) {
        tslib_1.__extends(ExtendedSelectedItem, _super);
        function ExtendedSelectedItem(props) {
            var _this = _super.call(this, props) || this;
            _this.persona = React.createRef();
            Utilities_1.initializeComponentRef(_this);
            _this.state = { contextualMenuVisible: false };
            return _this;
        }
        ExtendedSelectedItem.prototype.render = function () {
            var _a, _b;
            var _c = this.props, item = _c.item, onExpandItem = _c.onExpandItem, onRemoveItem = _c.onRemoveItem, removeButtonAriaLabel = _c.removeButtonAriaLabel, index = _c.index, selected = _c.selected;
            var itemId = Utilities_1.getId();
            return (React.createElement("div", { ref: this.persona, className: Utilities_1.css('ms-PickerPersona-container', styles.personaContainer, (_a = {}, _a['is-selected ' + styles.personaContainerIsSelected] = selected, _a), (_b = {}, _b['is-invalid ' + styles.validationError] = !item.isValid, _b)), "data-is-focusable": true, "data-is-sub-focuszone": true, "data-selection-index": index, role: 'listitem', "aria-labelledby": 'selectedItemPersona-' + itemId },
                React.createElement("div", { hidden: !item.canExpand || onExpandItem === undefined },
                    React.createElement(Button_1.IconButton, { onClick: this._onClickIconButton(onExpandItem), iconProps: { iconName: 'Add', style: { fontSize: '14px' } }, className: Utilities_1.css('ms-PickerItem-removeButton', styles.expandButton, styles.actionButton), ariaLabel: removeButtonAriaLabel })),
                React.createElement("div", { className: Utilities_1.css(styles.personaWrapper) },
                    React.createElement("div", { className: Utilities_1.css('ms-PickerItem-content', styles.itemContent), id: 'selectedItemPersona-' + itemId },
                        React.createElement(Persona_1.Persona, tslib_1.__assign({}, item, { onRenderCoin: this.props.renderPersonaCoin, onRenderPrimaryText: this.props.renderPrimaryText, size: Persona_1.PersonaSize.size32 }))),
                    React.createElement(Button_1.IconButton, { onClick: this._onClickIconButton(onRemoveItem), iconProps: { iconName: 'Cancel', style: { fontSize: '14px' } }, className: Utilities_1.css('ms-PickerItem-removeButton', styles.removeButton, styles.actionButton), ariaLabel: removeButtonAriaLabel }))));
        };
        ExtendedSelectedItem.prototype._onClickIconButton = function (action) {
            return function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                if (action) {
                    action();
                }
            };
        };
        return ExtendedSelectedItem;
    }(React.Component));
    exports.ExtendedSelectedItem = ExtendedSelectedItem;
});
//# sourceMappingURL=ExtendedSelectedItem.js.map