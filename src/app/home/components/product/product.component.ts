import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Cards, Movements } from '../../../model/cards';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  listCard: Cards[] = [];
  listTransactions: Movements[] = [];

  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authService.getCards()
    .subscribe((cards) => {
      this.listCard = cards;
      // this.showDetail(this.listCard[0].productNumber);
    });
  }

  showDetail(productNumber: string): void {
    this.authService.getCardsMovements(productNumber)
    .subscribe((movements) => {
      this.listTransactions = movements;
    });
  }
}
