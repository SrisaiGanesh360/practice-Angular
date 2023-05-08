import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CenterComponent } from './components/center/center.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { GreetComponent } from './components/greet/greet.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NumberonlyDirective } from './custom-directves/numberonly.directive';
import { HighlightDirective } from './custom-directves/highlight.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CenterComponent,
    NavbarComponent,
    CarousalComponent,
    ElectronicsComponent,
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    UsersComponent,
    GreetComponent,
    ProductListComponent,
    NumberonlyDirective,
    HighlightDirective,
    PipesComponent,
    RemainingPipe,
    OrdinalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
