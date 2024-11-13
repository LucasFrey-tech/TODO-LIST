// Importa las clases y dependencias necesarias
import BuscadorDeTarea from '../src/clases/auxiliar/busqueda/buscadarDeTarea';
import BusquedaPorTitulo from '../src/clases/auxiliar/busqueda/BusquedaPorTitulo';
import BusquedaPorFecha from '../src/clases/auxiliar/busqueda/busquedaPorFec';
import Tarea from '../src/clases/Tarea'; // Asegúrate de que la clase Tarea esté correctamente definida
import ListaTarea from '../src/Listas/ListaTarea';


describe('BuscadorDeTarea Strategy Pattern', () => {
    let buscador: BuscadorDeTarea;
    
    let mockLista: jest.Mocked<ListaTarea>;
    let mockTarea: jest.Mocked<Tarea>;

    /*
        mock tareas, no usar let tarea
    */

    beforeEach(() => {

        mockLista = new ListaTarea();
    });

    test('Debe buscar por título correctamente', () => {

    });

});

/* 
    private contextBusq = new BuscadorDeTarea();
  
    const actionBusq: string;

    public setAction(valor:string){
        this.actionBusq = valor;
    }

    public busQ(){
        if (this.actionBusq === "Titulo"){
            this.contextBusq.setEstrategia(new BusquedaPorTitulo());
        } else if (this.actionBusq === "Fecha"){
            this.contextBusq.setEstrategia(new BusquedaPorFecha());
        } else {
            throw new ValorNoEncontrado("OPCION NO VALIDA");
            return;
        }
    }
    
    const result = this.contextBusq.setEstrategia(lista, "Titulo1");
*/