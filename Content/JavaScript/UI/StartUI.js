"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class UIPanel {
}
exports.UIPanel = UIPanel;
let uipanel;
function Load(ins) {
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else {
        uipanel.MainView.GetUIRoot().RemoveChild(uipanel.MainView);
    }
    console.warn('Load');
    // uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Main", ins) as UE.GComponent;
    // uipanel.MainView.MakeFullScreen();
    // uipanel.MainView.SetParentToRoot();
    uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Demo_Button", ins);
    uipanel.MainView.MakeFullScreen();
    uipanel.MainView.SetParentToRoot();
    return uipanel;
}
exports.Load = Load;
//# sourceMappingURL=StartUI.js.map