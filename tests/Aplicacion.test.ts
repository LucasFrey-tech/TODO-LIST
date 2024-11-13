import Aplicacion from "../src/clases/Aplicacion";
import Tarea from "../src/clases/Tarea";
import ListaTarea from "../src/Listas/ListaTarea";
import { Prioridad } from "../src/Enum/Prioridad";


describe("test de la clase Aplicacion", () => {

    let aplicacion: Aplicacion;
    let tarea:Tarea;
    let lista: ListaTarea;
    let tarea2: Tarea;
    let tarea3: Tarea;
    let tarea4: Tarea;
    let tarea5: Tarea;
    
    
    beforeEach(() => {
        aplicacion = new Aplicacion();
        lista = new ListaTarea();
    });

    test("crear una nueva tarea", () => {
        tarea = aplicacion.creardorT("Titulo1", "Descripcion de la tarea 1", 20241111, Prioridad.ALTA, "TABALO", "PERSIANA");
        expect(tarea.getTitulo()).toBe("Titulo1");
        expect(tarea.getDescripcion()).toBe("Descripcion de la tarea 1");
        expect(tarea.getFechaVec()).toBe(20241111);
        expect(tarea.getPrioridad()).toBe(Prioridad.ALTA);
        expect(tarea.getCategoria()).toBe("TABALO");
        expect(tarea.getEtiqueta()).toBe("PERSIANA");
        expect(tarea.getAvance()).toBe(0);


        tarea2 = aplicacion.creardorT("Titulo2", "Descripcion de la tarea 2", 22222222, Prioridad.ALTA, "TABALO", "PERSIANA");
        tarea3 = aplicacion.creardorT("Titulo3", "Descripcion de la tarea 3", 33333333, Prioridad.ALTA, "TABALO", "PERSIANA");
        tarea4 = aplicacion.creardorT("Titulo4", "Descripcion de la tarea 4", 44444444, Prioridad.ALTA, "TABALO", "PERSIANA");
        tarea5 = aplicacion.creardorT("Titulo5", "Descripcion de la tarea 5", 55555555, Prioridad.ALTA, "TABALO", "PERSIANA");
    });
    
    test("agregar una tarea a la lista", ()=>{
        aplicacion.agregarNuevaTarea(tarea);
        aplicacion.agregarNuevaTarea(tarea2);
        aplicacion.agregarNuevaTarea(tarea3);
        aplicacion.agregarNuevaTarea(tarea4);
        aplicacion.agregarNuevaTarea(tarea5);
        
        aplicacion.getListaDeTareasIncompletas().imprimirTodo();
    });

    test("ELIMINAR TAREA", ()=>{
        aplicacion.agregarNuevaTarea(tarea5);
        aplicacion.agregarNuevaTarea(tarea2);
        aplicacion.agregarNuevaTarea(tarea3);

        aplicacion.getListaDeTareasIncompletas()
        
        aplicacion.eliminarUnaTarea(tarea3);
        aplicacion.eliminarUnaTarea(tarea2);

        aplicacion.getListaDeTareasIncompletas().imprimirTodo();
    });
    
});