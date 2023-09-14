import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
})
export class ProductsCardComponent {
  @Input() product: any;
}
