// los servicios son logica accesible desde cualquier parte de un proyecto
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // 1. Inyección de dependecias y/o directivas de angular
  private _httpClient = inject(HttpClient);

  //2. Definir la ruta de acceso al back
  private apiUrl = "http://localhost:3000"; //url general del back

  //3. Métodos para hacer las peticiones

  //Petición Post
postProduct(productToCreate: Product ){
return this._httpClient.post(this.apiUrl + "/products/crear", productToCreate)
};

  //petición Get
getProducts(){
return this._httpClient.get(this.apiUrl + "/products/mostrar");
};

  //Petición Put
putProduct(productToUpdate : Product, id:string){
//return this._httpClient.put(this.apiUrl + "/products/actualizar/" + id, productToUpdate);
return this._httpClient.put("${this.apiUrl}/")
};


  //Petición Delete
  deleteProduct(id: string){
return this._httpClient.delete(this.apiUrl + "/products/eliminar/" + id)
  };

}
