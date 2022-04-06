import { Component, Input, OnInit } from '@angular/core';
import { CardBrand } from 'src/app/model/cardBrand';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() productBrand = '';
  @Input() BalanceRD = 0;
  @Input() BalanceUS = 0;
  urlCardBrand = '';
  readonly cardsBrand = CardBrand;

  constructor() { }

  ngOnInit(): void {
    this.urlCardBrand = (this.productBrand === this.cardsBrand.MasterCard) ? '../../../../assets/img/mastercard.svg' : '../../assets/img/visa.svg';
  }

}
