define(["require", "exports", "tslib", "react", "../../Utilities", "../../utilities/selection/index", "../../Check", "../../Icon", "./GroupSpacer", "../../Spinner", "../../FocusZone"], function (require, exports, tslib_1, React, Utilities_1, index_1, Check_1, Icon_1, GroupSpacer_1, Spinner_1, FocusZone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var GroupHeaderBase = /** @class */ (function (_super) {
        tslib_1.__extends(GroupHeaderBase, _super);
        function GroupHeaderBase(props) {
            var _this = _super.call(this, props) || this;
            _this._onToggleCollapse = function (ev) {
                var _a = _this.props, group = _a.group, onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
                var isCollapsed = _this.state.isCollapsed;
                var newCollapsed = !isCollapsed;
                var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
                _this.setState({
                    isCollapsed: newCollapsed,
                    isLoadingVisible: newLoadingVisible,
                });
                if (onToggleCollapse) {
                    onToggleCollapse(group);
                }
                ev.stopPropagation();
                ev.preventDefault();
            };
            _this._onToggleSelectGroupClick = function (ev) {
                var _a = _this.props, onToggleSelectGroup = _a.onToggleSelectGroup, group = _a.group;
                if (onToggleSelectGroup) {
                    onToggleSelectGroup(group);
                }
                ev.preventDefault();
                ev.stopPropagation();
            };
            _this._onHeaderClick = function () {
                var _a = _this.props, group = _a.group, onGroupHeaderClick = _a.onGroupHeaderClick, onToggleSelectGroup = _a.onToggleSelectGroup;
                if (onGroupHeaderClick) {
                    onGroupHeaderClick(group);
                }
                else if (onToggleSelectGroup) {
                    onToggleSelectGroup(group);
                }
            };
            _this._onRenderTitle = function (props) {
                var group = props.group;
                if (!group) {
                    return null;
                }
                return (React.createElement("div", { className: _this._classNames.title },
                    React.createElement("span", null, group.name),
                    React.createElement("span", { className: _this._classNames.headerCount },
                        "(",
                        group.count,
                        group.hasMoreData && '+',
                        ")")));
            };
            _this.state = {
                isCollapsed: (_this.props.group && _this.props.group.isCollapsed),
                isLoadingVisible: false,
            };
            return _this;
        }
        // tslint:disable-next-line function-name
        GroupHeaderBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
            if (newProps.group) {
                var newCollapsed = newProps.group.isCollapsed;
                var isGroupLoading = newProps.isGroupLoading;
                var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(newProps.group);
                this.setState({
                    isCollapsed: newCollapsed || false,
                    isLoadingVisible: newLoadingVisible || false,
                });
            }
        };
        GroupHeaderBase.prototype.render = function () {
            var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, 
            // tslint:disable-next-line:deprecation
            _b = _a.isSelected, 
            // tslint:disable-next-line:deprecation
            isSelected = _b === void 0 ? false : _b, _c = _a.selected, selected = _c === void 0 ? false : _c, indentWidth = _a.indentWidth, _d = _a.onRenderTitle, onRenderTitle = _d === void 0 ? this._onRenderTitle : _d, onRenderGroupHeaderCheckbox = _a.onRenderGroupHeaderCheckbox, _e = _a.isCollapsedGroupSelectVisible, isCollapsedGroupSelectVisible = _e === void 0 ? true : _e, expandButtonProps = _a.expandButtonProps, expandButtonIcon = _a.expandButtonIcon, selectAllButtonProps = _a.selectAllButtonProps, theme = _a.theme, styles = _a.styles, className = _a.className, groupedListId = _a.groupedListId, compact = _a.compact, ariaPosInSet = _a.ariaPosInSet, ariaSetSize = _a.ariaSetSize, useFastIcons = _a.useFastIcons;
            var defaultCheckboxRender = useFastIcons ? this._fastDefaultCheckboxRender : this._defaultCheckboxRender;
            var onRenderCheckbox = onRenderGroupHeaderCheckbox
                ? Utilities_1.composeRenderFunction(onRenderGroupHeaderCheckbox, defaultCheckboxRender)
                : defaultCheckboxRender;
            var _f = this.state, isCollapsed = _f.isCollapsed, isLoadingVisible = _f.isLoadingVisible;
            var canSelectGroup = selectionMode === index_1.SelectionMode.multiple;
            var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
            var currentlySelected = selected || isSelected;
            var isRTL = Utilities_1.getRTL(theme);
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                selected: currentlySelected,
                isCollapsed: isCollapsed,
                compact: compact,
            });
            if (!group) {
                return null;
            }
            return (React.createElement("div", { className: this._classNames.root, style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, "aria-expanded": !group.isCollapsed, "aria-label": group.ariaLabel || group.name, "aria-level": groupLevel !== undefined ? groupLevel + 1 : undefined, "aria-setsize": ariaSetSize, "aria-posinset": ariaPosInSet, "data-is-focusable": true },
                React.createElement(FocusZone_1.FocusZone, { className: this._classNames.groupHeaderContainer, direction: FocusZone_1.FocusZoneDirection.horizontal },
                    isSelectionCheckVisible ? (React.createElement("button", tslib_1.__assign({ type: "button", className: this._classNames.check, role: "checkbox", "aria-checked": currentlySelected, "data-selection-toggle": true, onClick: this._onToggleSelectGroupClick }, selectAllButtonProps), onRenderCheckbox({ checked: currentlySelected, theme: theme }, onRenderCheckbox))) : (selectionMode !== index_1.SelectionMode.none && React.createElement(GroupSpacer_1.GroupSpacer, { indentWidth: indentWidth, count: 1 })),
                    React.createElement(GroupSpacer_1.GroupSpacer, { indentWidth: indentWidth, count: groupLevel }),
                    React.createElement("div", { className: this._classNames.dropIcon },
                        React.createElement(Icon_1.Icon, { iconName: "Tag" })),
                    React.createElement("button", tslib_1.__assign({ type: "button", className: this._classNames.expand, onClick: this._onToggleCollapse, "aria-expanded": !group.isCollapsed, "aria-controls": group && !group.isCollapsed ? groupedListId : undefined }, expandButtonProps),
                        React.createElement(Icon_1.Icon, { className: this._classNames.expandIsCollapsed, iconName: expandButtonIcon || (isRTL ? 'ChevronLeftMed' : 'ChevronRightMed') })),
                    onRenderTitle(this.props, this._onRenderTitle),
                    isLoadingVisible && React.createElement(Spinner_1.Spinner, { label: loadingText }))));
        };
        GroupHeaderBase.prototype._defaultCheckboxRender = function (checkboxProps) {
            return React.createElement(Check_1.Check, { checked: checkboxProps.checked });
        };
        GroupHeaderBase.prototype._fastDefaultCheckboxRender = function (checkboxProps) {
            return React.createElement(FastCheck, { theme: checkboxProps.theme, checked: checkboxProps.checked });
        };
        GroupHeaderBase.defaultProps = {
            expandButtonProps: { 'aria-label': 'expand collapse group' },
        };
        return GroupHeaderBase;
    }(React.Component));
    exports.GroupHeaderBase = GroupHeaderBase;
    var FastCheck = React.memo(function (props) {
        return React.createElement(Check_1.Check, { theme: props.theme, checked: props.checked, className: props.className, useFastIcons: true });
    });
});
//# sourceMappingURL=GroupHeader.base.js.map