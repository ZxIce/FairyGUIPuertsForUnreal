"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class UIPanel {
    OnClickGraph(Context) {
        console.warn("Context2");
    }
}
exports.UIPanel = UIPanel;
let uipanel;
let event;
//function OnClickGraph(Context:UE.EventContext)
//{
//    console.warn("Context2");
//}
function Load(ins) {
    // event = (Context)=>{
    // };
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else {
        let graph = uipanel.MainView.GetChild("btn_Graph");
        graph.OnClick.Clear();
        uipanel.MainView.GetUIRoot().RemoveChild(uipanel.MainView);
    }
    console.warn('Load');
    //加载主UI
    uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Main", ins);
    uipanel.MainView.MakeFullScreen();
    uipanel.MainView.SetParentToRoot();
    //获取按钮
    let graph = uipanel.MainView.GetChild("btn_Graph");
    //设置按钮文本
    graph.SetText("!!!!!");
    //添加点击事件
    graph.OnClick.Add(uipanel.OnClickGraph);
    //graph.OnClick.Add(event);
    //let com = UE.UIPackage.CreateObject("Basics", "Component6", ins) as UE.GComponent;
    //com.SetParent(uipanel.MainView);
    // uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Demo_Button", ins) as UE.GComponent;
    // uipanel.MainView.MakeFullScreen();
    // uipanel.MainView.SetParentToRoot();
    return uipanel;
}
exports.Load = Load;
function PreLoad(ins) {
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else {
        let graph = uipanel.MainView.GetChild("btn_Graph");
        graph.OnClick.Clear();
        event = null;
    }
}
exports.PreLoad = PreLoad;
//# sourceMappingURL=StartUI.js.map