import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SiteCreationService {

  constructor(private http: HttpClient,private router: Router) { }
  createSite(userEnteredSiteName :string,userEnteredsiteDescription:string,userEnteredSiteCode:string){
    const siteData = {
      siteName: userEnteredSiteName,
      siteDescription: userEnteredsiteDescription,
      siteCode: userEnteredSiteCode
    };

    console.log(siteData)
    //sending data to backend for validation
      const backendUrl = 'http://localhost:8080/siteCreation';
     this.http.post(backendUrl, siteData, { responseType: 'text' }).subscribe(
        (response) => {
          console.log(response);
          if(response=== 'false'){
            console.log("your response is a false response")
            this.router.navigate(['/login']);
          }
          else{
            console.log("you are in else part")
           
          this.router.navigate(['/zoneCreation']);
          }
        },
        (error) => {
          console.error('Error validating user', error);
          this.router.navigate(['/login']);
        }
      );


  }
}
