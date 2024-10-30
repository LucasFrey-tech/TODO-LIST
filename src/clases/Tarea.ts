export default class Tarea{

    public titulo:string;
    private descripcion:string;
    public fechaVec:number;

    
    constructor(titulo:string, descripcion:string, fecha:number){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.fechaVec=fecha;
    }

    public mostrarDetalles() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Fecha de Vencimiento: ${this.fechaVec}`);
    }

    public getTitulo(): string{
        return this.titulo;
    }
    public getFechaVec():number {
        return this.fechaVec;
    }
    
}