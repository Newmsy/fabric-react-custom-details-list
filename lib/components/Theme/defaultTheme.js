import { getTheme } from '../../Styling';
var defaultTheme = getTheme(true);
export var defaultPalette = Object.keys(defaultTheme.palette).map(function (variableName) { return ({
    key: variableName,
    name: variableName,
    value: defaultTheme.palette[variableName],
    description: '',
}); });
export var defaultSemanticColors = Object.keys(defaultTheme.semanticColors).map(function (variableName) { return ({
    key: variableName,
    name: variableName,
    value: defaultTheme.semanticColors[variableName],
    description: defaultTheme.semanticColors[variableName].indexOf('@deprecated') >= 0 ? 'Deprecated' : '',
}); });
//# sourceMappingURL=defaultTheme.js.map