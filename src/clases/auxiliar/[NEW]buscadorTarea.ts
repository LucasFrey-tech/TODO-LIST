import ListaTarea from "../../Listas/ListaTarea";
import { BusquedaEstrategia } from "../interfaces/[NEW]BusquedaEstrategia";
import Tarea from "../Tarea";

export default class BuscadorDeTareas {
    private estrategia: BusquedaEstrategia;

    constructor(estrategia: BusquedaEstrategia){
        this.estrategia = estrategia;
    }

    public setEstrategia(estrategia: BusquedaEstrategia): void{
        this.estrategia = estrategia;
    }

    public buscar(lista:ListaTarea, valor:any): Tarea{
        return this.estrategia.buscar(lista, valor);
    }
}