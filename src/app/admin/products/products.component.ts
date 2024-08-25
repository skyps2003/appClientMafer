import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/api/product.service';
import { Category, Inventory, InventoryResponse } from '../../core/models/interfaces/api/inventory';
import { CardComponent } from '../../shared/components/card/card.component';
import { ProductModalComponent } from '../../shared/components/product-modal/product-modal.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardComponent, 
    ProductModalComponent, 
    FormsModule, 
    LoaderComponent,
    CommonModule
  ],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  private productService = inject(ProductService);

  products: Inventory[] = [];
  filteredProducts: Inventory[] = [];
  selectedProduct: Inventory | null = null;
  categories: Category[] = [];
  selectedCategory: string = 'all'; // Default category set to 'all'
  isLoading: boolean = false;

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.isLoading = true;
    this.productService.getInventories().subscribe(
      (response: InventoryResponse) => {
        this.products = response.data.inventories;
        this.filteredProducts = [...this.products];
        this.categories = response.data.categories;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching products and categories', error);
        this.isLoading = false;
      }
    );
  }

  filterProductsByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => product.category.name.toLowerCase() === category.toLowerCase());
    }
  }

  openModal(product: Inventory) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  trackByProductId(index: number, item: Inventory) {
    return item.id;
  }

  trackByCategoryId(index: number, item: Category) {
    return item.id;
  }
}
