"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shades_1 = require("../../utilities/color/shades");
var getColorFromString_1 = require("../../utilities/color/getColorFromString");
var Utilities_1 = require("../../Utilities");
/* This is the set of rules for our default theme.
   We start with three base slots, defining the background, foreground (text), and
   primary color (sometimes called theme color). Each Fabric slot is generated from
   shades (or tints) of one of those three, creating the Fabric palette.
   Then, we have semantic slots, the new thing intended to eventually replace the
   Fabric palette. The semantic slots inherit from the Fabric palette. */
/* The most minimal set of slots we start with. All other ones can be generated based on rules.
 * This is not so much an enum as it is a list. The enum is used to insure "type"-safety.
 * For now, we are only dealing with color. */
var BaseSlots;
(function (BaseSlots) {
    BaseSlots[BaseSlots["primaryColor"] = 0] = "primaryColor";
    BaseSlots[BaseSlots["backgroundColor"] = 1] = "backgroundColor";
    BaseSlots[BaseSlots["foregroundColor"] = 2] = "foregroundColor";
})(BaseSlots = exports.BaseSlots || (exports.BaseSlots = {}));
/* The original Fabric palette, only for back-compat. */
var FabricSlots;
(function (FabricSlots) {
    FabricSlots[FabricSlots["themePrimary"] = 0] = "themePrimary";
    FabricSlots[FabricSlots["themeLighterAlt"] = 1] = "themeLighterAlt";
    FabricSlots[FabricSlots["themeLighter"] = 2] = "themeLighter";
    FabricSlots[FabricSlots["themeLight"] = 3] = "themeLight";
    FabricSlots[FabricSlots["themeTertiary"] = 4] = "themeTertiary";
    FabricSlots[FabricSlots["themeSecondary"] = 5] = "themeSecondary";
    FabricSlots[FabricSlots["themeDarkAlt"] = 6] = "themeDarkAlt";
    FabricSlots[FabricSlots["themeDark"] = 7] = "themeDark";
    FabricSlots[FabricSlots["themeDarker"] = 8] = "themeDarker";
    FabricSlots[FabricSlots["neutralLighterAlt"] = 9] = "neutralLighterAlt";
    FabricSlots[FabricSlots["neutralLighter"] = 10] = "neutralLighter";
    FabricSlots[FabricSlots["neutralLight"] = 11] = "neutralLight";
    FabricSlots[FabricSlots["neutralQuaternaryAlt"] = 12] = "neutralQuaternaryAlt";
    FabricSlots[FabricSlots["neutralQuaternary"] = 13] = "neutralQuaternary";
    FabricSlots[FabricSlots["neutralTertiaryAlt"] = 14] = "neutralTertiaryAlt";
    FabricSlots[FabricSlots["neutralTertiary"] = 15] = "neutralTertiary";
    // deprecated: neutralSecondaryAlt, // BaseSlots.foregroundColor, Shade[Shade.Shade4]);
    FabricSlots[FabricSlots["neutralSecondary"] = 16] = "neutralSecondary";
    FabricSlots[FabricSlots["neutralPrimaryAlt"] = 17] = "neutralPrimaryAlt";
    FabricSlots[FabricSlots["neutralPrimary"] = 18] = "neutralPrimary";
    FabricSlots[FabricSlots["neutralDark"] = 19] = "neutralDark";
    FabricSlots[FabricSlots["black"] = 20] = "black";
    FabricSlots[FabricSlots["white"] = 21] = "white";
})(FabricSlots = exports.FabricSlots || (exports.FabricSlots = {}));
/* List of all the semantic color slots for this theme.
 * This is not so much an enum as it is a list. The enum is used to insure "type"-safety. */
