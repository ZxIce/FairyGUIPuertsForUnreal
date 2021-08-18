import * as UE from 'ue'
import * as UI from './UI/StartUI'
import {on,argv} from 'puerts';

class TsTestGameInstance extends UE.TypeScriptGameInstance {
    //@no-blueprint
    root: UI.UIPanel;

    ReceiveInit(): void {
        console.warn('TsTestGameInstance.ReceiveInit');
        
        this.StartNotify.Bind(() => this.OnStart());
    }

    //@no-blueprint
    OnStart():void {
        console.warn('TsTestGameInstance.OnStart'); 
        UE.UIPackage.AddPackagePath("/Game/UI/Basics",this);
        this.root = UI.Load(this);

        on('HMR.finish', (moduleName: string, module: any) => this.OnReload(moduleName, module));
    }

    //@no-blueprint
    OnReload(moduleName: string, module: any): void {
        console.warn('HMR.finish', moduleName);
        if (moduleName == "UI/StartUI") {
            this.root = UI.Load(this);
        }
    }
}

export default TsTestGameInstance;
