"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_types_1 = require("./Persona.types");
// Persona Sizes
var personaSize;
(function (personaSize) {
    personaSize.size8 = '20px';
    // TODO: remove in a future major release as it's deprecated.
    personaSize.size10 = '20px';
    // TODO: remove in a future major release as it's deprecated.
    personaSize.size16 = '16px';
    personaSize.size24 = '24px';
    // TODO: remove in a future major release as it's deprecated.
    personaSize.size28 = '28px';
    personaSize.size32 = '32px';
    personaSize.size40 = '40px';
    personaSize.size48 = '48px';
    personaSize.size56 = '56px';
    personaSize.size72 = '72px';
    personaSize.size100 = '100px';
    personaSize.size120 = '120px';
})(personaSize = exports.personaSize || (exports.personaSize = {}));
// Persona Presence Sizes
var personaPresenceSize;
(function (personaPresenceSize) {
    personaPresenceSize.size6 = '6px';
    personaPresenceSize.size8 = '8px';
    personaPresenceSize.size12 = '12px';
    personaPresenceSize.size16 = '16px';
    personaPresenceSize.size20 = '20px';
    personaPresenceSize.size28 = '28px';
    personaPresenceSize.size32 = '32px';
    /**
     * @deprecated This is now unused
     */
    personaPresenceSize.border = '2px';
})(personaPresenceSize = exports.personaPresenceSize || (exports.personaPresenceSize = {}));
// TODO: remove the deprecated parts in a future major release.
exports.sizeBoolean = function (size) { return ({
    isSize8: size === Persona_types_1.PersonaSize.size8,
    // tslint:disable:deprecation
    isSize10: size === Persona_types_1.PersonaSize.size10 || size === Persona_types_1.PersonaSize.tiny,
    isSize16: size === Persona_types_1.PersonaSize.size16,
    isSize24: size === Persona_types_1.PersonaSize.size24 || size === Persona_types_1.PersonaSize.extraExtraSmall,
    isSize28: size === Persona_types_1.PersonaSize.size28 || size === Persona_types_1.PersonaSize.extraSmall,
    isSize32: size === Persona_types_1.PersonaSize.size32,
    isSize40: size === Persona_types_1.PersonaSize.size40 || size === Persona_types_1.PersonaSize.small,
    isSize48: size === Persona_types_1.PersonaSize.size48 || size === Persona_types_1.PersonaSize.regular,
    isSize56: size === Persona_types_1.PersonaSize.size56,
    isSize72: size === Persona_types_1.PersonaSize.size72 || size === Persona_types_1.PersonaSize.large,
    isSize100: size === Persona_types_1.PersonaSize.size100 || size === Persona_types_1.PersonaSize.extraLarge,
    isSize120: size === Persona_types_1.PersonaSize.size120,
}); };
exports.sizeToPixels = (_a = {},
    // Old deprecated sizes
    _a[Persona_types_1.PersonaSize.tiny] = 10,
    _a[Persona_types_1.PersonaSize.extraExtraSmall] = 24,
    _a[Persona_types_1.PersonaSize.extraSmall] = 28,
    _a[Persona_types_1.PersonaSize.small] = 40,
    _a[Persona_types_1.PersonaSize.regular] = 48,
    _a[Persona_types_1.PersonaSize.large] = 72,
    _a[Persona_types_1.PersonaSize.extraLarge] = 100,
    // New sizes
    _a[Persona_types_1.PersonaSize.size8] = 8,
    _a[Persona_types_1.PersonaSize.size10] = 10,
    _a[Persona_types_1.PersonaSize.size16] = 16,
    _a[Persona_types_1.PersonaSize.size24] = 24,
    _a[Persona_types_1.PersonaSize.size28] = 28,
    // tslint:enable:deprecation
    _a[Persona_types_1.PersonaSize.size32] = 32,
    _a[Persona_types_1.PersonaSize.size40] = 40,
    _a[Persona_types_1.PersonaSize.size48] = 48,
    _a[Persona_types_1.PersonaSize.size56] = 56,
    _a[Persona_types_1.PersonaSize.size72] = 72,
    _a[Persona_types_1.PersonaSize.size100] = 100,
    _a[Persona_types_1.PersonaSize.size120] = 120,
    _a);
exports.presenceBoolean = function (presence) { return ({
    isAvailable: presence === Persona_types_1.PersonaPresence.online,
    isAway: presence === Persona_types_1.PersonaPresence.away,
    isBlocked: presence === Persona_types_1.PersonaPresence.blocked,
    isBusy: presence === Persona_types_1.PersonaPresence.busy,
    isDoNotDisturb: presence === Persona_types_1.PersonaPresence.dnd,
    isOffline: presence === Persona_types_1.PersonaPresence.offline,
}); };
//# sourceMappingURL=PersonaConsts.js.map