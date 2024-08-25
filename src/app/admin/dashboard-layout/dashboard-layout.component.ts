import { Component } from '@angular/core';
import { HeaderDashboardComponent } from '../../shared/components/header-dashboard/header-dashboard.component';
import { RouterOutlet } from '@angular/router';
import {FooterLandingComponent} from '../../shared/components/footer-landing/footer-landing.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [HeaderDashboardComponent, RouterOutlet,FooterLandingComponent],
  templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent {

}
