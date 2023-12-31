define(["require", "exports", "tslib", "react", "../../Utilities", "../DetailsList/DetailsList.types", "../DetailsList/DetailsHeader", "../DetailsList/DetailsHeader.types", "../DetailsList/DetailsRow", "../../FocusZone", "../../utilities/selection/index", "../../utilities/dragdrop/DragDropHelper", "../../GroupedList", "../../List", "../../utilities/decorators/withViewport", "../../utilities/groupedList/GroupedListUtility", "./DetailsRow.styles", "./DetailsRowCheck.styles", "../GroupedList/GroupSpacer", "@uifabric/utilities"], function (require, exports, tslib_1, React, Utilities_1, DetailsList_types_1, DetailsHeader_1, DetailsHeader_types_1, DetailsRow_1, FocusZone_1, index_1, DragDropHelper_1, GroupedList_1, List_1, withViewport_1, GroupedListUtility_1, DetailsRow_styles_1, DetailsRowCheck_styles_1, GroupSpacer_1, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var MIN_COLUMN_WIDTH = 100; // this is the global min width
    var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
    var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
    var DetailsListBase = /** @class */ (function (_super) {
        tslib_1.__extends(DetailsListBase, _super);
        function DetailsListBase(props) {
            var _this = _super.call(this, props) || this;
            _this._root = React.createRef();
            _this._header = React.createRef();
            _this._groupedList = React.createRef();
            _this._list = React.createRef();
            _this._focusZone = React.createRef();
            _this._selectionZone = React.createRef();
            _this._sumColumnWidths = Utilities_1.memoizeFunction(function (columns) {
                var totalWidth = 0;
                columns.forEach(function (column) { return (totalWidth += column.calculatedWidth || column.minWidth); });
                return totalWidth;
            });
            _this._onRenderRow = function (props, defaultRender) {
                return React.createElement(DetailsRow_1.DetailsRow, tslib_1.__assign({}, props));
            };
            _this._onRenderDetailsHeader = function (detailsHeaderProps, defaultRender) {
                return React.createElement(DetailsHeader_1.DetailsHeader, tslib_1.__assign({}, detailsHeaderProps));
            };
            _this._onRenderDetailsFooter = function (detailsFooterProps, defaultRender) {
                return null;
            };
            _this._onRenderListCell = function (nestingDepth) {
                return function (item, itemIndex) {
                    return _this._onRenderCell(nestingDepth, item, itemIndex);
                };
            };
            _this._onRenderCell = function (nestingDepth, item, index) {
                var _a = _this.props, compact = _a.compact, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.rowElementEventMap, onRenderMissingItem = _a.onRenderMissingItem, onRenderItemColumn = _a.onRenderItemColumn, getCellValueKey = _a.getCellValueKey, _b = _a.selectionMode, selectionMode = _b === void 0 ? _this._selection.mode : _b, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, getRowAriaDescribedBy = _a.getRowAriaDescribedBy, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, groupProps = _a.groupProps, useReducedRowRenderer = _a.useReducedRowRenderer, indentWidth = _a.indentWidth, _c = _a.cellStyleProps, cellStyleProps = _c === void 0 ? DetailsRow_styles_1.DEFAULT_CELL_STYLE_PROPS : _c, onRenderCheckbox = _a.onRenderCheckbox, enableUpdateAnimations = _a.enableUpdateAnimations, useFastIcons = _a.useFastIcons;
                var onRenderRow = _this.props.onRenderRow
                    ? utilities_1.composeRenderFunction(_this.props.onRenderRow, _this._onRenderRow)
                    : _this._onRenderRow;
                var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
                var selection = _this._selection;
                var dragDropHelper = _this._dragDropHelper;
                var columns = _this.state.adjustedColumns;
                var rowProps = {
                    item: item,
                    itemIndex: index,
                    compact: compact,
                    columns: columns,
                    groupNestingDepth: nestingDepth,
                    selectionMode: selectionMode,
                    selection: selection,
                    onDidMount: _this._onRowDidMount,
                    onWillUnmount: _this._onRowWillUnmount,
                    onRenderItemColumn: onRenderItemColumn,
                    getCellValueKey: getCellValueKey,
                    eventsToRegister: eventsToRegister,
                    dragDropEvents: dragDropEvents,
                    dragDropHelper: dragDropHelper,
                    viewport: viewport,
                    checkboxVisibility: checkboxVisibility,
                    collapseAllVisibility: collapseAllVisibility,
                    getRowAriaLabel: getRowAriaLabel,
                    getRowAriaDescribedBy: getRowAriaDescribedBy,
                    checkButtonAriaLabel: checkButtonAriaLabel,
                    checkboxCellClassName: checkboxCellClassName,
                    useReducedRowRenderer: useReducedRowRenderer,
                    indentWidth: indentWidth,
                    cellStyleProps: cellStyleProps,
                    onRenderDetailsCheckbox: onRenderCheckbox,
                    enableUpdateAnimations: enableUpdateAnimations,
                    rowWidth: _this._sumColumnWidths(columns),
                    useFastIcons: useFastIcons,
                };
                if (!item) {
                    if (onRenderMissingItem) {
                        return onRenderMissingItem(index, rowProps);
                    }
                    return null;
                }
                return onRenderRow(rowProps);
            };
            _this._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
                _this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
            };
            _this._onColumnIsSizingChanged = function (column, isSizing) {
                _this.setState({ isSizing: isSizing });
            };
            _this._onHeaderKeyDown = function (ev) {
                if (ev.which === Utilities_1.KeyCodes.down) {
                    if (_this._focusZone.current && _this._focusZone.current.focus()) {
                        // select the first item in list after down arrow key event
                        // only if nothing was selected; otherwise start with the already-selected item
                        if (_this._selection.getSelectedIndices().length === 0) {
                            _this._selection.setIndexSelected(0, true, false);
                        }
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }
            };
            _this._onContentKeyDown = function (ev) {
                if (ev.which === Utilities_1.KeyCodes.up && !ev.altKey) {
                    if (_this._header.current && _this._header.current.focus()) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }
            };
            _this._onRowDidMount = function (row) {
                var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
                var itemKey = _this._getItemKey(item, itemIndex);
                _this._activeRows[itemKey] = row; // this is used for column auto resize
                _this._setFocusToRowIfPending(row);
                var onRowDidMount = _this.props.onRowDidMount;
                if (onRowDidMount) {
                    onRowDidMount(item, itemIndex);
                }
            };
            _this._onRowWillUnmount = function (row) {
                var onRowWillUnmount = _this.props.onRowWillUnmount;
                var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
                var itemKey = _this._getItemKey(item, itemIndex);
                delete _this._activeRows[itemKey];
                if (onRowWillUnmount) {
                    onRowWillUnmount(item, itemIndex);
                }
            };
            _this._onToggleCollapse = function (collapsed) {
                _this.setState({
                    isCollapsed: collapsed,
                });
                if (_this._groupedList.current) {
                    _this._groupedList.current.toggleCollapseAll(collapsed);
                }
            };
            _this._onColumnDragEnd = function (props, event) {
                var columnReorderOptions = _this.props.columnReorderOptions;
                var finalDropLocation = DetailsList_types_1.ColumnDragEndLocation.outside;
                if (columnReorderOptions && columnReorderOptions.onDragEnd) {
                    if (props.dropLocation && props.dropLocation !== DetailsList_types_1.ColumnDragEndLocation.header) {
                        finalDropLocation = props.dropLocation;
                    }
                    else if (_this._root.current) {
                        var clientRect = _this._root.current.getBoundingClientRect();
                        if (event.clientX > clientRect.left &&
                            event.clientX < clientRect.right &&
                            event.clientY > clientRect.top &&
                            event.clientY < clientRect.bottom) {
                            finalDropLocation = DetailsList_types_1.ColumnDragEndLocation.surface;
                        }
                    }
                    columnReorderOptions.onDragEnd(finalDropLocation);
                }
            };
            _this._onColumnResized = function (resizingColumn, newWidth, resizingColumnIndex) {
                var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
                if (_this.props.onColumnResize) {
                    _this.props.onColumnResize(resizingColumn, newCalculatedWidth, resizingColumnIndex);
                }
                _this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);
                _this._adjustColumns(_this.props, true, resizingColumnIndex);
                _this.setState({
                    version: {},
                });
            };
            /**
             * Callback function when double clicked on the details header column resizer
             * which will measure the column cells of all the active rows and resize the
             * column to the max cell width.
             *
             * @param column - double clicked column definition
             * @param columnIndex - double clicked column index
             * TODO: min width 100 should be changed to const value and should be consistent with the
             * value used on _onSizerMove method in DetailsHeader
             */
            _this._onColumnAutoResized = function (column, columnIndex) {
                var max = 0;
                var count = 0;
                var totalCount = Object.keys(_this._activeRows).length;
                for (var key in _this._activeRows) {
                    if (_this._activeRows.hasOwnProperty(key)) {
                        var currentRow = _this._activeRows[key];
                        currentRow.measureCell(columnIndex, function (width) {
                            max = Math.max(max, width);
                            count++;
                            if (count === totalCount) {
                                _this._onColumnResized(column, max, columnIndex);
                            }
                        });
                    }
                }
            };
            /**
             * Call back function when an element in FocusZone becomes active. It will translate it into item
             * and call onActiveItemChanged callback if specified.
             *
             * @param row - element that became active in Focus Zone
             * @param focus - event from Focus Zone
             */
            _this._onActiveRowChanged = function (el, ev) {
                var _a = _this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
                if (!el) {
                    return;
                }
                // Check and assign index only if the event was raised from any DetailsRow element
                if (el.getAttribute('data-item-index')) {
                    var index = Number(el.getAttribute('data-item-index'));
                    if (index >= 0) {
                        if (onActiveItemChanged) {
                            onActiveItemChanged(items[index], index, ev);
                        }
                        _this.setState({
                            focusedItemIndex: index,
                        });
                    }
                }
            };
            _this._onBlur = function (event) {
                _this.setState({
                    focusedItemIndex: -1,
                });
            };
            _this.isRightArrow = function (event) {
                return event.which === Utilities_1.getRTLSafeKeyCode(Utilities_1.KeyCodes.right, _this.props.theme);
            };
            Utilities_1.initializeComponentRef(_this);
            _this._async = new Utilities_1.Async(_this);
            _this._activeRows = {};
            _this._columnOverrides = {};
            _this.state = {
                focusedItemIndex: -1,
                lastWidth: 0,
                adjustedColumns: _this._getAdjustedColumns(props),
                isSizing: false,
                isDropping: false,
                isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
                isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed,
                version: {},
            };
            _this._selection =
                props.selection ||
                    new index_1.Selection({
                        onSelectionChanged: undefined,
                        getKey: props.getKey,
                        selectionMode: props.selectionMode,
                    });
            if (!_this.props.disableSelectionZone) {
                _this._selection.setItems(props.items, false);
            }
            _this._dragDropHelper = props.dragDropEvents
                ? new DragDropHelper_1.DragDropHelper({
                    selection: _this._selection,
                    minimumPixelsForDrag: props.minimumPixelsForDrag,
                })
                : undefined;
            _this._initialFocusedIndex = props.initialFocusedIndex;
            return _this;
        }
        DetailsListBase.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
            this._list.current && this._list.current.scrollToIndex(index, measureItem, scrollToMode);
            this._groupedList.current && this._groupedList.current.scrollToIndex(index, measureItem, scrollToMode);
        };
        DetailsListBase.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
            if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
            var item = this.props.items[index];
            if (item) {
                this.scrollToIndex(index, measureItem, scrollToMode);
                var itemKey = this._getItemKey(item, index);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRow(row, forceIntoFirstElement);
                }
            }
        };
        DetailsListBase.prototype.getStartItemIndexInView = function () {
            if (this._list && this._list.current) {
                return this._list.current.getStartItemIndexInView();
            }
            else if (this._groupedList && this._groupedList.current) {
                return this._groupedList.current.getStartItemIndexInView();
            }
            return 0;
        };
        DetailsListBase.prototype.componentWillUnmount = function () {
            if (this._dragDropHelper) {
                // TODO If the DragDropHelper was passed via props, this will dispose it, which is incorrect behavior.
                this._dragDropHelper.dispose();
            }
            this._async.dispose();
        };
        DetailsListBase.prototype.componentDidUpdate = function (prevProps, prevState) {
            if (this._initialFocusedIndex !== undefined) {
                var item = this.props.items[this._initialFocusedIndex];
                if (item) {
                    var itemKey = this._getItemKey(item, this._initialFocusedIndex);
                    var row = this._activeRows[itemKey];
                    if (row) {
                        this._setFocusToRowIfPending(row);
                    }
                }
            }
            if (this.props.items !== prevProps.items &&
                this.props.items.length > 0 &&
                this.state.focusedItemIndex !== -1 &&
                !Utilities_1.elementContains(this._root.current, document.activeElement, false)) {
                // Item set has changed and previously-focused item is gone.
                // Set focus to item at index of previously-focused item if it is in range,
                // else set focus to the last item.
                var index = this.state.focusedItemIndex < this.props.items.length
                    ? this.state.focusedItemIndex
                    : this.props.items.length - 1;
                var item = this.props.items[index];
                var itemKey = this._getItemKey(item, this.state.focusedItemIndex);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRow(row);
                }
                else {
                    this._initialFocusedIndex = index;
                }
            }
            if (this.props.onDidUpdate) {
                this.props.onDidUpdate(this);
            }
        };
        // tslint:disable-next-line function-name
        DetailsListBase.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
            var _a = this.props, checkboxVisibility = _a.checkboxVisibility, items = _a.items, setKey = _a.setKey, _b = _a.selectionMode, selectionMode = _b === void 0 ? this._selection.mode : _b, columns = _a.columns, viewport = _a.viewport, compact = _a.compact, dragDropEvents = _a.dragDropEvents;
            var _c = (this.props.groupProps || {}).isAllGroupsCollapsed, isAllGroupsCollapsed = _c === void 0 ? undefined : _c;
            var newViewportWidth = (newProps.viewport && newProps.viewport.width) || 0;
            var oldViewportWidth = (viewport && viewport.width) || 0;
            var shouldResetSelection = newProps.setKey !== setKey || newProps.setKey === undefined;
            var shouldForceUpdates = false;
            if (newProps.layoutMode !== this.props.layoutMode) {
                shouldForceUpdates = true;
            }
            if (shouldResetSelection) {
                this._initialFocusedIndex = newProps.initialFocusedIndex;
                // reset focusedItemIndex when setKey changes
                this.setState({
                    focusedItemIndex: this._initialFocusedIndex !== undefined ? this._initialFocusedIndex : -1,
                });
            }
            if (!this.props.disableSelectionZone && newProps.items !== items) {
                this._selection.setItems(newProps.items, shouldResetSelection);
            }
            if (newProps.checkboxVisibility !== checkboxVisibility ||
                newProps.columns !== columns ||
                newViewportWidth !== oldViewportWidth ||
                newProps.compact !== compact) {
                shouldForceUpdates = true;
            }
            this._adjustColumns(newProps, true);
            if (newProps.selectionMode !== selectionMode) {
                shouldForceUpdates = true;
            }
            if (isAllGroupsCollapsed === undefined &&
                newProps.groupProps &&
                newProps.groupProps.isAllGroupsCollapsed !== undefined) {
                this.setState({
                    isCollapsed: newProps.groupProps.isAllGroupsCollapsed,
                    isSomeGroupExpanded: !newProps.groupProps.isAllGroupsCollapsed,
                });
            }
            if (newProps.dragDropEvents !== dragDropEvents) {
                this._dragDropHelper && this._dragDropHelper.dispose();
                this._dragDropHelper = newProps.dragDropEvents
                    ? new DragDropHelper_1.DragDropHelper({
                        selection: this._selection,
                        minimumPixelsForDrag: newProps.minimumPixelsForDrag,
                    })
                    : undefined;
                shouldForceUpdates = true;
            }
            if (shouldForceUpdates) {
                this.setState({
                    version: {},
                });
            }
        };
        DetailsListBase.prototype.render = function () {
            var _a = this.props, ariaLabelForListHeader = _a.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, className = _a.className, checkboxVisibility = _a.checkboxVisibility, compact = _a.compact, constrainMode = _a.constrainMode, dragDropEvents = _a.dragDropEvents, groups = _a.groups, groupProps = _a.groupProps, indentWidth = _a.indentWidth, items = _a.items, isPlaceholderData = _a.isPlaceholderData, isHeaderVisible = _a.isHeaderVisible, layoutMode = _a.layoutMode, onItemInvoked = _a.onItemInvoked, onItemContextMenu = _a.onItemContextMenu, onColumnHeaderClick = _a.onColumnHeaderClick, onColumnHeaderContextMenu = _a.onColumnHeaderContextMenu, _b = _a.selectionMode, selectionMode = _b === void 0 ? this._selection.mode : _b, selectionPreservedOnEmptyClick = _a.selectionPreservedOnEmptyClick, selectionZoneProps = _a.selectionZoneProps, ariaLabel = _a.ariaLabel, ariaLabelForGrid = _a.ariaLabelForGrid, rowElementEventMap = _a.rowElementEventMap, _c = _a.shouldApplyApplicationRole, shouldApplyApplicationRole = _c === void 0 ? false : _c, getKey = _a.getKey, listProps = _a.listProps, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize, viewport = _a.viewport, minimumPixelsForDrag = _a.minimumPixelsForDrag, getGroupHeight = _a.getGroupHeight, styles = _a.styles, theme = _a.theme, _d = _a.cellStyleProps, cellStyleProps = _d === void 0 ? DetailsRow_styles_1.DEFAULT_CELL_STYLE_PROPS : _d, onRenderCheckbox = _a.onRenderCheckbox, useFastIcons = _a.useFastIcons;
            var _e = this.state, adjustedColumns = _e.adjustedColumns, isCollapsed = _e.isCollapsed, isSizing = _e.isSizing, isSomeGroupExpanded = _e.isSomeGroupExpanded;
            var _f = this, selection = _f._selection, dragDropHelper = _f._dragDropHelper;
            var groupNestingDepth = this._getGroupNestingDepth();
            var additionalListProps = tslib_1.__assign({ renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD, renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND, getKey: getKey, version: this.state.version }, listProps);
            var selectAllVisibility = DetailsHeader_types_1.SelectAllVisibility.none; // for SelectionMode.none
            if (selectionMode === index_1.SelectionMode.single) {
                selectAllVisibility = DetailsHeader_types_1.SelectAllVisibility.hidden;
            }
            if (selectionMode === index_1.SelectionMode.multiple) {
                // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
                var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
                if (isCollapsedGroupSelectVisible === undefined) {
                    isCollapsedGroupSelectVisible = true;
                }
                var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
                selectAllVisibility = isSelectAllVisible ? DetailsHeader_types_1.SelectAllVisibility.visible : DetailsHeader_types_1.SelectAllVisibility.hidden;
            }
            if (checkboxVisibility === DetailsList_types_1.CheckboxVisibility.hidden) {
                selectAllVisibility = DetailsHeader_types_1.SelectAllVisibility.none;
            }
            var _g = this.props, _h = _g.onRenderDetailsHeader, onRenderDetailsHeader = _h === void 0 ? this._onRenderDetailsHeader : _h, _j = _g.onRenderDetailsFooter, onRenderDetailsFooter = _j === void 0 ? this._onRenderDetailsFooter : _j;
            var detailsFooterProps = this._getDetailsFooterProps();
            var columnReorderProps = this._getColumnReorderProps();
            var rowCount = (isHeaderVisible ? 1 : 0) + GroupedListUtility_1.GetGroupCount(groups) + (items ? items.length : 0);
            var classNames = getClassNames(styles, {
                theme: theme,
                compact: compact,
                isFixed: layoutMode === DetailsList_types_1.DetailsListLayoutMode.fixedColumns,
                isHorizontalConstrained: constrainMode === DetailsList_types_1.ConstrainMode.horizontalConstrained,
                className: className,
            });
            var list = groups ? (React.createElement(GroupedList_1.GroupedList, { componentRef: this._groupedList, groups: groups, groupProps: groupProps ? this._getGroupProps(groupProps) : undefined, items: items, onRenderCell: this._onRenderCell, selection: selection, selectionMode: checkboxVisibility !== DetailsList_types_1.CheckboxVisibility.hidden ? selectionMode : index_1.SelectionMode.none, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: this._onGroupExpandStateChanged, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize, getGroupHeight: getGroupHeight, compact: compact })) : (React.createElement(List_1.List, tslib_1.__assign({ ref: this._list, role: "presentation", items: items, onRenderCell: this._onRenderListCell(0), usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }, additionalListProps)));
            return (
            // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
            // with JAWS.
            React.createElement("div", tslib_1.__assign({ ref: this._root, className: classNames.root, "data-automationid": "DetailsList", "data-is-scrollable": "false", "aria-label": ariaLabel }, (shouldApplyApplicationRole ? { role: 'application' } : {})),
                React.createElement(Utilities_1.FocusRects, null),
                React.createElement("div", { role: "grid", "aria-label": ariaLabelForGrid, "aria-rowcount": isPlaceholderData ? -1 : rowCount, "aria-colcount": (selectAllVisibility !== DetailsHeader_types_1.SelectAllVisibility.none ? 1 : 0) + (adjustedColumns ? adjustedColumns.length : 0), "aria-readonly": "true", "aria-busy": isPlaceholderData },
                    React.createElement("div", { onKeyDown: this._onHeaderKeyDown, role: "presentation", className: classNames.headerWrapper }, isHeaderVisible &&
                        onRenderDetailsHeader({
                            componentRef: this._header,
                            selectionMode: selectionMode,
                            layoutMode: layoutMode,
                            selection: selection,
                            columns: adjustedColumns,
                            onColumnClick: onColumnHeaderClick,
                            onColumnContextMenu: onColumnHeaderContextMenu,
                            onColumnResized: this._onColumnResized,
                            onColumnIsSizingChanged: this._onColumnIsSizingChanged,
                            onColumnAutoResized: this._onColumnAutoResized,
                            groupNestingDepth: groupNestingDepth,
                            isAllCollapsed: isCollapsed,
                            onToggleCollapseAll: this._onToggleCollapse,
                            ariaLabel: ariaLabelForListHeader,
                            ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
                            ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
                            selectAllVisibility: selectAllVisibility,
                            collapseAllVisibility: groupProps && groupProps.collapseAllVisibility,
                            viewport: viewport,
                            columnReorderProps: columnReorderProps,
                            minimumPixelsForDrag: minimumPixelsForDrag,
                            cellStyleProps: cellStyleProps,
                            checkboxVisibility: checkboxVisibility,
                            indentWidth: indentWidth,
                            onRenderDetailsCheckbox: onRenderCheckbox,
                            rowWidth: this._sumColumnWidths(this.state.adjustedColumns),
                            useFastIcons: useFastIcons,
                        }, this._onRenderDetailsHeader)),
                    React.createElement("div", { onKeyDown: this._onContentKeyDown, role: "presentation", className: classNames.contentWrapper },
                        React.createElement(FocusZone_1.FocusZone, { componentRef: this._focusZone, className: classNames.focusZone, direction: FocusZone_1.FocusZoneDirection.vertical, shouldEnterInnerZone: this.isRightArrow, onActiveElementChanged: this._onActiveRowChanged, onBlur: this._onBlur }, !this.props.disableSelectionZone ? (React.createElement(index_1.SelectionZone, tslib_1.__assign({ ref: this._selectionZone, selection: selection, selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick, selectionMode: selectionMode, onItemInvoked: onItemInvoked, onItemContextMenu: onItemContextMenu, enterModalOnTouch: this.props.enterModalSelectionOnTouch }, (selectionZoneProps || {})), list)) : (list))),
                    onRenderDetailsFooter(tslib_1.__assign({}, detailsFooterProps), this._onRenderDetailsFooter))));
        };
        DetailsListBase.prototype.forceUpdate = function () {
            _super.prototype.forceUpdate.call(this);
            this._forceListUpdates();
        };
        DetailsListBase.prototype._getGroupNestingDepth = function () {
            var groups = this.props.groups;
            var level = 0;
            var groupsInLevel = groups;
            while (groupsInLevel && groupsInLevel.length > 0) {
                level++;
                groupsInLevel = groupsInLevel[0].children;
            }
            return level;
        };
        DetailsListBase.prototype._setFocusToRowIfPending = function (row) {
            var itemIndex = row.props.itemIndex;
            if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
                this._setFocusToRow(row);
                delete this._initialFocusedIndex;
            }
        };
        DetailsListBase.prototype._setFocusToRow = function (row, forceIntoFirstElement) {
            if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
            if (this._selectionZone.current) {
                this._selectionZone.current.ignoreNextFocus();
            }
            this._async.setTimeout(function () {
                row.focus(forceIntoFirstElement);
            }, 0);
        };
        DetailsListBase.prototype._forceListUpdates = function () {
            if (this._groupedList.current) {
                this._groupedList.current.forceUpdate();
            }
            if (this._list.current) {
                this._list.current.forceUpdate();
            }
        };
        DetailsListBase.prototype._notifyColumnsResized = function () {
            this.state.adjustedColumns.forEach(function (column) {
                if (column.onColumnResize) {
                    column.onColumnResize(column.currentWidth);
                }
            });
        };
        DetailsListBase.prototype._adjustColumns = function (newProps, forceUpdate, resizingColumnIndex) {
            var adjustedColumns = this._getAdjustedColumns(newProps, forceUpdate, resizingColumnIndex);
            var viewport = this.props.viewport;
            var viewportWidth = viewport && viewport.width ? viewport.width : 0;
            if (adjustedColumns) {
                this.setState({
                    adjustedColumns: adjustedColumns,
                    lastWidth: viewportWidth,
                }, this._notifyColumnsResized);
            }
        };
        /** Returns adjusted columns, given the viewport size and layout mode. */
        DetailsListBase.prototype._getAdjustedColumns = function (newProps, forceUpdate, resizingColumnIndex) {
            var _this = this;
            var newItems = newProps.items, layoutMode = newProps.layoutMode, selectionMode = newProps.selectionMode, viewport = newProps.viewport;
            var viewportWidth = viewport && viewport.width ? viewport.width : 0;
            var newColumns = newProps.columns;
            var columns = this.props ? this.props.columns : [];
            var lastWidth = this.state ? this.state.lastWidth : -1;
            var lastSelectionMode = this.state ? this.state.lastSelectionMode : undefined;
            if (!forceUpdate &&
                lastWidth === viewportWidth &&
                lastSelectionMode === selectionMode &&
                (!columns || newColumns === columns)) {
                return [];
            }
            newColumns = newColumns || buildColumns(newItems, true);
            var adjustedColumns;
            if (layoutMode === DetailsList_types_1.DetailsListLayoutMode.fixedColumns) {
                adjustedColumns = this._getFixedColumns(newColumns);
                // Preserve adjusted column calculated widths.
                adjustedColumns.forEach(function (column) {
                    _this._rememberCalculatedWidth(column, column.calculatedWidth);
                });
            }
            else {
                if (resizingColumnIndex !== undefined) {
                    adjustedColumns = this._getJustifiedColumnsAfterResize(newColumns, viewportWidth, newProps, resizingColumnIndex);
                }
                else {
                    adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps, 0);
                }
                adjustedColumns.forEach(function (column) {
                    _this._getColumnOverride(column.key).currentWidth = column.calculatedWidth;
                });
            }
            return adjustedColumns;
        };
        /** Builds a set of columns based on the given columns mixed with the current overrides. */
        DetailsListBase.prototype._getFixedColumns = function (newColumns) {
            var _this = this;
            return newColumns.map(function (column) {
                var newColumn = tslib_1.__assign(tslib_1.__assign({}, column), _this._columnOverrides[column.key]);
                if (!newColumn.calculatedWidth) {
                    newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
                }
                return newColumn;
            });
        };
        DetailsListBase.prototype._getJustifiedColumnsAfterResize = function (newColumns, viewportWidth, props, resizingColumnIndex) {
            var _this = this;
            var fixedColumns = newColumns.slice(0, resizingColumnIndex);
            fixedColumns.forEach(function (column) { return (column.calculatedWidth = _this._getColumnOverride(column.key).currentWidth); });
            var fixedWidth = fixedColumns.reduce(function (total, column, i) { return total + getPaddedWidth(column, i === 0, props); }, 0);
            var remainingColumns = newColumns.slice(resizingColumnIndex);
            var remainingWidth = viewportWidth - fixedWidth;
            return tslib_1.__spreadArrays(fixedColumns, this._getJustifiedColumns(remainingColumns, remainingWidth, props, resizingColumnIndex));
        };
        /** Builds a set of columns to fix within the viewport width. */
        DetailsListBase.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props, firstIndex) {
            var _this = this;
            var _a = props.selectionMode, selectionMode = _a === void 0 ? this._selection.mode : _a, checkboxVisibility = props.checkboxVisibility;
            var rowCheckWidth = selectionMode !== index_1.SelectionMode.none && checkboxVisibility !== DetailsList_types_1.CheckboxVisibility.hidden ? DetailsRowCheck_styles_1.CHECK_CELL_WIDTH : 0;
            var groupExpandWidth = this._getGroupNestingDepth() * GroupSpacer_1.SPACER_WIDTH;
            var totalWidth = 0; // offset because we have one less inner padding.
            var availableWidth = viewportWidth - (rowCheckWidth + groupExpandWidth);
            var adjustedColumns = newColumns.map(function (column, i) {
                var newColumn = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, column), { calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH }), _this._columnOverrides[column.key]);
                var isFirst = i + firstIndex === 0;
                totalWidth += getPaddedWidth(newColumn, isFirst, props);
                return newColumn;
            });
            var lastIndex = adjustedColumns.length - 1;
            // Shrink or remove collapsable columns.
            while (lastIndex > 0 && totalWidth > availableWidth) {
                var column = adjustedColumns[lastIndex];
                var minWidth = column.minWidth || MIN_COLUMN_WIDTH;
                var overflowWidth = totalWidth - availableWidth;
                // tslint:disable-next-line:deprecation
                if (column.calculatedWidth - minWidth >= overflowWidth || !(column.isCollapsible || column.isCollapsable)) {
                    var originalWidth = column.calculatedWidth;
                    column.calculatedWidth = Math.max(column.calculatedWidth - overflowWidth, minWidth);
                    totalWidth -= originalWidth - column.calculatedWidth;
                }
                else {
                    totalWidth -= getPaddedWidth(column, false, props);
                    adjustedColumns.splice(lastIndex, 1);
                }
                lastIndex--;
            }
            // Then expand columns starting at the beginning, until we've filled the width.
            for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
                var column = adjustedColumns[i];
                var isLast = i === adjustedColumns.length - 1;
                var overrides = this._columnOverrides[column.key];
                if (overrides && overrides.calculatedWidth && !isLast) {
                    continue;
                }
                var spaceLeft = availableWidth - totalWidth;
                var increment = void 0;
                if (isLast) {
                    increment = spaceLeft;
                }
                else {
                    var maxWidth = column.maxWidth;
                    var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
                    increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
                }
                column.calculatedWidth = column.calculatedWidth + increment;
                totalWidth += increment;
            }
            return adjustedColumns;
        };
        DetailsListBase.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
            var overrides = this._getColumnOverride(column.key);
            overrides.calculatedWidth = newCalculatedWidth;
            overrides.currentWidth = newCalculatedWidth;
        };
        DetailsListBase.prototype._getColumnOverride = function (key) {
            return (this._columnOverrides[key] = this._columnOverrides[key] || {});
        };
        DetailsListBase.prototype._getItemKey = function (item, itemIndex) {
            var getKey = this.props.getKey;
            var itemKey = undefined;
            if (item) {
                itemKey = item.key;
            }
            if (getKey) {
                itemKey = getKey(item, itemIndex);
            }
            if (!itemKey) {
                itemKey = itemIndex;
            }
            return itemKey;
        };
        DetailsListBase.prototype._getDetailsFooterProps = function () {
            var columns = this.state.adjustedColumns;
            var _a = this.props, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, indentWidth = _a.indentWidth, _b = _a.cellStyleProps, cellStyleProps = _b === void 0 ? DetailsRow_styles_1.DEFAULT_CELL_STYLE_PROPS : _b, _c = _a.selectionMode, selectionMode = _c === void 0 ? this._selection.mode : _c;
            return {
                columns: columns,
                groupNestingDepth: this._getGroupNestingDepth(),
                selection: this._selection,
                selectionMode: selectionMode,
                viewport: viewport,
                checkboxVisibility: checkboxVisibility,
                indentWidth: indentWidth,
                cellStyleProps: cellStyleProps,
            };
        };
        DetailsListBase.prototype._getColumnReorderProps = function () {
            var columnReorderOptions = this.props.columnReorderOptions;
            if (columnReorderOptions) {
                return tslib_1.__assign(tslib_1.__assign({}, columnReorderOptions), { onColumnDragEnd: this._onColumnDragEnd });
            }
        };
        DetailsListBase.prototype._getGroupProps = function (detailsGroupProps) {
            var _this = this;
            var onRenderDetailsGroupFooter = detailsGroupProps.onRenderFooter, onRenderDetailsGroupHeader = detailsGroupProps.onRenderHeader;
            var columns = this.state.adjustedColumns;
            var _a = this.props, _b = _a.selectionMode, selectionMode = _b === void 0 ? this._selection.mode : _b, viewport = _a.viewport, _c = _a.cellStyleProps, cellStyleProps = _c === void 0 ? DetailsRow_styles_1.DEFAULT_CELL_STYLE_PROPS : _c, checkboxVisibility = _a.checkboxVisibility, indentWidth = _a.indentWidth;
            var groupNestingDepth = this._getGroupNestingDepth();
            var onRenderFooter = onRenderDetailsGroupFooter
                ? function (props, defaultRender) {
                    return onRenderDetailsGroupFooter(tslib_1.__assign(tslib_1.__assign({}, props), { columns: columns, groupNestingDepth: groupNestingDepth, indentWidth: indentWidth, selection: _this._selection, selectionMode: selectionMode, viewport: viewport, checkboxVisibility: checkboxVisibility,
                        cellStyleProps: cellStyleProps }), defaultRender);
                }
                : undefined;
            var onRenderHeader = onRenderDetailsGroupHeader
                ? function (props, defaultRender) {
                    return onRenderDetailsGroupHeader(tslib_1.__assign(tslib_1.__assign({}, props), { columns: columns, groupNestingDepth: groupNestingDepth, indentWidth: indentWidth, selection: _this._selection, selectionMode: selectionMode, viewport: viewport, checkboxVisibility: checkboxVisibility,
                        cellStyleProps: cellStyleProps }), defaultRender);
                }
                : undefined;
            return tslib_1.__assign(tslib_1.__assign({}, detailsGroupProps), { onRenderFooter: onRenderFooter,
                onRenderHeader: onRenderHeader });
        };
        DetailsListBase.defaultProps = {
            layoutMode: DetailsList_types_1.DetailsListLayoutMode.justified,
            selectionMode: index_1.SelectionMode.multiple,
            constrainMode: DetailsList_types_1.ConstrainMode.horizontalConstrained,
            checkboxVisibility: DetailsList_types_1.CheckboxVisibility.onHover,
            isHeaderVisible: true,
            compact: false,
            useFastIcons: true,
        };
        DetailsListBase = tslib_1.__decorate([
            withViewport_1.withViewport
        ], DetailsListBase);
        return DetailsListBase;
    }(React.Component));
    exports.DetailsListBase = DetailsListBase;
    function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
        var columns = [];
        if (items && items.length) {
            var firstItem = items[0];
            for (var propName in firstItem) {
                if (firstItem.hasOwnProperty(propName)) {
                    columns.push({
                        key: propName,
                        name: propName,
                        fieldName: propName,
                        minWidth: MIN_COLUMN_WIDTH,
                        maxWidth: 300,
                        isCollapsable: !!columns.length,
                        isCollapsible: !!columns.length,
                        isMultiline: isMultiline === undefined ? false : isMultiline,
                        isSorted: sortedColumnKey === propName,
                        isSortedDescending: !!isSortedDescending,
                        isRowHeader: false,
                        columnActionsMode: DetailsList_types_1.ColumnActionsMode.clickable,
                        isResizable: canResizeColumns,
                        onColumnClick: onColumnClick,
                        isGrouped: groupedColumnKey === propName,
                    });
                }
            }
        }
        return columns;
    }
    exports.buildColumns = buildColumns;
    function getPaddedWidth(column, isFirst, props) {
        var _a = props.cellStyleProps, cellStyleProps = _a === void 0 ? DetailsRow_styles_1.DEFAULT_CELL_STYLE_PROPS : _a;
        return (column.calculatedWidth +
            cellStyleProps.cellLeftPadding +
            cellStyleProps.cellRightPadding +
            (column.isPadded ? cellStyleProps.cellExtraRightPadding : 0));
    }
});
//# sourceMappingURL=DetailsList.base.js.map