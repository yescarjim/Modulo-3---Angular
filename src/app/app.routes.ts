import { Routes } from '@angular/router';
//1. Importar todos los componentes paginas
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';
//importar el guardian y especificar que rutas son protegidas
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
    { path: "", component: Home, title: "Inicio" },
    { path: "admin", component: Admin, title: "Dashboard" , canActivate: [authGuard] },
    { path: "login", component: Login, title: "Inicio Sesión" },
    { path: "products", component: Products, title: "Productos" },
    { path: "register", component: Register, title: "Registro" },
    { path: "**", component: NotFound, title: "404" },

];

