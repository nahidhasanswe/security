import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<TermsComponent>) { }

  ngOnInit() {

  }

  close (response) {
    this.dialogRef.close(response);
  }

}
