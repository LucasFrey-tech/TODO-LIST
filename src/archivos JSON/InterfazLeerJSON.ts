import ListaTarea from "../Listas/ListaTarea";

export interface InterfazLeerJSON {
    listaTareasIncompleta(): Promise<ListaTarea>;
    listaTareasCompleta(): Promise<ListaTarea>;
}