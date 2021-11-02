import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

//To set up ProductAlertsComponent to receive product data, first import Input from @angular/core.

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product; //@Input() 裝飾器指出此屬性值要從本元件的父元件 ProductListComponent 中傳入。
  @Output() notify = new EventEmitter(); //@Output() allows the ProductAlertsComponent to emit an event
  constructor() {}

  ngOnInit() {}
}
