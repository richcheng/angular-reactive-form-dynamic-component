import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>

      form.valid: {{ form.valid }}
      <div>
        form.value: 
        <pre>
        {{ form.value | json }}
        </pre>
      </div>
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  cities = [
    {label:'Select City', value:null},
    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];


  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name:',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'E-mail:',
      name: 'email',
      placeholder: 'Enter your e-mail',
      validation: [Validators.required, Validators.minLength(4), Validators.email]
    },
    {
      type: 'select',
      label: 'Favourite Food:',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'selectPrimeng',
      label: 'City:',
      name: 'city',
      options: this.cities,
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'radioPrimeng',
      label: 'Gender:',
      name: 'gender',
      options: [
        {
          label: 'Man',
          value: 'man'
        },
        {
          label: 'Woman',
          value: 'woman'
        }
      ],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    //this.form.setDisabled('submit', true);
    //this.form.setValue('name', 'Todd Motto');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
