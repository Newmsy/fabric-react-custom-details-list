import { PersonaInitialsColor } from './Persona.types';
/**
 * Following colors are considered reserved and can only be set with overrides, so they are excluded from this set:
 * - `gray` and `black` can result in offensive persona coins with some initials combinations
 * - `red` often has a special meaning
 * - `transparent` is not intended to be used with typical initials due to accessibility issues;
 *   its primary use is for Facepile overflow buttons.
 */
var COLOR_SWATCHES_LOOKUP = [
    PersonaInitialsColor.lightBlue,
    PersonaInitialsColor.blue,
    PersonaInitialsColor.darkBlue,
    PersonaInitialsColor.teal,
    PersonaInitialsColor.green,
    PersonaInitialsColor.darkGreen,
    PersonaInitialsColor.lightPink,
    PersonaInitialsColor.pink,
    PersonaInitialsColor.magenta,
    PersonaInitialsColor.purple,
    PersonaInitialsColor.orange,
    PersonaInitialsColor.lightRed,
    PersonaInitialsColor.darkRed,
    PersonaInitialsColor.violet,
    PersonaInitialsColor.gold,
    PersonaInitialsColor.burgundy,
    PersonaInitialsColor.warmGray,
    PersonaInitialsColor.cyan,
    PersonaInitialsColor.rust,
    PersonaInitialsColor.coolGray,
];
var COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length;
function getInitialsColorFromName(displayName) {
    var color = PersonaInitialsColor.blue;
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
        case PersonaInitialsColor.lightBlue:
            return '#4F6BED';
        case PersonaInitialsColor.blue:
            return '#0078D4';
        case PersonaInitialsColor.darkBlue:
            return '#004E8C';
        case PersonaInitialsColor.teal:
            return '#038387';
        case PersonaInitialsColor.lightGreen:
        case PersonaInitialsColor.green:
            return '#498205';
        case PersonaInitialsColor.darkGreen:
            return '#0B6A0B';
        case PersonaInitialsColor.lightPink:
            return '#C239B3';
        case PersonaInitialsColor.pink:
            return '#E3008C';
        case PersonaInitialsColor.magenta:
            return '#881798';
        case PersonaInitialsColor.purple:
            return '#5C2E91';
        case PersonaInitialsColor.orange:
            return '#CA5010';
        // tslint:disable-next-line:deprecation
        case PersonaInitialsColor.red:
            return '#EE1111';
        case PersonaInitialsColor.lightRed:
            return '#D13438';
        case PersonaInitialsColor.darkRed:
            return '#A4262C';
        case PersonaInitialsColor.transparent:
            return 'transparent';
        case PersonaInitialsColor.violet:
            return '#8764B8';
        case PersonaInitialsColor.gold:
            return '#986F0B';
        case PersonaInitialsColor.burgundy:
            return '#750B1C';
        case PersonaInitialsColor.warmGray:
            return '#7A7574';
        case PersonaInitialsColor.cyan:
            return '#005B70';
        case PersonaInitialsColor.rust:
            return '#8E562E';
        case PersonaInitialsColor.coolGray:
            return '#69797E';
        // tslint:disable-next-line:deprecation
        case PersonaInitialsColor.black:
            return '#1D1D1D';
        case PersonaInitialsColor.gray:
            return '#393939';
    }
}
/** @deprecated Use `getPersonaInitialsColor` */
export function initialsColorPropToColorCode(props) {
    return getPersonaInitialsColor(props);
}
/**
 * Gets the hex color string (prefixed with #) for the given persona props.
 * This is the logic used internally by the Persona control.
 * @param props - Current persona props
 * @returns Hex color string prefixed with #
 */
export function getPersonaInitialsColor(props) {
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
//# sourceMappingURL=PersonaInitialsColor.js.map