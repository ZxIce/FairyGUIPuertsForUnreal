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
        if (name != null) {
            let panel = this.panels.get(name) as UIPanel;
            if (panel == null) {
                return false;
            }
            panel.__Open(arg);
            return true;
        }
        return false;
    }

    PanelIsOpen(name:string):boolean{
        if (name != null) {
            let panel = this.panels.get(name) as UIPanel;
            if (panel != null) {
                return panel.IsOpen();
            }
        }
        return false;
    }

    _ClosePanel(name:string):void{
        if (name != null) {
            let panel = this.panels.get(name) as UIPanel;
            if (panel != null) {
                panel.__DoClose();
            }
        }
    }

    UIPanelMeta(panelName:string, parentName:string,pkgName:string,resName:string):UIPanel{
        let oldPanel = this.panels.get(panelName) as UIPanel;
        if (oldPanel != null) {
            return oldPanel;
        }
        let panel = new UIPanel();
        panel.name = panelName;
        panel.pkgName = pkgName;
        panel.assetName = resName;
        this.panels.set(panelName,panel);
        return panel;
    }
}