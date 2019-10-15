import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FormOrdenComponent } from './componentes/form-orden/form-orden.component';
import { FormProductosComponent } from './componentes/form-productos/form-productos.component';
import { TableDashboardComponent } from './componentes/home/table-dashboard/table-dashboard.component';

// Graficos
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './componentes/home/grafico/grafico.component';
import { UploadOrdersComponent } from './componentes/upload-orders/upload-orders.component';
import { ListOrdersComponent } from './componentes/list-orders/list-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    FormOrdenComponent,
    FormProductosComponent,
    GraficoComponent,
    TableDashboardComponent,
    UploadOrdersComponent,
    ListOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
