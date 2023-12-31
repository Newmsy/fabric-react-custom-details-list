import { __extends } from "tslib";
import * as React from 'react';
import { classNamesFunction, css, initializeComponentRef } from '../../../Utilities';
import { CommandButton, IconButton } from '../../../Button';
import * as stylesImport from './Suggestions.scss';
var legacyStyles = stylesImport;
var getClassNames = classNamesFunction();
/**
 * {@docCategory Pickers}
 */
var SuggestionsItem = /** @class */ (function (_super) {
    __extends(SuggestionsItem, _super);
    function SuggestionsItem(props) {
        var _this = _super.call(this, props) || this;
        initializeComponentRef(_this);
        return _this;
    }
    SuggestionsItem.prototype.render = function () {
        var _a;
        var _b = this.props, suggestionModel = _b.suggestionModel, RenderSuggestion = _b.RenderSuggestion, onClick = _b.onClick, className = _b.className, onRemoveItem = _b.onRemoveItem, isSelectedOverride = _b.isSelectedOverride, removeButtonAriaLabel = _b.removeButtonAriaLabel, styles = _b.styles, theme = _b.theme;
        // TODO
        // Clean this up by leaving only the first part after removing support for SASS.
        // Currently we can not remove the SASS styles from SuggestionsItem class because it
        // might be used by consumers separately from pickers extending from BasePicker
        // and have not used the new 'styles' prop. Because it's expecting a type parameter,
        // we can not use the 'styled' function without adding some helpers which can break
        // downstream consumers who did not use the new helpers.
        // We check for 'styles' prop which is going to be injected by the 'styled' HOC
        // in Suggestions when the typed SuggestionsItem class is ready to be rendered. If the
        // check passes we can use the CSS-in-JS styles. If the check fails (ex: custom picker),
        // then we just use the old SASS styles instead.
        var classNames = styles
            ? getClassNames(styles, {
                theme: theme,
                className: className,
                suggested: suggestionModel.selected || isSelectedOverride,
            })
            : {
                root: css('ms-Suggestions-item', legacyStyles.suggestionsItem, (_a = {},
                    _a['is-suggested ' + legacyStyles.suggestionsItemIsSuggested] = suggestionModel.selected || isSelectedOverride,
                    _a), className),
                itemButton: css('ms-Suggestions-itemButton', legacyStyles.itemButton),
                closeButton: css('ms-Suggestions-closeButton', legacyStyles.closeButton),
            };
        return (React.createElement("div", { className: classNames.root },
            React.createElement(CommandButton, { onClick: onClick, className: classNames.itemButton }, RenderSuggestion(suggestionModel.item, this.props)),
            this.props.showRemoveButton ? (React.createElement(IconButton, { iconProps: { iconName: 'Cancel', styles: { root: { fontSize: '12px' } } }, title: removeButtonAriaLabel, ariaLabel: removeButtonAriaLabel, onClick: onRemoveItem, className: classNames.closeButton })) : null));
    };
    return SuggestionsItem;
}(React.Component));
export { SuggestionsItem };
//# sourceMappingURL=SuggestionsItem.js.map