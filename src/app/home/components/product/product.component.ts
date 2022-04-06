import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Movements } from 'src/app/model/movements';
import { Cards } from '../../../model/cards';

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
    .pipe(
      switchMap(cards => {
        this.listCard = cards;
        return this.authService.getCardsMovements(cards[0].productNumber)
      })
    )
    .subscribe(movements => {
      this.listTransactions = movements;
    })
  }

  showDetail(productNumber: string): void {
    this.authService.getCardsMovements(productNumber)
    .subscribe((movements) => {
      this.listTransactions = movements;
    });
  }
}
