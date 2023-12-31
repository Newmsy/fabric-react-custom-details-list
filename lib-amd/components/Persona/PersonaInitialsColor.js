define(["require", "exports", "./Persona.types"], function (require, exports, Persona_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Following colors are considered reserved and can only be set with overrides, so they are excluded from this set:
     * - `gray` and `black` can result in offensive persona coins with some initials combinations
     * - `red` often has a special meaning
     * - `transparent` is not intended to be used with typical initials due to accessibility issues;
     *   its primary use is for Facepile overflow buttons.
     */
    var COLOR_SWATCHES_LOOKUP = [
        Persona_types_1.PersonaInitialsColor.lightBlue,
        Persona_types_1.PersonaInitialsColor.blue,
        Persona_types_1.PersonaInitialsColor.darkBlue,
        Persona_types_1.PersonaInitialsColor.teal,
        Persona_types_1.PersonaInitialsColor.green,
        Persona_types_1.PersonaInitialsColor.darkGreen,
        Persona_types_1.PersonaInitialsColor.lightPink,
        Persona_types_1.PersonaInitialsColor.pink,
        Persona_types_1.PersonaInitialsColor.magenta,
        Persona_types_1.PersonaInitialsColor.purple,
        Persona_types_1.PersonaInitialsColor.orange,
        Persona_types_1.PersonaInitialsColor.lightRed,
        Persona_types_1.PersonaInitialsColor.darkRed,
        Persona_types_1.PersonaInitialsColor.violet,
        Persona_types_1.PersonaInitialsColor.gold,
        Persona_types_1.PersonaInitialsColor.burgundy,
        Persona_types_1.PersonaInitialsColor.warmGray,
        Persona_types_1.PersonaInitialsColor.cyan,
        Persona_types_1.PersonaInitialsColor.rust,
        Persona_types_1.PersonaInitialsColor.coolGray,
    ];
    var COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length;
    function getInitialsColorFromName(displayName) {
        var color = Persona_types_1.PersonaInitialsColor.blue;
        if (!displayName) {
            return color;
        }
        var hashCode = 0;
        for (var iLen = displayName.length - 1; iLen >= 0; iLen--) {
            var ch = displayName.charCodeAt(iLen);
            var shift = iLen % 8;
            // tslint:disable-next-line:no-bitwise
            hashCode ^= (ch << shift) + (ch >> (8 - shift));
        }
        color = COLOR_SWATCHES_LOOKUP[hashCode % COLOR_SWATCHES_NUM_ENTRIES];
        return color;
    }
    function personaInitialsColorToHexCode(personaInitialsColor) {
        switch (personaInitialsColor) {
            case Persona_types_1.PersonaInitialsColor.lightBlue:
                return '#4F6BED';
            case Persona_types_1.PersonaInitialsColor.blue:
                return '#0078D4';
            case Persona_types_1.PersonaInitialsColor.darkBlue:
                return '#004E8C';
            case Persona_types_1.PersonaInitialsColor.teal:
                return '#038387';
            case Persona_types_1.PersonaInitialsColor.lightGreen:
            case Persona_types_1.PersonaInitialsColor.green:
                return '#498205';
            case Persona_types_1.PersonaInitialsColor.darkGreen:
                return '#0B6A0B';
            case Persona_types_1.PersonaInitialsColor.lightPink:
                return '#C239B3';
            case Persona_types_1.PersonaInitialsColor.pink:
                return '#E3008C';
            case Persona_types_1.PersonaInitialsColor.magenta:
                return '#881798';
            case Persona_types_1.PersonaInitialsColor.purple:
                return '#5C2E91';
            case Persona_types_1.PersonaInitialsColor.orange:
                return '#CA5010';
            // tslint:disable-next-line:deprecation
            case Persona_types_1.PersonaInitialsColor.red:
                return '#EE1111';
            case Persona_types_1.PersonaInitialsColor.lightRed:
                return '#D13438';
            case Persona_types_1.PersonaInitialsColor.darkRed:
                return '#A4262C';
            case Persona_types_1.PersonaInitialsColor.transparent:
                return 'transparent';
            case Persona_types_1.PersonaInitialsColor.violet:
                return '#8764B8';
            case Persona_types_1.PersonaInitialsColor.gold:
                return '#986F0B';
            case Persona_types_1.PersonaInitialsColor.burgundy:
                return '#750B1C';
            case Persona_types_1.PersonaInitialsColor.warmGray:
                return '#7A7574';
            case Persona_types_1.PersonaInitialsColor.cyan:
                return '#005B70';
            case Persona_types_1.PersonaInitialsColor.rust:
                return '#8E562E';
            case Persona_types_1.PersonaInitialsColor.coolGray:
                return '#69797E';
            // tslint:disable-next-line:deprecation
            case Persona_types_1.PersonaInitialsColor.black:
                return '#1D1D1D';
            case Persona_types_1.PersonaInitialsColor.gray:
                return '#393939';
        }
    }
    /** @deprecated Use `getPersonaInitialsColor` */
    function initialsColorPropToColorCode(props) {
        return getPersonaInitialsColor(props);
    }
    exports.initialsColorPropToColorCode = initialsColorPropToColorCode;
    /**
     * Gets the hex color string (prefixed with #) for the given persona props.
     * This is the logic used internally by the Persona control.
     * @param props - Current persona props
     * @returns Hex color string prefixed with #
     */
    function getPersonaInitialsColor(props) {
        // tslint:disable-next-line:deprecation
        var primaryText = props.primaryText, text = props.text;
        var initialsColor = props.initialsColor;
        var initialsColorCode;
        if (typeof initialsColor === 'string') {
            initialsColorCode = initialsColor;
        }
        else {
            initialsColor = initialsColor !== undefined ? initialsColor : getInitialsColorFromName(text || primaryText);
            initialsColorCode = personaInitialsColorToHexCode(initialsColor);
        }
        return initialsColorCode;
    }
    exports.getPersonaInitialsColor = getPersonaInitialsColor;
});
//# sourceMappingURL=PersonaInitialsColor.js.map