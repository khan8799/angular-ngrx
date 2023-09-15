import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TextHighlightDirective } from './shared/directives/text-highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquareRootPipe } from './shared/pipes/square-root.pipe';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddSubCategoryComponent } from './sub-category/add-sub-category/add-sub-category.component';
import { EditSubCategoryComponent } from './sub-category/edit-sub-category/edit-sub-category.component';
import { SubHeaderComponent } from './shared/components/sub-header/sub-header.component';
import { ButtonEffectDirective } from './shared/directives/button-effect.directive';
import { TextLargeDirective } from './shared/directives/text-large.directive';
import { RainBowColorDirective } from './shared/directives/rain-bow-color.directive';
import { DropDownDirective } from './shared/directives/drop-down.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    TextHighlightDirective,
    SquareRootPipe,
    SubCategoryComponent,
    CategoryComponent,
    ProductComponent,
    AddSubCategoryComponent,
    EditSubCategoryComponent,
    SubHeaderComponent,
    ButtonEffectDirective,
    TextLargeDirective,
    RainBowColorDirective,
    DropDownDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    SquareRootPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
