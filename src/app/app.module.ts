import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ForbiddenNameDirective } from './shared/forbidden-name.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { HomeComponent } from './components/views/home/home.component';

import { TestComponent } from './components/snippets/test/test.component';
import { BasicFormComponent } from './components/snippets/basic-form/basic-form.component';
import { AddAHeroComponent } from './components/snippets/add-a-hero/add-a-hero.component';
import { TemplateValidationComponent } from './components/snippets/template-validation/template-validation.component';
import { TemplateValidationHiddenComponent } from './components/snippets/template-validation-hidden/template-validation-hidden.component';
import { ReactiveFormValidationComponent } from './components/snippets/reactive-form-validation/reactive-form-validation.component';
import { CustomValidatorForTemplateComponent } from './components/snippets/custom-validator-for-template/custom-validator-for-template.component';
import { CustomValidatorForReactiveComponent } from './components/snippets/custom-validator-for-reactive/custom-validator-for-reactive.component';
import { StatusCssClassesComponent } from './components/snippets/status-css-classes/status-css-classes.component';
import { OwnCustomValidatorComponent } from './components/snippets/own-custom-validator/own-custom-validator.component';
import { EmailValidationComponent } from './components/snippets/email-validation/email-validation.component';
import { OneNumberValidationComponent } from './components/snippets/one-number-validation/one-number-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
    TestComponent,
    BasicFormComponent,
    AddAHeroComponent,
    TemplateValidationComponent,
    TemplateValidationHiddenComponent,
    ReactiveFormValidationComponent,
    CustomValidatorForTemplateComponent,
    CustomValidatorForReactiveComponent,
    ForbiddenNameDirective,
    StatusCssClassesComponent,
    OwnCustomValidatorComponent,
    EmailValidationComponent,
    OneNumberValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
