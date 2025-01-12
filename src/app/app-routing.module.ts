import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {
    path: 'Accueil',
    component: AccueilComponent,
  },
  {
    path: 'Produits',
    component: ProductsComponent,
  },
  {
    path: 'Votre compte',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
