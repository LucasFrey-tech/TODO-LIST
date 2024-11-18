import Tarea from "../clases/Tarea";
import NodoTarea from "./NodoTarea";
import ConvertirFecha from "../clases/auxiliar/formatearFecha";

export default class ListaTarea {
    private head: NodoTarea;
    
    constructor() {
        this.head = undefined as unknown as NodoTarea;
    }

    public getHead(): NodoTarea {
        return this.head;
    }
    
    /**
     * Establece el nodo cabeza de la lista.
     * @param {NodoTarea} value - El nuevo nodo cabeza de la lista.
     */
    public setHead(value: NodoTarea) {
        this.head = value;
    }

    public push(value: Tarea): NodoTarea {
        const node = new NodoTarea(value);
        let headAux = this.head;

        while (headAux && headAux.next) {
            headAux = headAux.next;
        }

        if (!headAux) {
            this.head = node
        }
        else {
            headAux.next = node;
        }
        return node;
    }

    public pop(): Tarea {
        let value = undefined;
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;

        while (headAux && headAux.next) {
            previous = headAux;
            headAux = headAux.next;
        }

        if (!previous) {
            this.head = undefined as unknown as NodoTarea;

        }
        else {
            previous.next = undefined as unknown as NodoTarea;
        }
        value = headAux.value;
        return value;
    }//pop borra el ultimo nodo

 
    public removeFirst(): Tarea {
        let value = undefined as unknown as Tarea;

        if (this.head) {
            value = this.head.value;
            this.head = this.head.next;
        }
        return value;
    }

    public insertOrdered(value: Tarea): NodoTarea {
        const node = new NodoTarea(value);
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;

        while (headAux && headAux.value < value) {
            previous = headAux;
            headAux = headAux.next;
        }

        if (!previous) {
            this.head = node;
        }
        else {
            previous.next = node;
        }
        node.next = headAux;
        return node;
    }

    public delete(value: Tarea): Tarea {
        let headAux = this.head;
        let previous: NodoTarea = undefined as unknown as NodoTarea;
        
        while (headAux && headAux.value !== value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = headAux.next;
        }
        else {
            previous.next = headAux.next;
        }
        return headAux.value;
    }//delete borra un nodo particular
   
    public search(value: Tarea): NodoTarea {
        let headAux = this.head;
        
        while (headAux && headAux.value !== value) {
            headAux = headAux.next;
        }
        return headAux;
    }
    
    public sort(): void {
        let value: Tarea;
        let ListaTareaux = new ListaTarea();
        
        while (this.head) {
            value = this.removeFirst();
            ListaTareaux.insertOrdered(value);
        }
        this.head = ListaTareaux.head;
        ListaTareaux.clear();
    }

    public clear(): void {
        while (this.head) {
            this.removeFirst();
        }
    }

    public imprimirTodo(): void {
        let aux = this.head;
        let actual = aux;
    
        while (actual) {
            const tarea = actual.value;
            const fechaM: ConvertirFecha = new ConvertirFecha();
            console.log({
                titulo: tarea.getTitulo(),
                descripcion: tarea.getDescripcion(),
                fecha: (fechaM.convertirFecha(tarea.getFechaVec()).format('DD/MM/YYYY')),
                categoria: tarea.getCategoria(),
                etiqueta: tarea.getEtiqueta(),
                prioridad: tarea.getPrioridad(),
                avance: tarea.getAvance()
            });
            actual = actual.next;
        }
    }
}