import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SiteCreationService } from 'src/app/services/site-creation.service';
@Component({
  selector: 'app-site-creation',
  templateUrl: './site-creation.component.html',
  styleUrls: ['./site-creation.component.scss']
})
export class SiteCreationComponent {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router,private siteCreation:SiteCreationService) {
    this.reactiveForm = formBuilder.group({
      siteName: ['', Validators.required],
      siteDescription: ['', Validators.required],
      siteCode: ['', Validators.required]
    });
  }
  
  onReactiveSubmit(formData: any) {
    if (this.reactiveForm.valid) {
      this.siteCreation.createSite(formData.siteName,formData.siteDescription,formData.siteCode)
    }

  }
}
