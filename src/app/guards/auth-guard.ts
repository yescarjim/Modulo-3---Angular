// Los guards -> proteger (contenido) del front
// CanActive ->  es unprotector de rutas -> true o false
// true -> que SI SE PUEDEMOSTRAR ESE CONTENIDO
// false -> que NO SE PUEDE MOSTRAR ESE CONTENIDO

import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _loginService = inject(LoginService);
  const _router = inject (Router);
 
  // Validacion 1 : ya inicio Sesión?
  
  if(!_loginService.isLoggedIn()){
    //redireccone a inicio de sesion
    alert("No has iniciado sesion")
    _router.navigate(["/login"]);
    return false;
    }

  // Validación 2: Es administrador ?
  if(!_loginService.isAdmin()){
    alert("No tienes acceso a esta página, sers direccionado al Inicio");
    _router.navigate(["/"]);
    return false;
  }

 
  return true;
};
