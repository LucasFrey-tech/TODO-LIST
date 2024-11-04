import APP from "../../src/clases/APP";
//import { mock } from "jest-mock-extended" ¿?
import Lista from "../../src/Listas/Lista";
import Tarea from "../../src/clases/Tarea";

describe("test de la clase Aplicaicon", ()=>{

    let instance: APP;

    beforeEach(()=>{
        instance = new APP();
    });

    test("Verificamos la Creacion de tarea", () => {
        /*---usando el crearDesdeApp()---;
        instance.crearDesdeApp();
        expect(instance.getTarea().getTitulo()).toBe("LUCHUGA");
        */

        //Llamando al set direcamente
        instance.getTarea().setTitulo("HOLA");
        expect(instance.getTarea().getTitulo()).toBe("HOLA");

        const tarea:Tarea = instance.getTarea();
        tarea.getTitulo()

    });

});