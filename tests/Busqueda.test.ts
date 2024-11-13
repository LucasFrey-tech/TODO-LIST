import { mock } from 'jest-mock-extended'
import BuscadorDeTarea from '../src/clases/auxiliar/busqueda/buscadarDeTarea';
import BusquedaPorTitulo from '../src/clases/auxiliar/busqueda/BusquedaPorTitulo';
import BusquedaPorFecha from '../src/clases/auxiliar/busqueda/busquedaPorFec';
import { Prioridad } from '../src/Enum/Prioridad';
import Tarea from '../src/clases/Tarea'; // Asegúrate de que la clase Tarea esté correctamente definida
import ListaTarea from '../src/Listas/ListaTarea';



describe('BuscadorDeTarea Strategy Pattern', () => {

    function cargarTareas(): void {
        mockTarea1.getTitulo.mockReturnValue("Titulo1");
        mockTarea1.getDescripcion.mockReturnValue("Descripcion Prueba");
        mockTarea1.getFechaVec.mockReturnValue(20241015);
        mockTarea1.getPrioridad.mockReturnValue(Prioridad.ALTA);
        mockTarea1.getCategoria.mockReturnValue("Categoria Prueba");
        mockTarea1.getEtiqueta.mockReturnValue("Etiqueta Prueba");
        mockTarea1.getAvance.mockReturnValue(50);

        mockTarea2.getTitulo.mockReturnValue("Titulo2 Prueba");
        mockTarea2.getDescripcion.mockReturnValue("Descripcion Prueba");
        mockTarea2.getFechaVec.mockReturnValue(20201010);
        mockTarea2.getPrioridad.mockReturnValue(Prioridad.MEDIA);
        mockTarea2.getCategoria.mockReturnValue("Categoria Prueba");
        mockTarea2.getEtiqueta.mockReturnValue("Etiqueta Prueba");
        mockTarea2.getAvance.mockReturnValue(50);

        mockTarea3.getTitulo.mockReturnValue("Comprar Pan");
        mockTarea3.getDescripcion.mockReturnValue("Descripcion Prueba");
        mockTarea3.getFechaVec.mockReturnValue(20241113);
        mockTarea3.getPrioridad.mockReturnValue(Prioridad.BAJA);
        mockTarea3.getCategoria.mockReturnValue("Categoria Prueba");
        mockTarea3.getEtiqueta.mockReturnValue("Etiqueta Prueba");
        mockTarea3.getAvance.mockReturnValue(50);
    }

    function setAction(valor: string) {
        action = valor;
    }

    function decidirTipo(action: string) {

        if (action === "Titulo") {
           contexto.setEstrategia(new BusquedaPorTitulo());
        } else if (action === "Fecha") {
            contexto.setEstrategia(new BusquedaPorFecha());
        } else {
            console.log("OPCION NO VALIDA");
            return;
        }
    }
    const contexto = new BuscadorDeTarea(new BusquedaPorTitulo());
    let action: string;

    let mockLista = mock<ListaTarea>();
    let mockTarea1 = mock<Tarea>();
    let mockTarea2 = mock<Tarea>();
    let mockTarea3 = mock<Tarea>();

    beforeEach(() => {
       
    });

    test('Debe buscar por título correctamente', () => {
        cargarTareas();
        mockLista.push(mockTarea1);
        mockLista.push(mockTarea2);
        mockLista.push(mockTarea3);
        
        setAction("Titulo");
        decidirTipo(action);
        const result = contexto.buscar(mockLista, "Titulo1");
        
        console.log(result);
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
    
    const result = this.contextBusq.buscar(lista, "Titulo1");
*/