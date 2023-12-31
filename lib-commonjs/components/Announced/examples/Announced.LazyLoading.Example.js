"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Announced_1 = require("office-ui-fabric-react/lib-commonjs/Announced");
var Utilities_1 = require("office-ui-fabric-react/lib-commonjs/Utilities");
var Image_1 = require("office-ui-fabric-react/lib-commonjs/Image");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var Text_1 = require("office-ui-fabric-react/lib-commonjs/Text");
var Stack_1 = require("office-ui-fabric-react/lib-commonjs/Stack");
var Button_1 = require("office-ui-fabric-react/lib-commonjs/Button");
var ProgressIndicator_1 = require("office-ui-fabric-react/lib-commonjs/ProgressIndicator");
var Styling_1 = require("office-ui-fabric-react/lib-commonjs/Styling");
var photoStackTokens = { childrenGap: '6 6' };
var photoStackStyles = {
    root: {
        border: '1px solid black',
        padding: 10,
        overflowY: 'auto',
    },
    inner: {
        padding: 0,
    },
};
var defaultButtonStyles = { root: { width: 150 } };
var photoCellClass = Styling_1.mergeStyles({
    display: 'block',
    boxSizing: 'border-box',
    width: 100,
    height: 100,
});
var DELAY = 10;
var PHOTO_COUNT = 30;
var AnnouncedLazyLoadingExample = /** @class */ (function (_super) {
    tslib_1.__extends(AnnouncedLazyLoadingExample, _super);
    function AnnouncedLazyLoadingExample(props) {
        var _this = _super.call(this, props) || this;
        _this._startLoading = function () {
            _this.setState({ loading: true });
        };
        _this._pauseLoading = function () {
            _this.setState({ loading: false });
        };
        _this._async = new Utilities_1.Async(_this);
        _this._photos = _this._createPhotos();
        _this.state = {
            total: 0,
            announced: undefined,
            loading: false,
            timeSinceLastAnnounce: 0,
        };
        return _this;
    }
    AnnouncedLazyLoadingExample.prototype.componentDidMount = function () {
        var _this = this;
        var interval1 = this._async.setInterval(function () {
            var _a = _this.state, loading = _a.loading, total = _a.total;
            if (loading && total < PHOTO_COUNT) {
                _this.setState({ total: total + 1 });
            }
            else if (total === PHOTO_COUNT) {
                _this.setState({ announced: undefined });
                _this._async.clearInterval(interval1);
            }
        }, 2000);
        var interval2 = this._async.setInterval(function () {
            var _a = _this.state, loading = _a.loading, total = _a.total, timeSinceLastAnnounce = _a.timeSinceLastAnnounce;
            if (loading) {
                _this.setState({ timeSinceLastAnnounce: timeSinceLastAnnounce + 1 });
                if (timeSinceLastAnnounce === DELAY || total === PHOTO_COUNT) {
                    _this.setState({
                        announced: React.createElement(Announced_1.Announced, { message: total + " of " + PHOTO_COUNT + " photos loaded" }),
                        timeSinceLastAnnounce: 0,
                    });
                    if (total === PHOTO_COUNT) {
                        _this._async.clearInterval(interval2);
                    }
                }
            }
        }, 1000);
    };
    AnnouncedLazyLoadingExample.prototype.render = function () {
        var _a = this.state, announced = _a.announced, total = _a.total, loading = _a.loading;
        var stackTokens = { childrenGap: 10 };
        var percentComplete = total / PHOTO_COUNT;
        return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
            React.createElement(Text_1.Text, null, "Turn on Narrator and press the button to start loading photos. Announced should announce the number of photos loaded every 10 seconds, as that is the delay chosen for this example."),
            React.createElement(Button_1.DefaultButton, { text: loading ? 'Pause loading' : 'Load photos', onClick: loading ? this._pauseLoading : this._startLoading, styles: defaultButtonStyles }),
            React.createElement(ProgressIndicator_1.ProgressIndicator, { label: percentComplete < 1 ? 'Loading photos' : 'Finished loading photos', percentComplete: percentComplete }),
            announced,
            React.createElement(FocusZone_1.FocusZone, null,
                React.createElement(Stack_1.Stack, { horizontal: true, wrap: true, 
                    // Render the inner content as a ul (there's not currently a less-verbose way to do this)
                    // tslint:disable-next-line:jsx-no-lambda
                    tokens: photoStackTokens, styles: photoStackStyles, slots: { inner: { component: 'ul' } } }, this._renderPhotos()))));
    };
    AnnouncedLazyLoadingExample.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    AnnouncedLazyLoadingExample.prototype._createPhotos = function () {
        var width = 100;
        var height = 100;
        var result = Utilities_1.createArray(PHOTO_COUNT, function () {
            return {
                url: "http://placehold.it/" + width + "x" + height,
                width: width,
                height: height,
            };
        });
        return result;
    };
    AnnouncedLazyLoadingExample.prototype._renderPhotos = function () {
        var _this = this;
        var result = this._photos.map(function (photo, index) { return (React.createElement("li", { key: index, className: photoCellClass, "aria-posinset": index + 1, "aria-setsize": PHOTO_COUNT, "aria-label": "Photo", "data-is-focusable": true }, _this.state.total > index ? React.createElement(Image_1.Image, { src: photo.url, width: photo.width, height: photo.height }) : React.createElement("div", null))); });
        return result;
    };
    return AnnouncedLazyLoadingExample;
}(React.Component));
exports.AnnouncedLazyLoadingExample = AnnouncedLazyLoadingExample;
//# sourceMappingURL=Announced.LazyLoading.Example.js.map