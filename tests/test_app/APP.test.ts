import APP from "../../src/clases/APP";
//import { mock } from "jest-mock-extended"
import Lista from "../../src/Listas/Lista";
import Tarea from "../../src/clases/Tarea";
/*
describe("test de la clase tarea", () =>{
    let instance: Tarea;

    beforeEach(()=>{
        instance = new Tarea("HOLA", "tengo HAmbre", 20240506);
    });
    it("verifico que me devuelva el titulo asignado", ()=>{
        const resultado = instance.getTitulo();
        expect(resultado).toEqual("HOLA");
    });

});*/

describe("test de la clase Aplicaicon", ()=>{

    let instance: APP;

    beforeEach(()=>{
        instance = new APP();
    });

    test("Verificamos la asignacion de tarea", () => {
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