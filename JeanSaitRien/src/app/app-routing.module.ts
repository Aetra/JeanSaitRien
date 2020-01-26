import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { TimesupComponent } from "./timesup/timesup.component";

const routes: Routes = [
    { path: "", redirectTo: "/timesup", pathMatch: "full" },
    { path: "timesup", component: TimesupComponent },
    { path: "settings", component: TimesupComponent },

    { path: "test", component: TestComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
