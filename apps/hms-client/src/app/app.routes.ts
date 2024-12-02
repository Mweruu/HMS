import { Route } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DentallandingpageComponent } from './dentallandingpage/dentallandingpage.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: DentallandingpageComponent,
        // canActivate:[AuthGuard],
        // children: [
        //   { path: '', component:  },]
    }
];
