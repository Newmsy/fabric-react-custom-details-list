import { __extends } from "tslib";
import * as React from 'react';
import { classNamesFunction, Coachmark, DefaultButton, DirectionalHint, Dropdown, TeachingBubbleContent, } from 'office-ui-fabric-react';
var CoachmarkBasicExample = /** @class */ (function (_super) {
    __extends(CoachmarkBasicExample, _super);
    function CoachmarkBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._targetButton = React.createRef();
        _this._onDismiss = function () {
            _this.setState({
                isCoachmarkVisible: false,
            });
        };
        _this._onDropdownChange = function (event, option) {
            _this.setState({
                coachmarkPosition: option.data,
                dropdownSelectedOptionKey: option.key,
            });
        };
        _this._onShowMenuClicked = function () {
            _this.setState({
                isCoachmarkVisible: !_this.state.isCoachmarkVisible,
            });
        };
        _this.state = {
            isCoachmarkVisible: false,
            coachmarkPosition: DirectionalHint.bottomAutoEdge,
            dropdownSelectedOptionKey: 'H',
        };
        return _this;
    }
    CoachmarkBasicExample.prototype.render = function () {
        var _a = this.state, isCoachmarkVisible = _a.isCoachmarkVisible, dropdownSelectedOptionKey = _a.dropdownSelectedOptionKey;
        var getClassNames = classNamesFunction();
        var classNames = getClassNames(function () {
            return {
                dropdownContainer: {
                    maxWidth: '400px',
                },
                buttonContainer: {
                    marginTop: '30px',
                    display: 'inline-block',
                },
            };
        }, {});
        var buttonProps = {
            text: 'Try it',
        };
        var buttonProps2 = {
            text: 'Try it again',
        };
        return (React.createElement("div", { className: classNames.root },
            React.createElement("div", { className: classNames.dropdownContainer },
                React.createElement(Dropdown, { label: "Coachmark position", selectedKey: dropdownSelectedOptionKey, onFocus: this._onDismiss, options: [
                        { key: 'A', text: 'Top Left Edge', data: DirectionalHint.topLeftEdge },
                        { key: 'B', text: 'Top Center', data: DirectionalHint.topCenter },
                        { key: 'C', text: 'Top Right Edge', data: DirectionalHint.topRightEdge },
                        { key: 'D', text: 'Top Auto Edge', data: DirectionalHint.topAutoEdge },
                        { key: 'E', text: 'Bottom Left Edge', data: DirectionalHint.bottomLeftEdge },
                        { key: 'F', text: 'Bottom Center', data: DirectionalHint.bottomCenter },
                        { key: 'G', text: 'Bottom Right Edge', data: DirectionalHint.bottomRightEdge },
                        { key: 'H', text: 'Bottom Auto Edge', data: DirectionalHint.bottomAutoEdge },
                        { key: 'I', text: 'Left Top Edge', data: DirectionalHint.leftTopEdge },
                        { key: 'J', text: 'Left Center', data: DirectionalHint.leftCenter },
                        { key: 'K', text: 'Left Bottom Edge', data: DirectionalHint.leftBottomEdge },
                        { key: 'L', text: 'Right Top Edge', data: DirectionalHint.rightTopEdge },
                        { key: 'M', text: 'Right Center', data: DirectionalHint.rightCenter },
                        { key: 'N', text: 'Right Bottom Edge', data: DirectionalHint.rightBottomEdge },
                    ], onChange: this._onDropdownChange })),
            React.createElement("div", { className: classNames.buttonContainer, ref: this._targetButton },
                React.createElement(DefaultButton, { onClick: this._onShowMenuClicked, text: isCoachmarkVisible ? 'Hide Coachmark' : 'Show Coachmark' })),
            isCoachmarkVisible && (React.createElement(Coachmark, { target: this._targetButton.current, positioningContainerProps: {
                    directionalHint: this.state.coachmarkPosition,
                    doNotLayer: false,
                }, ariaAlertText: "A Coachmark has appeared", ariaDescribedBy: 'coachmark-desc1', ariaLabelledBy: 'coachmark-label1', ariaDescribedByText: 'Press enter or alt + C to open the Coachmark notification', ariaLabelledByText: 'Coachmark notification' },
                React.createElement(TeachingBubbleContent, { headline: "Example Title", hasCloseButton: true, closeButtonAriaLabel: "Close", primaryButtonProps: buttonProps, secondaryButtonProps: buttonProps2, onDismiss: this._onDismiss, ariaDescribedBy: 'example-description1', ariaLabelledBy: 'example-label1' }, "Welcome to the land of Coachmarks!")))));
    };
    return CoachmarkBasicExample;
}(React.Component));
export { CoachmarkBasicExample };
//# sourceMappingURL=Coachmark.Basic.Example.js.map