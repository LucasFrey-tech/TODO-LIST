import CustomFileClass from "../file/file";
import path from "path";
import Tarea from "../clases/Tarea";

export default class CargarArchivoJSON{

    public cargarListaIncompleta(tarea: Tarea) {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaIncompleta.json"), "a"); //apend -> agregar
        file.writeToFile(JSON.stringify(tarea));
        file.close();
    }

    public cargarListaCompleta(tarea: Tarea){
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaCompleta.json"), "a");
        file.writeToFile(JSON.stringify(tarea));
        file.close();    
    }
}