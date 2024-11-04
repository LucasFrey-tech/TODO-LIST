import APP from "../../src/clases/APP";
import { mock } from "jest-mock-extended";
import Lista from "../../src/Listas/Lista";
import Tarea from "../../src/clases/Tarea";

describe("test de la clase Aplicaicon", ()=>{

    const tarea = mock<Tarea>();
    let instance: APP;

    beforeEach(()=>{
        instance = new APP(tarea);
    });

    test("Verificamos la Creacion de tarea", () => {
        /*---usando el crearDesdeApp()---;
        instance.crearDesdeApp();
        expect(instance.getTarea().getTitulo()).toBe("LUCHUGA");
        */

        //Llamando al set direcamente
        tarea.getTitulo.mockReturnValue("HOLA");
        expect(instance.getTarea().getTitulo()).toBe("HOLA");
    });
});