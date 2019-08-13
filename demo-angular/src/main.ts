// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
declare var DotPay: any;
console.log(DotPay)
console.log(DotPay.sharedInstance())

platformNativeScriptDynamic().bootstrapModule(AppModule);
