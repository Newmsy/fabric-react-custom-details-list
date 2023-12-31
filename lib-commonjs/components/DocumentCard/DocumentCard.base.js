"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var DocumentCard_types_1 = require("./DocumentCard.types");
var getClassNames = Utilities_1.classNamesFunction();
var COMPONENT_NAME = 'DocumentCard';
/**
 * {@docCategory DocumentCard}
 */
var DocumentCardBase = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentCardBase, _super);
    function DocumentCardBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = React.createRef();
        _this._onClick = function (ev) {
            _this._onAction(ev);
        };
        _this._onKeyDown = function (ev) {
            if (ev.which === Utilities_1.KeyCodes.enter || ev.which === Utilities_1.KeyCodes.space) {
                _this._onAction(ev);
            }
        };
        _this._onAction = function (ev) {
            var _a = _this.props, onClick = _a.onClick, onClickHref = _a.onClickHref;
            if (onClick) {
                onClick(ev);
            }
            else if (!onClick && onClickHref) {
                // If no onClick Function was provided and we do have an onClickHref, redirect to the onClickHref
                window.location.href = onClickHref;
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        Utilities_1.initializeComponentRef(_this);
        Utilities_1.warnDeprecations(COMPONENT_NAME, props, {
            accentColor: undefined,
        });
        return _this;
    }
    DocumentCardBase.prototype.render = function () {
        // tslint:disable-next-line:deprecation
        var _a = this.props, onClick = _a.onClick, onClickHref = _a.onClickHref, children = _a.children, type = _a.type, accentColor = _a.accentColor, styles = _a.styles, theme = _a.theme, className = _a.className;
        var nativeProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties, [
            'className',
            'onClick',
            'type',
            'role',
        ]);
        var actionable = onClick || onClickHref ? true : false;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            actionable: actionable,
            compact: type === DocumentCard_types_1.DocumentCardType.compact ? true : false,
        });
        // Override the border color if an accent color was provided (compact card only)
        var style;
        if (type === DocumentCard_types_1.DocumentCardType.compact && accentColor) {
            style = {
                borderBottomColor: accentColor,
            };
        }
        // if this element is actionable it should have an aria role
        var role = this.props.role || (actionable ? (onClick ? 'button' : 'link') : undefined);
        var tabIndex = actionable ? 0 : undefined;
        return (React.createElement("div", tslib_1.__assign({ ref: this._rootElement, tabIndex: tabIndex, "data-is-focusable": actionable, role: role, className: this._classNames.root, onKeyDown: actionable ? this._onKeyDown : undefined, onClick: actionable ? this._onClick : undefined, style: style }, nativeProps), children));
    };
    DocumentCardBase.prototype.focus = function () {
        if (this._rootElement.current) {
            this._rootElement.current.focus();
        }
    };
    DocumentCardBase.defaultProps = {
        type: DocumentCard_types_1.DocumentCardType.normal,
    };
    return DocumentCardBase;
}(React.Component));
exports.DocumentCardBase = DocumentCardBase;
//# sourceMappingURL=DocumentCard.base.js.map