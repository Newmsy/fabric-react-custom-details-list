import { __assign, __extends, __rest } from "tslib";
import * as React from 'react';
import { Async, EventGroup, css, divProperties, findIndex, findScrollableParent, getNativeProps, getParent, getWindow, initializeComponentRef, } from '../../Utilities';
import { ScrollToMode, } from './List.types';
import { composeRenderFunction } from '../../Utilities';
var RESIZE_DELAY = 16;
var MIN_SCROLL_UPDATE_DELAY = 100;
var MAX_SCROLL_UPDATE_DELAY = 500;
var IDLE_DEBOUNCE_DELAY = 200;
// The amount of time to wait before declaring that the list isn't scrolling
var DONE_SCROLLING_WAIT = 500;
var DEFAULT_ITEMS_PER_PAGE = 10;
var DEFAULT_PAGE_HEIGHT = 30;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var PAGE_KEY_PREFIX = 'page-';
var SPACER_KEY_PREFIX = 'spacer-';
var EMPTY_RECT = {
    top: -1,
    bottom: -1,
    left: -1,
    right: -1,
    width: 0,
    height: 0,
};
// Naming expensive measures so that they're named in profiles.
var _measurePageRect = function (element) { return element.getBoundingClientRect(); };
var _measureSurfaceRect = _measurePageRect;
var _measureScrollRect = _measurePageRect;
/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback
 * if provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if
 * provided by the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * To optimize glass rendering performance, onShouldVirtualize can be set. When onShouldVirtualize return false,
 * List will run in fast mode (not virtualized) to render all items without any measurements to improve page load time.
 * And we start doing measurements and rendering in virtualized mode when items grows larger than this threshold.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        _this._surface = React.createRef();
        _this._onRenderRoot = function (props) {
            var rootRef = props.rootRef, surfaceElement = props.surfaceElement, divProps = props.divProps;
            return (React.createElement("div", __assign({ ref: rootRef }, divProps), surfaceElement));
        };
        _this._onRenderSurface = function (props) {
            var surfaceRef = props.surfaceRef, pageElements = props.pageElements, divProps = props.divProps;
            return (React.createElement("div", __assign({ ref: surfaceRef }, divProps), pageElements));
        };
        _this._onRenderPage = function (pageProps, defaultRender) {
            var _a = _this.props, onRenderCell = _a.onRenderCell, role = _a.role;
            var _b = pageProps.page, _c = _b.items, items = _c === void 0 ? [] : _c, startIndex = _b.startIndex, divProps = __rest(pageProps, ["page"]);
            // only assign list item role if no role is assigned
            var cellRole = role === undefined ? 'listitem' : 'presentation';
            var cells = [];
            for (var i = 0; i < items.length; i++) {
                var index = startIndex + i;
                var item = items[i];
                var itemKey = _this.props.getKey ? _this.props.getKey(item, index) : item && item.key;
                if (itemKey === null || itemKey === undefined) {
                    itemKey = index;
                }
                cells.push(React.createElement("div", { role: cellRole, className: 'ms-List-cell', key: itemKey, "data-list-index": index, "data-automationid": "ListCell" }, onRenderCell &&
                    onRenderCell(item, index, !_this.props.ignoreScrollingState ? _this.state.isScrolling : undefined)));
            }
            return React.createElement("div", __assign({}, divProps), cells);
        };
        initializeComponentRef(_this);
        _this.state = {
            pages: [],
            isScrolling: false,
        };
        _this._async = new Async(_this);
        _this._events = new EventGroup(_this);
        _this._estimatedPageHeight = 0;
        _this._totalEstimates = 0;
        _this._requiredWindowsAhead = 0;
        _this._requiredWindowsBehind = 0;
        // Track the measure version for everything.
        _this._measureVersion = 0;
        // Ensure that scrolls are lazy updated.
        _this._onAsyncScroll = _this._async.debounce(_this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
            leading: false,
            maxWait: MAX_SCROLL_UPDATE_DELAY,
        });
        _this._onAsyncIdle = _this._async.debounce(_this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
            leading: false,
        });
        _this._onAsyncResize = _this._async.debounce(_this._onAsyncResize, RESIZE_DELAY, {
            leading: false,
        });
        _this._onScrollingDone = _this._async.debounce(_this._onScrollingDone, DONE_SCROLLING_WAIT, {
            leading: false,
        });
        _this._cachedPageHeights = {};
        _this._estimatedPageHeight = 0;
        _this._focusedIndex = -1;
        _this._pageCache = {};
        return _this;
    }
    /**
     * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
     * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
     *
     * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
     * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
     *
     * @param index - Index of item to scroll to
     * @param measureItem - Optional callback to measure the height of an individual item
     * @param scrollToMode - Optional defines where in the window the item should be positioned to when scrolling
     */
    List.prototype.scrollToIndex = function (index, measureItem, scrollToMode) {
        if (scrollToMode === void 0) { scrollToMode = ScrollToMode.auto; }
        var startIndex = this.props.startIndex;
        var renderCount = this._getRenderCount();
        var endIndex = startIndex + renderCount;
        var allowedRect = this._allowedRect;
        var scrollTop = 0;
        var itemsPerPage = 1;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var pageSpecification = this._getPageSpecification(itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            itemsPerPage = pageSpecification.itemCount;
            var requestedIndexIsInPage = itemIndex <= index && itemIndex + itemsPerPage > index;
            if (requestedIndexIsInPage) {
                // We have found the page. If the user provided a way to measure an individual item, we will try to scroll in
                // just the given item, otherwise we'll only bring the page into view
                if (measureItem && this._scrollElement) {
                    var scrollRect = _measureScrollRect(this._scrollElement);
                    var scrollWindow = {
                        top: this._scrollElement.scrollTop,
                        bottom: this._scrollElement.scrollTop + scrollRect.height,
                    };
                    // Adjust for actual item position within page
                    var itemPositionWithinPage = index - itemIndex;
                    for (var itemIndexInPage = 0; itemIndexInPage < itemPositionWithinPage; ++itemIndexInPage) {
                        scrollTop += measureItem(itemIndex + itemIndexInPage);
                    }
                    var scrollBottom = scrollTop + measureItem(index);
                    // If scrollToMode is set to something other than auto, we always want to
                    // scroll the item into a specific position on the page.
                    switch (scrollToMode) {
                        case ScrollToMode.top:
                            this._scrollElement.scrollTop = scrollTop;
                            return;
                        case ScrollToMode.bottom:
                            this._scrollElement.scrollTop = scrollBottom - scrollRect.height;
                            return;
                        case ScrollToMode.center:
                            this._scrollElement.scrollTop = (scrollTop + scrollBottom - scrollRect.height) / 2;
                            return;
                        case ScrollToMode.auto:
                        default:
                            break;
                    }
                    var itemIsFullyVisible = scrollTop >= scrollWindow.top && scrollBottom <= scrollWindow.bottom;
                    if (itemIsFullyVisible) {
                        // Item is already visible, do nothing.
                        return;
                    }
                    var itemIsPartiallyAbove = scrollTop < scrollWindow.top;
                    var itemIsPartiallyBelow = scrollBottom > scrollWindow.bottom;
                    if (itemIsPartiallyAbove) {
                        //  We will just scroll to 'scrollTop'
                        //  .------.   - scrollTop
                        //  |Item  |
                        //  | .----|-. - scrollWindow.top
                        //  '------' |
                        //    |      |
                        //    '------'
                    }
                    else if (itemIsPartiallyBelow) {
                        //  Adjust scrollTop position to just bring in the element
                        // .------.  - scrollTop
                        // |      |
                        // | .------.
                        // '-|----' | - scrollWindow.bottom
                        //   | Item |
                        //   '------' - scrollBottom
                        scrollTop = scrollBottom - scrollRect.height;
                    }
                }
                this._scrollElement.scrollTop = scrollTop;
                return;
            }
            scrollTop += pageHeight;
        }
    };
    List.prototype.getStartItemIndexInView = function (measureItem) {
        var pages = this.state.pages || [];
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            var isPageVisible = !page.isSpacer && (this._scrollTop || 0) >= page.top && (this._scrollTop || 0) <= page.top + page.height;
            if (isPageVisible) {
                if (!measureItem) {
                    var rowHeight = Math.floor(page.height / page.itemCount);
                    return page.startIndex + Math.floor((this._scrollTop - page.top) / rowHeight);
                }
                else {
                    var totalRowHeight = 0;
                    for (var itemIndex = page.startIndex; itemIndex < page.startIndex + page.itemCount; itemIndex++) {
                        var rowHeight = measureItem(itemIndex);
                        if (page.top + totalRowHeight <= this._scrollTop &&
                            this._scrollTop < page.top + totalRowHeight + rowHeight) {
                            return itemIndex;
                        }
                        else {
                            totalRowHeight += rowHeight;
                        }
                    }
                }
            }
        }
        return 0;
    };
    List.prototype.componentDidMount = function () {
        this._updatePages();
        this._measureVersion++;
        this._scrollElement = findScrollableParent(this._root.current);
        this._events.on(window, 'resize', this._onAsyncResize);
        if (this._root.current) {
            this._events.on(this._root.current, 'focus', this._onFocus, true);
        }
        if (this._scrollElement) {
            this._events.on(this._scrollElement, 'scroll', this._onScroll);
            this._events.on(this._scrollElement, 'scroll', this._onAsyncScroll);
        }
    };
    List.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
        delete this._scrollElement;
    };
    // tslint:disable-next-line function-name
    List.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (newProps.items !== this.props.items ||
            newProps.renderCount !== this.props.renderCount ||
            newProps.startIndex !== this.props.startIndex ||
            newProps.version !== this.props.version) {
            // We have received new items so we want to make sure that initially we only render a single window to
            // fill the currently visible rect, and then later render additional windows.
            this._resetRequiredWindows();
            this._requiredRect = null;
            this._measureVersion++;
            this._invalidatePageCache();
            this._updatePages(newProps);
        }
    };
    List.prototype.shouldComponentUpdate = function (newProps, newState) {
        var oldPages = this.state.pages;
        var newPages = newState.pages;
        var shouldComponentUpdate = false;
        // Update if the page stops scrolling
        if (!newState.isScrolling && this.state.isScrolling) {
            return true;
        }
        if (newProps.version !== this.props.version) {
            return true;
        }
        if (newProps.items === this.props.items && oldPages.length === newPages.length) {
            for (var i = 0; i < oldPages.length; i++) {
                var oldPage = oldPages[i];
                var newPage = newPages[i];
                if (oldPage.key !== newPage.key || oldPage.itemCount !== newPage.itemCount) {
                    shouldComponentUpdate = true;
                    break;
                }
            }
        }
        else {
            shouldComponentUpdate = true;
        }
        return shouldComponentUpdate;
    };
    List.prototype.forceUpdate = function () {
        this._invalidatePageCache();
        // Ensure that when the list is force updated we update the pages first before render.
        this._updateRenderRects(this.props, true);
        this._updatePages();
        this._measureVersion++;
        _super.prototype.forceUpdate.call(this);
    };
    /**
     * Get the current height the list and it's pages.
     */
    List.prototype.getTotalListHeight = function () {
        return this._surfaceRect.height;
    };
    List.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.role, role = _b === void 0 ? 'list' : _b, onRenderSurface = _a.onRenderSurface, onRenderRoot = _a.onRenderRoot;
        var _c = this.state.pages, pages = _c === void 0 ? [] : _c;
        var pageElements = [];
        var divProps = getNativeProps(this.props, divProperties);
        for (var _i = 0, pages_2 = pages; _i < pages_2.length; _i++) {
            var page = pages_2[_i];
            pageElements.push(this._renderPage(page));
        }
        var finalOnRenderSurface = onRenderSurface
            ? composeRenderFunction(onRenderSurface, this._onRenderSurface)
            : this._onRenderSurface;
        var finalOnRenderRoot = onRenderRoot
            ? composeRenderFunction(onRenderRoot, this._onRenderRoot)
            : this._onRenderRoot;
        return finalOnRenderRoot({
            rootRef: this._root,
            pages: pages,
            surfaceElement: finalOnRenderSurface({
                surfaceRef: this._surface,
                pages: pages,
                pageElements: pageElements,
                divProps: {
                    role: 'presentation',
                    className: 'ms-List-surface',
                },
            }),
            divProps: __assign(__assign({}, divProps), { className: css('ms-List', className), role: pageElements.length > 0 ? role : undefined }),
        });
    };
    List.prototype._shouldVirtualize = function (props) {
        if (props === void 0) { props = this.props; }
        var onShouldVirtualize = props.onShouldVirtualize;
        return !onShouldVirtualize || onShouldVirtualize(props);
    };
    /**
     * when props.items change or forceUpdate called, throw away cached pages
     */
    List.prototype._invalidatePageCache = function () {
        this._pageCache = {};
    };
    List.prototype._renderPage = function (page) {
        var usePageCache = this.props.usePageCache;
        var cachedPage;
        // if usePageCache is set and cached page element can be found, just return cached page
        if (usePageCache) {
            cachedPage = this._pageCache[page.key];
            if (cachedPage && cachedPage.pageElement) {
                return cachedPage.pageElement;
            }
        }
        var pageStyle = this._getPageStyle(page);
        var _a = this.props.onRenderPage, onRenderPage = _a === void 0 ? this._onRenderPage : _a;
        var pageElement = onRenderPage({
            page: page,
            className: 'ms-List-page',
            key: page.key,
            ref: page.key,
            style: pageStyle,
            role: 'presentation',
        }, this._onRenderPage);
        // cache the first page for now since it is re-rendered a lot times unnecessarily.
        // todo: a more aggresive caching mechanism is to cache pages constaining the items not changed.
        // now we re-render pages too frequently, for example, props.items increased from 30 to 60, although the
        // first 30 items did not change, we still re-rendered all of them in this props.items change.
        if (usePageCache && page.startIndex === 0) {
            this._pageCache[page.key] = {
                page: page,
                pageElement: pageElement,
            };
        }
        return pageElement;
    };
    /** Generate the style object for the page. */
    List.prototype._getPageStyle = function (page) {
        var getPageStyle = this.props.getPageStyle;
        return __assign(__assign({}, (getPageStyle ? getPageStyle(page) : {})), (!page.items
            ? {
                height: page.height,
            }
            : {}));
    };
    /** Track the last item index focused so that we ensure we keep it rendered. */
    List.prototype._onFocus = function (ev) {
        var target = ev.target;
        while (target !== this._surface.current) {
            var indexString = target.getAttribute('data-list-index');
            if (indexString) {
                this._focusedIndex = Number(indexString);
                break;
            }
            target = getParent(target);
        }
    };
    /**
     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
     * we will call onAsyncIdle which will reset it back to it's correct value.
     */
    List.prototype._onScroll = function () {
        if (!this.state.isScrolling && !this.props.ignoreScrollingState) {
            this.setState({ isScrolling: true });
        }
        this._resetRequiredWindows();
        this._onScrollingDone();
    };
    List.prototype._resetRequiredWindows = function () {
        this._requiredWindowsAhead = 0;
        this._requiredWindowsBehind = 0;
    };
    /**
     * Debounced method to asynchronously update the visible region on a scroll event.
     */
    List.prototype._onAsyncScroll = function () {
        this._updateRenderRects();
        // Only update pages when the visible rect falls outside of the materialized rect.
        if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
            this._updatePages();
        }
        else {
            // console.log('requiredRect contained in materialized', this._requiredRect, this._materializedRect);
        }
    };
    /**
     * This is an async debounced method that will try and increment the windows we render. If we can increment
     * either, we increase the amount we render and re-evaluate.
     */
    List.prototype._onAsyncIdle = function () {
        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
        var _b = this, requiredWindowsAhead = _b._requiredWindowsAhead, requiredWindowsBehind = _b._requiredWindowsBehind;
        var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
        var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);
        if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
            // console.log('idling', windowsBehind, windowsAhead);
            this._requiredWindowsAhead = windowsAhead;
            this._requiredWindowsBehind = windowsBehind;
            this._updateRenderRects();
            this._updatePages();
        }
        if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
            // Async increment on next tick.
            this._onAsyncIdle();
        }
    };
    /**
     * Function to call when the list is done scrolling.
     * This function is debounced.
     */
    List.prototype._onScrollingDone = function () {
        if (!this.props.ignoreScrollingState) {
            this.setState({ isScrolling: false });
        }
    };
    List.prototype._onAsyncResize = function () {
        this.forceUpdate();
    };
    List.prototype._updatePages = function (props) {
        // console.log('updating pages');
        var _this = this;
        if (props === void 0) { props = this.props; }
        if (!this._requiredRect) {
            this._updateRenderRects(props);
        }
        var newListState = this._buildPages(props);
        var oldListPages = this.state.pages;
        this._notifyPageChanges(oldListPages, newListState.pages);
        this.setState(newListState, function () {
            // Multiple updates may have been queued, so the callback will reflect all of them.
            // Re-fetch the current props and states to avoid using a stale props or state captured in the closure.
            var finalProps = _this.props;
            var finalState = _this.state;
            // If we weren't provided with the page height, measure the pages
            if (!finalProps.getPageHeight) {
                // If measured version is invalid since we've updated the DOM
                var heightsChanged = _this._updatePageMeasurements(finalState.pages);
                // On first render, we should re-measure so that we don't get a visual glitch.
                if (heightsChanged) {
                    _this._materializedRect = null;
                    if (!_this._hasCompletedFirstRender) {
                        _this._hasCompletedFirstRender = true;
                        _this._updatePages(finalProps);
                    }
                    else {
                        _this._onAsyncScroll();
                    }
                }
                else {
                    // Enqueue an idle bump.
                    _this._onAsyncIdle();
                }
            }
            else {
                // Enqueue an idle bump
                _this._onAsyncIdle();
            }
            // Notify the caller that rendering the new pages has completed
            if (finalProps.onPagesUpdated) {
                finalProps.onPagesUpdated(finalState.pages);
            }
        });
    };
    /**
     * Notify consumers that the rendered pages have changed
     * @param oldPages - The old pages
     * @param newPages - The new pages
     * @param props - The props to use
     */
    List.prototype._notifyPageChanges = function (oldPages, newPages, props) {
        if (props === void 0) { props = this.props; }
        var onPageAdded = props.onPageAdded, onPageRemoved = props.onPageRemoved;
        if (onPageAdded || onPageRemoved) {
            var renderedIndexes = {};
            for (var _i = 0, oldPages_1 = oldPages; _i < oldPages_1.length; _i++) {
                var page = oldPages_1[_i];
                if (page.items) {
                    renderedIndexes[page.startIndex] = page;
                }
            }
            for (var _a = 0, newPages_1 = newPages; _a < newPages_1.length; _a++) {
                var page = newPages_1[_a];
                if (page.items) {
                    if (!renderedIndexes[page.startIndex]) {
                        this._onPageAdded(page);
                    }
                    else {
                        delete renderedIndexes[page.startIndex];
                    }
                }
            }
            for (var index in renderedIndexes) {
                if (renderedIndexes.hasOwnProperty(index)) {
                    this._onPageRemoved(renderedIndexes[index]);
                }
            }
        }
    };
    List.prototype._updatePageMeasurements = function (pages) {
        var heightChanged = false;
        // when not in virtualize mode, we render all the items without page measurement
        if (!this._shouldVirtualize()) {
            return heightChanged;
        }
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page.items) {
                heightChanged = this._measurePage(page) || heightChanged;
            }
        }
        return heightChanged;
    };
    /**
     * Given a page, measure its dimensions, update cache.
     * @returns True if the height has changed.
     */
    List.prototype._measurePage = function (page) {
        var hasChangedHeight = false;
        var pageElement = this.refs[page.key];
        var cachedHeight = this._cachedPageHeights[page.startIndex];
        // console.log('   * measure attempt', page.startIndex, cachedHeight);
        if (pageElement &&
            this._shouldVirtualize() &&
            (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
            var newClientRect = {
                width: pageElement.clientWidth,
                height: pageElement.clientHeight,
            };
            if (newClientRect.height || newClientRect.width) {
                hasChangedHeight = page.height !== newClientRect.height;
                // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);
                page.height = newClientRect.height;
                this._cachedPageHeights[page.startIndex] = {
                    height: newClientRect.height,
                    measureVersion: this._measureVersion,
                };
                this._estimatedPageHeight = Math.round((this._estimatedPageHeight * this._totalEstimates + newClientRect.height) / (this._totalEstimates + 1));
                this._totalEstimates++;
            }
        }
        return hasChangedHeight;
    };
    /** Called when a page has been added to the DOM. */
    List.prototype._onPageAdded = function (page) {
        var onPageAdded = this.props.onPageAdded;
        // console.log('page added', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageAdded) {
            onPageAdded(page);
        }
    };
    /** Called when a page has been removed from the DOM. */
    List.prototype._onPageRemoved = function (page) {
        var onPageRemoved = this.props.onPageRemoved;
        // console.log('  --- page removed', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageRemoved) {
            onPageRemoved(page);
        }
    };
    /** Build up the pages that should be rendered. */
    List.prototype._buildPages = function (props) {
        var renderCount = props.renderCount;
        var items = props.items, startIndex = props.startIndex, getPageHeight = props.getPageHeight;
        renderCount = this._getRenderCount(props);
        var materializedRect = __assign({}, EMPTY_RECT);
        var pages = [];
        var itemsPerPage = 1;
        var pageTop = 0;
        var currentSpacer = null;
        var focusedIndex = this._focusedIndex;
        var endIndex = startIndex + renderCount;
        var shouldVirtualize = this._shouldVirtualize(props);
        // First render is very important to track; when we render cells, we have no idea of estimated page height.
        // So we should default to rendering only the first page so that we can get information.
        // However if the user provides a measure function, let's just assume they know the right heights.
        var isFirstRender = this._estimatedPageHeight === 0 && !getPageHeight;
        var allowedRect = this._allowedRect;
        var _loop_1 = function (itemIndex) {
            var pageSpecification = this_1._getPageSpecification(itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            var pageData = pageSpecification.data;
            var key = pageSpecification.key;
            itemsPerPage = pageSpecification.itemCount;
            var pageBottom = pageTop + pageHeight - 1;
            var isPageRendered = findIndex(this_1.state.pages, function (page) { return !!page.items && page.startIndex === itemIndex; }) >
                -1;
            var isPageInAllowedRange = !allowedRect || (pageBottom >= allowedRect.top && pageTop <= allowedRect.bottom);
            var isPageInRequiredRange = !this_1._requiredRect || (pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom);
            var isPageVisible = (!isFirstRender && (isPageInRequiredRange || (isPageInAllowedRange && isPageRendered))) || !shouldVirtualize;
            var isPageFocused = focusedIndex >= itemIndex && focusedIndex < itemIndex + itemsPerPage;
            var isFirstPage = itemIndex === startIndex;
            // console.log('building page', itemIndex, 'pageTop: ' + pageTop, 'inAllowed: ' +
            // isPageInAllowedRange, 'inRequired: ' + isPageInRequiredRange);
            // Only render whats visible, focused, or first page,
            // or when running in fast rendering mode (not in virtualized mode), we render all current items in pages
            if (isPageVisible || isPageFocused || isFirstPage) {
                if (currentSpacer) {
                    pages.push(currentSpacer);
                    currentSpacer = null;
                }
                var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);
                var newPage = this_1._createPage(key, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex, undefined, undefined, pageData);
                newPage.top = pageTop;
                newPage.height = pageHeight;
                if (this_1._visibleRect && this_1._visibleRect.bottom) {
                    newPage.isVisible = pageBottom >= this_1._visibleRect.top && pageTop <= this_1._visibleRect.bottom;
                }
                pages.push(newPage);
                if (isPageInRequiredRange && this_1._allowedRect) {
                    _mergeRect(materializedRect, {
                        top: pageTop,
                        bottom: pageBottom,
                        height: pageHeight,
                        left: allowedRect.left,
                        right: allowedRect.right,
                        width: allowedRect.width,
                    });
                }
            }
            else {
                if (!currentSpacer) {
                    currentSpacer = this_1._createPage(SPACER_KEY_PREFIX + itemIndex, undefined, itemIndex, 0, undefined, pageData, true /*isSpacer*/);
                }
                currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
                currentSpacer.itemCount += itemsPerPage;
            }
            pageTop += pageBottom - pageTop + 1;
            // in virtualized mode, we render need to render first page then break and measure,
            // otherwise, we render all items without measurement to make rendering fast
            if (isFirstRender && shouldVirtualize) {
                return "break";
            }
        };
        var this_1 = this;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var state_1 = _loop_1(itemIndex);
            if (state_1 === "break")
                break;
        }
        if (currentSpacer) {
            currentSpacer.key = SPACER_KEY_PREFIX + 'end';
            pages.push(currentSpacer);
        }
        this._materializedRect = materializedRect;
        // console.log('materialized: ', materializedRect);
        return {
            pages: pages,
            measureVersion: this._measureVersion,
        };
    };
    List.prototype._getPageSpecification = function (itemIndex, visibleRect) {
        var getPageSpecification = this.props.getPageSpecification;
        if (getPageSpecification) {
            var pageData = getPageSpecification(itemIndex, visibleRect);
            var _a = pageData.itemCount, itemCount = _a === void 0 ? this._getItemCountForPage(itemIndex, visibleRect) : _a;
            var _b = pageData.height, height = _b === void 0 ? this._getPageHeight(itemIndex, visibleRect, itemCount) : _b;
            return {
                itemCount: itemCount,
                height: height,
                data: pageData.data,
                key: pageData.key,
            };
        }
        else {
            var itemCount = this._getItemCountForPage(itemIndex, visibleRect);
            return {
                itemCount: itemCount,
                height: this._getPageHeight(itemIndex, visibleRect, itemCount),
            };
        }
    };
    /**
     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
     * cached height, or estimated page height, or default page height.
     */
    List.prototype._getPageHeight = function (itemIndex, visibleRect, itemsPerPage) {
        if (this.props.getPageHeight) {
            return this.props.getPageHeight(itemIndex, visibleRect, itemsPerPage);
        }
        else {
            var cachedHeight = this._cachedPageHeights[itemIndex];
            return cachedHeight ? cachedHeight.height : this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT;
        }
    };
    List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
        var itemsPerPage = this.props.getItemCountForPage
            ? this.props.getItemCountForPage(itemIndex, visibileRect)
            : DEFAULT_ITEMS_PER_PAGE;
        return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
    };
    List.prototype._createPage = function (pageKey, items, startIndex, count, style, data, isSpacer) {
        if (startIndex === void 0) { startIndex = -1; }
        if (count === void 0) { count = items ? items.length : 0; }
        if (style === void 0) { style = {}; }
        pageKey = pageKey || PAGE_KEY_PREFIX + startIndex;
        var cachedPage = this._pageCache[pageKey];
        if (cachedPage && cachedPage.page) {
            return cachedPage.page;
        }
        return {
            key: pageKey,
            startIndex: startIndex,
            itemCount: count,
            items: items,
            style: style,
            top: 0,
            height: 0,
            data: data,
            isSpacer: isSpacer || false,
        };
    };
    List.prototype._getRenderCount = function (props) {
        var _a = props || this.props, items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
        return renderCount === undefined ? (items ? items.length - startIndex : 0) : renderCount;
    };
    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
    List.prototype._updateRenderRects = function (props, forceUpdate) {
        props = props || this.props;
        var renderedWindowsAhead = props.renderedWindowsAhead, renderedWindowsBehind = props.renderedWindowsBehind;
        var pages = this.state.pages;
        // when not in virtualize mode, we render all items without measurement to optimize page rendering perf
        if (!this._shouldVirtualize(props)) {
            return;
        }
        var surfaceRect = this._surfaceRect || __assign({}, EMPTY_RECT);
        var scrollHeight = this._scrollElement && this._scrollElement.scrollHeight;
        var scrollTop = this._scrollElement ? this._scrollElement.scrollTop : 0;
        // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
        // This needs to be called to recalculate when new pages should be loaded.
        // We check to see how far we've scrolled and if it's further than a third of a page we run it again.
        if (this._surface.current &&
            (forceUpdate ||
                !pages ||
                !this._surfaceRect ||
                !scrollHeight ||
                scrollHeight !== this._scrollHeight ||
                Math.abs(this._scrollTop - scrollTop) > this._estimatedPageHeight / 3)) {
            surfaceRect = this._surfaceRect = _measureSurfaceRect(this._surface.current);
            this._scrollTop = scrollTop;
        }
        // If the scroll height has changed, something in the container likely resized and
        // we should redo the page heights incase their content resized.
        if (forceUpdate || !scrollHeight || scrollHeight !== this._scrollHeight) {
            this._measureVersion++;
        }
        this._scrollHeight = scrollHeight;
        // If the surface is above the container top or below the container bottom, or if this is not the first
        // render return empty rect.
        // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
        // used to calculate the width of the list items.
        var visibleTop = Math.max(0, -surfaceRect.top);
        var win = getWindow(this._root.current);
        var visibleRect = {
            top: visibleTop,
            left: surfaceRect.left,
            bottom: visibleTop + win.innerHeight,
            right: surfaceRect.right,
            width: surfaceRect.width,
            height: win.innerHeight,
        };
        // The required/allowed rects are adjusted versions of the visible rect.
        this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
        this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead);
        // store the visible rect for later use.
        this._visibleRect = visibleRect;
    };
    List.defaultProps = {
        startIndex: 0,
        onRenderCell: function (item, index, containsFocus) { return React.createElement(React.Fragment, null, (item && item.name) || ''); },
        renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
        renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND,
    };
    return List;
}(React.Component));
export { List };
function _expandRect(rect, pagesBefore, pagesAfter) {
    var top = rect.top - pagesBefore * rect.height;
    var height = rect.height + (pagesBefore + pagesAfter) * rect.height;
    return {
        top: top,
        bottom: top + height,
        height: height,
        left: rect.left,
        right: rect.right,
        width: rect.width,
    };
}
function _isContainedWithin(innerRect, outerRect) {
    return (innerRect.top >= outerRect.top &&
        innerRect.left >= outerRect.left &&
        innerRect.bottom <= outerRect.bottom &&
        innerRect.right <= outerRect.right);
}
function _mergeRect(targetRect, newRect) {
    targetRect.top = newRect.top < targetRect.top || targetRect.top === -1 ? newRect.top : targetRect.top;
    targetRect.left = newRect.left < targetRect.left || targetRect.left === -1 ? newRect.left : targetRect.left;
    targetRect.bottom =
        newRect.bottom > targetRect.bottom || targetRect.bottom === -1 ? newRect.bottom : targetRect.bottom;
    targetRect.right = newRect.right > targetRect.right || targetRect.right === -1 ? newRect.right : targetRect.right;
    targetRect.width = targetRect.right - targetRect.left + 1;
    targetRect.height = targetRect.bottom - targetRect.top + 1;
    return targetRect;
}
//# sourceMappingURL=List.js.map