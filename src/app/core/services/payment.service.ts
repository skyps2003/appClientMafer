import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Adjust the path if necessary

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // Use the API URL from environment configuration
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  checkout(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkout`, order);
  }

  validate(rawClientAnswer: any, hash: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validate`, { rawClientAnswer, hash });
  }

  paid(krAnswer: any, krHash: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/paid`, { 'kr-answer': krAnswer, 'kr-hash': krHash });
  }

  ipn(krAnswer: any, krHash: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ipn`, { 'kr-answer': krAnswer, 'kr-hash': krHash });
  }
}
