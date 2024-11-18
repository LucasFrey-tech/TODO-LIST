import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";
import Tarea from "./Tarea";


/**
 * Clase `Aplicacion` que maneja la lista de tareas y las operaciones relacionadas con ellas.
 */
export default class Aplicacion {

    private listaDeTareas: ListaTarea;
    private listaDeTareasCompletadas: ListaTarea;

    private creador: CrearTarea;
    private editar: EditarTarea;

    /**
     * Crea una nueva instancia de `Aplicacion`.
     */
    constructor() {
        this.listaDeTareas = new ListaTarea();
        this.listaDeTareasCompletadas = new ListaTarea();

        this.creador = new CrearTarea();
        this.editar = new EditarTarea();
    }

    /**
     * Crea una nueva tarea.
     * @param {string} titulo - El título de la tarea.
     * @param {string} descripcion - La descripción de la tarea.
     * @param {number} fecha - La fecha de vencimiento de la tarea.
     * @param {Prioridad} prioridad - La prioridad de la tarea.
     * @param {string} categoria - La categoría de la tarea.
     * @param {string} etiqueta - La etiqueta de la tarea.
     * @returns {Tarea} - La nueva tarea creada.
     */
    public creardorT(titulo: string, descripcion: string, fecha: number, prioridad: Prioridad, categoria: string, etiqueta: string): Tarea {
        const nuevaTarea = this.creador.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta);
        return nuevaTarea;
    }

    /**
     * Agrega una nueva tarea a la lista de tareas.
     * @param {Tarea} nuevaTarea - La nueva tarea a agregar.
     */
    public agregarNuevaTarea(nuevaTarea: Tarea) {
        this.listaDeTareas.push(nuevaTarea);
    }

    /**
     * Edita una tarea en la lista de tareas.
     * @param {Tarea} tarea - La tarea a editar.
     */
    public editarUnaTarea(tarea: Tarea) {
        this.editar.editarAvance(this.listaDeTareas, tarea, 100);
    }

    /**
     * Elimina una tarea de la lista de tareas.
     * @param {Tarea} tarea - La tarea a eliminar.
     * @returns {Tarea} - La tarea eliminada.
     */
    public eliminarUnaTarea(tarea: Tarea): Tarea {
        return this.listaDeTareas.delete(tarea);
    }

    /**
     * Obtiene la lista de tareas incompletas.
     * @returns {ListaTarea} - La lista de tareas incompletas.
     */
    public getListaDeTareasIncompletas(): ListaTarea {
        return this.listaDeTareas;
    }

    /**
     * Obtiene la lista de tareas completadas.
     * @returns {ListaTarea} - La lista de tareas completadas.
     */
    public getListaDeTareasCompletas(): ListaTarea {
        return this.listaDeTareasCompletadas;
    }

    /**
     * Carga las tareas completadas en la lista de tareas completadas.
     */
    public cargarTareasCompletas(): void {
        let tarea: Tarea;
        let listaAux = this.listaDeTareas;
        let listaAux2 = new ListaTarea;

        while (listaAux.getHead()) {
            tarea = listaAux.pop();
            if (tarea.getAvance() === 100) {
                this.listaDeTareasCompletadas.insertOrdered(tarea);
            } else {
                listaAux2.insertOrdered(tarea);
            }
        }
        this.listaDeTareas = listaAux2;
        listaAux.clear();
        listaAux2.clear();
    }



    public buscadorFunc(lista: ListaTarea, valor: any):void{
        
    }

    public ordenarFunc(){
        
    }


}