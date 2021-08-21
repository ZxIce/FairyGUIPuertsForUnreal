import * as UE from 'ue'
import {argv} from 'puerts';

export class UIPanel
{
    name: string;
    MainView:UE.GComponent;
}
let uipanel:UIPanel;
function OnClickGraph(Context:UE.EventContext)
{
    console.warn(Context);
}
export function Load(ins: UE.TypeScriptGameInstance){
    
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else{
        let graph = uipanel.MainView.GetChild("btn_Graph") as UE.GButton;
        graph.OnClick.Clear();
        uipanel.MainView.GetUIRoot().RemoveChild(uipanel.MainView);
    }
    
    //console.warn('Load');
    //加载主UI
    uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Main", ins) as UE.GComponent;
    uipanel.MainView.MakeFullScreen();
    uipanel.MainView.SetParentToRoot();
    //获取按钮
    let graph = uipanel.MainView.GetChild("btn_Graph") as UE.GButton;
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


