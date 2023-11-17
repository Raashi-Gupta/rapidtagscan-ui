import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginValidationService {

  constructor(private http: HttpClient,private router: Router) { }
  validateLogin(userEnteredEmail :string,userEnteredPassword:string){
    const loginData = {
      email: userEnteredEmail,
      password: userEnteredPassword
    };

  
    console.log(loginData)
   

    //sending data to backend for validation
      const backendUrl = 'http://localhost:8080/validateLogin';
     this.http.post(backendUrl, loginData, { responseType: 'text' }).subscribe(
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
