import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { DashboardComponent } from "../../../components/dashboard/dashboard.component";
import LayoutComponent from "../../../components/layout/layout.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: LayoutComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export default class GeneralModule{

}