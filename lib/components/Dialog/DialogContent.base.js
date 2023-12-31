import { __assign, __decorate, __extends } from "tslib";
import * as React from 'react';
import { classNamesFunction, css, warnDeprecations, initializeComponentRef } from '../../Utilities';
import { DialogType } from './DialogContent.types';
import { IconButton } from '../../Button';
import { DialogFooter } from './DialogFooter';
import { withResponsiveMode } from '../../utilities/decorators/withResponsiveMode';
var getClassNames = classNamesFunction();
var DialogFooterType = (React.createElement(DialogFooter, null)).type;
var COMPONENT_NAME = 'DialogContent';
var DialogContentBase = /** @class */ (function (_super) {
    __extends(DialogContentBase, _super);
    function DialogContentBase(props) {
        var _this = _super.call(this, props) || this;
        initializeComponentRef(_this);
        warnDeprecations(COMPONENT_NAME, props, {
            titleId: 'titleProps.id',
        });
        return _this;
    }
    DialogContentBase.prototype.render = function () {
        var _a = this.props, showCloseButton = _a.showCloseButton, className = _a.className, closeButtonAriaLabel = _a.closeButtonAriaLabel, onDismiss = _a.onDismiss, subTextId = _a.subTextId, subText = _a.subText, _b = _a.titleProps, titleProps = _b === void 0 ? {} : _b, 
        // tslint:disable-next-line:deprecation
        titleId = _a.titleId, title = _a.title, type = _a.type, styles = _a.styles, theme = _a.theme, draggableHeaderClassName = _a.draggableHeaderClassName;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isLargeHeader: type === DialogType.largeHeader,
            isClose: type === DialogType.close,
            draggableHeaderClassName: draggableHeaderClassName,
        });
        var groupings = this._groupChildren();
        var subTextContent;
        if (subText) {
            subTextContent = (React.createElement("p", { className: classNames.subText, id: subTextId }, subText));
        }
        return (React.createElement("div", { className: classNames.content },
            React.createElement("div", { className: classNames.header },
                React.createElement("div", __assign({ id: titleId, role: "heading", "aria-level": 1 }, titleProps, { className: css(classNames.title, titleProps.className) }), title),
                React.createElement("div", { className: classNames.topButton },
                    this.props.topButtonsProps.map(function (props, index) { return (React.createElement(IconButton, __assign({ key: props.uniqueId || index }, props))); }),
                    (type === DialogType.close || (showCloseButton && type !== DialogType.largeHeader)) && (React.createElement(IconButton, { className: classNames.button, iconProps: { iconName: 'Cancel' }, ariaLabel: closeButtonAriaLabel, onClick: onDismiss, title: closeButtonAriaLabel })))),
            React.createElement("div", { className: classNames.inner },
                React.createElement("div", { className: classNames.innerContent },
                    subTextContent,
                    groupings.contents),
                groupings.footers)));
    };
    // @TODO - typing the footers as an array of DialogFooter is difficult because
    // casing "child as DialogFooter" causes a problem because
    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
    DialogContentBase.prototype._groupChildren = function () {
        var groupings = {
            footers: [],
            contents: [],
        };
        React.Children.map(this.props.children, function (child) {
            if (typeof child === 'object' && child !== null && child.type === DialogFooterType) {
                groupings.footers.push(child);
            }
            else {
                groupings.contents.push(child);
            }
        });
        return groupings;
    };
    DialogContentBase.defaultProps = {
        showCloseButton: false,
        className: '',
        topButtonsProps: [],
        closeButtonAriaLabel: 'Close',
    };
    DialogContentBase = __decorate([
        withResponsiveMode
    ], DialogContentBase);
    return DialogContentBase;
}(React.Component));
export { DialogContentBase };
//# sourceMappingURL=DialogContent.base.js.map