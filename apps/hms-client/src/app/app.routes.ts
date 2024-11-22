import { Route } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: UsersComponent,
        // canActivate:[AuthGuard],
        // children: [
        //   { path: '', component:  },]
    }
];
