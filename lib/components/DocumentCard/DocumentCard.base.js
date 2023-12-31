import { __assign, __extends } from "tslib";
import * as React from 'react';
import { classNamesFunction, KeyCodes, getNativeProps, divProperties, warnDeprecations, initializeComponentRef, } from '../../Utilities';
import { DocumentCardType, } from './DocumentCard.types';
var getClassNames = classNamesFunction();
var COMPONENT_NAME = 'DocumentCard';
/**
 * {@docCategory DocumentCard}
 */
var DocumentCardBase = /** @class */ (function (_super) {
    __extends(DocumentCardBase, _super);
    function DocumentCardBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = React.createRef();
        _this._onClick = function (ev) {
            _this._onAction(ev);
        };
        _this._onKeyDown = function (ev) {
            if (ev.which === KeyCodes.enter || ev.which === KeyCodes.space) {
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
        initializeComponentRef(_this);
        warnDeprecations(COMPONENT_NAME, props, {
            accentColor: undefined,
        });
        return _this;
    }
    DocumentCardBase.prototype.render = function () {
        // tslint:disable-next-line:deprecation
        var _a = this.props, onClick = _a.onClick, onClickHref = _a.onClickHref, children = _a.children, type = _a.type, accentColor = _a.accentColor, styles = _a.styles, theme = _a.theme, className = _a.className;
        var nativeProps = getNativeProps(this.props, divProperties, [
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
            compact: type === DocumentCardType.compact ? true : false,
        });
        // Override the border color if an accent color was provided (compact card only)
        var style;
        if (type === DocumentCardType.compact && accentColor) {
            style = {
                borderBottomColor: accentColor,
            };
        }
        // if this element is actionable it should have an aria role
        var role = this.props.role || (actionable ? (onClick ? 'button' : 'link') : undefined);
        var tabIndex = actionable ? 0 : undefined;
        return (React.createElement("div", __assign({ ref: this._rootElement, tabIndex: tabIndex, "data-is-focusable": actionable, role: role, className: this._classNames.root, onKeyDown: actionable ? this._onKeyDown : undefined, onClick: actionable ? this._onClick : undefined, style: style }, nativeProps), children));
    };
    DocumentCardBase.prototype.focus = function () {
        if (this._rootElement.current) {
            this._rootElement.current.focus();
        }
    };
    DocumentCardBase.defaultProps = {
        type: DocumentCardType.normal,
    };
    return DocumentCardBase;
}(React.Component));
export { DocumentCardBase };
//# sourceMappingURL=DocumentCard.base.js.map