import CustomFileClass from "../file/file";
import path from "path";
import { InterfazLeerJSON } from "./InterfazLeerJSON";
import ListaTarea from "../Listas/ListaTarea";
import Tarea from "../clases/Tarea";



export class LeerJSON implements InterfazLeerJSON{

    public async listaTareasIncompleta(): Promise<ListaTarea>{
        let lista = new ListaTarea();
        let tarea: Tarea;
        
        const file: CustomFileClass = new CustomFileClass();
        
        file.open(path.resolve("LECHUGA.json"), "r");
        
        let parametro = await file.readAll();
        
        file.close();

        // Parsear el JSON
        const jsonData = JSON.parse(parametro);

        // Recorrer la lista y agregar las tareas
        let nodoActual = jsonData.head;
        while (nodoActual) {
            const datosTarea = nodoActual._value;
            tarea = new Tarea(
                datosTarea.titulo,
                datosTarea.descripcion,
                datosTarea.fechaVec,
                datosTarea.prioridad,
                datosTarea.categoria,
                datosTarea.etiqueta,
            );
            lista.push(tarea);
            nodoActual = nodoActual._next; // Avanzar al siguiente nodo
        }

        return lista;
    }

    public async listaTareasCompleta(): Promise<ListaTarea>{
        let lista = new ListaTarea();
        let tarea: Tarea;

        const file: CustomFileClass = new CustomFileClass();
       
        file.open(path.resolve("tarea.json"), "r");
        
        let parametro = await file.readAll();
        
        file.close();

        // Parsear el JSON
        const jsonData = JSON.parse(parametro);

        // Recorrer la lista enlazada y agregar las tareas
        let nodoActual = jsonData.head;
        while (nodoActual) {
            const datosTarea = nodoActual._value;
            tarea = new Tarea(
                datosTarea.getTitulo,
                datosTarea.descripcion,
                datosTarea.fechaVec,
                datosTarea.prioridad,
                datosTarea.categoria,
                datosTarea.etiqueta,
            );
            lista.push(tarea);
            nodoActual = nodoActual._next; // Avanzar al siguiente nodo
        }

        return lista;
    }
}

/*
    file.open(path.resolve("tarea.json"), "r");
        
        let parametro="";

        for await(const line of file.readLine()) {
            parametro = line;
            tarea = JSON.parse(parametro);
            lista.push(tarea);
        }
        file.close();

        return lista;
    }
{"head":{"_value":{"titulo":"Titulo5","descripcion":"tarea de prueba 5","fechaVec":19801015,"prioridad":2,"categoria":"Persona","etiqueta":"etiquetas genericas","avance":0},
"_next":{"_value":{"titulo":"Titulo2","descripcion":"tarea de prueba 2","fechaVec":20200513,"prioridad":1,"categoria":"Automovil","etiqueta":"etiquetas genericas","avance":0},
"_next":{"_value":{"titulo":"Titulo8","descripcion":"tarea de prueba 8","fechaVec":19990201,"prioridad":0,"categoria":"Comida","etiqueta":"etiquetas genericas","avance":0}}}}}

*/
