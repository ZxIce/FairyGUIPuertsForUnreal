"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UIPanel_1 = require("./UIPanel");
class UIPanelManager {
    constructor() {
        this.panels = new Map();
    }
    Initialize(TSGameInstance) {
        this.panels.clear();
        this.TSGameInstance = TSGameInstance;
    }
    GetPanel(name) {
        if (name != null) {
            return this.panels.get(name);
        }
        console.error("panel name is nil");
    }
    _OpenPanel(name, arg) {
        if (name != null) {
            let panel = this.panels.get(name);
            if (panel == null) {
                return false;
            }
            panel.__Open(arg);
            return true;
        }
        return false;
    }
    PanelIsOpen(name) {
        if (name != null) {
            let panel = this.panels.get(name);
            if (panel != null) {
                return panel.IsOpen();
            }
        }
        return false;
    }
    _ClosePanel(name) {
        if (name != null) {
            let panel = this.panels.get(name);
            if (panel != null) {
                panel.__DoClose();
            }
        }
    }
    UIPanelMeta(panelName, parentName, pkgName, resName) {
        let oldPanel = this.panels.get(panelName);
        if (oldPanel != null) {
            return oldPanel;
        }
        let panel = new UIPanel_1.UIPanel();
        panel.name = panelName;
        panel.pkgName = pkgName;
        panel.assetName = resName;
        this.panels.set(panelName, panel);
        return panel;
    }
}
exports.UIPanelManager = UIPanelManager;
//# sourceMappingURL=UIPanleManager.js.map