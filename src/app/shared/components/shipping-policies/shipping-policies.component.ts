import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-policies',
  standalone: true,
  imports: [],
  templateUrl: './shipping-policies.component.html',
  styleUrls: ['./shipping-policies.component.css']
})
export class ShippingPoliciesComponent {
  constructor(private router: Router) {}

  accept(): void {
    // Acción cuando se haga clic en "Aceptar"
    console.log('Políticas aceptadas');
  }

  goHome(): void {
    // Redirige al inicio
    this.router.navigate(['/']);
  }
}
