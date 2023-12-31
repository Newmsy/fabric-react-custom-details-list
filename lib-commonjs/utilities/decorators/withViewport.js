"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var BaseDecorator_1 = require("./BaseDecorator");
var Utilities_1 = require("../../Utilities");
var RESIZE_DELAY = 500;
var MAX_RESIZE_ATTEMPTS = 3;
/**
 * A decorator to update decorated component on viewport or window resize events.
 *
 * @param ComposedComponent decorated React component reference.
 */
function withViewport(ComposedComponent) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(WithViewportComponent, _super);
        function WithViewportComponent(props) {
            var _this = _super.call(this, props) || this;
            _this._root = React.createRef();
            _this._registerResizeObserver = function () {
                var win = Utilities_1.getWindow(_this._root.current);
                _this._viewportResizeObserver = new win.ResizeObserver(_this._onAsyncResize);
                _this._viewportResizeObserver.observe(_this._root.current);
            };
            _this._unregisterResizeObserver = function () {
                if (_this._viewportResizeObserver) {
                    _this._viewportResizeObserver.disconnect();
                    delete _this._viewportResizeObserver;
                }
            };
            /* Note: using lambda here because decorators don't seem to work in decorators. */
            _this._updateViewport = function (withForceUpdate) {
                var viewport = _this.state.viewport;
                var viewportElement = _this._root.current;
                var scrollElement = Utilities_1.findScrollableParent(viewportElement);
                var scrollRect = Utilities_1.getRect(scrollElement);
                var clientRect = Utilities_1.getRect(viewportElement);
                var updateComponent = function () {
                    if (withForceUpdate && _this._composedComponentInstance) {
                        _this._composedComponentInstance.forceUpdate();
                    }
                };
                var isSizeChanged = (clientRect && clientRect.width) !== viewport.width || (scrollRect && scrollRect.height) !== viewport.height;
                if (isSizeChanged && _this._resizeAttempts < MAX_RESIZE_ATTEMPTS && clientRect && scrollRect) {
                    _this._resizeAttempts++;
                    _this.setState({
                        viewport: {
                            width: clientRect.width,
                            height: scrollRect.height,
                        },
                    }, function () {
                        _this._updateViewport(withForceUpdate);
                    });
                }
                else {
                    _this._resizeAttempts = 0;
                    updateComponent();
                }
            };
            _this._async = new Utilities_1.Async(_this);
            _this._events = new Utilities_1.EventGroup(_this);
            _this._resizeAttempts = 0;
            _this.state = {
                viewport: {
                    width: 0,
                    height: 0,
                },
            };
            return _this;
        }
        WithViewportComponent.prototype.componentDidMount = function () {
            var skipViewportMeasures = this.props.skipViewportMeasures;
            var win = Utilities_1.getWindow(this._root.current);
            this._onAsyncResize = this._async.debounce(this._onAsyncResize, RESIZE_DELAY, {
                leading: false,
            });
            // ResizeObserver seems always fire even window is not resized. This is
            // particularly bad when skipViewportMeasures is set when optimizing fixed layout lists.
            // It will measure and update and re-render the entire list after list is fully rendered.
            // So fallback to listen to resize event when skipViewportMeasures is set.
            if (!skipViewportMeasures && this._isResizeObserverAvailable()) {
                this._registerResizeObserver();
            }
            else {
                this._events.on(win, 'resize', this._onAsyncResize);
            }
            if (!skipViewportMeasures) {
                this._updateViewport();
            }
        };
        WithViewportComponent.prototype.componentDidUpdate = function (newProps) {
            var oldSkipViewportMeasures = this.props.skipViewportMeasures;
            var newSkipViewportMeasures = newProps.skipViewportMeasures;
            var win = Utilities_1.getWindow(this._root.current);
            if (oldSkipViewportMeasures !== newSkipViewportMeasures) {
                if (newSkipViewportMeasures) {
                    this._unregisterResizeObserver();
                    this._events.on(win, 'resize', this._onAsyncResize);
                }
                else if (!newSkipViewportMeasures && this._isResizeObserverAvailable()) {
                    this._events.off(win, 'resize', this._onAsyncResize);
                    this._registerResizeObserver();
                }
            }
            if (!!newSkipViewportMeasures) {
                this._updateViewport();
            }
        };
        WithViewportComponent.prototype.componentWillUnmount = function () {
            this._events.dispose();
            this._async.dispose();
            this._unregisterResizeObserver();
        };
        WithViewportComponent.prototype.render = function () {
            var viewport = this.state.viewport;
            var newViewport = viewport.width > 0 && viewport.height > 0 ? viewport : undefined;
            return (React.createElement("div", { className: "ms-Viewport", ref: this._root, style: { minWidth: 1, minHeight: 1 } },
                React.createElement(ComposedComponent, tslib_1.__assign({ ref: this._updateComposedComponentRef, viewport: newViewport }, this.props))));
        };
        WithViewportComponent.prototype.forceUpdate = function () {
            this._updateViewport(true);
        };
        WithViewportComponent.prototype._onAsyncResize = function () {
            this._updateViewport();
        };
        WithViewportComponent.prototype._isResizeObserverAvailable = function () {
            var win = Utilities_1.getWindow(this._root.current);
            return win && win.ResizeObserver;
        };
        return WithViewportComponent;
    }(BaseDecorator_1.BaseDecorator));
}
exports.withViewport = withViewport;
//# sourceMappingURL=withViewport.js.map