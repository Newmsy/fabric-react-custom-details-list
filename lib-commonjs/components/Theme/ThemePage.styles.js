"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../Styling");
exports.getStyles = function (props) {
    var theme = Styling_1.getTheme();
    return {
        colorSwatch: [
            'ThemePage-colorSwatch',
            Styling_1.getFocusStyle(theme),
            {
                margin: '-10px 0',
                lineHeight: '36px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                selectors: {
                    ':hover': {
                        background: 'rgba(0,0,0,.05)',
                    },
                },
            },
        ],
        swatch: [
            'ThemePage-swatch',
            {
                display: 'inline-block',
                width: '36px',
                height: '36px',
                verticalAlign: 'middle',
                marginRight: '5px',
                border: '1px solid rgba(127, 127, 127, .5)',
            },
        ],
        colorValue: 'ThemePage-colorValue',
    };
};
//# sourceMappingURL=ThemePage.styles.js.map