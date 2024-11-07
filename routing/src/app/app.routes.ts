import { Routes } from '@angular/router';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: '/users/:id',
    component: UserTasksComponent,
  },
];
