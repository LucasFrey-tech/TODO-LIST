import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import BuscadorTarea from "./auxiliar/busqueda";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";
import Tarea from "./Tarea";

/**
 * si yo me posiciono aca y hago esto que pasa.
 */
export default class Aplicacion{

    private listaDeTareas: ListaTarea;
    private listaDeTareasCompletadas: ListaTarea;
    private editar: EditarTarea;

/**
 * @param constructor.
 */
    constructor(){
        this.listaDeTareas = new ListaTarea();
        this.listaDeTareasCompletadas = new ListaTarea();
        this.editar = new EditarTarea();
    }
    
    //por ahora opcion para crear tareas, reveer con Ale 
    public agregarNuevaTarea(titulo:string, descripcion:string, fecha:number, prioridad:Prioridad, categoria:string, etiqueta:string) {
        const nuevaTarea = CrearTarea.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta);
        this.listaDeTareas.push(nuevaTarea);
    }

    public editarUnaTarea(){
        //editar tarea especifica
    }

    public eliminarUnaTarea(tarea: Tarea): Tarea{
        return this.listaDeTareas.delete(tarea);;
    }

    public getListaDeTareas(): ListaTarea {
        return this.listaDeTareas;
    }

    public cargarTareasCompletas():void{
        let tarea:Tarea;
        let listaAux = new ListaTarea;

        listaAux = this.listaDeTareas;

        while(listaAux){
            tarea = listaAux.pop();
            if(tarea.getAvance() == 100){
                this.listaDeTareasCompletadas.push(tarea);
            }
        }
        this.listaDeTareas = listaAux;
    }
}
/**
 * recorro nodo x nodo comparando con avance 100
 * si el avance es 100 madno ese nodo a listaCompleta
*/