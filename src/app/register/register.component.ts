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
  }

  get diagnostic(): string {
    return JSON.stringify(this.model);
  }

  //тут должна быть функция для сравнения паролей

}
