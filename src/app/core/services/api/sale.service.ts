import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'; // Adjust the path based on your project structure
import { HttpClient } from '@angular/common/http';
import { Sale } from '../../models/interfaces/api/sale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private http = inject(HttpClient);

  // Construct the API URL using the environment configuration
  private url = `${environment.API_URL}sale`;

  createSale(sale: Sale): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.url, sale);
  }
}
