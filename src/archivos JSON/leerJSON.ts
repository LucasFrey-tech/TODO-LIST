import CustomFileClass from "../file/file";
import path from "path";
import ListaTarea from "../Listas/ListaTarea";
import Tarea from "../clases/Tarea";
import { iLeerJSON } from "./iLeerJSON";



export class LeerArchivoJSON implements iLeerJSON{

    public async listaTareasIncompleta(): Promise<ListaTarea>{
        let lista = new ListaTarea();
        let tarea:Tarea;

        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaIncompleta.json"), "r");
            

        for await(const line of file.readLine()) {
            const jsonString = line;
            const jsonObject = JSON.parse(jsonString);

            tarea = new Tarea(
                jsonObject.titulo,
                jsonObject.descripcion,
                jsonObject.fechaVec,
                jsonObject.categoria,
                jsonObject.etiqueta,
                jsonObject.prioridad,
            );
            lista.push(tarea);    
        }
        file.close();
        return lista;
    }

    public async listaTareasCompleta(): Promise<ListaTarea>{
        let lista = new ListaTarea();
        let tarea:Tarea;

        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaCompleta.json"), "r");
            

        for await(const line of file.readLine()) {
            const jsonString = line;
            const jsonObject = JSON.parse(jsonString);

            tarea = new Tarea(
                jsonObject.titulo,
                jsonObject.descripcion,
                jsonObject.fechaVec,
                jsonObject.categoria,
                jsonObject.etiqueta,
                jsonObject.prioridad,
            );
            lista.push(tarea);    
        }
        file.close();
        return lista;
    }
}
