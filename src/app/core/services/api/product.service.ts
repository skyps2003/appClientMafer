import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'; // Adjust the path based on your project structure
import { Inventory, InventoryResponse } from '../../models/interfaces/api/inventory';
import { Observable } from 'rxjs';
import { BaseService } from '../../interceptors/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  private http = inject(HttpClient);

  // Construct the API URL using the environment configuration
  private inventoryURL = `${environment.API_URL}inventory`;

  protected getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getInventories(): Observable<InventoryResponse> {
    return this.http.get<InventoryResponse>(this.inventoryURL, {
      headers: this.getAuthHeaders(),
    });
  }

  getInventory(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.inventoryURL}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
  
}
