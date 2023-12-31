"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Icon_1 = require("../../Icon");
var DirectionalHint_1 = require("../../common/DirectionalHint");
var ContextualMenu_1 = require("../../ContextualMenu");
var BaseButton_classNames_1 = require("./BaseButton.classNames");
var SplitButton_classNames_1 = require("./SplitButton/SplitButton.classNames");
var KeytipData_1 = require("../../KeytipData");
var TouchIdleDelay = 500; /* ms */
var COMPONENT_NAME = 'BaseButton';
/**
 * {@docCategory Button}
 */
var BaseButton = /** @class */ (function (_super) {
    tslib_1.__extends(BaseButton, _super);
    function BaseButton(props) {
        var _this = _super.call(this, props) || this;
        _this._buttonElement = React.createRef();
        _this._splitButtonContainer = React.createRef();
        _this._renderedVisibleMenu = false;
        _this._getMemoizedMenuButtonKeytipProps = Utilities_1.memoizeFunction(function (keytipProps) {
            return tslib_1.__assign(tslib_1.__assign({}, keytipProps), { hasMenu: true });
        });
        _this._onRenderIcon = function (buttonProps, defaultRender) {
            var iconProps = _this.props.iconProps;
            if (iconProps && (iconProps.iconName !== undefined || iconProps.imageProps)) {
                var className = iconProps.className, imageProps = iconProps.imageProps, rest = tslib_1.__rest(iconProps, ["className", "imageProps"]);
                // If the styles prop is specified as part of iconProps, fall back to regular Icon as FontIcon and ImageIcon
                // do not have this prop.
                if (iconProps.styles) {
                    return React.createElement(Icon_1.Icon, tslib_1.__assign({ className: Utilities_1.css(_this._classNames.icon, className), imageProps: imageProps }, rest));
                }
                if (iconProps.iconName) {
                    return React.createElement(Icon_1.FontIcon, tslib_1.__assign({ className: Utilities_1.css(_this._classNames.icon, className) }, rest));
                }
                if (imageProps) {
                    return React.createElement(Icon_1.ImageIcon, tslib_1.__assign({ className: Utilities_1.css(_this._classNames.icon, className), imageProps: imageProps }, rest));
                }
            }
            return null;
        };
        _this._onRenderTextContents = function () {
            var _a = _this.props, text = _a.text, children = _a.children, 
            // tslint:disable-next-line:deprecation
            _b = _a.secondaryText, 
            // tslint:disable-next-line:deprecation
            secondaryText = _b === void 0 ? _this.props.description : _b, _c = _a.onRenderText, onRenderText = _c === void 0 ? _this._onRenderText : _c, _d = _a.onRenderDescription, onRenderDescription = _d === void 0 ? _this._onRenderDescription : _d;
            if (text || typeof children === 'string' || secondaryText) {
                return (React.createElement("span", { className: _this._classNames.textContainer },
                    onRenderText(_this.props, _this._onRenderText),
                    onRenderDescription(_this.props, _this._onRenderDescription)));
            }
            return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
        };
        _this._onRenderText = function () {
            var text = _this.props.text;
            var children = _this.props.children;
            // For backwards compat, we should continue to take in the text content from children.
            if (text === undefined && typeof children === 'string') {
                text = children;
            }
            if (_this._hasText()) {
                return (React.createElement("span", { key: _this._labelId, className: _this._classNames.label, id: _this._labelId }, text));
            }
            return null;
        };
        _this._onRenderChildren = function () {
            var children = _this.props.children;
            // If children is just a string, either it or the text will be rendered via onRenderLabel
            // If children is another component, it will be rendered after text
            if (typeof children === 'string') {
                return null;
            }
            return children;
        };
        _this._onRenderDescription = function (props) {
            // tslint:disable-next-line:deprecation
            var _a = props.secondaryText, secondaryText = _a === void 0 ? _this.props.description : _a;
            // ms-Button-description is only shown when the button type is compound.
            // In other cases it will not be displayed.
            return secondaryText ? (React.createElement("span", { key: _this._descriptionId, className: _this._classNames.description, id: _this._descriptionId }, secondaryText)) : null;
        };
        _this._onRenderAriaDescription = function () {
            var ariaDescription = _this.props.ariaDescription;
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
            // otherwise it will be assigned to descriptionSpan.
            return ariaDescription ? (React.createElement("span", { className: _this._classNames.screenReaderText, id: _this._ariaDescriptionId }, ariaDescription)) : null;
        };
        _this._onRenderMenuIcon = function (props) {
            var menuIconProps = _this.props.menuIconProps;
            return React.createElement(Icon_1.FontIcon, tslib_1.__assign({ iconName: "ChevronDown" }, menuIconProps, { className: _this._classNames.menuIcon }));
        };
        _this._onRenderMenu = function (menuProps) {
            var persistMenu = _this.props.persistMenu;
            var menuHidden = _this.state.menuHidden;
            var MenuType = _this.props.menuAs || ContextualMenu_1.ContextualMenu;
            // the accessible menu label (accessible name) has a relationship to the button.
            // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
            // AND the button has text, we'll set the menu aria-labelledBy to the text element id.
            if (!menuProps.ariaLabel && !menuProps.labelElementId && _this._hasText()) {
                menuProps = tslib_1.__assign(tslib_1.__assign({}, menuProps), { labelElementId: _this._labelId });
            }
            return (React.createElement(MenuType, tslib_1.__assign({ id: _this._labelId + '-menu', directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge }, menuProps, { shouldFocusOnContainer: _this._menuShouldFocusOnContainer, shouldFocusOnMount: _this._menuShouldFocusOnMount, hidden: persistMenu ? menuHidden : undefined, className: Utilities_1.css('ms-BaseButton-menuhost', menuProps.className), target: _this._isSplitButton ? _this._splitButtonContainer.current : _this._buttonElement.current, onDismiss: _this._onDismissMenu })));
        };
        _this._onDismissMenu = function (ev) {
            var menuProps = _this.props.menuProps;
            if (menuProps && menuProps.onDismiss) {
                menuProps.onDismiss(ev);
            }
            if (!ev || !ev.defaultPrevented) {
                _this._dismissMenu();
            }
        };
        _this._dismissMenu = function () {
            _this._menuShouldFocusOnMount = undefined;
            _this._menuShouldFocusOnContainer = undefined;
            _this.setState({ menuHidden: true });
        };
        _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
            if (shouldFocusOnMount === void 0) { shouldFocusOnMount = true; }
            if (_this.props.menuProps) {
                _this._menuShouldFocusOnContainer = shouldFocusOnContainer;
                _this._menuShouldFocusOnMount = shouldFocusOnMount;
                _this._renderedVisibleMenu = true;
                _this.setState({ menuHidden: false });
            }
        };
        _this._onToggleMenu = function (shouldFocusOnContainer) {
            var shouldFocusOnMount = true;
            if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
                shouldFocusOnMount = false;
            }
            _this.state.menuHidden ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount) : _this._dismissMenu();
        };
        _this._onSplitContainerFocusCapture = function (ev) {
            var container = _this._splitButtonContainer.current;
            // If the target is coming from the portal we do not need to set focus on the container.
            if (!container || (ev.target && Utilities_1.portalContainsElement(ev.target, container))) {
                return;
            }
            // We should never be able to focus the individual buttons in a split button. Focus
            // should always remain on the container.
            container.focus();
        };
        _this._onSplitButtonPrimaryClick = function (ev) {
            if (!_this.state.menuHidden) {
                _this._dismissMenu();
            }
            if (!_this._processingTouch && _this.props.onClick) {
                _this.props.onClick(ev);
            }
            else if (_this._processingTouch) {
                _this._onMenuClick(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            // explicity cancelling event so click won't fire after this
            if (_this.props.disabled && (ev.which === Utilities_1.KeyCodes.enter || ev.which === Utilities_1.KeyCodes.space)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuKeyDown(ev);
                }
                else if (_this.props.onKeyDown !== undefined) {
                    _this.props.onKeyDown(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onKeyUp = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
                _this.props.onKeyUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onKeyPress = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
                _this.props.onKeyPress(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseUp = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
                _this.props.onMouseUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseDown = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
                _this.props.onMouseDown(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onClick = function (ev) {
            if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuClick(ev);
                }
                else if (_this.props.onClick !== undefined) {
                    _this.props.onClick(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onSplitButtonContainerKeyDown = function (ev) {
            if (ev.which === Utilities_1.KeyCodes.enter || ev.which === Utilities_1.KeyCodes.space) {
                if (_this._buttonElement.current) {
                    _this._buttonElement.current.click();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                _this._onMenuKeyDown(ev);
            }
        };
        _this._onMenuKeyDown = function (ev) {
            if (_this.props.disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            var isUp = ev.which === Utilities_1.KeyCodes.up;
            var isDown = ev.which === Utilities_1.KeyCodes.down;
            if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
                var onMenuClick = _this.props.onMenuClick;
                if (onMenuClick) {
                    onMenuClick(ev, _this.props);
                }
                _this._onToggleMenu(false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            if (!(ev.altKey || ev.metaKey) && (isUp || isDown)) {
                // Suppose a menu, with shouldFocusOnMount: false, is open, and user wants to keyboard to the menu items
                // We need to re-render the menu with shouldFocusOnMount as true.
                if (!_this.state.menuHidden && _this.props.menuProps) {
                    var currentShouldFocusOnMount = _this._menuShouldFocusOnMount !== undefined
                        ? _this._menuShouldFocusOnMount
                        : _this.props.menuProps.shouldFocusOnMount;
                    if (!currentShouldFocusOnMount) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        _this._menuShouldFocusOnMount = true;
                        _this.forceUpdate();
                    }
                }
            }
        };
        _this._onTouchStart = function () {
            if (_this._isSplitButton &&
                _this._splitButtonContainer.current &&
                !('onpointerdown' in _this._splitButtonContainer.current)) {
                _this._handleTouchAndPointerEvent();
            }
        };
        _this._onMenuClick = function (ev) {
            var onMenuClick = _this.props.onMenuClick;
            if (onMenuClick) {
                onMenuClick(ev, _this.props);
            }
            if (!ev.defaultPrevented) {
                // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                // between a real click event and a keypress event (detail should be the number of mouse clicks).
                // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
                // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
                // and "" for pressing "Enter" with Narrator on.
                var shouldFocusOnContainer = ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse';
                _this._onToggleMenu(shouldFocusOnContainer);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        Utilities_1.initializeComponentRef(_this);
        _this._async = new Utilities_1.Async(_this);
        _this._events = new Utilities_1.EventGroup(_this);
        Utilities_1.warnConditionallyRequiredProps(COMPONENT_NAME, props, ['menuProps', 'onClick'], 'split', _this.props.split);
        Utilities_1.warnDeprecations(COMPONENT_NAME, props, {
            rootProps: undefined,
            description: 'secondaryText',
            toggled: 'checked',
        });
        _this._labelId = Utilities_1.getId();
        _this._descriptionId = Utilities_1.getId();
        _this._ariaDescriptionId = Utilities_1.getId();
        _this.state = {
            menuHidden: true,
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
        },
        enumerable: true,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a;
        var _b = this.props, ariaDescription = _b.ariaDescription, ariaLabel = _b.ariaLabel, ariaHidden = _b.ariaHidden, className = _b.className, disabled = _b.disabled, allowDisabledFocus = _b.allowDisabledFocus, primaryDisabled = _b.primaryDisabled, 
        // tslint:disable-next-line:deprecation
        _c = _b.secondaryText, 
        // tslint:disable-next-line:deprecation
        secondaryText = _c === void 0 ? this.props.description : _c, href = _b.href, iconProps = _b.iconProps, menuIconProps = _b.menuIconProps, styles = _b.styles, checked = _b.checked, variantClassName = _b.variantClassName, theme = _b.theme, toggle = _b.toggle, getClassNames = _b.getClassNames, role = _b.role;
        var menuHidden = this.state.menuHidden;
        // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = disabled || primaryDisabled;
        this._classNames = getClassNames
            ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !menuHidden, !!this.props.menuProps, this.props.split, !!allowDisabledFocus)
            : BaseButton_classNames_1.getBaseButtonClassNames(theme, styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, !!this.props.menuProps, checked, !menuHidden, this.props.split);
        var _d = this, _ariaDescriptionId = _d._ariaDescriptionId, _labelId = _d._labelId, _descriptionId = _d._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Utilities_1.getNativeProps(
        // tslint:disable-next-line:deprecation
        Utilities_1.assign(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? Utilities_1.anchorProperties : Utilities_1.buttonProperties, [
            'disabled',
        ]);
        // Check for ariaLabel passed in via Button props, and fall back to aria-label passed in via native props
        var resolvedAriaLabel = ariaLabel || nativeProps['aria-label'];
        // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of
        // aria-describedby. Otherwise default to undefined so property does not appear in output.
        var ariaDescribedBy = undefined;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (secondaryText && this.props.onRenderDescription !== Utilities_1.nullRender) {
            // for buttons like CompoundButton with a valid onRenderDescription, we need to set an ariaDescribedBy
            // for buttons that do not render anything (via nullRender), we should not set an ariaDescribedBy
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        // If an explicit ariaLabel is given, use that as the label and we're done.
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute),
        // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
        // text on the button (if it exists). Never set both aria-label and aria-labelledby.
        var ariaLabelledBy = undefined;
        if (!resolvedAriaLabel) {
            if (nativeProps['aria-labelledby']) {
                ariaLabelledBy = nativeProps['aria-labelledby'];
            }
            else if (ariaDescribedBy) {
                ariaLabelledBy = this._hasText() ? _labelId : undefined;
            }
        }
        var dataIsFocusable = this.props['data-is-focusable'] === false || (disabled && !allowDisabledFocus) || this._isSplitButton
            ? false
            : true;
        var isCheckboxTypeRole = role === 'menuitemcheckbox' || role === 'checkbox';
        // if isCheckboxTypeRole, always return a checked value.
        // Otherwise only return checked value if toggle is set to true.
        // This is because role="checkbox" always needs to have an aria-checked value
        // but our checked prop only sets aria-pressed if we mark the button as a toggle="true"
        var checkedOrPressedValue = isCheckboxTypeRole ? !!checked : toggle === true ? !!checked : undefined;
        var buttonProps = Utilities_1.assign(nativeProps, (_a = {
                className: this._classNames.root,
                ref: this._buttonElement,
                disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
                onKeyDown: this._onKeyDown,
                onKeyPress: this._onKeyPress,
                onKeyUp: this._onKeyUp,
                onMouseDown: this._onMouseDown,
                onMouseUp: this._onMouseUp,
                onClick: this._onClick,
                'aria-label': resolvedAriaLabel,
                'aria-labelledby': ariaLabelledBy,
                'aria-describedby': ariaDescribedBy,
                'aria-disabled': isPrimaryButtonDisabled,
                'data-is-focusable': dataIsFocusable
            },
            // aria-pressed attribute should only be present for toggle buttons
            // aria-checked attribute should only be present for toggle buttons with checkbox type role
            _a[isCheckboxTypeRole ? 'aria-checked' : 'aria-pressed'] = checkedOrPressedValue,
            _a));
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return this._onRenderSplitButtonContent(tag, buttonProps);
        }
        else if (this.props.menuProps) {
            Utilities_1.assign(buttonProps, {
                'aria-expanded': !menuHidden,
                'aria-owns': !menuHidden ? this._labelId + '-menu' : null,
                'aria-haspopup': true,
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidMount = function () {
        // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the
        // primary action. This gives more hit target space for touch environments. We're setting the onpointerdown here,
        // because React does not support Pointer events yet.
        if (this._isSplitButton && this._splitButtonContainer.current) {
            if ('onpointerdown' in this._splitButtonContainer.current) {
                this._events.on(this._splitButtonContainer.current, 'pointerdown', this._onPointerDown, true);
            }
            if ('onpointerup' in this._splitButtonContainer.current && this.props.onPointerUp) {
                this._events.on(this._splitButtonContainer.current, 'pointerup', this.props.onPointerUp, true);
            }
        }
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss.
        if (this.props.onAfterMenuDismiss && !prevState.menuHidden && this.state.menuHidden) {
            this.props.onAfterMenuDismiss();
        }
    };
    BaseButton.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    BaseButton.prototype.focus = function () {
        if (this._isSplitButton && this._splitButtonContainer.current) {
            this._splitButtonContainer.current.focus();
        }
        else if (this._buttonElement.current) {
            this._buttonElement.current.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this._dismissMenu();
    };
    BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
        this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var _this = this;
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, 
        // tslint:disable-next-line:deprecation
        _d = props.onRenderMenu, 
        // tslint:disable-next-line:deprecation
        onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e, disabled = props.disabled;
        var keytipProps = props.keytipProps;
        if (keytipProps && menuProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        var Button = function (keytipAttributes) { return (React.createElement(Tag, tslib_1.__assign({}, buttonProps, keytipAttributes),
            React.createElement("span", { className: _this._classNames.flexContainer, "data-automationid": "splitbuttonprimary" },
                onRenderIcon(props, _this._onRenderIcon),
                _this._onRenderTextContents(),
                onRenderAriaDescription(props, _this._onRenderAriaDescription),
                onRenderChildren(props, _this._onRenderChildren),
                !_this._isSplitButton &&
                    (menuProps || menuIconProps || _this.props.onRenderMenuIcon) &&
                    onRenderMenuIcon(_this.props, _this._onRenderMenuIcon),
                menuProps &&
                    !menuProps.doNotLayer &&
                    _this._shouldRenderMenu() &&
                    onRenderMenu(menuProps, _this._onRenderMenu)))); };
        var Content = keytipProps ? (
        // If we're making a split button, we won't put the keytip here
        React.createElement(KeytipData_1.KeytipData, { keytipProps: !this._isSplitButton ? keytipProps : undefined, ariaDescribedBy: buttonProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return Button(keytipAttributes); })) : (Button());
        if (menuProps && menuProps.doNotLayer) {
            return (React.createElement("span", { style: { display: 'inline-block' } },
                Content,
                this._shouldRenderMenu() && onRenderMenu(menuProps, this._onRenderMenu)));
        }
        return (React.createElement(React.Fragment, null,
            Content,
            React.createElement(Utilities_1.FocusRects, null)));
    };
    /**
     * Method to help determine if the menu's component tree should
     * be rendered. It takes into account whether the menu is expanded,
     * whether it is a persisted menu and whether it has been shown to the user.
     */
    BaseButton.prototype._shouldRenderMenu = function () {
        var menuHidden = this.state.menuHidden;
        // tslint:disable-next-line:deprecation
        var _a = this.props, persistMenu = _a.persistMenu, renderPersistedMenuHiddenOnMount = _a.renderPersistedMenuHiddenOnMount;
        if (!menuHidden) {
            // Always should render a menu when it is expanded
            return true;
        }
        else if (persistMenu && (this._renderedVisibleMenu || renderPersistedMenuHiddenOnMount)) {
            // _renderedVisibleMenu ensures that the first rendering of
            // the menu happens on-screen, as edge's scrollbar calculations are off if done while hidden.
            return true;
        }
        return false;
    };
    BaseButton.prototype._hasText = function () {
        // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText
        // used to have before the refactor that introduced this function. _onRenderTextContents does not require props.
        // text to be undefined in order for props.children to be used as a fallback.
        // Purely a code maintainability/reuse issue, but logged as Issue #4979.
        return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _this = this;
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames, primaryDisabled = _a.primaryDisabled, menuProps = _a.menuProps, toggle = _a.toggle, role = _a.role, primaryActionButtonProps = _a.primaryActionButtonProps;
        var keytipProps = this.props.keytipProps;
        var menuHidden = this.state.menuHidden;
        var classNames = getSplitButtonClassNames
            ? getSplitButtonClassNames(!!disabled, !menuHidden, !!checked, !!allowDisabledFocus)
            : styles && SplitButton_classNames_1.getClassNames(styles, !!disabled, !menuHidden, !!checked, !!primaryDisabled);
        Utilities_1.assign(buttonProps, {
            onClick: undefined,
            onPointerDown: undefined,
            onPointerUp: undefined,
            tabIndex: -1,
            'data-is-focusable': false,
        });
        var ariaDescribedBy = buttonProps.ariaDescription;
        if (keytipProps && menuProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        var containerProps = Utilities_1.getNativeProps(buttonProps, [], ['disabled']);
        // Add additional props to apply on primary action button
        if (primaryActionButtonProps) {
            Utilities_1.assign(buttonProps, primaryActionButtonProps);
        }
        var SplitButton = function (keytipAttributes) { return (React.createElement("div", tslib_1.__assign({}, containerProps, { "data-ktp-target": keytipAttributes ? keytipAttributes['data-ktp-target'] : undefined, role: role ? role : 'button', "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": !menuHidden, "aria-pressed": toggle ? !!checked : undefined, "aria-describedby": Utilities_1.mergeAriaAttributeValues(ariaDescribedBy, keytipAttributes ? keytipAttributes['aria-describedby'] : undefined), className: classNames && classNames.splitButtonContainer, onKeyDown: _this._onSplitButtonContainerKeyDown, onTouchStart: _this._onTouchStart, ref: _this._splitButtonContainer, "data-is-focusable": true, onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined, tabIndex: !disabled || allowDisabledFocus ? 0 : undefined, "aria-roledescription": buttonProps['aria-roledescription'], onFocusCapture: _this._onSplitContainerFocusCapture }),
            React.createElement("span", { style: { display: 'flex' } },
                _this._onRenderContent(tag, buttonProps),
                _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes),
                _this._onRenderSplitButtonDivider(classNames)))); };
        return keytipProps ? (React.createElement(KeytipData_1.KeytipData, { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return SplitButton(keytipAttributes); })) : (SplitButton());
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            var onClick = function (ev) {
                ev.stopPropagation();
            };
            return React.createElement("span", { className: classNames.divider, "aria-hidden": true, onClick: onClick });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
        var _a = this.props, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, disabled = _a.disabled, splitButtonMenuProps = _a.splitButtonMenuProps, splitButtonAriaLabel = _a.splitButtonAriaLabel;
        var menuHidden = this.state.menuHidden;
        var menuIconProps = this.props.menuIconProps;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown',
            };
        }
        var splitButtonProps = tslib_1.__assign(tslib_1.__assign({}, splitButtonMenuProps), { styles: classNames, checked: checked, disabled: disabled, allowDisabledFocus: allowDisabledFocus, onClick: this._onMenuClick, menuProps: undefined, iconProps: tslib_1.__assign(tslib_1.__assign({}, menuIconProps), { className: this._classNames.menuIcon }), ariaLabel: splitButtonAriaLabel, 'aria-haspopup': true, 'aria-expanded': !menuHidden, 'data-is-focusable': false });
        // Add data-ktp-execute-target to the split button if the keytip is defined
        return (React.createElement(BaseButton, tslib_1.__assign({}, splitButtonProps, { "data-ktp-execute-target": keytipAttributes ? keytipAttributes['data-ktp-execute-target'] : keytipAttributes, onMouseDown: this._onMouseDown, tabIndex: -1 })));
    };
    BaseButton.prototype._onPointerDown = function (ev) {
        var onPointerDown = this.props.onPointerDown;
        if (onPointerDown) {
            onPointerDown(ev);
        }
        if (ev.pointerType === 'touch') {
            this._handleTouchAndPointerEvent();
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }
    };
    BaseButton.prototype._handleTouchAndPointerEvent = function () {
        var _this = this;
        // If we already have an existing timeeout from a previous touch and pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId !== undefined) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
            // Touch and pointer events don't focus the button naturally,
            // so adding an imperative focus call to guarantee this behavior.
            _this.focus();
        }, TouchIdleDelay);
    };
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    BaseButton.prototype._isValidMenuOpenKey = function (ev) {
        if (this.props.menuTriggerKeyCode) {
            return ev.which === this.props.menuTriggerKeyCode;
        }
        else if (this.props.menuProps) {
            return ev.which === Utilities_1.KeyCodes.down && (ev.altKey || ev.metaKey);
        }
        // Note: When enter is pressed, we will let the event continue to propagate
        // to trigger the onClick event on the button
        return false;
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        styles: {},
        split: false,
    };
    return BaseButton;
}(React.Component));
exports.BaseButton = BaseButton;
//# sourceMappingURL=BaseButton.js.map