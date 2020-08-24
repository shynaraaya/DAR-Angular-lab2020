import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/types';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

const fields = {
  commonInfo: {
    name: {
      validators: ['required']
    },
    phone: {
      validators: ['required']
    },
    email: {
      validators: ['required', 'email']
    }
  },
  company: {
    name: {
      validators: ['required']
    },
    catchPhrase: {
      validators: []
    },
    bs: []
  },
  address: {
    street: {
      validators: ['required']
    },
    suite: {
      validators: ['required']
    },
    city: {
      validators: ['required']
    }
  }
};

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  user: User;

  form: FormGroup;

  get bsFormArray(): FormArray {
    return this.form.get('company').get('bs') as FormArray;
  }

  fieldNameMap = {
    commonInfo: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Phone',
        field: 'phone'
      },
      {
        label: 'Email',
        field: 'email'
      }
    ],
    company: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Catch Phrase',
        field: 'catchPhrase'
      },
    ],
    address: [
      {
        label: 'Street',
        field: 'street'
      },
      {
        label: 'Suite',
        field: 'suite'
      },
      {
        label: 'City',
        field: 'city'
      },
    ],
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({});

    Object.keys(fields).forEach(groupKey => {

      this.form.addControl(groupKey, new FormGroup({}));


      const group = this.form.get(groupKey) as FormGroup;

      Object.keys(fields[groupKey]).forEach(fieldKey => {

        if (Array.isArray(fields[groupKey][fieldKey])) {
          group.addControl(fieldKey, new FormArray([]));
          return;
        }

        const validators = [];
        if (fields[groupKey][fieldKey].validators && Array.isArray(fields[groupKey][fieldKey].validators)) {
          fields[groupKey][fieldKey].validators.forEach(validatorName => {
            switch (validatorName) {
              case 'required':
                validators.push(Validators.required);
                break;
              case 'email':
                validators.push(Validators.email);
                break;
            }
          });
        }
        const control =  new FormControl('', validators);
        group.addControl(fieldKey, control);
      });
    });

    console.log(this.form);
    this.route.data
      .subscribe(({userDetails}) => {
        this.user = userDetails;
        this.form.get('commonInfo').patchValue(this.user);
        this.form.get('company').patchValue({...this.user.company, bs: []});
        this.form.get('address').patchValue(this.user.address);
        this.user.company.bs.split(' ').forEach(bsEl => {
          this.bsFormArray.push(new FormControl(bsEl));
        });
      });
  }

  addBS() {
    this.bsFormArray.push(new FormControl(''));
  }
  deleteBS(i){
    this.bsFormArray.removeAt(i);
  }

  saveForm() {
    this.user = this.form.getRawValue()
    console.log(this.user);
  }
}
