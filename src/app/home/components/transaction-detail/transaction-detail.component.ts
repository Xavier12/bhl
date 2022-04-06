import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  @Input() description = '';
  @Input() date = '';
  @Input() amount = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
