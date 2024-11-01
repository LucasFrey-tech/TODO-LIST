import APP from "../../src/clases/APP";
import { mock } from "jest-mock-extended"
import Lista from "../../src/Listas/Lista";
import Tarea from "../../src/clases/Tarea";

describe("test de la clase tarea", () =>{
    let instance: Tarea;

    beforeEach(()=>{
        instance = new Tarea("HOLA", "tengo HAmbre", 20240506);
    });
    it("verifico que me devuelva el titulo asignado", ()=>{
        const resultado = instance.getTitulo();
        expect(resultado).toEqual("HOLA");
    });

});

describe("test de la clase Aplicaicon", ()=>{

    let instance: APP;

    test('Mockiamos la Tarea', () => {

        const mockTarea = mock<Tarea>();

        mockTarea.mostrarDetalles();

        //instance.crearDesdeApp();   
        
        expect(mockTarea.getTitulo()).toBe("LECHUGA");
       
    });

});