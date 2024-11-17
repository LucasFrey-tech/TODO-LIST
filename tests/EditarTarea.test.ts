import { mock } from "jest-mock-extended";
import { Prioridad } from "../src/Enum/Prioridad";
import Tarea from "../src/clases/Tarea";
import ListaTarea from "../src/Listas/ListaTarea";
import EditarTarea from "../src/clases/auxiliar/editarTarea";
import NodoTarea from "../src/Listas/NodoTarea";

describe('EditarTarea - Lista con múltiples tareas', () => {
    let editarFunc: EditarTarea;
    let mockListaTarea = mock<ListaTarea>();

    let mockTarea1 = mock<Tarea>();
    let mockTarea2 = mock<Tarea>();

    let mockNodoTarea1 = mock<NodoTarea>();
    let mockNodoTarea2 = mock<NodoTarea>();

    function cargarLista() {
        // Mock de la lista: simulamos que contiene varios nodos
        mockListaTarea.search.mockImplementation((tarea) => {
            if (tarea === mockTarea1) return mockNodoTarea1 as unknown as NodoTarea;
            if (tarea === mockTarea2) return mockNodoTarea2 as unknown as NodoTarea;
            return null as unknown as NodoTarea;
        });
    }

    function cargarNodos() {
        // Configurar los nodos para que apunten a las tareas respectivas
        Object.defineProperty(mockNodoTarea1, 'value', {
            get: jest.fn(() => mockTarea1),
        });

        Object.defineProperty(mockNodoTarea2, 'value', {
            get: jest.fn(() => mockTarea2),
        });
    }

    beforeEach(() => {
        editarFunc = new EditarTarea();
        mockListaTarea = mock<ListaTarea>();

        mockTarea1 = mock<Tarea>();

        mockNodoTarea1 = mock<NodoTarea>();
        mockNodoTarea2 = mock<NodoTarea>();

        cargarNodos();
        cargarLista();

    });

    test("Editar el titulo de la tarea 1 y tarea 2", () => {

        const tituloPrueba = "Panaderia";

        // Ejecutar el método para editar mockTarea1
        editarFunc.editarTitulo(mockListaTarea, mockTarea1, tituloPrueba);
        editarFunc.editarTitulo(mockListaTarea, mockTarea2, "Mecanico");

        // Verificar que se edita el titulo de la tarea especifica
        expect(mockTarea1.setTitulo).toHaveBeenCalledWith(tituloPrueba);
        expect(mockTarea2.setTitulo).toHaveBeenCalledWith("Mecanico");

        console.log(mockListaTarea.imprimirTodo());
    });

    test("Editar la descripcion de la tarea 2 y 3", () => {
        const descripcionPrueba = "Comprar 2kg de pan";

        // Ejecutar el método para editar mockTarea1
        editarFunc.editarDescripcion(mockListaTarea, mockTarea1, descripcionPrueba);
        editarFunc.editarDescripcion(mockListaTarea, mockTarea2, "LLevar el auto al mecanico");

        // Verificar que se edita la descripcion de la tarea especifica
        expect(mockTarea1.setTitulo).toHaveBeenCalledWith(descripcionPrueba);
        expect(mockTarea2.setTitulo).toHaveBeenCalledWith("LLevar el auto al mecanico");

    });

});