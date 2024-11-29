import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./pages/auth/login/login.component')
    }
];
