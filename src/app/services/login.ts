import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credencials } from '../interfaces/credencials';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';//para decodificar eltoken y saber si inicio sesion un admiin o no
import { Router } from '@angular/router'; //para redireccionar a otras paginas al iniciar sesion


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
// 1. Inyectar y definir variables
private _httpClient = inject(HttpClient);
private _router = inject(Router);
private apiUrl= environment.appUrl;


// 2. Desarrollar la logica de servicio

// Peticion Post - par iniciar sesion
login(loginCredentials : Credencials){
return this._httpClient.post(`${this.apiUrl}/login`, loginCredentials);
}
  
// Decirle al navegador dedonde va a obtener el token
getToken(){
  //el token viene del local storage -> almacenamiento temporal
  return localStorage.getItem(`token`);//obtenemos eltoken del navegador
}

//2.3 Validar si es rol de administrador o no
// este método retorna verdadero o falso -> dependiendo si es administrador o no
isAdmin(){
  // primero necesito obtener el token
  const token = this.getToken();
  // En caso que sí haya token, decodifiquelo
  if(token){
    const decoded : any = jwtDecode(token);
    return decoded.admin === true ? true : false;

  }else{
    console.log(`No se encontro token`);
    return false;
  }
}

//2.4 Redireccion una vez que ya inicio sesion
redirecTo(){

  //si es administrador,que redireccione a /admin
  if(this.isAdmin()){
    this._router.navigate([`/admin`]);
  }else{
    this._router.navigate([`/`]);
  }
}

//2.5 El cierre de sesión
logout(){
  localStorage.removeItem(`token`);
  alert(`Cierre de Sesion exitoso,VuelvePronto!`);
  this._router.navigate([`login`]);
}

//2.6 para saber si seiniciosesion o no
isLoggedIn(){
  return this.getToken() ? true : false;
}// si no hay token, no esta loqueado, si si lo hayentonces si inicio sesion

}


