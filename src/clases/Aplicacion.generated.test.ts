import { objetoBusqueda } from "./interfaces/objetoBusqueda";
import { Prioridad } from "../Enum/Prioridad";
import ListaTarea from "../Listas/ListaTarea";
import CrearTarea from "./auxiliar/crearTarea";
import EditarTarea from "./auxiliar/editarTarea";
import Tarea from "./Tarea";
import BuscadorDeTarea from "./auxiliar/busqueda/buscadarDeTarea";
import BusquedaPorTitulo from "./auxiliar/busqueda/busquedaPorTitulo";
import BusquedaPorFecha from "./auxiliar/busqueda/busquedaPorFec";
import OrdenarPorPrioridad from "./auxiliar/ordenamiento/ordenarPorPrioridad";
import OrdenarPorFecha from "./auxiliar/ordenamiento/ordenarPorFecha";
import OrdenarPorTitulo from "./auxiliar/ordenamiento/ordenarPorTitulo";
import OrdenarTareas from "./auxiliar/ordenamiento/ordenarTarea";
import ValorNoEncontrado from "../excepciones/error";
import Aplicacion from "./Aplicacion";

jest.mock("./interfaces/objetoBusqueda");
jest.mock("../Enum/Prioridad");
jest.mock("../Listas/ListaTarea");
jest.mock("./auxiliar/crearTarea");
jest.mock("./auxiliar/editarTarea");
jest.mock("./Tarea");
jest.mock("./auxiliar/busqueda/buscadarDeTarea");
jest.mock("./auxiliar/busqueda/busquedaPorTitulo");
jest.mock("./auxiliar/busqueda/busquedaPorFec");
jest.mock("./auxiliar/ordenamiento/ordenarPorPrioridad");
jest.mock("./auxiliar/ordenamiento/ordenarPorFecha");
jest.mock("./auxiliar/ordenamiento/ordenarPorTitulo");
jest.mock("./auxiliar/ordenamiento/ordenarTarea");
jest.mock("../excepciones/error");

describe('Aplicacion', () => {
  let instance: Aplicacion;

  beforeEach(() => {
    instance = new Aplicacion();
  });

  it('instance should be an instanceof Aplicacion', () => {
    expect(instance instanceof Aplicacion).toBeTruthy();
  });

  it('should have a method creardorT()', () => {
    // instance.creardorT(titulo,descripcion,fecha,prioridad,categoria,etiqueta);
    expect(false).toBeTruthy();
  });

  it('should have a method agregarNuevaTarea()', () => {
    // instance.agregarNuevaTarea(nuevaTarea);
    expect(false).toBeTruthy();
  });

  it('should have a method editarUnaTarea()', () => {
    // instance.editarUnaTarea(tarea);
    expect(false).toBeTruthy();
  });

  it('should have a method eliminarUnaTarea()', () => {
    // instance.eliminarUnaTarea(tarea);
    expect(false).toBeTruthy();
  });

  it('should have a method getListaDeTareasIncompletas()', () => {
    // instance.getListaDeTareasIncompletas();
    expect(false).toBeTruthy();
  });

  it('should have a method getListaDeTareasCompletas()', () => {
    // instance.getListaDeTareasCompletas();
    expect(false).toBeTruthy();
  });

  it('should have a method cargarTareasCompletas()', () => {
    // instance.cargarTareasCompletas();
    expect(false).toBeTruthy();
  });

  it('should have a method decidirTipoBusqueda()', () => {
    // instance.decidirTipoBusqueda(actionBusqueda);
    expect(false).toBeTruthy();
  });

  it('should have a method setActionBusqueda()', () => {
    // instance.setActionBusqueda(valor);
    expect(false).toBeTruthy();
  });

  it('should have a method buscadorFunc()', () => {
    // instance.buscadorFunc(lista,valor);
    expect(false).toBeTruthy();
  });

  it('should have a method decidirTipoOrdenamiento()', () => {
    // instance.decidirTipoOrdenamiento(actionOrdenar);
    expect(false).toBeTruthy();
  });

  it('should have a method ordenarFunc()', () => {
    // instance.ordenarFunc(lista,actionOrdenar);
    expect(false).toBeTruthy();
  });
});