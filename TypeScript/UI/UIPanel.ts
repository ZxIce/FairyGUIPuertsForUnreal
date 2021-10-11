import * as UE from 'ue'
import * as UIManager from '../Manager/UIManager'
export class UIPanel
{
    name: string;
    pkgName: string;
    assetName: string;
    gComponent:UE.GComponent;
    isOpen:boolean;
    destroy:boolean;
    TSGameInstance :UE.TypeScriptGameInstance;
    _Initialize(name: string,pkgName: string,assetName: string,TSGameInstance:UE.TypeScriptGameInstance)
    {
        this.name = name;
        this.pkgName = pkgName;
        this.assetName = assetName;
        this.gComponent = null;
        this.isOpen = false;
        this.TSGameInstance = TSGameInstance;
        this.Initialize();
    }
    Initialize():void{}

    IsOpen():boolean
    {
        return this.isOpen;
    }

    OnOpenBefore():void{}
    OnOpen(arg:any[]):void{}
    OnPanelShow():void{}
    OnClose():void{}
    __DoOpen():boolean
    {
        if (this.isOpen) {
            return false
        }
        UE.UIPackage.AddPackagePath(this.pkgName,this.TSGameInstance);
        this.gComponent = UE.UIPackage.CreateObject(this.pkgName, this.assetName, this.TSGameInstance) as UE.GComponent;
        if (this.gComponent == null) {
            console.error("UIPanel:add UI failed = "+this.assetName);
            return false
        }
        this.isOpen = true;
        return true
    }

    __Open(arg:any[]):boolean
    {
        if (this.IsOpen()) {
            return true;
        }
        this.__DoOpen();
        this.OnOpenBefore();
        this.OnOpen(arg);
        this.OnPanelShow();
        return true
    }

    __DoClose():void
    {
        if (this.gComponent == null) {
            return;
        }
        this.OnClose()
        if (this.destroy) {
            UIManager.DestoryUI(this.gComponent);
            this.gComponent = null;
        }
        else{
            UIManager.HideUI(this.gComponent);
            this.gComponent = null;
        }
        this.isOpen = false;
    }
}