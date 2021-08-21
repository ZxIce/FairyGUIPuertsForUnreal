"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class UIPanel {
}
exports.UIPanel = UIPanel;
let uipanel;
function OnClickGraph(Context) {
    console.warn(Context);
}
function Load(ins) {
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else {
        let graph = uipanel.MainView.GetChild("btn_Graph");
        graph.OnClick.Clear();
        uipanel.MainView.GetUIRoot().RemoveChild(uipanel.MainView);
    }
    //console.warn('Load');
    //加载主UI
    uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Main", ins);
    uipanel.MainView.MakeFullScreen();
    uipanel.MainView.SetParentToRoot();
    //获取按钮
    let graph = uipanel.MainView.GetChild("btn_Graph");
    //设置按钮文本
    //graph.SetText("!!!!!")
    //添加点击事件
    //graph.OnClick.Add(OnClickGraph);
    //  graph.OnClick.Add((Context)=>{
    //     console.warn(Context);
    //  });
    //let com = UE.UIPackage.CreateObject("Basics", "Component6", ins) as UE.GComponent;
    //com.SetParent(uipanel.MainView);
    // uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Demo_Button", ins) as UE.GComponent;
    // uipanel.MainView.MakeFullScreen();
    // uipanel.MainView.SetParentToRoot();
    return uipanel;
}
exports.Load = Load;
//# sourceMappingURL=StartUI.js.map