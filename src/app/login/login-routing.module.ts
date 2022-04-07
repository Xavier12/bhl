import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AdminGuard } from '../guard/admin.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
