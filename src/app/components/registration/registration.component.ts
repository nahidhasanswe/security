import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  terms: boolean =  false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      qualification: ['', Validators.required],
      certification: ['', Validators.required],
      expertise: [[], Validators.required],
      interest: ['']
    });
  }

}
