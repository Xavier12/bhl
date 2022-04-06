import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProductComponent } from './components/product/product.component';
import { CardComponent } from './components/card/card.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    TransactionComponent,
    TransactionDetailComponent,
    ConfigurationComponent,
    ProductComponent,
  ],
  exports: [
    HomeComponent,
    CardComponent,
    TransactionComponent,
    ConfigurationComponent,
    TransactionDetailComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ]
})
export class HomeModule { }
