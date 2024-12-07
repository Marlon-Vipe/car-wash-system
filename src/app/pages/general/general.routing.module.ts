import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import LayoutComponent from "../../components/layout/layout.component";
import { ConfigurationComponent } from "./configuration/configuration.component";

const routes: Routes = [
    {
        path: 'layout',
        component: LayoutComponent
    },
    {
        path: 'configuration',
        component: ConfigurationComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export default class GeneralModule{

}