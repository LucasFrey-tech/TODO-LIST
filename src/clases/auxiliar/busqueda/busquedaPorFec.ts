import {BusquedaEstrategia} from "../../interfaces/busquedaEstrategia"
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";

export default class BusquedaPorFecha implements BusquedaEstrategia {

    public buscar(lista: ListaTarea, fecha: number):Tarea {
        
        let aux = lista.getHead();
        
        while(aux.value.getFechaVec() != fecha){
            aux = aux.next;
        }
        //1°
        return aux.value;
    }
}