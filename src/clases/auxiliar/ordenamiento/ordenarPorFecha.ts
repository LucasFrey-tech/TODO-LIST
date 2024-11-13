import ListaTarea from "../../../Listas/ListaTarea";
import NodoTarea from "../../../Listas/NodoTarea";
import { OrdenamientoEstrategia } from "../../interfaces/ordenamientoEstrategia";;

export default class OrdenarPorFecha implements OrdenamientoEstrategia{
    public ordenar(lista: ListaTarea): void {
        
        let listaAux = new ListaTarea(); // Lista ordenada temporal.
        while (lista.getHead()) {
            const value = lista.removeFirst(); // Extrae el primer elemento de la lista original.
            const node = new NodoTarea(value);
            
            let headAux = listaAux.getHead();
            let previous: NodoTarea = undefined as unknown as NodoTarea
    
            // Inserción ordenada en la lista ordenada temporal.
            while (headAux && headAux.value.getFechaVec() < value.getFechaVec()) {
                previous = headAux;
                headAux = headAux.next;
            }
    
            if (!previous) {
                listaAux.setHead(node);
            } else {
                previous.next = node;
            }
    
            node.next = headAux;
        }
    
        // Establece la lista ordenada como la lista principal.
        lista.setHead(listaAux.getHead());
    }  
}