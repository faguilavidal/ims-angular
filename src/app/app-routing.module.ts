import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FormOrdenComponent } from './componentes/form-orden/form-orden.component';
import { UploadOrdersComponent } from './componentes/upload-orders/upload-orders.component';
import { ListOrdersComponent } from './componentes/list-orders/list-orders.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'form-orden', component: FormOrdenComponent},
  {path: 'upload-orders', component: UploadOrdersComponent},
  {path: 'list-orders', component: ListOrdersComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
