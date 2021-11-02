import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  constructor(private route: ActivatedRoute) {} //注入要用的、每個元件都有的 物件

  ngOnInit() {
    // First get the product id from the current route.
    //The route parameters correspond to the path variables you define in the route.
    //To access the route parameters, we use route.snapshot  that contains information about the active route at that particular moment in time.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRemote = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    let p = products.find((p) => p.id === productIdFromRemote); //有可能找不到 ，assign之前要用 if 判斷非undefined才賦值
    if (p) this.product = p;
  }
}
