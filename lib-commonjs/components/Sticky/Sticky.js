"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Styling_1 = require("../../Styling");
var ScrollablePane_types_1 = require("../ScrollablePane/ScrollablePane.types");
var Sticky_types_1 = require("./Sticky.types");
var Sticky = /** @class */ (function (_super) {
    tslib_1.__extends(Sticky, _super);
    function Sticky(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        _this._stickyContentTop = React.createRef();
        _this._stickyContentBottom = React.createRef();
        _this._nonStickyContent = React.createRef();
        _this._placeHolder = React.createRef();
        _this.syncScroll = function (container) {
            var nonStickyContent = _this.nonStickyContent;
            if (nonStickyContent && _this.props.isScrollSynced) {
                nonStickyContent.scrollLeft = container.scrollLeft;
            }
        };
        // tslint:disable-next-line:deprecation
        _this._getContext = function () { return _this.context; };
        _this._onScrollEvent = function (container, footerStickyContainer) {
            if (_this.root && _this.nonStickyContent) {
                var distanceFromTop = _this._getNonStickyDistanceFromTop(container);
                var isStickyTop = false;
                var isStickyBottom = false;
                if (_this.canStickyTop) {
                    var distanceToStickTop = distanceFromTop - _this._getStickyDistanceFromTop();
                    isStickyTop = distanceToStickTop < container.scrollTop;
                }
                // Can sticky bottom if the scrollablePane - total sticky footer height is smaller than the sticky's distance
                // from the top of the pane
                if (_this.canStickyBottom && container.clientHeight - footerStickyContainer.offsetHeight <= distanceFromTop) {
                    isStickyBottom =
                        distanceFromTop - Math.floor(container.scrollTop) >=
                            _this._getStickyDistanceFromTopForFooter(container, footerStickyContainer);
                }
                if (document.activeElement &&
                    _this.nonStickyContent.contains(document.activeElement) &&
                    (_this.state.isStickyTop !== isStickyTop || _this.state.isStickyBottom !== isStickyBottom)) {
                    _this._activeElement = document.activeElement;
                }
                else {
                    _this._activeElement = undefined;
                }
                _this.setState({
                    isStickyTop: _this.canStickyTop && isStickyTop,
                    isStickyBottom: isStickyBottom,
                    distanceFromTop: distanceFromTop,
                });
            }
        };
        _this._getStickyDistanceFromTop = function () {
            var distance = 0;
            if (_this.stickyContentTop) {
                distance = _this.stickyContentTop.offsetTop;
            }
            return distance;
        };
        _this._getStickyDistanceFromTopForFooter = function (container, footerStickyVisibleContainer) {
            var distance = 0;
            if (_this.stickyContentBottom) {
                distance =
                    container.clientHeight - footerStickyVisibleContainer.offsetHeight + _this.stickyContentBottom.offsetTop;
            }
            return distance;
        };
        _this._getNonStickyDistanceFromTop = function (container) {
            var distance = 0;
            var currElem = _this.root;
            if (currElem) {
                while (currElem && currElem.offsetParent !== container) {
                    distance += currElem.offsetTop;
                    currElem = currElem.offsetParent;
                }
                if (currElem && currElem.offsetParent === container) {
                    distance += currElem.offsetTop;
                }
            }
            return distance;
        };
        Utilities_1.initializeComponentRef(_this);
        _this.state = {
            isStickyTop: false,
            isStickyBottom: false,
            distanceFromTop: undefined,
        };
        _this._activeElement = undefined;
        return _this;
    }
    Object.defineProperty(Sticky.prototype, "root", {
        get: function () {
            return this._root.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "placeholder", {
        get: function () {
            return this._placeHolder.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "stickyContentTop", {
        get: function () {
            return this._stickyContentTop.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "stickyContentBottom", {
        get: function () {
            return this._stickyContentBottom.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "nonStickyContent", {
        get: function () {
            return this._nonStickyContent.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "canStickyTop", {
        get: function () {
            return (this.props.stickyPosition === Sticky_types_1.StickyPositionType.Both || this.props.stickyPosition === Sticky_types_1.StickyPositionType.Header);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sticky.prototype, "canStickyBottom", {
        get: function () {
            return (this.props.stickyPosition === Sticky_types_1.StickyPositionType.Both || this.props.stickyPosition === Sticky_types_1.StickyPositionType.Footer);
        },
        enumerable: true,
        configurable: true
    });
    Sticky.prototype.componentDidMount = function () {
        var scrollablePane = this._getContext().scrollablePane;
        if (!scrollablePane) {
            return;
        }
        scrollablePane.subscribe(this._onScrollEvent);
        scrollablePane.addSticky(this);
    };
    Sticky.prototype.componentWillUnmount = function () {
        var scrollablePane = this._getContext().scrollablePane;
        if (!scrollablePane) {
            return;
        }
        scrollablePane.unsubscribe(this._onScrollEvent);
        scrollablePane.removeSticky(this);
    };
    Sticky.prototype.componentDidUpdate = function (prevProps, prevState) {
        var scrollablePane = this._getContext().scrollablePane;
        if (!scrollablePane) {
            return;
        }
        var _a = this.state, isStickyBottom = _a.isStickyBottom, isStickyTop = _a.isStickyTop, distanceFromTop = _a.distanceFromTop;
        var syncScroll = false;
        if (prevState.distanceFromTop !== distanceFromTop) {
            scrollablePane.sortSticky(this, true /*sortAgain*/);
            syncScroll = true;
        }
        if (prevState.isStickyTop !== isStickyTop || prevState.isStickyBottom !== isStickyBottom) {
            if (this._activeElement) {
                this._activeElement.focus();
            }
            scrollablePane.updateStickyRefHeights();
            syncScroll = true;
        }
        if (syncScroll) {
            // Sync Sticky scroll position with content container on each update
            scrollablePane.syncScrollSticky(this);
        }
    };
    Sticky.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        // tslint:disable-next-line:deprecation
        if (!this.context.scrollablePane) {
            return true;
        }
        var _a = this.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom, distanceFromTop = _a.distanceFromTop;
        return (isStickyTop !== nextState.isStickyTop ||
            isStickyBottom !== nextState.isStickyBottom ||
            this.props.stickyPosition !== nextProps.stickyPosition ||
            this.props.children !== nextProps.children ||
            distanceFromTop !== nextState.distanceFromTop ||
            _isOffsetHeightDifferent(this._nonStickyContent, this._stickyContentTop) ||
            _isOffsetHeightDifferent(this._nonStickyContent, this._stickyContentBottom) ||
            _isOffsetHeightDifferent(this._nonStickyContent, this._placeHolder));
    };
    Sticky.prototype.render = function () {
        var _a = this.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom;
        var _b = this.props, stickyClassName = _b.stickyClassName, children = _b.children;
        // tslint:disable-next-line:deprecation
        if (!this.context.scrollablePane) {
            return React.createElement("div", null, this.props.children);
        }
        return (React.createElement("div", { ref: this._root },
            this.canStickyTop && (React.createElement("div", { ref: this._stickyContentTop, "aria-hidden": !isStickyTop, style: { pointerEvents: isStickyTop ? 'auto' : 'none' } },
                React.createElement("div", { style: this._getStickyPlaceholderHeight(isStickyTop) }))),
            this.canStickyBottom && (React.createElement("div", { ref: this._stickyContentBottom, "aria-hidden": !isStickyBottom, style: { pointerEvents: isStickyBottom ? 'auto' : 'none' } },
                React.createElement("div", { style: this._getStickyPlaceholderHeight(isStickyBottom) }))),
            React.createElement("div", { style: this._getNonStickyPlaceholderHeightAndWidth(), ref: this._placeHolder },
                (isStickyTop || isStickyBottom) && React.createElement("span", { style: Styling_1.hiddenContentStyle }, children),
                React.createElement("div", { "aria-hidden": isStickyTop || isStickyBottom, ref: this._nonStickyContent, className: isStickyTop || isStickyBottom ? stickyClassName : undefined, style: this._getContentStyles(isStickyTop || isStickyBottom) }, children))));
    };
    Sticky.prototype.addSticky = function (stickyContent) {
        if (this.nonStickyContent) {
            stickyContent.appendChild(this.nonStickyContent);
        }
    };
    Sticky.prototype.resetSticky = function () {
        if (this.nonStickyContent && this.placeholder) {
            this.placeholder.appendChild(this.nonStickyContent);
        }
    };
    Sticky.prototype.setDistanceFromTop = function (container) {
        var distanceFromTop = this._getNonStickyDistanceFromTop(container);
        this.setState({ distanceFromTop: distanceFromTop });
    };
    Sticky.prototype._getContentStyles = function (isSticky) {
        return {
            backgroundColor: this.props.stickyBackgroundColor || this._getBackground(),
            overflow: isSticky ? 'hidden' : '',
        };
    };
    Sticky.prototype._getStickyPlaceholderHeight = function (isSticky) {
        var height = this.nonStickyContent ? this.nonStickyContent.offsetHeight : 0;
        return {
            visibility: isSticky ? 'hidden' : 'visible',
            height: isSticky ? 0 : height,
        };
    };
    Sticky.prototype._getNonStickyPlaceholderHeightAndWidth = function () {
        var _a = this.state, isStickyTop = _a.isStickyTop, isStickyBottom = _a.isStickyBottom;
        if (isStickyTop || isStickyBottom) {
            var height = 0, width = 0;
            // Why is placeholder width needed?
            // ScrollablePane's content container is reponsible for providing scrollbars depending on content overflow.
            // - If the overflow is caused by content of sticky component when it is in non-sticky state, the container will
            //   provide horizontal scrollbar.
            // - If the component becomes sticky, i.e., when state.isStickyTop || state.isStickyBottom becomes true,
            //   its actual content is no longer inside the container, so the container will see no need for horizontal
            //   scrollbar (assuming no other content is causing overflow). The complete content of sticky component will
            //   not be viewable. So it is necessary to provide a placeholder of a certain width (height is already being set)
            //   in the container, to get a horizontal scrollbar & be able to view the complete content of sticky component.
            if (this.nonStickyContent && this.nonStickyContent.firstElementChild) {
                height = this.nonStickyContent.offsetHeight;
                // What value should be substituted for placeholder width?
                // Assumptions:
                //    1. Content inside <Sticky> should always be wrapped in a single div.
                //        <Sticky><div id={'firstElementChild'}>{intended_content}</div><Sticky/>
                //    2. -ve padding, margin, etc. are not be used.
                //    3. scrollWidth of a parent is greater than or equal to max of scrollWidths of its children, and same holds
                //       for children.
                // placeholder width should be computed in the best possible way to prevent overscroll/underscroll.
                width =
                    this.nonStickyContent.firstElementChild.scrollWidth +
                        (this.nonStickyContent.firstElementChild.offsetWidth -
                            this.nonStickyContent.firstElementChild.clientWidth);
            }
            return {
                height: height,
                width: width,
            };
        }
        else {
            return {};
        }
    };
    // Gets background of nearest parent element that has a declared background-color attribute
    Sticky.prototype._getBackground = function () {
        if (!this.root) {
            return undefined;
        }
        var curr = this.root;
        while (window.getComputedStyle(curr).getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' ||
            window.getComputedStyle(curr).getPropertyValue('background-color') === 'transparent') {
            if (curr.tagName === 'HTML') {
                // Fallback color if no element has a declared background-color attribute
                return undefined;
            }
            if (curr.parentElement) {
                curr = curr.parentElement;
            }
        }
        return window.getComputedStyle(curr).getPropertyValue('background-color');
    };
    Sticky.defaultProps = {
        stickyPosition: Sticky_types_1.StickyPositionType.Both,
        isScrollSynced: true,
    };
    Sticky.contextType = ScrollablePane_types_1.ScrollablePaneContext;
    return Sticky;
}(React.Component));
exports.Sticky = Sticky;
function _isOffsetHeightDifferent(a, b) {
    return (a && b && a.current && b.current && a.current.offsetHeight !== b.current.offsetHeight);
}
//# sourceMappingURL=Sticky.js.map