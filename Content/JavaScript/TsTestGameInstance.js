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
        //ReactUMG.init(this.GetWorld());
        this.root = UI.Load();
        puerts_1.on('HMR.finish', (moduleName, module) => this.OnReload(moduleName, module));
    }
    //@no-blueprint
    OnReload(moduleName, module) {
        console.warn('HMR.finish', moduleName);
        if (moduleName == "UI/StartUI") {
            //if (this.root) this.root.removeFromViewport();
            this.root = UI.Load();
        }
    }
}
exports.default = TsTestGameInstance;
//# sourceMappingURL=TsTestGameInstance.js.map