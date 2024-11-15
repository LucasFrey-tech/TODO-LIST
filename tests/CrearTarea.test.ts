import crearTarea from "../src/clases/auxiliar/crearTarea";
import Tarea from "../src/clases/Tarea";
import { mock } from 'jest-mock-extended';
import { Prioridad } from "../src/Enum/Prioridad";

describe("Test Clase Creacion Tarea", () => {

    let creadorTarea:crearTarea;
    //let tarea = mock<Tarea>;

    beforeEach(() =>{
        creadorTarea = new crearTarea();
    });

    it("Creando una tarea",() =>{
        /*tarea = creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241113, Prioridad.ALTA, "TEST", "TAREA");
        expect(tarea.getTitulo()).toBe("Tarea1");
        expect(tarea.getDescripcion()).toBe("Hola");
        expect(tarea.getFechaVec()).toBe(20241113);
        expect(tarea.getPrioridad()).toBe(Prioridad.ALTA);
        expect(tarea.getCategoria()).toBe("TEST");
        expect(tarea.getEtiqueta()).toBe("TAREA");*/
        expect(creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241113, Prioridad.ALTA, "TEST", "TAREA").getTitulo()).toBe("Tarea1");
        expect(creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241113, Prioridad.ALTA, "TEST", "TAREA").getDescripcion()).toBe("Hola");
        expect(creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241113, Prioridad.ALTA, "TEST", "TAREA").getFechaVec()).toBe(20241113);
        expect(creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241113, Prioridad.ALTA, "TEST", "TAREA").getPrioridad()).toBe(Prioridad.ALTA);
        expect(creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241113, Prioridad.ALTA, "TEST", "TAREA").getCategoria()).toBe("TEST");
        expect(creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241113, Prioridad.ALTA, "TEST", "TAREA").getEtiqueta()).toBe("TAREA");
    });
});