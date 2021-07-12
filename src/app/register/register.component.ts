import { Component, OnInit } from '@angular/core';
import {User} from '../user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: User = new User(null, null, null);

  constructor() { }

  ngOnInit(): void {
    // function validateForm() {
    //   var a = document.getElementById("password");
    //   var b = document.getElementById("confirmPassword");
    //
    //   if (a != b) {
    //     console.log("passwords are not matching");
    //     return false;
    //   }
    //   return true;
    // }
    // validateForm();
  }

  get diagnostic(): string {
    return JSON.stringify(this.model);
  }
}


// function checkPasswordMatch() {
//   var password = password.value;
//   var confirmPassword = confirmPassword.value;
//
//   if (password != confirmPassword)
//     $("#divCheckPasswordMatch").html("Confirmation does not match password")
// }
//
// $(document).ready(function () {
//   $("#password, #confirmPassword").keyup(checkPasswordMatch);
// });
