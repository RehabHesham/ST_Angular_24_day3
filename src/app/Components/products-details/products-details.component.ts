import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  productId: number = 0;
  constructor(routerData: ActivatedRoute, private navigator: Router) {
    this.productId = routerData.snapshot.params['id'];
  }

  Back() {
    this.navigator.navigate(['/products']);
  }
}
