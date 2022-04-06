import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Cards, Movements } from 'src/app/model/cards';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = '';
  listCard: Cards[] = [];
  listTransactions: Movements[] = [];

  constructor(
    private router: Router
  ) {
    this.showTitle(this.router.url);
  }

  ngOnInit(): void {
    this.router.events.subscribe(((event) => {
      if(event instanceof NavigationEnd) {
        this.showTitle(event.urlAfterRedirects);
      }
    }));
  }

  showTitle(route: string) {
    switch (route) {
      case '/home/product':
        this.title = 'Mis productos';
        break;
      case '/home/transaction':
        this.title = 'Transacciones';
        break;
      case '/home/configuration':
        this.title = 'Configuración';
        break;
      default:
        break;
    }
  }
}
