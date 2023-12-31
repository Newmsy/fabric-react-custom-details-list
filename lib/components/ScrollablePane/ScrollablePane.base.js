import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Async, EventGroup, classNamesFunction, divProperties, getNativeProps, getRTL, initializeComponentRef, } from '../../Utilities';
import { ScrollablePaneContext, } from './ScrollablePane.types';
var getClassNames = classNamesFunction();
var ScrollablePaneBase = /** @class */ (function (_super) {
    __extends(ScrollablePaneBase, _super);
    function ScrollablePaneBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        _this._stickyAboveRef = React.createRef();
        _this._stickyBelowRef = React.createRef();
        _this._contentContainer = React.createRef();
        _this.subscribe = function (handler) {
            _this._subscribers.add(handler);
        };
        _this.unsubscribe = function (handler) {
            _this._subscribers.delete(handler);
        };
        _this.addSticky = function (sticky) {
            _this._stickies.add(sticky);
            // If ScrollablePane is mounted, then sort sticky in correct place
            if (_this.contentContainer) {
                sticky.setDistanceFromTop(_this.contentContainer);
                _this.sortSticky(sticky);
            }
        };
        _this.removeSticky = function (sticky) {
            _this._stickies.delete(sticky);
            _this._removeStickyFromContainers(sticky);
            _this.notifySubscribers();
        };
        _this.sortSticky = function (sticky, sortAgain) {
            if (_this.stickyAbove && _this.stickyBelow) {
                if (sortAgain) {
                    _this._removeStickyFromContainers(sticky);
                }
                if (sticky.canStickyTop && sticky.stickyContentTop) {
                    _this._addToStickyContainer(sticky, _this.stickyAbove, sticky.stickyContentTop);
                }
                if (sticky.canStickyBottom && sticky.stickyContentBottom) {
                    _this._addToStickyContainer(sticky, _this.stickyBelow, sticky.stickyContentBottom);
                }
            }
        };
        _this.updateStickyRefHeights = function () {
            var stickyItems = _this._stickies;
            var stickyTopHeight = 0;
            var stickyBottomHeight = 0;
            stickyItems.forEach(function (sticky) {
                var _a = sticky.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom;
                if (sticky.nonStickyContent) {
                    if (isStickyTop) {
                        stickyTopHeight += sticky.nonStickyContent.offsetHeight;
                    }
                    if (isStickyBottom) {
                        stickyBottomHeight += sticky.nonStickyContent.offsetHeight;
                    }
                    _this._checkStickyStatus(sticky);
                }
            });
            _this.setState({
                stickyTopHeight: stickyTopHeight,
                stickyBottomHeight: stickyBottomHeight,
            });
        };
        _this.notifySubscribers = function () {
            if (_this.contentContainer) {
                _this._subscribers.forEach(function (handle) {
                    // this.stickyBelow is passed in for calculating distance to determine Sticky status
                    handle(_this.contentContainer, _this.stickyBelow);
                });
            }
        };
        _this.getScrollPosition = function () {
            if (_this.contentContainer) {
                return _this.contentContainer.scrollTop;
            }
            return 0;
        };
        _this.syncScrollSticky = function (sticky) {
            if (sticky && _this.contentContainer) {
                sticky.syncScroll(_this.contentContainer);
            }
        };
        _this._getScrollablePaneContext = function () {
            return {
                scrollablePane: {
                    subscribe: _this.subscribe,
                    unsubscribe: _this.unsubscribe,
                    addSticky: _this.addSticky,
                    removeSticky: _this.removeSticky,
                    updateStickyRefHeights: _this.updateStickyRefHeights,
                    sortSticky: _this.sortSticky,
                    notifySubscribers: _this.notifySubscribers,
                    syncScrollSticky: _this.syncScrollSticky,
                },
            };
        };
        _this._addToStickyContainer = function (sticky, stickyContainer, stickyContentToAdd) {
            // If there's no children, append child to list, otherwise, sort though array and append at correct position
            if (!stickyContainer.children.length) {
                stickyContainer.appendChild(stickyContentToAdd);
            }
            else {
                // If stickyContentToAdd isn't a child element of target container, then append
                if (!stickyContainer.contains(stickyContentToAdd)) {
                    var stickyChildrenElements_1 = [].slice.call(stickyContainer.children);
                    var stickyList_1 = [];
                    // Get stickies.  Filter by canStickyTop/Bottom, then sort by distance from top, and then
                    // filter by elements that are in the stickyContainer already.
                    _this._stickies.forEach(function (stickyItem) {
                        if (stickyContainer === _this.stickyAbove && sticky.canStickyTop) {
                            stickyList_1.push(stickyItem);
                        }
                        else if (sticky.canStickyBottom) {
                            stickyList_1.push(stickyItem);
                        }
                    });
                    var stickyListSorted = stickyList_1
                        .sort(function (a, b) {
                        return (a.state.distanceFromTop || 0) - (b.state.distanceFromTop || 0);
                    })
                        .filter(function (item) {
                        var stickyContent = stickyContainer === _this.stickyAbove ? item.stickyContentTop : item.stickyContentBottom;
                        if (stickyContent) {
                            return stickyChildrenElements_1.indexOf(stickyContent) > -1;
                        }
                    });
                    // Get first element that has a distance from top that is further than our sticky that is being added
                    var targetStickyToAppendBefore = undefined;
                    for (var _i = 0, stickyListSorted_1 = stickyListSorted; _i < stickyListSorted_1.length; _i++) {
                        var stickyListItem = stickyListSorted_1[_i];
                        if ((stickyListItem.state.distanceFromTop || 0) >= (sticky.state.distanceFromTop || 0)) {
                            targetStickyToAppendBefore = stickyListItem;
                            break;
                        }
                    }
                    // If target element to append before is known, grab respective stickyContentTop/Bottom element
                    // and insert before
                    var targetContainer = null;
                    if (targetStickyToAppendBefore) {
                        targetContainer =
                            stickyContainer === _this.stickyAbove
                                ? targetStickyToAppendBefore.stickyContentTop
                                : targetStickyToAppendBefore.stickyContentBottom;
                    }
                    stickyContainer.insertBefore(stickyContentToAdd, targetContainer);
                }
            }
        };
        _this._removeStickyFromContainers = function (sticky) {
            if (_this.stickyAbove && sticky.stickyContentTop && _this.stickyAbove.contains(sticky.stickyContentTop)) {
                _this.stickyAbove.removeChild(sticky.stickyContentTop);
            }
            if (_this.stickyBelow && sticky.stickyContentBottom && _this.stickyBelow.contains(sticky.stickyContentBottom)) {
                _this.stickyBelow.removeChild(sticky.stickyContentBottom);
            }
        };
        _this._onWindowResize = function () {
            var scrollbarWidth = _this._getScrollbarWidth();
            var scrollbarHeight = _this._getScrollbarHeight();
            _this.setState({
                scrollbarWidth: scrollbarWidth,
                scrollbarHeight: scrollbarHeight,
            });
            _this.notifySubscribers();
        };
        _this._getStickyContainerStyle = function (height, isTop) {
            return __assign(__assign({ height: height }, (getRTL(_this.props.theme)
                ? {
                    right: '0',
                    left: (_this.state.scrollbarWidth || _this._getScrollbarWidth() || 0) + "px",
                }
                : {
                    left: '0',
                    right: (_this.state.scrollbarWidth || _this._getScrollbarWidth() || 0) + "px",
                })), (isTop
                ? {
                    top: '0',
                }
                : {
                    bottom: (_this.state.scrollbarHeight || _this._getScrollbarHeight() || 0) + "px",
                }));
        };
        _this._onScroll = function () {
            var contentContainer = _this.contentContainer;
            if (contentContainer) {
                _this._stickies.forEach(function (sticky) {
                    sticky.syncScroll(contentContainer);
                });
            }
            _this._notifyThrottled();
        };
        _this._subscribers = new Set();
        _this._stickies = new Set();
        initializeComponentRef(_this);
        _this._async = new Async(_this);
        _this._events = new EventGroup(_this);
        _this.state = {
            stickyTopHeight: 0,
            stickyBottomHeight: 0,
            scrollbarWidth: 0,
            scrollbarHeight: 0,
        };
        _this._notifyThrottled = _this._async.throttle(_this.notifySubscribers, 50);
        return _this;
    }
    Object.defineProperty(ScrollablePaneBase.prototype, "root", {
        get: function () {
            return this._root.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollablePaneBase.prototype, "stickyAbove", {
        get: function () {
            return this._stickyAboveRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollablePaneBase.prototype, "stickyBelow", {
        get: function () {
            return this._stickyBelowRef.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollablePaneBase.prototype, "contentContainer", {
        get: function () {
            return this._contentContainer.current;
        },
        enumerable: true,
        configurable: true
    });
    ScrollablePaneBase.prototype.componentDidMount = function () {
        var _this = this;
        var initialScrollPosition = this.props.initialScrollPosition;
        this._events.on(this.contentContainer, 'scroll', this._onScroll);
        this._events.on(window, 'resize', this._onWindowResize);
        if (this.contentContainer && initialScrollPosition) {
            this.contentContainer.scrollTop = initialScrollPosition;
        }
        // Set sticky distances from top property, then sort in correct order and notify subscribers
        this.setStickiesDistanceFromTop();
        this._stickies.forEach(function (sticky) {
            _this.sortSticky(sticky);
        });
        this.notifySubscribers();
        if ('MutationObserver' in window) {
            this._mutationObserver = new MutationObserver(function (mutation) {
                // Function to check if mutation is occuring in stickyAbove or stickyBelow
                function checkIfMutationIsSticky(mutationRecord) {
                    if (this.stickyAbove !== null && this.stickyBelow !== null) {
                        return this.stickyAbove.contains(mutationRecord.target) || this.stickyBelow.contains(mutationRecord.target);
                    }
                    return false;
                }
                // Compute the scrollbar height, which might have changed if the content's width changed and caused overflow
                var scrollbarHeight = _this._getScrollbarHeight();
                // If the scrollbar height changed, update state so it's postioned correctly below sticky footer
                if (scrollbarHeight !== _this.state.scrollbarHeight) {
                    _this.setState({
                        scrollbarHeight: scrollbarHeight,
                    });
                }
                // Notify subscribers again to re-check whether Sticky should be Sticky'd or not
                _this.notifySubscribers();
                // If mutation occurs in sticky header or footer, then update sticky top/bottom heights
                if (mutation.some(checkIfMutationIsSticky.bind(_this))) {
                    _this.updateStickyRefHeights();
                }
                else {
                    // If mutation occurs in scrollable region, then find Sticky it belongs to and force update
                    var stickyList_2 = [];
                    _this._stickies.forEach(function (sticky) {
                        if (sticky.root && sticky.root.contains(mutation[0].target)) {
                            stickyList_2.push(sticky);
                        }
                    });
                    if (stickyList_2.length) {
                        stickyList_2.forEach(function (sticky) {
                            sticky.forceUpdate();
                        });
                    }
                }
            });
            if (this.root) {
                this._mutationObserver.observe(this.root, {
                    childList: true,
                    attributes: true,
                    subtree: true,
                    characterData: true,
                });
            }
        }
    };
    ScrollablePaneBase.prototype.componentWillUnmount = function () {
        this._events.dispose();
        this._async.dispose();
        if (this._mutationObserver) {
            this._mutationObserver.disconnect();
        }
    };
    // Only updates if props/state change, just to prevent excessive setState with updateStickyRefHeights
    ScrollablePaneBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.props.children !== nextProps.children ||
            this.props.initialScrollPosition !== nextProps.initialScrollPosition ||
            this.props.className !== nextProps.className ||
            this.state.stickyTopHeight !== nextState.stickyTopHeight ||
            this.state.stickyBottomHeight !== nextState.stickyBottomHeight ||
            this.state.scrollbarWidth !== nextState.scrollbarWidth ||
            this.state.scrollbarHeight !== nextState.scrollbarHeight);
    };
    ScrollablePaneBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        var initialScrollPosition = this.props.initialScrollPosition;
        if (this.contentContainer &&
            typeof initialScrollPosition === 'number' &&
            prevProps.initialScrollPosition !== initialScrollPosition) {
            this.contentContainer.scrollTop = initialScrollPosition;
        }
        // Update subscribers when stickyTopHeight/stickyBottomHeight changes
        if (prevState.stickyTopHeight !== this.state.stickyTopHeight ||
            prevState.stickyBottomHeight !== this.state.stickyBottomHeight) {
            this.notifySubscribers();
        }
        this._async.setTimeout(this._onWindowResize, 0);
    };
    ScrollablePaneBase.prototype.render = function () {
        var _a = this.props, className = _a.className, theme = _a.theme, styles = _a.styles;
        var _b = this.state, stickyTopHeight = _b.stickyTopHeight, stickyBottomHeight = _b.stickyBottomHeight;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            scrollbarVisibility: this.props.scrollbarVisibility,
        });
        return (React.createElement("div", __assign({}, getNativeProps(this.props, divProperties), { ref: this._root, className: classNames.root }),
            React.createElement("div", { "aria-hidden": "true", ref: this._stickyAboveRef, className: classNames.stickyAbove, style: this._getStickyContainerStyle(stickyTopHeight, true) }),
            React.createElement("div", { ref: this._contentContainer, className: classNames.contentContainer, "data-is-scrollable": true },
                React.createElement(ScrollablePaneContext.Provider, { value: this._getScrollablePaneContext() }, this.props.children)),
            React.createElement("div", { "aria-hidden": "true", className: classNames.stickyBelow, style: this._getStickyContainerStyle(stickyBottomHeight, false) },
                React.createElement("div", { ref: this._stickyBelowRef, className: classNames.stickyBelowItems }))));
    };
    ScrollablePaneBase.prototype.setStickiesDistanceFromTop = function () {
        var _this = this;
        if (this.contentContainer) {
            this._stickies.forEach(function (sticky) {
                sticky.setDistanceFromTop(_this.contentContainer);
            });
        }
    };
    ScrollablePaneBase.prototype.forceLayoutUpdate = function () {
        this._onWindowResize();
    };
    ScrollablePaneBase.prototype._checkStickyStatus = function (sticky) {
        if (this.stickyAbove && this.stickyBelow && this.contentContainer && sticky.nonStickyContent) {
            // If sticky is sticky, then append content to appropriate container
            if (sticky.state.isStickyTop || sticky.state.isStickyBottom) {
                if (sticky.state.isStickyTop &&
                    !this.stickyAbove.contains(sticky.nonStickyContent) &&
                    sticky.stickyContentTop) {
                    sticky.addSticky(sticky.stickyContentTop);
                }
                if (sticky.state.isStickyBottom &&
                    !this.stickyBelow.contains(sticky.nonStickyContent) &&
                    sticky.stickyContentBottom) {
                    sticky.addSticky(sticky.stickyContentBottom);
                }
            }
            else if (!this.contentContainer.contains(sticky.nonStickyContent)) {
                // Reset sticky if it's not sticky and not in the contentContainer element
                sticky.resetSticky();
            }
        }
    };
    ScrollablePaneBase.prototype._getScrollbarWidth = function () {
        var contentContainer = this.contentContainer;
        return contentContainer ? contentContainer.offsetWidth - contentContainer.clientWidth : 0;
    };
    ScrollablePaneBase.prototype._getScrollbarHeight = function () {
        var contentContainer = this.contentContainer;
        return contentContainer ? contentContainer.offsetHeight - contentContainer.clientHeight : 0;
    };
    return ScrollablePaneBase;
}(React.Component));
export { ScrollablePaneBase };
//# sourceMappingURL=ScrollablePane.base.js.map