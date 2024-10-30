import { Busqueda } from "../interfaz/busqueda";
import Lista from "../Listas/Lista";
import MyNode from "../Listas/Node";
import Tarea from "./Tarea";

export default class APP implements Busqueda {
    private lista = new Lista<Tarea>;
    private listaCompletada: Lista<Tarea> | null = null;

    constructor(list: Lista<Tarea>) {
        this.lista = list;
    }


    public busqueda(parametro: string): MyNode<Tarea> | null {
        let actual = this.lista.head;

        while (actual) {
            const tarea = actual.value;
            
            // Comparar con 'titulo' si el parámetro es string
            if (tarea.titulo === parametro) {
                return actual;
            }


            actual = actual.next;
        }

        return null; // Retorna null si no se encuentra el valor
    }
}
/*

    public busquedaDD(parametro: string | number): MyNode<Tarea> | null {
        let actual = this.lista.head;

        while (actual) {
            const tarea = actual.value;

            // Usar getTitulo() y getFechaVec() para comparar
            if (
                (typeof parametro === "string" && tarea.getTitulo() === parametro) ||
                (typeof parametro === "number" && tarea.getFechaVec() === parametro)
            ) {
                return actual; // Devuelve el nodo si se encuentra el valor
            }

            actual = actual.next;
        }

        return null; // Retorna null si no se encuentra el valor
    }
*/