import {BusquedaEstrategia} from "../../interfaces/busquedaEstrategia"
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";
/**
 * @class BusquedaPorTitulo
 * @implements BusquedaEstrategia
 */
export default class BusquedaPorTitulo implements BusquedaEstrategia {

    /**
    * @funcion buscar
    * @description esta funcion al recibir una lista y un valor de tipo String,
    * buscara el nodo Tarea correspondiente dentro de la lista
    */
    public buscar(lista: ListaTarea, titulo: string):Tarea {
        
        let aux = lista.getHead();
        
        while(aux.value.getTitulo() != titulo){
            aux = aux.next;
        }
        //1°
        return aux.value; //valor exacto de la tarea con el titulo PEPE
    }
}