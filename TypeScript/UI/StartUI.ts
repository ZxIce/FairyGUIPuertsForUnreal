import * as UE from 'ue'
import {argv} from 'puerts';

export class UIPanel
{
    name: string;
    MainView:UE.GComponent;
}
let uipanel:UIPanel;
export function Load(){
    if (uipanel == null) {
        uipanel = new UIPanel();
    }
    else{
        uipanel.MainView.GetUIRoot().RemoveChild(uipanel.MainView);
    }
    let GameInstance = argv.getByName("GameInstance") as UE.GameInstance;
    
    uipanel.MainView = UE.UIPackage.CreateObject("Basics", "Main", GameInstance) as UE.GComponent;
    uipanel.MainView.MakeFullScreen();
    uipanel.MainView.SetParentToRoot();
    return uipanel;
}