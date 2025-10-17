import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
registerForm = new FormGroup ({
  name : new FormControl (""),
  username : new FormControl (""),
  email : new FormControl(""),
  age : new FormControl <number|null >(null),
  password : new FormControl <string>("")
})

}
