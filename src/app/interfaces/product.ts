// Definir la estructura de datos
export interface Product {
    _id: string;
    image: string;
    title: string;// requerido
    description?: string;// No requerido
    price: number;
    categories?: string;
    isAvailable?: boolean;
    date? : Date; //opcional


}
