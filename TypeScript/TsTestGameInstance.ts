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
       // this.wait().then(r => {
            UE.UIPackage.AddPackagePath("/Game/UI/Basics",this);
            this.root = UI.Load(this);

            //on('HMR.prepare', (moduleName: string, module: any) => this.OnPreReload(moduleName, module));
            on('HMR.finish', (moduleName: string, module: any) => this.OnReload(moduleName, module));
       // })

    }
    OnPreReload(moduleName: string, module: any): void {
        console.warn('HMR.prepare', moduleName);
        if (moduleName == "UI/StartUI") {
            UI.PreLoad(this);
        }
    }
    //@no-blueprint
    OnReload(moduleName: string, module: any): void {
        console.warn('HMR.finish', moduleName);
        if (moduleName == "UI/StartUI") {
            this.root = UI.Load(this);
        }
    }
    delay(t: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, t);
        });
    }

   async wait():Promise<void>{

        await this.delay(10)
   }
}

export default TsTestGameInstance;
