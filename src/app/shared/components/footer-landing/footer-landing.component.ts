import { Component, OnInit, inject } from '@angular/core';
import { CompanyService } from '../../../core/services/api/company.service';
import { Company } from '../../../core/models/interfaces/api/company';

import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-footer-landing',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './footer-landing.component.html',
  styleUrls: ['./footer-landing.component.css']
})
export class FooterLandingComponent implements OnInit {
  private companyService = inject(CompanyService);

  company: Company = {
    id: 0,
    name: "",
    description: "",
    img: "",
    address: "",
    phone: ""
  };

  constructor() {}

  ngOnInit(): void {
    this.loadCompanyData();
  }

  private loadCompanyData(): void {
    this.companyService.getCompany(1).subscribe(
      (response) => {
        this.company = response.data;
      },
      (error) => {
        console.error('Error fetching company data:', error);
      }
    );
  }
}
