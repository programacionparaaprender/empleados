import { Routes } from '@angular/router';

import { ListEmployeesComponent } from './presentation/employees/list-employees/list-employees.component';
import { CreateEmployeComponent } from './presentation/employees/create-employe/create-employe.component';

export const routes: Routes = [
    { path: '',  redirectTo: '/list-employees', pathMatch: 'full' },
    {path: 'list-employees' , component: ListEmployeesComponent},
    {path: 'create-employe' , component: CreateEmployeComponent},
];
