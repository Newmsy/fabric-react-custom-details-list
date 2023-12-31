"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Label_1 = require("../../Label");
var Icon_1 = require("../../Icon");
var Utilities_1 = require("../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
var DEFAULT_STATE_VALUE = '';
var COMPONENT_NAME = 'TextField';
var TextFieldBase = /** @class */ (function (_super) {
    tslib_1.__extends(TextFieldBase, _super);
    function TextFieldBase(props) {
        var _this = _super.call(this, props) || this;
        _this._textElement = React.createRef();
        _this._onFocus = function (ev) {
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
            _this.setState({ isFocused: true }, function () {
                if (_this.props.validateOnFocusIn) {
                    _this._validate(_this.value);
                }
            });
        };
        _this._onBlur = function (ev) {
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
            _this.setState({ isFocused: false }, function () {
                if (_this.props.validateOnFocusOut) {
                    _this._validate(_this.value);
                }
            });
        };
        _this._onRenderLabel = function (props) {
            var label = props.label, required = props.required;
            // IProcessedStyleSet definition requires casting for what Label expects as its styles prop
            var labelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.label
                : undefined;
            if (label) {
                return (React.createElement(Label_1.Label, { required: required, htmlFor: _this._id, styles: labelStyles, disabled: props.disabled, id: _this._labelId }, props.label));
            }
            return null;
        };
        _this._onRenderDescription = function (props) {
            if (props.description) {
                return React.createElement("span", { className: _this._classNames.description }, props.description);
            }
            return null;
        };
        _this._onInputChange = function (event) {
            // Previously, we needed to call both onInput and onChange due to some weird IE/React issues,
            // which have *probably* been fixed now:
            // - https://github.com/microsoft/fluentui/issues/744 (likely fixed)
            // - https://github.com/microsoft/fluentui/issues/824 (confirmed fixed)
            // TODO (Fabric 8?) - Switch to calling only onChange. This switch is pretty disruptive for
            // tests (ours and maybe consumers' too), so it seemed best to do the switch in a major bump.
            var element = event.target;
            var value = element.value;
            // Ignore this event if the value is undefined (in case one of the IE bugs comes back)
            if (value === undefined || value === _this._lastChangeValue) {
                return;
            }
            _this._lastChangeValue = value;
            // This is so developers can access the event properties in asynchronous callbacks
            // https://reactjs.org/docs/events.html#event-pooling
            event.persist();
            var isSameValue;
            _this.setState(function (prevState, props) {
                var prevValue = _getValue(props, prevState) || '';
                isSameValue = value === prevValue;
                // Avoid doing unnecessary work when the value has not changed.
                if (isSameValue) {
                    return null;
                }
                // ONLY if this is an uncontrolled component, update the displayed value.
                // (Controlled components must update the `value` prop from `onChange`.)
                return _this._isControlled ? null : { uncontrolledValue: value };
            }, function () {
                // If the value actually changed, call onChange (for either controlled or uncontrolled)
                var onChange = _this.props.onChange;
                if (!isSameValue && onChange) {
                    onChange(event, value);
                }
            });
        };
        Utilities_1.initializeComponentRef(_this);
        _this._async = new Utilities_1.Async(_this);
        if (process.env.NODE_ENV !== 'production') {
            Utilities_1.warnMutuallyExclusive(COMPONENT_NAME, props, {
                errorMessage: 'onGetErrorMessage',
            });
        }
        _this._fallbackId = Utilities_1.getId(COMPONENT_NAME);
        _this._descriptionId = Utilities_1.getId(COMPONENT_NAME + 'Description');
        _this._labelId = Utilities_1.getId(COMPONENT_NAME + 'Label');
        _this._warnControlledUsage();
        var _a = props.defaultValue, defaultValue = _a === void 0 ? DEFAULT_STATE_VALUE : _a;
        if (typeof defaultValue === 'number') {
            // This isn't allowed per the props, but happens anyway.
            defaultValue = String(defaultValue);
        }
        _this.state = {
            uncontrolledValue: _this._isControlled ? undefined : defaultValue,
            isFocused: false,
            errorMessage: '',
        };
        _this._delayedValidate = _this._async.debounce(_this._validate, _this.props.deferredValidationTime);
        _this._lastValidation = 0;
        return _this;
    }
    Object.defineProperty(TextFieldBase.prototype, "value", {
        /**
         * Gets the current value of the text field.
         */
        get: function () {
            return _getValue(this.props, this.state);
        },
        enumerable: true,
        configurable: true
    });
    TextFieldBase.prototype.componentDidMount = function () {
        this._adjustInputHeight();
        if (this.props.validateOnLoad) {
            this._validate(this.value);
        }
    };
    TextFieldBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
    };
    TextFieldBase.prototype.getSnapshotBeforeUpdate = function (prevProps, prevState) {
        return {
            selection: [this.selectionStart, this.selectionEnd],
        };
    };
    TextFieldBase.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var props = this.props;
        var _a = (snapshot || {}).selection, selection = _a === void 0 ? [null, null] : _a;
        var start = selection[0], end = selection[1];
        if (!!prevProps.multiline !== !!props.multiline && prevState.isFocused) {
            // The text field has just changed between single- and multi-line, so we need to reset focus
            // and selection/cursor.
            this.focus();
            if (start !== null && end !== null && start >= 0 && end >= 0) {
                this.setSelectionRange(start, end);
            }
        }
        var prevValue = _getValue(prevProps, prevState);
        var value = this.value;
        if (prevValue !== value) {
            // Handle controlled/uncontrolled warnings and status
            this._warnControlledUsage(prevProps);
            // Clear error message if needed
            // TODO: is there any way to do this without an extra render?
            if (this.state.errorMessage && !props.errorMessage) {
                this.setState({ errorMessage: '' });
            }
            // Adjust height if needed based on new value
            this._adjustInputHeight();
            // Reset the record of the last value seen by a change/input event
            this._lastChangeValue = undefined;
            // TODO: #5875 added logic to trigger validation in componentWillReceiveProps and other places.
            // This seems a bit odd and hard to integrate with the new approach.
            // (Starting to think we should just put the validation logic in a separate wrapper component...?)
            if (_shouldValidateAllChanges(props)) {
                this._delayedValidate(value);
            }
        }
    };
    TextFieldBase.prototype.render = function () {
        var _a = this.props, borderless = _a.borderless, className = _a.className, disabled = _a.disabled, iconProps = _a.iconProps, inputClassName = _a.inputClassName, label = _a.label, multiline = _a.multiline, required = _a.required, underlined = _a.underlined, prefix = _a.prefix, resizable = _a.resizable, suffix = _a.suffix, theme = _a.theme, styles = _a.styles, autoAdjustHeight = _a.autoAdjustHeight, _b = _a.onRenderPrefix, onRenderPrefix = _b === void 0 ? this._onRenderPrefix : _b, _c = _a.onRenderSuffix, onRenderSuffix = _c === void 0 ? this._onRenderSuffix : _c, _d = _a.onRenderLabel, onRenderLabel = _d === void 0 ? this._onRenderLabel : _d, _e = _a.onRenderDescription, onRenderDescription = _e === void 0 ? this._onRenderDescription : _e;
        var isFocused = this.state.isFocused;
        var errorMessage = this._errorMessage;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            focused: isFocused,
            required: required,
            multiline: multiline,
            hasLabel: !!label,
            hasErrorMessage: !!errorMessage,
            borderless: borderless,
            resizable: resizable,
            hasIcon: !!iconProps,
            underlined: underlined,
            inputClassName: inputClassName,
            autoAdjustHeight: autoAdjustHeight,
        });
        return (React.createElement("div", { className: this._classNames.root },
            React.createElement("div", { className: this._classNames.wrapper },
                onRenderLabel(this.props, this._onRenderLabel),
                React.createElement("div", { className: this._classNames.fieldGroup },
                    (prefix !== undefined || this.props.onRenderPrefix) && (React.createElement("div", { className: this._classNames.prefix }, onRenderPrefix(this.props, this._onRenderPrefix))),
                    multiline ? this._renderTextArea() : this._renderInput(),
                    iconProps && React.createElement(Icon_1.Icon, tslib_1.__assign({ className: this._classNames.icon }, iconProps)),
                    (suffix !== undefined || this.props.onRenderSuffix) && (React.createElement("div", { className: this._classNames.suffix }, onRenderSuffix(this.props, this._onRenderSuffix))))),
            this._isDescriptionAvailable && (React.createElement("span", { id: this._descriptionId },
                onRenderDescription(this.props, this._onRenderDescription),
                errorMessage && (React.createElement("div", { role: "alert" },
                    React.createElement(Utilities_1.DelayedRender, null,
                        React.createElement("p", { className: this._classNames.errorMessage },
                            React.createElement("span", { "data-automation-id": "error-message" }, errorMessage)))))))));
    };
    /**
     * Sets focus on the text field
     */
    TextFieldBase.prototype.focus = function () {
        if (this._textElement.current) {
            this._textElement.current.focus();
        }
    };
    /**
     * Blurs the text field.
     */
    TextFieldBase.prototype.blur = function () {
        if (this._textElement.current) {
            this._textElement.current.blur();
        }
    };
    /**
     * Selects the text field
     */
    TextFieldBase.prototype.select = function () {
        if (this._textElement.current) {
            this._textElement.current.select();
        }
    };
    /**
     * Sets the selection start of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionStart = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionStart = value;
        }
    };
    /**
     * Sets the selection end of the text field to a specified value
     */
    TextFieldBase.prototype.setSelectionEnd = function (value) {
        if (this._textElement.current) {
            this._textElement.current.selectionEnd = value;
        }
    };
    Object.defineProperty(TextFieldBase.prototype, "selectionStart", {
        /**
         * Gets the selection start of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionStart : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "selectionEnd", {
        /**
         * Gets the selection end of the text field
         */
        get: function () {
            return this._textElement.current ? this._textElement.current.selectionEnd : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start - Index of the start of the selection.
     * @param end - Index of the end of the selection.
     */
    TextFieldBase.prototype.setSelectionRange = function (start, end) {
        if (this._textElement.current) {
            this._textElement.current.setSelectionRange(start, end);
        }
    };
    TextFieldBase.prototype._warnControlledUsage = function (prevProps) {
        // Show warnings if props are being used in an invalid way
        Utilities_1.warnControlledUsage({
            componentId: this._id,
            componentName: COMPONENT_NAME,
            props: this.props,
            oldProps: prevProps,
            valueProp: 'value',
            defaultValueProp: 'defaultValue',
            onChangeProp: 'onChange',
            readOnlyProp: 'readOnly',
        });
        if (this.props.value === null && !this._hasWarnedNullValue) {
            this._hasWarnedNullValue = true;
            Utilities_1.warn("Warning: 'value' prop on '" + COMPONENT_NAME + "' should not be null. Consider using an " +
                'empty string to clear the component or undefined to indicate an uncontrolled component.');
        }
    };
    Object.defineProperty(TextFieldBase.prototype, "_id", {
        /** Returns `props.id` if available, or a fallback if not. */
        get: function () {
            return this.props.id || this._fallbackId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "_isControlled", {
        get: function () {
            return Utilities_1.isControlled(this.props, 'value');
        },
        enumerable: true,
        configurable: true
    });
    TextFieldBase.prototype._onRenderPrefix = function (props) {
        var prefix = props.prefix;
        return React.createElement("span", { style: { paddingBottom: '1px' } }, prefix);
    };
    TextFieldBase.prototype._onRenderSuffix = function (props) {
        var suffix = props.suffix;
        return React.createElement("span", { style: { paddingBottom: '1px' } }, suffix);
    };
    Object.defineProperty(TextFieldBase.prototype, "_errorMessage", {
        /**
         * Current error message from either `props.errorMessage` or the result of `props.onGetErrorMessage`.
         *
         * - If there is no validation error or we have not validated the input value, errorMessage is an empty string.
         * - If we have done the validation and there is validation error, errorMessage is the validation error message.
         */
        get: function () {
            var _a = this.props.errorMessage, errorMessage = _a === void 0 ? this.state.errorMessage : _a;
            return errorMessage || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldBase.prototype, "_isDescriptionAvailable", {
        /**
         * If a custom description render function is supplied then treat description as always available.
         * Otherwise defer to the presence of description or error message text.
         */
        get: function () {
            var props = this.props;
            return !!(props.onRenderDescription || props.description || this._errorMessage);
        },
        enumerable: true,
        configurable: true
    });
    TextFieldBase.prototype._renderTextArea = function () {
        var textAreaProps = Utilities_1.getNativeProps(this.props, Utilities_1.textAreaProperties, ['defaultValue']);
        var ariaLabelledBy = this.props['aria-labelledby'] || (this.props.label ? this._labelId : undefined);
        return (React.createElement("textarea", tslib_1.__assign({ id: this._id }, textAreaProps, { ref: this._textElement, value: this.value || '', onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, "aria-labelledby": ariaLabelledBy, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this._errorMessage, "aria-label": this.props.ariaLabel, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextFieldBase.prototype._renderInput = function () {
        var inputProps = Utilities_1.getNativeProps(this.props, Utilities_1.inputProperties, [
            'defaultValue',
        ]);
        var ariaLabelledBy = this.props['aria-labelledby'] || (this.props.label ? this._labelId : undefined);
        return (React.createElement("input", tslib_1.__assign({ type: 'text', id: this._id, "aria-labelledby": ariaLabelledBy }, inputProps, { ref: this._textElement, value: this.value || '', onInput: this._onInputChange, onChange: this._onInputChange, className: this._classNames.field, "aria-label": this.props.ariaLabel, "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props['aria-describedby'], "aria-invalid": !!this._errorMessage, readOnly: this.props.readOnly, onFocus: this._onFocus, onBlur: this._onBlur })));
    };
    TextFieldBase.prototype._validate = function (value) {
        var _this = this;
        // In case _validate is called again while validation promise is executing
        if (this._latestValidateValue === value && _shouldValidateAllChanges(this.props)) {
            return;
        }
        this._latestValidateValue = value;
        var onGetErrorMessage = this.props.onGetErrorMessage;
        var result = onGetErrorMessage && onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string' || !('then' in result)) {
                this.setState({ errorMessage: result });
                this._notifyAfterValidate(value, result);
            }
            else {
                var currentValidation_1 = ++this._lastValidation;
                result.then(function (errorMessage) {
                    if (currentValidation_1 === _this._lastValidation) {
                        _this.setState({ errorMessage: errorMessage });
                    }
                    _this._notifyAfterValidate(value, errorMessage);
                });
            }
        }
        else {
            this._notifyAfterValidate(value, '');
        }
    };
    TextFieldBase.prototype._notifyAfterValidate = function (value, errorMessage) {
        if (value === this.value && this.props.onNotifyValidationResult) {
            this.props.onNotifyValidationResult(errorMessage, value);
        }
    };
    TextFieldBase.prototype._adjustInputHeight = function () {
        if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
            var textField = this._textElement.current;
            textField.style.height = '';
            textField.style.height = textField.scrollHeight + 'px';
        }
    };
    TextFieldBase.defaultProps = {
        resizable: true,
        deferredValidationTime: 200,
        validateOnLoad: true,
    };
    return TextFieldBase;
}(React.Component));
exports.TextFieldBase = TextFieldBase;
/** Get the value from the given state and props (converting from number to string if needed) */
function _getValue(props, state) {
    var _a = props.value, value = _a === void 0 ? state.uncontrolledValue : _a;
    if (typeof value === 'number') {
        // not allowed per typings, but happens anyway
        return String(value);
    }
    return value;
}
/**
 * If `validateOnFocusIn` or `validateOnFocusOut` is true, validation should run **only** on that event.
 * Otherwise, validation should run on every change.
 */
function _shouldValidateAllChanges(props) {
    return !(props.validateOnFocusIn || props.validateOnFocusOut);
}
//# sourceMappingURL=TextField.base.js.map