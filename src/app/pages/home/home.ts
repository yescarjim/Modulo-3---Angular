import { Component } from '@angular/core';
//1. importar la clase del componente y agregarla a losm imports
import { Navbar } from '../../components/navbar/navbar';
import { Admin } from "../admin/admin";

@Component({
  selector: 'app-navbar',
  imports: [Navbar, Admin],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
