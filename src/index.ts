import Aplicacion from "./clases/Aplicacion";
import { CriterioBusqueda } from "./clases/auxiliar/busqueda/criterioBusqueda";
import Tarea from "./clases/Tarea";
import { Prioridad } from "./Enum/Prioridad";
import ListaTarea from "./Listas/ListaTarea";


/**
 * Probando como funciona typedoc
 */
function main(){
    let aplicacion = new Aplicacion();
    let tarea:Tarea
    let lista = new ListaTarea();

    let criterioBusqueda = new CriterioBusqueda();

    //creacion y carga de tareas
    tarea = aplicacion.creardorT("Titulo5", "tarea de prueba 5", 19801015, 2, "Persona", "etiquetas genericas");
    aplicacion.agregarNuevaTarea(tarea);
    
    tarea = aplicacion.creardorT("Titulo2", "tarea de prueba 2", 20200513, 1, "Automovil", "etiquetas genericas");
    aplicacion.agregarNuevaTarea(tarea);
    
    tarea = aplicacion.creardorT("Titulo8", "tarea de prueba 8", 19990201, 0, "Comida", "etiquetas genericas");
    aplicacion.agregarNuevaTarea(tarea);
    
    lista = aplicacion.getListaDeTareasIncompletas();
    
    
    aplicacion.setActionBusqueda("titulo");

    criterioBusqueda.titulo = "Titulo2"

    tarea = aplicacion.buscadorFunc(lista, criterioBusqueda.toObjetoBusqueda());

    aplicacion.ordenarFunc(lista, "titulo");

}

main();
