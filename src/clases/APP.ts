import { Gestor } from "../auxiliar/Gestor";
import { Busqueda } from "../auxiliar/busqueda";
import { Ordenamiento } from "../auxiliar/ordenamiento";
import Lista from "../Listas/Lista";
import MyNode from "../Listas/Node";
import Tarea from "./Tarea";

export default class APP {

    private tarea: Tarea;

    private pendiente = new Lista<Tarea>;
    private completada = new Lista<Tarea>;

    private buscador: Busqueda = new Busqueda();
    private ordenador: Ordenamiento = new Ordenamiento();

    private gestor: Gestor = new Gestor();

    constructor(t:Tarea){
        this.tarea = t;
    }

    public getTarea():Tarea{
        return this.tarea;
    }

    public crearDesdeApp(){
        this.gestor.crearTarea(this.tarea);

        //this.pendiente.push(this.tarea);
    }

    public editarDesdeApp(){
        //const actual = this.buscarTarea();// esta mal ver despues
        //this.gestor.editarTarea(actual);
    }
/*
    public buscarTarea(){
        this.buscador.buscarPorTitulo("valor");
    }

    public ordenarTarea(){
        this.ordenador.ordenarPorTitulo("valor");
    }
*/
}

/*PREGUNTAS
    buscar alternativa de typeof, sabemos que no va pero fucna
    ver la opcion de implementar 2 tipos de busqaueda
    una por titulo
    una por fecha

    aplicar sobrecarga
    patron
*/

/*
    public insertOrdered(value: T): MyNode<T> {
        const node = new MyNode(value);
        let headAux = this.head;
        let previous: MyNode<T> = undefined as unknown as MyNode<T>;

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
-------------------------------------------------------------
    private lista = new Lista<Tarea>;
    private listaCompletada: Lista<Tarea> | null = null;

    constructor(list: Lista<Tarea>) {
        this.lista = list;
    }



    public busqueda(parametro: string | number): MyNode<Tarea> | null {
        let nodoActual = this.lista.getHead();

        while (nodoActual) {
            const tarea = nodoActual.value;

            if ((typeof parametro === "string" && tarea.getTitulo() === parametro) || (typeof parametro === "number" && tarea.getFechaVec() === parametro)) {
                return nodoActual;
            }

            nodoActual = nodoActual.next;
        }
        return null;
    }
*/