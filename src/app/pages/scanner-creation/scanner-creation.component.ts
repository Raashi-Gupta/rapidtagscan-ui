
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scanner-creation',
  templateUrl: './scanner-creation.component.html',
  styleUrls: ['./scanner-creation.component.scss']
})
export class ScannerCreationComponent {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router) {
    this.reactiveForm = formBuilder.group({
      siteName: ['', Validators.required],
      siteDescription: ['', Validators.required],
      siteCode: ['', Validators.required]
    });
  }
  
  onReactiveSubmit(formData: any) {
    console.log(formData)
  }
}
