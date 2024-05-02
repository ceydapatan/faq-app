import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private snackBar: MatSnackBar) {}


  openErrorMessage() {
    this.snackBar.open('An error occurred. Please try again.', 'Close', {
      duration: 4000, // Duration for the snackbar to be visible
      panelClass: ['mat-toolbar', 'mat-warn'], // Optional: Custom classes for styling
    });
  }


  role: string = '';
  hide= true;
  loggedIn = false;



  logIn(){
    window.localStorage.setItem("loggedIn", "true");
    window.localStorage.setItem("role", this.role);
    window.location.href="/"

  }



  ngOnInit() {
   
    if(window.localStorage.getItem("loggedIn") == "true"){
      this.loggedIn = true;
    }

    if(window.localStorage.getItem("role") == "dozentin"){
      this.role = 'dozentin';
    }


  }

}
