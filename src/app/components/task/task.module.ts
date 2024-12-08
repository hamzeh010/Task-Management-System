import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const TASK_ROUTES: Routes = [
    {
        path: '',
        component: TaskListComponent,
        title: 'Tasks',
    },
    {
        path: 'add',
        component: TaskFormComponent,
        title: 'Add Task',
    },
    {
        path: ':id/edit',
        component: TaskFormComponent,
        title: 'Edit Task',
    },
    {
        path: ':id',
        component: TaskDetailsComponent,
        title: 'Task Details',
    },
]