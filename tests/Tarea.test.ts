import Tarea from "../src/clases/Tarea";
import { Prioridad } from "../src/Enum/Prioridad";

describe("Test de la clase Tarea.ts", ()=>{

    let tarea:Tarea;

    beforeEach(() => {
        tarea = new Tarea("Prueba1", "Descripcion Pureba 1",10000000,Prioridad.BAJA,"Categoria1","Etiqueta1");
    });

    test('Pruebo las funciones de Get', () => {
        expect(tarea.getTitulo()).toBe("Prueba1");
        expect(tarea.getDescripcion()).toBe("Descripcion Pureba 1");
        expect(tarea.getFechaVec()).toBe(10000000);
        expect(tarea.getPrioridad()).toBe(Prioridad.BAJA);
        expect(tarea.getCategoria()).toBe("Categoria1");
        expect(tarea.getEtiqueta()).toBe("Etiqueta1");
        expect(tarea.getAvance()).toBe(0);
    });

    test('Pruebo las funciones de Set', () => {

        tarea.setTitulo("Mecanico");
        tarea.setDescripcion("Arreglar el auto");
        tarea.setFechaVec(20201115);
        tarea.setPrioridad(0);
        tarea.setCategoria("Vehiculo");
        tarea.setEtiqueta("Automovil");
        tarea.setAvance(25);

        expect(tarea.getTitulo()).toBe("Mecanico");
        expect(tarea.getDescripcion()).toBe("Arreglar el auto");
        expect(tarea.getFechaVec()).toBe(20201115);
        expect(tarea.getPrioridad()).toBe(Prioridad.ALTA);
        expect(tarea.getCategoria()).toBe("Vehiculo");
        expect(tarea.getEtiqueta()).toBe("Automovil");
        expect(tarea.getAvance()).toBe(25);
    });

});