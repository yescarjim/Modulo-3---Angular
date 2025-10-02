import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // 1. Inyección de dependecias y/o directivas de angular
  private _httpClient = inject(HttpClient);

   //2. Definir la ruta de acceso al back
  private apiUrl = environment.appUrl; //url general del back

  //3. Métodos para hacer las peticiones

  //Petición Post
  postUser(userToCreate: User){
  return this._httpClient.post("${this.apiUrl} /users", userToCreate);
  };

  //Metodo Peticion GET
  getUser(){
    return this._httpClient.get("${this.apiUrl}/users");
}
    //Metodo PUT
  putUser(userToUpdate: User, id:string){
      return this._httpClient.put(`${this.apiUrl}/users/${id}`, userToUpdate)
    };


    //Metodo Delete
    deleteUser(id: string){
      return this._httpClient.delete(this.apiUrl + "/users" + id)
     };
}
