import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './admin/landing-layout/landing-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component'; 
import { ShippingPoliciesComponent } from './shared/components/shipping-policies/shipping-policies.component';
import { UsagePoliciesComponent } from './shared/components/usage-policies/usage-policies.component'; // Importar UsagePoliciesComponent

export const routes: Routes = [
    {
        path: '',
        component: LandingLayoutComponent
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES), 
    },
    {
        path: 'contact',
        component: ContactUsComponent
    },
    {
        path: 'shipping-policies',
        component: ShippingPoliciesComponent
    },
    {
        path: 'usage-policies', // Nueva ruta para UsagePoliciesComponent
        component: UsagePoliciesComponent
    }
];
