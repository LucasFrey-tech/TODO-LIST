import APP from "./clases/APP";
import Tarea from "./clases/Tarea";
import Lista from "./Listas/Lista";


function main(){
    let lista = new Lista<Tarea>;
    let aplicacion= new APP(lista);
    const tarea1 = new Tarea("BBBB", "Repasar clases y objetos", 20241101);
    const tarea2 = new Tarea("AAAA", "COMPRAR PAN", 20241103);

    
    lista.push(tarea1);
    lista.push(tarea2);

    lista.imprimirTodo();

    //titulo 2 este primero

    lista.sort();

    lista.imprimirTodo();

    aplicacion.busqueda(tarea1.getTitulo());


    /*
    ${JSON.stringify(figuras[i].calcularTodo())}`);
        Usuario {

            "TITULO",
            "DESCRIPCION",
            30102024    
        }

       
    
        cargarDatos(Usuario){
            setTitulo()
            setDescripcion()
            setFecha()
            set..

        } ==>  tarea["titulo", "descripcion", fecha];

        push(tarea);

        LISTA [
            tarea{"titulo", "descripcion", fecha},
            tarea2{"titulo", "descripcion", fecha},
            tarea3{"titulo", "descripcion", fecha}
        ]

    */
}

main();