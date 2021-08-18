import * as UE from 'ue'
import * as UI from './UI/StartUI'
import {on} from 'puerts';

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
        //ReactUMG.init(this.GetWorld());
        this.root = UI.Load();

        on('HMR.finish', (moduleName: string, module: any) => this.OnReload(moduleName, module));
    }

    //@no-blueprint
    OnReload(moduleName: string, module: any): void {
        console.warn('HMR.finish', moduleName);
        if (moduleName == "UI/StartUI") {
            //if (this.root) this.root.removeFromViewport();
            this.root = UI.Load();
        }
    }
}

export default TsTestGameInstance;
