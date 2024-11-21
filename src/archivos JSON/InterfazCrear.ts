import Tarea from "../clases/Tarea";


export interface InterfazCrear {
    crearListaIncompleta(tarea: Tarea): void;
    crearListaCompleta(tarea: Tarea): void;
}