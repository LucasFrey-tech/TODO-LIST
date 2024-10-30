import Tarea from "../clases/Tarea";
import MyNode from "../Listas/Node";

export interface Busqueda {
    busqueda(parametro: string | number): MyNode<Tarea> | null;
}