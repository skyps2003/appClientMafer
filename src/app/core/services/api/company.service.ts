import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'; // Adjust the path based on your project structure
import { Observable } from 'rxjs';
import { Company, CompanyR, CompanyResponse } from '../../models/interfaces/api/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private http = inject(HttpClient);

  private url = environment.API_URL + "company"; // Using environment.API_URL

  getCompany(id: number): Observable<CompanyR> {
    return this.http.get<CompanyR>(`${this.url}/${id}`);
  }
}
