import ListaTarea from "../Listas/ListaTarea";

export default class Estadistica {

    public getPorcentajeCompletada(listaIncompleta: ListaTarea, listaCompleta: ListaTarea): number{
        let cantidadIncompletas = 0;
        let cantidadCompletas = 0;

        let auxHeadIncompleta = listaIncompleta.getHead();
        let auxHeadCompleta = listaIncompleta.getHead();

        while(auxHeadIncompleta) {
            cantidadIncompletas++;
            auxHeadIncompleta = auxHeadIncompleta.next;
        }

        while(auxHeadCompleta) {
            cantidadCompletas++;
            auxHeadCompleta = auxHeadCompleta.next;
        }

        return (cantidadCompletas / (cantidadIncompletas + cantidadCompletas))*100;
    }
    

}
/*
    tareas incompletas: 30
    tareas completas 50
    total: 80 -> 100%

    regla de 3

    (50 / 80) * 100
*/

/*
Seguimiento del progreso y estadísticas
La aplicación debe ofrecer un listado de las tareas completadas y pendientes.
La aplicación debe ofrecer un listado con estadísticas sobre:
las tasas de finalización de tareas,
el tiempo dedicado a las tareas
 y otras métricas relevantes.
*/