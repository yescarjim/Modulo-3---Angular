export interface User {
    _id:string;
    name: string;
    username : string;
    email: string;
    age?: number; //(no es requerido)
    password: string;
    role : string;
    }
