
import { IUsuario } from "./iusuario.interface";


export interface IResponse {
    items: IUsuario[]
    paginas: IPaginas
}
    
    
export interface IPaginas {
    
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}
    
