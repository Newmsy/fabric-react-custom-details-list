"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var KeytipManager_1 = require("../../utilities/keytips/KeytipManager");
var KeytipUtils_1 = require("../../utilities/keytips/KeytipUtils");
/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
var KeytipData = /** @class */ (function (_super) {
    tslib_1.__extends(KeytipData, _super);
    function KeytipData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._keytipManager = KeytipManager_1.KeytipManager.getInstance();
        return _this;
    }
    KeytipData.prototype.componentDidMount = function () {
        // Register Keytip in KeytipManager
        if (this.props.keytipProps) {
            this._uniqueId = this._keytipManager.register(this._getKtpProps());
        }
    };
    KeytipData.prototype.componentWillUnmount = function () {
        // Unregister Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.unregister(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.keytipProps !== this.props.keytipProps || prevProps.disabled !== this.props.disabled) {
            // If keytipProps or disabled has changed update Keytip in KeytipManager
            this.props.keytipProps && this._keytipManager.update(this._getKtpProps(), this._uniqueId);
        }
    };
    KeytipData.prototype.render = function () {
        var _a = this.props, children = _a.children, keytipProps = _a.keytipProps, ariaDescribedBy = _a.ariaDescribedBy;
        var nativeKeytipProps = {};
        if (keytipProps) {
            nativeKeytipProps = this._getKtpAttrs(keytipProps, ariaDescribedBy);
        }
        return children(nativeKeytipProps);
    };
    KeytipData.prototype._getKtpProps = function () {
        return tslib_1.__assign({ disabled: this.props.disabled }, this.props.keytipProps);
    };
    /**
     * Gets the aria- and data- attributes to attach to the component
     * @param keytipProps - props for Keytip
     * @param describedByPrepend - ariaDescribedBy value to prepend
     */
    KeytipData.prototype._getKtpAttrs = function (keytipProps, describedByPrepend) {
        if (keytipProps) {
            // Add the parent overflow sequence if necessary
            var newKeytipProps = this._keytipManager.addParentOverflow(keytipProps);
            // Construct aria-describedby and data-ktp-id attributes and return
            var ariaDescribedBy = KeytipUtils_1.getAriaDescribedBy(newKeytipProps.keySequences);
            var keySequences = tslib_1.__spreadArrays(newKeytipProps.keySequences);
            if (newKeytipProps.overflowSetSequence) {
                keySequences = KeytipUtils_1.mergeOverflows(keySequences, newKeytipProps.overflowSetSequence);
            }
            var ktpId = KeytipUtils_1.sequencesToID(keySequences);
            return {
                'aria-describedby': Utilities_1.mergeAriaAttributeValues(describedByPrepend, ariaDescribedBy),
                'data-ktp-target': ktpId,
                'data-ktp-execute-target': ktpId,
            };
        }
        return undefined;
    };
    return KeytipData;
}(React.Component));
exports.KeytipData = KeytipData;
//# sourceMappingURL=KeytipData.js.map