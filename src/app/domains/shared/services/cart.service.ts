import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../model/product.model';
import { provideClientHydration } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });
  constructor() {}

  addToCart(product: Product) {
    this.cart.update((state) => [...state, product]);
  }
}
