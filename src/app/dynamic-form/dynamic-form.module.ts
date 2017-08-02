import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropdownModule, RadioButtonModule } from 'primeng/primeng';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormSelectPrimengComponent } from "./components/form-select-primeng/form-select.component";
import { FormRadioPrimengComponent } from "./components/form-radio-primeng/form-radio-primeng.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule, RadioButtonModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormSelectPrimengComponent,
    FormRadioPrimengComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormSelectPrimengComponent,
    FormRadioPrimengComponent
  ]
})
export class DynamicFormModule {}
