import CargarArchivoJSON from "./archivos JSON/CargarJSON";
import { LeerArchivoJSON } from "./archivos JSON/leerJSON";
import Aplicacion from "./clases/Aplicacion";
import BuscadorDeTarea from "./clases/auxiliar/busqueda/buscadarDeTarea";
import { CriterioBusqueda } from "./clases/auxiliar/busqueda/criterioBusqueda";
import EditarTarea from "./clases/auxiliar/editarTarea";
import Tarea from "./clases/Tarea";
import ListaTarea from "./Listas/ListaTarea";

async function main(){

    let aplicacion = new Aplicacion();
    let tarea:Tarea;

    let editar = new EditarTarea();

    let listaI = new ListaTarea();
    let listaC = new ListaTarea();

    let criterioBusqueda = new CriterioBusqueda();

    let leerJSON = new LeerArchivoJSON();
    let cargarJSON = new CargarArchivoJSON();


    //creacion y carga de tareas
    tarea = aplicacion.creardorT("Titulo55", "tarea de prueba 55", 19801015, 2, "Persona", "etiquetas genericas");
    cargarJSON.cargarListaIncompleta(tarea);
    
    tarea = aplicacion.creardorT("Titulo22", "tarea de prueba 22", 20200513, 1, "Automovil", "etiquetas genericas");
    cargarJSON.cargarListaIncompleta(tarea);
    
    tarea = aplicacion.creardorT("Titulo88", "tarea de prueba 88", 19990201, 0, "Comida", "etiquetas genericas");
    cargarJSON.cargarListaIncompleta(tarea);
   
    listaI = await leerJSON.listaTareasIncompleta();

    console.log(listaI.imprimirTodo());

}

main();