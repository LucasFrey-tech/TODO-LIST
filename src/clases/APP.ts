import { Busqueda } from "../interfaz/busqueda";
import Lista from "../Listas/Lista";
import MyNode from "../Listas/Node";
import Tarea from "./Tarea";

export default class APP implements Busqueda<T> {
    private lista = new Lista<Tarea>;
    private listaCompletada: Lista<Tarea> | null = null;

    constructor(list: Lista<Tarea>) {
        this.lista = list;
    }

    public busqueda(parametro: T): MyNode<T> | null {
        let actual = this.lista.head;

        while (actual) {
            if (actual.value === parametro) {
                return actual;  // Devuelve el nodo si se encuentra el valor
            }
            actual = actual.next;
        }

        return null; // Retorna null si no se encuentra el valor
    }
}


    
    
}