import Tarea from "../clases/Tarea";
import MyNode from "../Listas/Node";

export interface Ordenamiento {
    ordenamiento(parametro: string | number): MyNode<Tarea> | null;
}