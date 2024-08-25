
import { Component, inject, OnInit } from '@angular/core';
import { CompanyService } from '../../core/services/api/company.service';
import { Company } from '../../core/models/interfaces/api/company';
import { ProductService } from '../../core/services/api/product.service';
import { Inventory, InventoryResponse, Category } from '../../core/models/interfaces/api/inventory';
import { CardComponent } from '../../shared/components/card/card.component';
import { ProductModalComponent } from '../../shared/components/product-modal/product-modal.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FooterLandingComponent} from '../../shared/components/footer-landing/footer-landing.component';
import {HeaderLandingComponent} from '../../shared/components/header-landing/header-landing.component';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [
    CardComponent, 
    ProductModalComponent, 
    FormsModule, 
    LoaderComponent, 
    RouterLink, 
    RouterOutlet,FooterLandingComponent,HeaderLandingComponent,ProductsComponent,CommonModule,CarouselModule
  ],
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.css']
})
export class LandingLayoutComponent implements OnInit {
  private productService = inject(ProductService);

  products: Inventory[] = [];
  filteredProducts: Inventory[] = [];
  selectedProduct: Inventory | null = null;
  categories: Category[] = [];
  selectedCategory: string = 'all'; // Default category
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