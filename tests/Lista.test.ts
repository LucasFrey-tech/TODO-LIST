
import ListaTarea from "../src/Listas/ListaTarea";
import NodoTarea from "../src/Listas/NodoTarea";
import { Prioridad } from "../src/Enum/Prioridad";
import { mock } from "jest-mock-extended";
import Tarea from "../src/clases/Tarea";


describe("Prueba de la clase ListaTarea", () => {
    let listaTarea:ListaTarea;
    let tarea1 = mock<Tarea>();
    let tarea2 = mock<Tarea>();
    let head: NodoTarea;

    function cargarTarea(){
        tarea1.getTitulo.mockImplementation(() => "tarea1");
        tarea1.getDescripcion.mockImplementation(() => "Hola");
        tarea1.getFechaVec.mockImplementation(() => 20241115);
        tarea1.getPrioridad.mockImplementation(() => Prioridad.ALTA);
        tarea1.getCategoria.mockImplementation(() => "TEST");
        tarea1.getEtiqueta.mockImplementation(() => "TAREA");
        tarea1.getAvance.mockImplementation(() => 0);

        tarea2.getTitulo.mockImplementation(() => "tarea2");
        tarea2.getDescripcion.mockImplementation(() => "Hola");
        tarea2.getFechaVec.mockImplementation(() => 20241115);
        tarea2.getPrioridad.mockImplementation(() => Prioridad.ALTA);
        tarea2.getCategoria.mockImplementation(() => "TEST");
        tarea2.getEtiqueta.mockImplementation(() => "TAREA");
        tarea2.getAvance.mockImplementation(() => 0);
    }

    beforeEach(() =>{
        cargarTarea();
        head = new NodoTarea(tarea1);
        listaTarea = new ListaTarea();
    });
    
    test("Prueba del set", () => {
        listaTarea.setHead(head);
        expect(listaTarea.getHead()).toBeInstanceOf(NodoTarea);
    });
    
    test("Prueba del get", () => {
        listaTarea.setHead(head);
        expect(listaTarea.getHead().value.getTitulo()).toBe("tarea1");
        expect(listaTarea.getHead().value.getDescripcion()).toBe("Hola");
        expect(listaTarea.getHead().value.getFechaVec()).toBe(20241115);
        expect(listaTarea.getHead().value.getPrioridad()).toBe(Prioridad.ALTA);
        expect(listaTarea.getHead().value.getCategoria()).toBe("TEST");
        expect(listaTarea.getHead().value.getEtiqueta()).toBe("TAREA"); 
        expect(listaTarea.getHead().value.getAvance()).toBe(0);
    });
    
    test("Prueba del push", () => {
        listaTarea.setHead(head);
        listaTarea.push(tarea2);
        
        expect(listaTarea.getHead().next.value).toBe(tarea2);
        console.log(listaTarea.imprimirTodo());
    });
    
    /*
    test("Prueba del pop", () => {
        listaTarea.setHead(head);
        listaTarea.push(tarea2);

        let tareaPopeada = listaTarea.pop();

        //expect(listaTarea.pop()).toBeInstanceOf(Tarea);
        expect(tareaPopeada).toBeInstanceOf(Tarea);

    });*/
    
});