import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select-primeng',
  styleUrls: ['form-select.component.scss'],
  template: `
    <div 
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>

      <p-dropdown [options]="config.options" [formControlName]="config.name"></p-dropdown>

    </div>
  `
})
export class FormSelectPrimengComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
