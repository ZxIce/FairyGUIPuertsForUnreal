"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const UI = require("./UI/StartUI");
const puerts_1 = require("puerts");
class TsTestGameInstance extends UE.TypeScriptGameInstance {
    //@no-blueprint
    root;
    ReceiveInit() {
        console.warn('TsTestGameInstance.ReceiveInit');
        this.StartNotify.Bind(() => this.OnStart());
    }
    //@no-blueprint
    OnStart() {
        console.warn('TsTestGameInstance.OnStart');
        UE.UIPackage.AddPackagePath("/Game/UI/Basics", this);
        this.root = UI.Load(this);
        puerts_1.on('HMR.finish', (moduleName, module) => this.OnReload(moduleName, module));
    }
    //@no-blueprint
    OnReload(moduleName, module) {
        console.warn('HMR.finish', moduleName);
        if (moduleName == "UI/StartUI") {
            this.root = UI.Load(this);
        }
    }
}
exports.default = TsTestGameInstance;
//# sourceMappingURL=TsTestGameInstance.js.map