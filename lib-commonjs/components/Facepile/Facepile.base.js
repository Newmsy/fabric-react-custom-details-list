"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Facepile_types_1 = require("./Facepile.types");
var FacepileButton_1 = require("./FacepileButton");
var Icon_1 = require("../../Icon");
var Persona_1 = require("../../Persona");
var PersonaCoin_1 = require("../../PersonaCoin");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * FacePile with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Component-Styling)
 */
var FacepileBase = /** @class */ (function (_super) {
    tslib_1.__extends(FacepileBase, _super);
    function FacepileBase(props) {
        var _this = _super.call(this, props) || this;
        _this._classNames = getClassNames(_this.props.styles, {
            theme: _this.props.theme,
            className: _this.props.className,
        });
        _this._getPersonaControl = function (persona) {
            var _a = _this.props, getPersonaProps = _a.getPersonaProps, personaSize = _a.personaSize;
            var personaStyles = {
                details: {
                    flex: '1 0 auto',
                },
            };
            return (React.createElement(Persona_1.Persona, tslib_1.__assign({ imageInitials: persona.imageInitials, imageUrl: persona.imageUrl, initialsColor: persona.initialsColor, allowPhoneInitials: persona.allowPhoneInitials, text: persona.personaName, size: personaSize }, (getPersonaProps ? getPersonaProps(persona) : null), { styles: personaStyles })));
        };
        _this._getPersonaCoinControl = function (persona) {
            var _a = _this.props, getPersonaProps = _a.getPersonaProps, personaSize = _a.personaSize;
            return (React.createElement(PersonaCoin_1.PersonaCoin, tslib_1.__assign({ imageInitials: persona.imageInitials, imageUrl: persona.imageUrl, initialsColor: persona.initialsColor, allowPhoneInitials: persona.allowPhoneInitials, text: persona.personaName, size: personaSize }, (getPersonaProps ? getPersonaProps(persona) : null))));
        };
        Utilities_1.initializeComponentRef(_this);
        _this._ariaDescriptionId = Utilities_1.getId();
        return _this;
    }
    FacepileBase.prototype.render = function () {
        var overflowButtonProps = this.props.overflowButtonProps;
        var _a = this.props, chevronButtonProps = _a.chevronButtonProps, // tslint:disable-line:deprecation
        maxDisplayablePersonas = _a.maxDisplayablePersonas, personas = _a.personas, overflowPersonas = _a.overflowPersonas, showAddButton = _a.showAddButton, ariaLabel = _a.ariaLabel;
        var _classNames = this._classNames;
        // Add a check to make sure maxDisplayalePersonas is defined to cover the edge case of it being 0.
        var numPersonasToShow = typeof maxDisplayablePersonas === 'number' ? Math.min(personas.length, maxDisplayablePersonas) : personas.length;
        // Added for deprecating chevronButtonProps.  Can remove after v1.0
        if (chevronButtonProps && !overflowButtonProps) {
            overflowButtonProps = chevronButtonProps;
        }
        var hasOverflowPersonas = overflowPersonas && overflowPersonas.length > 0;
        var personasPrimary = hasOverflowPersonas ? personas : personas.slice(0, numPersonasToShow);
        var personasOverflow = (hasOverflowPersonas ? overflowPersonas : personas.slice(numPersonasToShow)) || [];
        return (React.createElement("div", { className: _classNames.root },
            this.onRenderAriaDescription(),
            React.createElement("div", { className: _classNames.itemContainer },
                showAddButton ? this._getAddNewElement() : null,
                React.createElement("ul", { className: _classNames.members, "aria-label": ariaLabel }, this._onRenderVisiblePersonas(personasPrimary, personasOverflow.length === 0 && personas.length === 1)),
                overflowButtonProps ? this._getOverflowElement(personasOverflow) : null)));
    };
    FacepileBase.prototype.onRenderAriaDescription = function () {
        var ariaDescription = this.props.ariaDescription;
        var _classNames = this._classNames;
        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
        // otherwise it will be assigned to descriptionSpan.
        return (ariaDescription && (React.createElement("span", { className: _classNames.screenReaderOnly, id: this._ariaDescriptionId }, ariaDescription)));
    };
    FacepileBase.prototype._onRenderVisiblePersonas = function (personas, singlePersona) {
        var _this = this;
        var _a = this.props, _b = _a.onRenderPersona, onRenderPersona = _b === void 0 ? this._getPersonaControl : _b, _c = _a.onRenderPersonaCoin, onRenderPersonaCoin = _c === void 0 ? this._getPersonaCoinControl : _c;
        return personas.map(function (persona, index) {
            var personaControl = singlePersona
                ? onRenderPersona(persona, _this._getPersonaControl)
                : onRenderPersonaCoin(persona, _this._getPersonaCoinControl);
            return (React.createElement("li", { key: (singlePersona ? 'persona' : 'personaCoin') + "-" + index, className: _this._classNames.member }, persona.onClick
                ? _this._getElementWithOnClickEvent(personaControl, persona, index)
                : _this._getElementWithoutOnClickEvent(personaControl, persona, index)));
        });
    };
    FacepileBase.prototype._getElementWithOnClickEvent = function (personaControl, persona, index) {
        var keytipProps = persona.keytipProps;
        return (React.createElement(FacepileButton_1.FacepileButton, tslib_1.__assign({}, Utilities_1.getNativeProps(persona, Utilities_1.buttonProperties), this._getElementProps(persona, index), { keytipProps: keytipProps, onClick: this._onPersonaClick.bind(this, persona) }), personaControl));
    };
    FacepileBase.prototype._getElementWithoutOnClickEvent = function (personaControl, persona, index) {
        return (React.createElement("div", tslib_1.__assign({}, Utilities_1.getNativeProps(persona, Utilities_1.buttonProperties), this._getElementProps(persona, index)), personaControl));
    };
    FacepileBase.prototype._getElementProps = function (persona, index) {
        var _classNames = this._classNames;
        return {
            key: (!!persona.imageUrl ? 'i' : '') + index,
            'data-is-focusable': true,
            className: _classNames.itemButton,
            title: persona.personaName,
            onMouseMove: this._onPersonaMouseMove.bind(this, persona),
            onMouseOut: this._onPersonaMouseOut.bind(this, persona),
        };
    };
    FacepileBase.prototype._getOverflowElement = function (personasOverflow) {
        switch (this.props.overflowButtonType) {
            case Facepile_types_1.OverflowButtonType.descriptive:
                return this._getDescriptiveOverflowElement(personasOverflow);
            case Facepile_types_1.OverflowButtonType.downArrow:
                return this._getIconElement('ChevronDown');
            case Facepile_types_1.OverflowButtonType.more:
                return this._getIconElement('More');
            default:
                return null;
        }
    };
    FacepileBase.prototype._getDescriptiveOverflowElement = function (personasOverflow) {
        var personaSize = this.props.personaSize;
        if (!personasOverflow || personasOverflow.length < 1) {
            return null;
        }
        var personaNames = personasOverflow.map(function (p) { return p.personaName; }).join(', ');
        var overflowButtonProps = tslib_1.__assign({ title: personaNames }, this.props.overflowButtonProps);
        var numPersonasNotPictured = Math.max(personasOverflow.length, 0);
        var _classNames = this._classNames;
        return (React.createElement(FacepileButton_1.FacepileButton, tslib_1.__assign({}, overflowButtonProps, { ariaDescription: overflowButtonProps.title, className: _classNames.descriptiveOverflowButton }),
            React.createElement(PersonaCoin_1.PersonaCoin, { size: personaSize, onRenderInitials: this._renderInitialsNotPictured(numPersonasNotPictured), initialsColor: PersonaCoin_1.PersonaInitialsColor.transparent })));
    };
    FacepileBase.prototype._getIconElement = function (icon) {
        var _a = this.props, overflowButtonProps = _a.overflowButtonProps, personaSize = _a.personaSize;
        var overflowInitialsIcon = true;
        var _classNames = this._classNames;
        return (React.createElement(FacepileButton_1.FacepileButton, tslib_1.__assign({}, overflowButtonProps, { className: _classNames.overflowButton }),
            React.createElement(PersonaCoin_1.PersonaCoin, { size: personaSize, onRenderInitials: this._renderInitials(icon, overflowInitialsIcon), initialsColor: PersonaCoin_1.PersonaInitialsColor.transparent })));
    };
    FacepileBase.prototype._getAddNewElement = function () {
        var _a = this.props, addButtonProps = _a.addButtonProps, personaSize = _a.personaSize;
        var _classNames = this._classNames;
        return (React.createElement(FacepileButton_1.FacepileButton, tslib_1.__assign({}, addButtonProps, { className: _classNames.addButton }),
            React.createElement(PersonaCoin_1.PersonaCoin, { size: personaSize, onRenderInitials: this._renderInitials('AddFriend') })));
    };
    FacepileBase.prototype._onPersonaClick = function (persona, ev) {
        persona.onClick(ev, persona);
        ev.preventDefault();
        ev.stopPropagation();
    };
    FacepileBase.prototype._onPersonaMouseMove = function (persona, ev) {
        if (!!persona.onMouseMove) {
            persona.onMouseMove(ev, persona);
        }
    };
    FacepileBase.prototype._onPersonaMouseOut = function (persona, ev) {
        if (!!persona.onMouseOut) {
            persona.onMouseOut(ev, persona);
        }
    };
    FacepileBase.prototype._renderInitials = function (iconName, overflowButton) {
        var _classNames = this._classNames;
        return function () {
            return React.createElement(Icon_1.Icon, { iconName: iconName, className: overflowButton ? _classNames.overflowInitialsIcon : '' });
        };
    };
    FacepileBase.prototype._renderInitialsNotPictured = function (numPersonasNotPictured) {
        var _classNames = this._classNames;
        return function () {
            return (React.createElement("span", { className: _classNames.overflowInitialsIcon }, numPersonasNotPictured < 100 ? '+' + numPersonasNotPictured : '99+'));
        };
    };
    FacepileBase.defaultProps = {
        maxDisplayablePersonas: 5,
        personas: [],
        overflowPersonas: [],
        personaSize: PersonaCoin_1.PersonaSize.size32,
    };
    return FacepileBase;
}(React.Component));
exports.FacepileBase = FacepileBase;
//# sourceMappingURL=Facepile.base.js.map