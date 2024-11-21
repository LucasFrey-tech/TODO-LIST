import { LeerJSON } from "./archivos JSON/crearArchivo";
import Aplicacion from "./clases/Aplicacion";
import { CriterioBusqueda } from "./clases/auxiliar/busqueda/criterioBusqueda";
import Tarea from "./clases/Tarea";
import ListaTarea from "./Listas/ListaTarea";

async function main(){

    let aplicacion = new Aplicacion();
    let tarea:Tarea;

    let listaI = new ListaTarea();
    let listaC = new ListaTarea();

    let criterioBusqueda = new CriterioBusqueda();

    let cargarJSON = new LeerJSON()

    listaI = await cargarJSON.listaTareasIncompleta();

    //creacion y carga de tareas
    tarea = aplicacion.creardorT("Titulo55", "tarea de prueba 55", 19801015, 2, "Persona", "etiquetas genericas");
    aplicacion.agregarNuevaTarea(tarea);
    
    tarea = aplicacion.creardorT("Titulo22", "tarea de prueba 22", 20200513, 1, "Automovil", "etiquetas genericas");
    aplicacion.agregarNuevaTarea(tarea);
    
    tarea = aplicacion.creardorT("Titulo88", "tarea de prueba 88", 19990201, 0, "Comida", "etiquetas genericas");
    aplicacion.agregarNuevaTarea(tarea);
    
    listaI = aplicacion.getListaDeTareasIncompletas();

    console.log(listaI.imprimirTodo());
    
    /*
    aplicacion.setActionBusqueda("titulo");

    criterioBusqueda.titulo = "Titulo2"

    tarea = aplicacion.buscadorFunc(listaI, criterioBusqueda.toObjetoBusqueda());

    aplicacion.ordenarFunc(listaI, "titulo");
*/


    
}

main();