var SemanticColorSlots;
(function (SemanticColorSlots) {
    SemanticColorSlots[SemanticColorSlots["bodyBackground"] = 0] = "bodyBackground";
    SemanticColorSlots[SemanticColorSlots["bodyText"] = 1] = "bodyText";
    SemanticColorSlots[SemanticColorSlots["disabledBackground"] = 2] = "disabledBackground";
    SemanticColorSlots[SemanticColorSlots["disabledText"] = 3] = "disabledText";
})(SemanticColorSlots = exports.SemanticColorSlots || (exports.SemanticColorSlots = {}));
function themeRulesStandardCreator() {
    var slotRules = {};
    /*** BASE COLORS and their SHADES */
    // iterate through each base slot and make the SlotRules for those
    Utilities_1.mapEnumByName(BaseSlots, function (baseSlot) {
        // first make the SlotRule for the unshaded base Color
        slotRules[baseSlot] = {
            name: baseSlot,
            isCustomized: true,
            dependentRules: [],
        };
        // then make a rule for each shade of this base color, but skip unshaded
        Utilities_1.mapEnumByName(shades_1.Shade, function (shadeName, shadeValue) {
            if (shadeName === shades_1.Shade[shades_1.Shade.Unshaded]) {
                return;
            }
            var inherits = slotRules[baseSlot];
            var thisSlotRule = {
                name: baseSlot + shadeName,
                inherits: slotRules[baseSlot],
                asShade: shadeValue,
                isCustomized: false,
                isBackgroundShade: baseSlot === BaseSlots[BaseSlots.backgroundColor] ? true : false,
                dependentRules: [],
            };
            slotRules[baseSlot + shadeName] = thisSlotRule;
            inherits.dependentRules.push(thisSlotRule);
            return void 0;
        });
        return void 0;
    });
    // set default colors for the base colors
    slotRules[BaseSlots[BaseSlots.primaryColor]].color = getColorFromString_1.getColorFromString('#0078d4');
    slotRules[BaseSlots[BaseSlots.backgroundColor]].color = getColorFromString_1.getColorFromString('#ffffff');
    slotRules[BaseSlots[BaseSlots.foregroundColor]].color = getColorFromString_1.getColorFromString('#323130');
    function _makeFabricSlotRule(slotName, inheritedBase, inheritedShade, isBackgroundShade) {
        if (isBackgroundShade === void 0) { isBackgroundShade = false; }
        var inherits = slotRules[BaseSlots[inheritedBase]];
        var thisSlotRule = {
            name: slotName,
            inherits: inherits,
            asShade: inheritedShade,
            isCustomized: false,
            isBackgroundShade: isBackgroundShade,
            dependentRules: [],
        };
        slotRules[slotName] = thisSlotRule;
        inherits.dependentRules.push(thisSlotRule);
    }
    _makeFabricSlotRule(FabricSlots[FabricSlots.themePrimary], BaseSlots.primaryColor, shades_1.Shade.Unshaded);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeLighterAlt], BaseSlots.primaryColor, shades_1.Shade.Shade1);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeLighter], BaseSlots.primaryColor, shades_1.Shade.Shade2);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeLight], BaseSlots.primaryColor, shades_1.Shade.Shade3);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeTertiary], BaseSlots.primaryColor, shades_1.Shade.Shade4);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeSecondary], BaseSlots.primaryColor, shades_1.Shade.Shade5);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeDarkAlt], BaseSlots.primaryColor, shades_1.Shade.Shade6);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeDark], BaseSlots.primaryColor, shades_1.Shade.Shade7);
    _makeFabricSlotRule(FabricSlots[FabricSlots.themeDarker], BaseSlots.primaryColor, shades_1.Shade.Shade8);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralLighterAlt], BaseSlots.backgroundColor, shades_1.Shade.Shade1, true);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralLighter], BaseSlots.backgroundColor, shades_1.Shade.Shade2, true);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralLight], BaseSlots.backgroundColor, shades_1.Shade.Shade3, true);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralQuaternaryAlt], BaseSlots.backgroundColor, shades_1.Shade.Shade4, true);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralQuaternary], BaseSlots.backgroundColor, shades_1.Shade.Shade5, true);
    // bg6 or fg2
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralTertiaryAlt], BaseSlots.backgroundColor, shades_1.Shade.Shade6, true);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralTertiary], BaseSlots.foregroundColor, shades_1.Shade.Shade3);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralSecondary], BaseSlots.foregroundColor, shades_1.Shade.Shade4);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralPrimaryAlt], BaseSlots.foregroundColor, shades_1.Shade.Shade5);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralPrimary], BaseSlots.foregroundColor, shades_1.Shade.Unshaded);
    _makeFabricSlotRule(FabricSlots[FabricSlots.neutralDark], BaseSlots.foregroundColor, shades_1.Shade.Shade7);
    _makeFabricSlotRule(FabricSlots[FabricSlots.black], BaseSlots.foregroundColor, shades_1.Shade.Shade8);
    _makeFabricSlotRule(FabricSlots[FabricSlots.white], BaseSlots.backgroundColor, shades_1.Shade.Unshaded, true);
    slotRules[FabricSlots[FabricSlots.neutralLighterAlt]].color = getColorFromString_1.getColorFromString('#faf9f8');
    slotRules[FabricSlots[FabricSlots.neutralLighter]].color = getColorFromString_1.getColorFromString('#f3f2f1');
    slotRules[FabricSlots[FabricSlots.neutralLight]].color = getColorFromString_1.getColorFromString('#edebe9');
    slotRules[FabricSlots[FabricSlots.neutralQuaternaryAlt]].color = getColorFromString_1.getColorFromString('#e1dfdd');
    slotRules[FabricSlots[FabricSlots.neutralDark]].color = getColorFromString_1.getColorFromString('#201f1e');
    slotRules[FabricSlots[FabricSlots.neutralTertiaryAlt]].color = getColorFromString_1.getColorFromString('#c8c6c4');
    slotRules[FabricSlots[FabricSlots.black]].color = getColorFromString_1.getColorFromString('#000000');
    slotRules[FabricSlots[FabricSlots.neutralDark]].color = getColorFromString_1.getColorFromString('#201f1e');
    slotRules[FabricSlots[FabricSlots.neutralPrimaryAlt]].color = getColorFromString_1.getColorFromString('#3b3a39');
    slotRules[FabricSlots[FabricSlots.neutralSecondary]].color = getColorFromString_1.getColorFromString('#605e5c');
    slotRules[FabricSlots[FabricSlots.neutralTertiary]].color = getColorFromString_1.getColorFromString('#a19f9d');
    slotRules[FabricSlots[FabricSlots.white]].color = getColorFromString_1.getColorFromString('#ffffff');
    slotRules[FabricSlots[FabricSlots.themeDarker]].color = getColorFromString_1.getColorFromString('#004578');
    slotRules[FabricSlots[FabricSlots.themeDark]].color = getColorFromString_1.getColorFromString('#005a9e');
    slotRules[FabricSlots[FabricSlots.themeDarkAlt]].color = getColorFromString_1.getColorFromString('#106ebe');
    slotRules[FabricSlots[FabricSlots.themeSecondary]].color = getColorFromString_1.getColorFromString('#2b88d8');
    slotRules[FabricSlots[FabricSlots.themeTertiary]].color = getColorFromString_1.getColorFromString('#71afe5');
    slotRules[FabricSlots[FabricSlots.themeLight]].color = getColorFromString_1.getColorFromString('#c7e0f4');
    slotRules[FabricSlots[FabricSlots.themeLighter]].color = getColorFromString_1.getColorFromString('#deecf9');
    slotRules[FabricSlots[FabricSlots.themeLighterAlt]].color = getColorFromString_1.getColorFromString('#eff6fc');
    slotRules[FabricSlots[FabricSlots.neutralLighterAlt]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralLighter]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralLight]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralQuaternaryAlt]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralDark]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralTertiaryAlt]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.black]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralDark]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralPrimaryAlt]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralSecondary]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.neutralTertiary]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.white]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeDarker]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeDark]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeDarkAlt]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themePrimary]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeSecondary]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeTertiary]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeLight]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeLighter]].isCustomized = true;
    slotRules[FabricSlots[FabricSlots.themeLighterAlt]].isCustomized = true;
    return slotRules;
}
exports.themeRulesStandardCreator = themeRulesStandardCreator;
//# sourceMappingURL=ThemeRulesStandard.js.map