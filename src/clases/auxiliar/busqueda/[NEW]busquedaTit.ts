import {BusquedaEstrategia} from "../../interfaces/[NEW]BusquedaEstrategia"
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";

export default class BusquedaPorTitulo implements BusquedaEstrategia {

    public buscar(lista: ListaTarea, titulo: string):Tarea {
        
        let aux = lista.getHead();
        
        while(aux.value.getTitulo() != titulo){
            aux = aux.next;
        }
        //1°
        return aux.value; //valor exacto de la tarea con el titulo PEPE
    }
}