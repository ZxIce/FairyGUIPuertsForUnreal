"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
class UIPanel {
}
exports.UIPanel = UIPanel;
let uipanel;
function Load() {
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else {
        uipanel.MainView.GetUIRoot().RemoveChild(uipanel.MainView);
    }
    let GameInstance = puerts_1.argv.getByName("GameInstance");
    uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Main", GameInstance);
    uipanel.MainView.MakeFullScreen();
    uipanel.MainView.SetParentToRoot();
    return uipanel;
}
exports.Load = Load;
//# sourceMappingURL=StartUI.js.map