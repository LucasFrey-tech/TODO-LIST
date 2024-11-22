import CustomFileClass from "../file/file";
import { InterfazCrear } from "./InterfazCrear";
import path from "path";
import Tarea from "../clases/Tarea";

export default class CargarJSON implements InterfazCrear {

    public crearListaIncompleta(tarea: Tarea): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaIncompleta.json"), "a");
        file.writeToFile(JSON.stringify(tarea));
        file.close();
    }

    public crearListaCompleta(tarea: Tarea): void {
        const file: CustomFileClass = new CustomFileClass();
        file.open(path.resolve("listaCompleta.json"), "a");
        file.writeToFile(JSON.stringify(tarea));
        file.close();    
    }
}