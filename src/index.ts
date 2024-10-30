import APP from "./clases/APP";
import Tarea from "./clases/Tarea";
import Lista from "./Listas/Lista";


function main(){
    let lista = new Lista<Tarea>;
    let aplicacion= new APP(lista);

    const tarea1 = new Tarea("BBBB", "Repasar clases y objetos", 20241101);
    const tarea2 = new Tarea("AAAA", "COMPRAR PAN", 20241103);
    const tarea3 = new Tarea("CCCC", "COMPRAR LECHUGA", 20221103);

    
    lista.push(tarea1);
    lista.push(tarea2);
    lista.push(tarea3);

    lista.imprimirTodo();

    console.log("----------------------------------------------------");
    console.log();
    console.log();

    

//    const nodoEncontrado1 = aplicacion.busqueda("AAA");
//    console.log(nodoEncontrado1 ? `Nodo encontrado: ${nodoEncontrado1.value.titulo}` : "Nodo no encontrado");

    console.log(aplicacion.busqueda("AAA"));


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
            tarea1{"titulo", "descripcion", fecha},
            tarea2{"titulo", "descripcion", fecha},
            tarea3{"titulo", "descripcion", fecha}
        ]

    */
}

main();