define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/ResizeGroup"], function (require, exports, tslib_1, React, Utilities_1, Styling_1, ResizeGroup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var leftRightBoxClassName = Styling_1.mergeStyles({
        display: 'flex',
        justifyContent: 'space-between',
        whiteSpace: 'nowrap',
    });
    var getNumberedBoxClassName = Utilities_1.memoizeFunction(function (backgroundColor) {
        return Styling_1.mergeStyles({
            display: 'inline-block',
            textAlign: 'center',
            fontSize: '20px',
            lineHeight: '50px',
            height: '50px',
            width: '50px',
            marginLeft: '10px',
            marginRight: '10px',
            backgroundColor: backgroundColor,
        });
    });
    var BoxWithLabel = function (props) { return (React.createElement("div", { className: getNumberedBoxClassName(props.backgroundColor) }, props.label)); };
    function renderBoxWithLabels(count, backgroundColor) {
        var result = [];
        for (var i = 1; i <= count; i += 1) {
            result.push(React.createElement(BoxWithLabel, { label: "" + i, backgroundColor: backgroundColor, key: backgroundColor + "-" + i }));
        }
        return result;
    }
    var LeftRightBoxSet = function (props) { return (React.createElement("div", { className: leftRightBoxClassName },
        React.createElement("div", null, renderBoxWithLabels(props.leftCount, 'orange')),
        React.createElement("div", null, renderBoxWithLabels(props.rightCount, 'green')))); };
    function onReduceData(props) {
        if (props.leftCount === 0 && props.rightCount === 0) {
            return undefined;
        }
        var result;
        if (props.leftCount > props.rightCount) {
            result = tslib_1.__assign(tslib_1.__assign({}, props), { leftCount: props.leftCount - 1 });
        }
        else {
            result = tslib_1.__assign(tslib_1.__assign({}, props), { rightCount: props.rightCount - 1 });
        }
        // Update the cache key
        return tslib_1.__assign(tslib_1.__assign({}, result), { cacheKey: "" + (result.leftCount + result.rightCount) });
    }
    exports.FlexBoxResizeGroupExample = function () {
        var data = { leftCount: 5, rightCount: 5, cacheKey: '10' };
        return (React.createElement(ResizeGroup_1.ResizeGroup, { data: data, 
            // tslint:disable-next-line:jsx-no-lambda
            onRenderData: function (scaledData) { return React.createElement(LeftRightBoxSet, tslib_1.__assign({}, scaledData)); }, onReduceData: onReduceData }));
    };
});
//# sourceMappingURL=ResizeGroup.FlexBox.Example.js.map