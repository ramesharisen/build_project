import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule}from'@angular/forms';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderComponent } from './home-page/slider/slider.component';
import { MainContentComponent } from './home-page/main-content/main-content.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomePageComponent,
    SliderComponent,
    MainContentComponent,
    FormComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
