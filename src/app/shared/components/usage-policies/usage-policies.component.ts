import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usage-policies',
  standalone: true,
  imports: [],
  templateUrl: './usage-policies.component.html',
  styleUrl: './usage-policies.component.css'
})
export class UsagePoliciesComponent {
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
