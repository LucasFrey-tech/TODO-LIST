import ListaTarea from "../Listas/ListaTarea";

export interface iLeerJSON{
    listaTareasIncompleta(): Promise<ListaTarea>;
    listaTareasCompleta(): Promise<ListaTarea>;
}