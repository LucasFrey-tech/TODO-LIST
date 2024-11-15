import crearTarea from "../src/clases/auxiliar/crearTarea";
import Tarea from "../src/clases/Tarea";
import { mock } from 'jest-mock-extended';
import { Prioridad } from "../src/Enum/Prioridad";

describe("Test Clase Creacion Tarea", () => {

    let creadorTarea:crearTarea;

    beforeEach(() =>{
        creadorTarea = new crearTarea();
    });

    it("Creando una tarea",() =>{
        const tarea = creadorTarea.crearNuevaTarea("Tarea1", "Hola", 20241114, Prioridad.ALTA, "TEST", "TAREA");
        expect(tarea).toBeInstanceOf(Tarea);
        expect(tarea.getTitulo()).toBe("Tarea1");
        expect(tarea.getDescripcion()).toBe("Hola");
        expect(tarea.getFechaVec()).toBe(20241114);
        expect(tarea.getPrioridad()).toBe(Prioridad.ALTA);
        expect(tarea.getCategoria()).toBe("TEST");
        expect(tarea.getEtiqueta()).toBe("TAREA");
    });
});