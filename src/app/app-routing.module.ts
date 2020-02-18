import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'test', component: TestComponent},
  {path: 'basicform', component: BasicFormComponent},
  {path: 'addahero', component: AddAHeroComponent},
  {path: 'templatevalidation', component: TemplateValidationComponent},
  {path: 'templatevalidationhidden', component: TemplateValidationHiddenComponent},
  {path: 'reactiveformvalidation', component: ReactiveFormValidationComponent},
  {path: 'customvalidatorfortemplate', component: CustomValidatorForTemplateComponent},
  {path: 'customvalidatorforreactive', component: CustomValidatorForReactiveComponent},
  {path: 'statuscssclasses', component: StatusCssClassesComponent},
  {path: 'owncustomvalidator', component: OwnCustomValidatorComponent},
  {path: 'emailvalidation', component: EmailValidationComponent},
  {path: 'onenumbervalidation', component: OneNumberValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
