import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundComponent } from './_commons/not-found/not-found.component';


const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path : 'home', component: HomePageComponent},
{path: 'products', component: ProductPageComponent},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
