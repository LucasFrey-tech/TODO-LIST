import { objetoBusqueda } from "./interfaces/objetoBusqueda";
import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";
import Tarea from "./Tarea";
import BuscadorDeTarea from "./auxiliar/busqueda/buscadarDeTarea";
import BusquedaPorTitulo from "./auxiliar/busqueda/busquedaPorTitulo";
import BusquedaPorFecha from "./auxiliar/busqueda/busquedaPorFec";
import OrdenarPorPrioridad from "./auxiliar/ordenamiento/ordenarPorPrioridad";
import OrdenarPorFecha from "./auxiliar/ordenamiento/ordenarPorFecha";
import OrdenarPorTitulo from "./auxiliar/ordenamiento/ordenarPorTitulo";
import OrdenarTareas from "./auxiliar/ordenamiento/ordenarTarea";
import ValorNoEncontrado from "../excepciones/error";

/**
 * Clase Aplicacion
 *
 * @class Aplicacion 
 * Esta clase es la principal de aplicacion, se encarga de gestionar las tareas 
 */
export default class Aplicacion{

    private listaDeTareas: ListaTarea;
    private listaDeTareasCompletadas: ListaTarea;

    private creador: CrearTarea;
    private editar: EditarTarea;

    protected contextoBusqueda: BuscadorDeTarea;
    protected actionBusqueda: string;
    protected contextoOrdenamiento: OrdenarTareas;

    constructor(){
        this.listaDeTareas = new ListaTarea();
        this.listaDeTareasCompletadas = new ListaTarea();

        this.creador = new CrearTarea();
        this.editar = new EditarTarea();

        this.contextoBusqueda = new BuscadorDeTarea(new BusquedaPorTitulo());
        this.actionBusqueda = "";
        this.contextoOrdenamiento = new OrdenarTareas(new OrdenarPorTitulo());

    }
    /**
     * @function CreadorT se encarga de crear las tareas
     * esta funcion develve una tarea
     * 
     */
    public creardorT(titulo:string, descripcion:string, fecha:number, prioridad:Prioridad, categoria:string, etiqueta:string):Tarea{
        const nuevaTarea = this.creador.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta)
        return nuevaTarea;
    }
    /**
     * @function agregarNuevaTarea Se encarga de cargar las tareas a la lista
     * 
     */
    public agregarNuevaTarea(nuevaTarea:Tarea) {
        this.listaDeTareas.push(nuevaTarea);
    }
    /**
     * @function editarUnaTarea Se encarga de la edicion de las tareas.
     * el usuario llama a las distintas funciones de edicion que necesite para editar la tarea
     */
    
    public editarUnaTarea(tarea: Tarea){
        this.editar.editarAvance(this.listaDeTareas, tarea, 100);
    } 
    
    /**
    * @function eliminarUnaTarea Se encarga de la eliminacion de las tarea.
    * el usuario llama a la funcion
    */
    public eliminarUnaTarea(tarea: Tarea): Tarea{
        return this.listaDeTareas.delete(tarea);
    }
    /**
    * @function getListaDeTareasIncompletas 
    * esto devuelve la lista de tareas incompletas
    */
    public getListaDeTareasIncompletas(): ListaTarea {
        return this.listaDeTareas;
    }
    /**
    * @function getListaDeTareasCompletas 
    * esto devuelve la lista de tareas completas
    *
    */
    public getListaDeTareasCompletas(): ListaTarea {
        return this.listaDeTareasCompletadas;
    }
    /**
    * @function cargarTareasCompletas
    * se encarga de recorer la lista de tareas incompletas y pasar a la lista de tareas completas las tareas que tengan el valor avance 100
    *
    */ 
    public cargarTareasCompletas():void{
        let tarea:Tarea;
        let listaAux = this.listaDeTareas;
        let listaAux2 = new ListaTarea;


        while(listaAux.getHead()){
            tarea = listaAux.pop();
            if(tarea.getAvance() === 100){
                this.listaDeTareasCompletadas.insertOrdered(tarea);
            } else {
                listaAux2.insertOrdered(tarea);
            }
        }
        this.listaDeTareas = listaAux2;
        listaAux.clear();
        listaAux2.clear();
    }

    private decidirTipoBusqueda(actionBusqueda: string) {

        if (actionBusqueda === "Titulo" || actionBusqueda === "titulo") {
            this.contextoBusqueda.setEstrategia(new BusquedaPorTitulo());
        } else if (actionBusqueda === "Fecha" || actionBusqueda === "fecha") {
            this.contextoBusqueda.setEstrategia(new BusquedaPorFecha());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
        }
    }

    public setActionBusqueda(valor: string){
        this.actionBusqueda = valor;
    }

    public buscadorFunc(lista: ListaTarea, valor: objetoBusqueda): Tarea{
        this.decidirTipoBusqueda(this.actionBusqueda)
        let result = this.contextoBusqueda.buscar(lista, valor);
        return result;
    }

    private decidirTipoOrdenamiento(actionOrdenar: string) {

        if (actionOrdenar === "Titulo" || actionOrdenar === "titulo") {
           this.contextoOrdenamiento.setEstrategia(new OrdenarPorTitulo());
        } else if (actionOrdenar === "Fecha" || actionOrdenar === "fecha") {
            this.contextoOrdenamiento.setEstrategia(new OrdenarPorFecha());
        } else if (actionOrdenar === "Prioridad" || actionOrdenar === "prioridad") {
            this.contextoOrdenamiento.setEstrategia(new OrdenarPorPrioridad());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
        }
    }
    
    public ordenarFunc(lista: ListaTarea, actionOrdenar: string) {
        this.decidirTipoOrdenamiento(actionOrdenar);
        this.contextoOrdenamiento.ordenar(lista);
    }
}