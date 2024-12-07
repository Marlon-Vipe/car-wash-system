import { Routes } from '@angular/router';
import LayoutComponent from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./pages/auth/login/login.component')
    },
    {
        path: 'components/layout',
        title: 'Layout',
        loadComponent: () => import('./components/layout/layout.component')
    },
    {
        path: 'general',
        component: LayoutComponent,
        loadChildren: ()=> import ('./pages/general/general.routing.module')
    }
];