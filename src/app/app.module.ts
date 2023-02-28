import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlankComponent } from './common/blank/blank.component';
import { SectionComponent } from './common/blank/section/section.component';
import { FormComponent } from './common/form/form.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from './states/basket/basket.reducer';
import { orderReducer } from './states/order/order.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlankComponent,
    SectionComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({basketCount: basketReducer, orderCount: orderReducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
