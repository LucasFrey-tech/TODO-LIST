import { mock, MockProxy } from "jest-mock-extended";
import Aplicacion from "../src/clases/Aplicacion"; // Ajusta la ruta si es necesario
import ListaTarea from "../src/Listas/ListaTarea";
import Tarea from "../src/clases/Tarea"
import { objetoBusqueda } from "../src/clases/interfaces/objetoBusqueda";
import ValorNoEncontrado from "../src/excepciones/error";
import { Prioridad } from "../src/Enum/Prioridad";

describe("Aplicacion", () => {
    let app: Aplicacion;
    let mockListaTarea: MockProxy<ListaTarea>;
    let mockTarea: MockProxy<Tarea>;

    beforeEach(() => {
        app = new Aplicacion();

    });

    test("", ()=>{

    });
});