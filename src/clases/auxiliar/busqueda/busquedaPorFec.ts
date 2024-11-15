import {BusquedaEstrategia} from "../../interfaces/busquedaEstrategia"
import { objetoBusqueda } from "../../interfaces/objetoBusqueda";
import ListaTarea from "../../../Listas/ListaTarea";
import Tarea from "../../Tarea";
import ValorNoEncontrado from "../../../excepciones/error";

export default class BusquedaPorFecha implements BusquedaEstrategia {

    public buscar(lista: ListaTarea, valor: objetoBusqueda):Tarea {
        
        let aux = lista.getHead();
        
        while(aux !== undefined && aux.value.getFechaVec() != valor.fecha){
            aux = aux.next;
        }
        
        if (aux === undefined) {
            throw new ValorNoEncontrado("No se encontró una tarea con la fecha buscada");
        }
        
        return aux.value;
    }
}