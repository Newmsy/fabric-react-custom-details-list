define(["require", "exports", "tslib", "react", "../../Utilities", "./GroupedListSection", "../../List", "../../utilities/selection/index", "../DetailsList/DetailsRow.styles"], function (require, exports, tslib_1, React, Utilities_1, GroupedListSection_1, List_1, index_1, DetailsRow_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var ROW_HEIGHT = DetailsRow_styles_1.DEFAULT_ROW_HEIGHTS.rowHeight, COMPACT_ROW_HEIGHT = DetailsRow_styles_1.DEFAULT_ROW_HEIGHTS.compactRowHeight;
    var GroupedListBase = /** @class */ (function (_super) {
        tslib_1.__extends(GroupedListBase, _super);
        function GroupedListBase(props) {
            var _this = _super.call(this, props) || this;
            _this._list = React.createRef();
            _this._renderGroup = function (group, groupIndex) {
                var _a = _this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport, onShouldVirtualize = _a.onShouldVirtualize, groups = _a.groups, compact = _a.compact;
                // override group header/footer props as needed
                var dividerProps = {
                    onToggleSelectGroup: _this._onToggleSelectGroup,
                    onToggleCollapse: _this._onToggleCollapse,
                    onToggleSummarize: _this._onToggleSummarize,
                };
                var headerProps = tslib_1.__assign(tslib_1.__assign({}, groupProps.headerProps), dividerProps);
                var showAllProps = tslib_1.__assign(tslib_1.__assign({}, groupProps.showAllProps), dividerProps);
                var footerProps = tslib_1.__assign(tslib_1.__assign({}, groupProps.footerProps), dividerProps);
                var groupNestingDepth = _this._getGroupNestingDepth();
                if (!groupProps.showEmptyGroups && group && group.count === 0) {
                    return null;
                }
                return (React.createElement(GroupedListSection_1.GroupedListSection, { ref: 'group_' + groupIndex, key: _this._getGroupKey(group, groupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, groupProps: groupProps, headerProps: headerProps, listProps: listProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupShowAll: groupProps.onRenderShowAll, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, showAllProps: showAllProps, viewport: viewport, onShouldVirtualize: onShouldVirtualize, groupedListClassNames: _this._classNames, groups: groups, compact: compact }));
            };
            _this._getDefaultGroupItemLimit = function (group) {
                return group.count;
            };
            _this._getGroupItemLimit = function (group) {
                var groupProps = _this.props.groupProps;
                var getGroupItemLimit = groupProps && groupProps.getGroupItemLimit ? groupProps.getGroupItemLimit : _this._getDefaultGroupItemLimit;
                return getGroupItemLimit(group);
            };
            _this._getGroupHeight = function (group) {
                var rowHeight = _this.props.compact ? COMPACT_ROW_HEIGHT : ROW_HEIGHT;
                return rowHeight + (group.isCollapsed ? 0 : rowHeight * _this._getGroupItemLimit(group));
            };
            _this._getPageHeight = function (itemIndex) {
                var groups = _this.state.groups;
                var _a = _this.props.getGroupHeight, getGroupHeight = _a === void 0 ? _this._getGroupHeight : _a;
                var pageGroup = groups && groups[itemIndex];
                if (pageGroup) {
                    return getGroupHeight(pageGroup, itemIndex);
                }
                else {
                    return 0;
                }
            };
            _this._onToggleCollapse = function (group) {
                var groupProps = _this.props.groupProps;
                var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
                if (group) {
                    if (onToggleCollapse) {
                        onToggleCollapse(group);
                    }
                    group.isCollapsed = !group.isCollapsed;
                    _this._updateIsSomeGroupExpanded();
                    _this.forceUpdate();
                }
            };
            _this._onToggleSelectGroup = function (group) {
                var _a = _this.props, selection = _a.selection, selectionMode = _a.selectionMode;
                if (group && selection && selectionMode === index_1.SelectionMode.multiple) {
                    selection.toggleRangeSelected(group.startIndex, group.count);
                }
            };
            _this._onToggleSummarize = function (group) {
                var groupProps = _this.props.groupProps;
                var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;
                if (onToggleSummarize) {
                    onToggleSummarize(group);
                }
                else {
                    if (group) {
                        group.isShowingAll = !group.isShowingAll;
                    }
                    _this.forceUpdate();
                }
            };
            _this._getPageSpecification = function (itemIndex) {
                var groups = _this.state.groups;
                var pageGroup = groups && groups[itemIndex];
                return {
                    key: pageGroup && pageGroup.key,
                };
            };
            Utilities_1.initializeComponentRef(_this);
            _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
            _this.state = {
                lastWidth: 0,
                groups: props.groups,
            };
            return _this;
        }
        GroupedListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
            if (this._list.current) {
                this._list.current.scrollToIndex(index, measureItem, scrollToMode);
            }
        };
        GroupedListBase.prototype.getStartItemIndexInView = function () {
            return this._list.current.getStartItemIndexInView() || 0;
        };
        // tslint:disable-next-line function-name
        GroupedListBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
            var _a = this.props, groups = _a.groups, selectionMode = _a.selectionMode, compact = _a.compact;
            var shouldForceUpdates = false;
            if (newProps.groups !== groups) {
                this.setState({ groups: newProps.groups });
                shouldForceUpdates = true;
            }
            if (newProps.selectionMode !== selectionMode || newProps.compact !== compact) {
                shouldForceUpdates = true;
            }
            if (shouldForceUpdates) {
                this._forceListUpdates();
            }
        };
        GroupedListBase.prototype.componentDidMount = function () {
            var _a = this.props, groupProps = _a.groupProps, _b = _a.groups, groups = _b === void 0 ? [] : _b;
            if (groupProps && groupProps.isAllGroupsCollapsed) {
                this._setGroupsCollapsedState(groups, groupProps.isAllGroupsCollapsed);
            }
        };
        GroupedListBase.prototype.render = function () {
            var _a = this.props, className = _a.className, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, theme = _a.theme, styles = _a.styles, compact = _a.compact, _b = _a.listProps, listProps = _b === void 0 ? {} : _b;
            var groups = this.state.groups;
            this._classNames = getClassNames(styles, {
                theme: theme,
                className: className,
                compact: compact,
            });
            var version = listProps.version;
            return (React.createElement("div", { className: this._classNames.root, "data-automationid": "GroupedList", "data-is-scrollable": "false", role: "presentation" },
                React.createElement(Utilities_1.FocusRects, null),
                !groups ? (this._renderGroup(undefined, 0)) : (React.createElement(List_1.List, { ref: this._list, role: "presentation", items: groups, onRenderCell: this._renderGroup, getItemCountForPage: this._returnOne, getPageHeight: this._getPageHeight, getPageSpecification: this._getPageSpecification, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, version: version }))));
        };
        GroupedListBase.prototype.forceUpdate = function () {
            _super.prototype.forceUpdate.call(this);
            this._forceListUpdates();
        };
        GroupedListBase.prototype.toggleCollapseAll = function (allCollapsed) {
            var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
            var groupProps = this.props.groupProps;
            var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
            if (groups.length > 0) {
                if (onToggleCollapseAll) {
                    onToggleCollapseAll(allCollapsed);
                }
                this._setGroupsCollapsedState(groups, allCollapsed);
                this._updateIsSomeGroupExpanded();
                this.forceUpdate();
            }
        };
        GroupedListBase.prototype._setGroupsCollapsedState = function (groups, isCollapsed) {
            for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
                groups[groupIndex].isCollapsed = isCollapsed;
            }
        };
        GroupedListBase.prototype._returnOne = function () {
            return 1;
        };
        GroupedListBase.prototype._getGroupKey = function (group, index) {
            return 'group-' + (group && group.key ? group.key : String(index));
        };
        GroupedListBase.prototype._getGroupNestingDepth = function () {
            var groups = this.state.groups;
            var level = 0;
            var groupsInLevel = groups;
            while (groupsInLevel && groupsInLevel.length > 0) {
                level++;
                groupsInLevel = groupsInLevel[0].children;
            }
            return level;
        };
        GroupedListBase.prototype._forceListUpdates = function (groups) {
            groups = groups || this.state.groups;
            var groupCount = groups ? groups.length : 1;
            if (this._list.current) {
                this._list.current.forceUpdate();
                for (var i = 0; i < groupCount; i++) {
                    var group = this._list.current.refs['group_' + String(i)];
                    if (group) {
                        group.forceListUpdate();
                    }
                }
            }
            else {
                var group = this.refs['group_' + String(0)];
                if (group) {
                    group.forceListUpdate();
                }
            }
        };
        GroupedListBase.prototype._computeIsSomeGroupExpanded = function (groups) {
            var _this = this;
            return !!(groups &&
                groups.some(function (group) { return (group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed); }));
        };
        GroupedListBase.prototype._updateIsSomeGroupExpanded = function () {
            var groups = this.state.groups;
            var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
            var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
            if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
                if (onGroupExpandStateChanged) {
                    onGroupExpandStateChanged(newIsSomeGroupExpanded);
                }
                this._isSomeGroupExpanded = newIsSomeGroupExpanded;
            }
        };
        GroupedListBase.defaultProps = {
            selectionMode: index_1.SelectionMode.multiple,
            isHeaderVisible: true,
            groupProps: {},
            compact: false,
        };
        return GroupedListBase;
    }(React.Component));
    exports.GroupedListBase = GroupedListBase;
});
//# sourceMappingURL=GroupedList.base.js.map