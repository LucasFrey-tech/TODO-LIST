import ListaTarea from "../../Listas/ListaTarea";
import Tarea from "../Tarea";

export interface BusquedaEstrategia {
    buscar(lista: ListaTarea, valor: any):Tarea;
}