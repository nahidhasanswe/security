import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {MatDialog} from '@angular/material';
import { TermsComponent } from '../../dialogs/terms/terms.component';

import { DataService } from "../../services/data.service";

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

  certification: any;
  expertise: any;
  interest: any;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog, private service: DataService) { }

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

  openTermsCondition () {
    const dialogRef = this.dialog.open(TermsComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(response => {
      if(response){
        this.terms = response;
      }else {
        this.terms = false;
      }
    })
  }

  Registration (firstForm, secondForm) {
    if(this.terms) {
      if(this.checkValidation()) {
        const createObject = {
          Name:firstForm.name,
          Email:firstForm.email,
          Mobile:firstForm.mobile,
          Address:firstForm.address,
          Qualification:secondForm.qualification,
          Certification:this.getArray(this.certification),
          Expertise:this.getArray(this.expertise),
          Interest:this.getArray(this.interest)
        };

        this.service.registration(createObject).subscribe(response=> {
          alert(response);
        },error => {
          alert(error._body);
        })
      }
    }
  }

  checkValidation () {
    if(this.certification.length > 0 && this.expertise.length > 0) {
      return true;
    }else {
      return false;
    }
  }

  getArray(data) {
    let array = [];
    data.forEach(element => {
      array.push(element.value);
    });

    return array;
  }

}
