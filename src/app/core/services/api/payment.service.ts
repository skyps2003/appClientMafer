import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'; // Adjust the path based on your project structure
import { Observable } from 'rxjs';
import { PaymentResponse } from '../../models/interfaces/api/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private http = inject(HttpClient);

  // Construct the API URL using the environment configuration
  private url = `${environment.API_URL}payment`;

  getPayments(): Observable<PaymentResponse> {
    return this.http.get<PaymentResponse>(this.url);
  }

  constructor() { }
}
