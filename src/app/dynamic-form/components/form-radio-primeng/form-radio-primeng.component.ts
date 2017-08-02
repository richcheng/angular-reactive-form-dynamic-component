import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-radio-primeng',
  styleUrls: ['form-radio-primeng.component.scss'],
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <strong>{{ config.label }}</strong>
      <p-radioButton *ngFor="let option of config.options" name="groupname" [value]="option.value" [label]="option.label" [formControlName]="config.name"></p-radioButton>

    </div>
  `
})
export class FormRadioPrimengComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
