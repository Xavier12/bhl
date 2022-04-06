import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    IonicModule.forRoot()
  ]
})
export class SharedModule { }
