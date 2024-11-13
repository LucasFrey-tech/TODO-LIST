import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import BusquedaPorTitulo from "./auxiliar/busqueda/[NEW]busquedaTit";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";
import { BusquedaEstrategia } from "./interfaces/[NEW]BusquedaEstrategia";
import Tarea from "./Tarea";

/**
 * si yo me posiciono aca y hago esto que pasa.
 */
export default class Aplicacion{

    private listaDeTareas: ListaTarea;
    private listaDeTareasCompletadas: ListaTarea;

    private editar: EditarTarea;
    private buscador: BusquedaEstrategia;
    private creador: CrearTarea;
//-----------------------------------------------------------------------------------------

    constructor(){
        this.listaDeTareas = new ListaTarea();
        this.listaDeTareasCompletadas = new ListaTarea();

        this.creador = new CrearTarea();
        this.editar = new EditarTarea(); // por ver bien
        this.buscador = new BusquedaPorTitulo;
    }
    
    public creardorT(titulo:string, descripcion:string, fecha:number, prioridad:Prioridad, categoria:string, etiqueta:string):Tarea{
        const nuevaTarea = this.creador.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta)
        return nuevaTarea;
    }

    public agregarNuevaTarea(nuevaTarea:Tarea) {
        this.listaDeTareas.push(nuevaTarea); // principal de la funcion
    }
//-----------------------------------------------------------------------------------------
    
    public editarUnaTarea(){
        //editar tarea especifica aplicando strategia
        //this.listaDeTareas.imprimirTodo();
    }

    public eliminarUnaTarea(tarea: Tarea): Tarea{
        return this.listaDeTareas.delete(tarea);
    }

    public getListaDeTareasIncompletas(): ListaTarea {
        return this.listaDeTareas;
    }
    
    public getListaDeTareasCompletas(): ListaTarea {
        return this.listaDeTareasCompletadas;
    }
    

    public cargarTareasCompletas():void{
        let tarea:Tarea;
        let listaAux = this.listaDeTareas;
        let listaAux2 = new ListaTarea;


        while(listaAux.getHead()){
            tarea = listaAux.pop();
            if(tarea.getAvance() === 100){
                this.listaDeTareasCompletadas.push(tarea);
            } else {
                listaAux2.push(tarea);
            }
        }
        this.listaDeTareas = listaAux2;
    }

    public buscadorFunc(lista: ListaTarea, valor: any):void{
        const tarea = this.buscador.buscar(lista, 1234);
    }


}


/**
 * recorro nodo x nodo comparando con avance 100
 * si el avance es 100 madno ese nodo a listaCompleta


    public agregarNuevaTarea(titulo:string, descripcion:string, fecha:number, prioridad:Prioridad, categoria:string, etiqueta:string) {
        const nuevaTarea = CrearTarea.crearNuevaTarea(titulo, descripcion, fecha, prioridad, categoria, etiqueta);
        this.listaDeTareas.push(nuevaTarea);
    }

    
    public cargarTareasCompletas():void{
        let tarea:Tarea;
        let listaAux = new ListaTarea;
        let listaAux2

        while(this.listaDeTareas){
            tarea = this.listaDeTareas.pop();
            if(tarea.getAvance() === 100){
                this.listaDeTareasCompletadas.push(tarea);
            } else {
                listaAux.push(tarea);
            }
        }
        this.listaDeTareas = listaAux;
    }

*/