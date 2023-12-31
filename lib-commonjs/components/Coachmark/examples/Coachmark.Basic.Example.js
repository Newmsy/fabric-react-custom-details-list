"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var CoachmarkBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(CoachmarkBasicExample, _super);
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
            coachmarkPosition: office_ui_fabric_react_1.DirectionalHint.bottomAutoEdge,
            dropdownSelectedOptionKey: 'H',
        };
        return _this;
    }
    CoachmarkBasicExample.prototype.render = function () {
        var _a = this.state, isCoachmarkVisible = _a.isCoachmarkVisible, dropdownSelectedOptionKey = _a.dropdownSelectedOptionKey;
        var getClassNames = office_ui_fabric_react_1.classNamesFunction();
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
                React.createElement(office_ui_fabric_react_1.Dropdown, { label: "Coachmark position", selectedKey: dropdownSelectedOptionKey, onFocus: this._onDismiss, options: [
                        { key: 'A', text: 'Top Left Edge', data: office_ui_fabric_react_1.DirectionalHint.topLeftEdge },
                        { key: 'B', text: 'Top Center', data: office_ui_fabric_react_1.DirectionalHint.topCenter },
                        { key: 'C', text: 'Top Right Edge', data: office_ui_fabric_react_1.DirectionalHint.topRightEdge },
                        { key: 'D', text: 'Top Auto Edge', data: office_ui_fabric_react_1.DirectionalHint.topAutoEdge },
                        { key: 'E', text: 'Bottom Left Edge', data: office_ui_fabric_react_1.DirectionalHint.bottomLeftEdge },
                        { key: 'F', text: 'Bottom Center', data: office_ui_fabric_react_1.DirectionalHint.bottomCenter },
                        { key: 'G', text: 'Bottom Right Edge', data: office_ui_fabric_react_1.DirectionalHint.bottomRightEdge },
                        { key: 'H', text: 'Bottom Auto Edge', data: office_ui_fabric_react_1.DirectionalHint.bottomAutoEdge },
                        { key: 'I', text: 'Left Top Edge', data: office_ui_fabric_react_1.DirectionalHint.leftTopEdge },
                        { key: 'J', text: 'Left Center', data: office_ui_fabric_react_1.DirectionalHint.leftCenter },
                        { key: 'K', text: 'Left Bottom Edge', data: office_ui_fabric_react_1.DirectionalHint.leftBottomEdge },
                        { key: 'L', text: 'Right Top Edge', data: office_ui_fabric_react_1.DirectionalHint.rightTopEdge },
                        { key: 'M', text: 'Right Center', data: office_ui_fabric_react_1.DirectionalHint.rightCenter },
                        { key: 'N', text: 'Right Bottom Edge', data: office_ui_fabric_react_1.DirectionalHint.rightBottomEdge },
                    ], onChange: this._onDropdownChange })),
            React.createElement("div", { className: classNames.buttonContainer, ref: this._targetButton },
                React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: this._onShowMenuClicked, text: isCoachmarkVisible ? 'Hide Coachmark' : 'Show Coachmark' })),
            isCoachmarkVisible && (React.createElement(office_ui_fabric_react_1.Coachmark, { target: this._targetButton.current, positioningContainerProps: {
                    directionalHint: this.state.coachmarkPosition,
                    doNotLayer: false,
                }, ariaAlertText: "A Coachmark has appeared", ariaDescribedBy: 'coachmark-desc1', ariaLabelledBy: 'coachmark-label1', ariaDescribedByText: 'Press enter or alt + C to open the Coachmark notification', ariaLabelledByText: 'Coachmark notification' },
                React.createElement(office_ui_fabric_react_1.TeachingBubbleContent, { headline: "Example Title", hasCloseButton: true, closeButtonAriaLabel: "Close", primaryButtonProps: buttonProps, secondaryButtonProps: buttonProps2, onDismiss: this._onDismiss, ariaDescribedBy: 'example-description1', ariaLabelledBy: 'example-label1' }, "Welcome to the land of Coachmarks!")))));
    };
    return CoachmarkBasicExample;
}(React.Component));
exports.CoachmarkBasicExample = CoachmarkBasicExample;
//# sourceMappingURL=Coachmark.Basic.Example.js.map