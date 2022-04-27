"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const UI = require("./UI/StartUI");
const puerts_1 = require("puerts");
class TsTestGameInstance extends UE.TypeScriptGameInstance {
    ReceiveInit() {
        console.warn('TsTestGameInstance.ReceiveInit');
        this.StartNotify.Bind(() => this.OnStart());
    }
    //@no-blueprint
    OnStart() {
        console.warn('TsTestGameInstance.OnStart');
        // this.wait().then(r => {
        UE.UIPackage.AddPackagePath("/Game/UI/Basics", this);
        this.root = UI.Load(this);
        //on('HMR.prepare', (moduleName: string, module: any) => this.OnPreReload(moduleName, module));
        puerts_1.on('HMR.finish', (moduleName, module) => this.OnReload(moduleName, module));
        // })
    }
    OnPreReload(moduleName, module) {
        console.warn('HMR.prepare', moduleName);
        if (moduleName == "UI/StartUI") {
            UI.PreLoad(this);
        }
    }
    //@no-blueprint
    OnReload(moduleName, module) {
        console.warn('HMR.finish', moduleName);
        if (moduleName == "UI/StartUI") {
            this.root = UI.Load(this);
        }
    }
    delay(t) {
        return new Promise(function (resolve) {
            setTimeout(resolve, t);
        });
    }
    async wait() {
        await this.delay(10);
    }
}
exports.default = TsTestGameInstance;
//# sourceMappingURL=TsTestGameInstance.js.map