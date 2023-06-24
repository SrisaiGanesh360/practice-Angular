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
import { NameprefixPipe } from './custom-pipes/nameprefix.pipe';
import { MyfilterPipe } from './custom-pipes/myfilter.pipe';
import { TruncatePipe } from './custom-pipes/truncate.pipe';
import { MysortPipe } from './custome-pipes/mysort.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeCardsComponent } from './components/employee-cards/employee-cards.component';
import { CartComponent } from './components/cart/cart.component';
import { Mathdemo1Component } from './components/mathdemo1/mathdemo1.component';
import { Mathdemo2Component } from './components/mathdemo2/mathdemo2.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

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
    OrdinalPipe,
    NameprefixPipe,
    MyfilterPipe,
    TruncatePipe,
    MysortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    CategoriesComponent,
    CategoryComponent,
    EmployeeCrudComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeCardsComponent,
    CartComponent,
    Mathdemo1Component,
    Mathdemo2Component,
    MovieListComponent,
    
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
