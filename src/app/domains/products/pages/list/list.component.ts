import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/model/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const InitProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=13',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=33',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=32',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 100,
        image: 'https://picsum.photos/640/640?r=51',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 7',
        price: 100,
        image: 'https://picsum.photos/640/640?r=42',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 8',
        price: 100,
        image: 'https://picsum.photos/640/640?r=41',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(InitProducts);
  }

  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }
}
