import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ConfigurationComponent } from './home/components/configuration/configuration.component';
import { ProductComponent } from './home/components/product/product.component';
import { TransactionComponent } from './home/components/transaction/transaction.component';
import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/product', pathMatch: 'full' },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'transaction', component: TransactionComponent },
      { path: 'configuration', component: ConfigurationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
