import MyNode from "../Listas/Node";

export interface Busqueda<T> {
    busqueda(parametro: T): MyNode<T> | null;
}