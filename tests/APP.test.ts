import Aplicacion from "../src/clases/Aplicacion";
import Tarea from "../src/clases/Tarea";
import ListaTarea from "../src/Listas/ListaTarea";
import { Prioridad } from "../src/Enum/Prioridad";


describe("test de la clase APP", () => {

    let aplicacion: Aplicacion;
    let fechaTst: number;


    //mock tarea
    beforeEach(() => {
        aplicacion = new Aplicacion();
        fechaTst = 20241107;
    });

    test("agregar una nueva tarea", () => {
        aplicacion.agregarNuevaTarea("titulo", "descripcion", fechaTst, Prioridad.ALTA, "TRABAJO", "etiqueta");
        const lista = aplicacion.getListaDeTareas();
        lista.imprimirTodo();
    });

    test("eliminar una tarea de la lista", ()=>{
        aplicacion.agregarNuevaTarea("titulo2", "descripcion2", fechaTst, Prioridad.BAJA, "TRABAJO2", "etiqueta2");
        const lista = aplicacion.getListaDeTareas();
        lista.imprimirTodo();
    });

    test("edito una tarea de la lista", ()=>{
        aplicacion.agregarNuevaTarea("titulo2", "descripcion2", fechaTst, Prioridad.BAJA, "TRABAJO2", "etiqueta2");
        const lista = aplicacion.getListaDeTareas();
        lista.imprimirTodo();
    });
/*
    test("pasar de una lista a otra", ()=>{
        aplicacion.cargarTareasCompletas();
    });
*/
});

/**
 * preguntar si hay que usar mock si tiene un objeto dentro la calse
 */
