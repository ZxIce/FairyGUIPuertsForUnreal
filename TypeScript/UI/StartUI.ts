import * as UE from 'ue'
import {argv} from 'puerts';

export class UIPanel
{
    name: string;
    MainView:UE.GComponent;
}
let uipanel:UIPanel;
export function Load(ins: UE.TypeScriptGameInstance){
    
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else{
        uipanel.MainView.GetUIRoot().RemoveChild(uipanel.MainView);
    }
    
    console.warn('Load');
    uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Main", ins) as UE.GComponent;
    uipanel.MainView.MakeFullScreen();
    uipanel.MainView.SetParentToRoot();
    return uipanel;
}