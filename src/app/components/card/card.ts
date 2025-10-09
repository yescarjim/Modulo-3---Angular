import { Component, inject, OnInit } from '@angular/core';
//1.Importar el servicio porque queremos hacer un get de los productos
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {

  //1. la Inyeccion de dependencias y declaracion de variables
  _productService = inject(ProductService);
  //Variable
  allProducts: Product[] = []; //vamos a almacenar todos los productos de la base de datos
baseUrl : string = environment.appUrl;

  showProducts() {
    //1. voy a hacer peticion get
    //2. Guardar los productos en mi variable all products
    //3. Voy a mostrarlos en mi navegador

    this._productService.getProducts().subscribe({
      //manejo de errores
      next: (
        response: any) => {
        this.allProducts = response.data;
        console.log(this.allProducts)
      }, //gestiono respuestas postivivas del backend
      error: (error: any) => {
        console.error(error);
      } //gestiona respuestas de error del back
    });
  };

  ngOnInit(): void {
    //ejecute una accion al cargar por primera vez el navegador
    this.showProducts();
  }

};