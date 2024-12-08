import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'tasks',
        loadChildren: () => import('./components/task/task.module').then((m) => m.TASK_ROUTES),
    },
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'tasks',
    },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
