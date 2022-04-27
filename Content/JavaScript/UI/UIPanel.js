"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const UIManager = require("../Manager/UIManager");
class UIPanel {
    _Initialize(name, pkgName, assetName, TSGameInstance) {
        this.name = name;
        this.pkgName = pkgName;
        this.assetName = assetName;
        this.gComponent = null;
        this.isOpen = false;
        this.TSGameInstance = TSGameInstance;
        this.Initialize();
    }
    Initialize() { }
    IsOpen() {
        return this.isOpen;
    }
    OnOpenBefore() { }
    OnOpen(arg) { }
    OnPanelShow() { }
    OnClose() { }
    __DoOpen() {
        if (this.isOpen) {
            return false;
        }
        UE.UIPackage.AddPackagePath(this.pkgName, this.TSGameInstance);
        this.gComponent = UE.UIPackage.CreateObject(this.pkgName, this.assetName, this.TSGameInstance);
        if (this.gComponent == null) {
            console.error("UIPanel:add UI failed = " + this.assetName);
            return false;
        }
        this.isOpen = true;
        return true;
    }
    __Open(arg) {
        if (this.IsOpen()) {
            return true;
        }
        this.__DoOpen();
        this.OnOpenBefore();
        this.OnOpen(arg);
        this.OnPanelShow();
        return true;
    }
    __DoClose() {
        if (this.gComponent == null) {
            return;
        }
        this.OnClose();
        if (this.destroy) {
            UIManager.DestoryUI(this.gComponent);
            this.gComponent = null;
        }
        else {
            UIManager.HideUI(this.gComponent);
            this.gComponent = null;
        }
        this.isOpen = false;
    }
}
exports.UIPanel = UIPanel;
//# sourceMappingURL=UIPanel.js.map