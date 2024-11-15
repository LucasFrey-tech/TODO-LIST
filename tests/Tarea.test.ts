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
       /* expect(tarea.setTitulo("Mecanico")).toHaveBeenCalled("Mecanico");
        expect(tarea.setDescripcion("Arreglar el auto")).toBe("Arreglar el auto");
        expect(tarea.setFechaVec(20201115)).toBe(20241115);
        expect(tarea.setPrioridad(0)).toBe(Prioridad.ALTA);
        expect(tarea.setCategoria("Vehiculo")).toBe("Vehiculo");
        expect(tarea.setEtiqueta("Automovil")).toBe("Automovil");
        expect(tarea.setAvance(25)).toBe(25);
    */
    });

});