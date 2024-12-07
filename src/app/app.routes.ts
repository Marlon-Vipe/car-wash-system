import { Routes } from '@angular/router';

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
    }
];