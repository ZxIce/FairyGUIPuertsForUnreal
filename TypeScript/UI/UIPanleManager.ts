import * as UE from 'ue'
import * as UIManager from '../Manager/UIManager'
import {UIPanel} from './UIPanel'
export class UIPanelManager
{
    panels = new Map();
    TSGameInstance :UE.TypeScriptGameInstance;
    Initialize(TSGameInstance:UE.TypeScriptGameInstance):void{
        this.panels.clear();
        this.TSGameInstance = TSGameInstance;
    }

    GetPanel(name:string):UIPanel
    {
        if (name != null) {
            return this.panels.get(name);
        }
        console.error("panel name is nil")
    }

    _OpenPanel(name:string,arg:any[]):boolean{
        let panel = this.panels.get(name) as UIPanel;
        if (panel == null) {
            return false;
        }
        
        return true
    }
}