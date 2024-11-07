import ListaTarea from "../../Listas/ListaTarea";
import Tarea from "../Tarea";

//FACADE
export default class BuscadorTareaFacade{

    public static buscarPorTitulo(lista: ListaTarea, titulo: string):Tarea {
        
        let aux = lista.getHead();

        while(aux.value.getTitulo() != titulo){
            aux = aux.next;
        }
        //1°
        return aux.value; //valor exacto de la tarea con el titulo PEPE
    }

    public static buscarPorFecha(lista: ListaTarea, fecha: number):Tarea {
        let aux = lista.getHead();

        while(aux.value.getFechaVec() != fecha){
            aux = aux.next;
        }
        //1°
        return aux.value;
    }
}

/*
    1°en caso de no encontrar tirar excepcion:

    throw new ValorNoEncontrado("valor no encontrado");
*/
