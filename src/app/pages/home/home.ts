import { Component } from '@angular/core';
//1. importar la clase del componente y agregarla a losm imports
import { Navbar } from '../../components/navbar/navbar';
import { Admin } from "../admin/admin";
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
