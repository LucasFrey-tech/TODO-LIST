import { objetoBusqueda } from "../../interfaces/objetoBusqueda";

export class CriterioBusqueda {
    private _titulo?: string;
    private _fecha?: number;

    // Setter para título
    set titulo(value: string | undefined) {
        if (value) {
            this._fecha = undefined; // Invalida la fecha si se establece un título
        }
        this._titulo = value;
    }

    // Getter para título
    get titulo(): string | undefined {
        return this._titulo;
    }

    // Setter para fecha
    set fecha(value: number | undefined) {
        if (value) {
            this._titulo = undefined; // Invalida el título si se establece una fecha
        }
        this._fecha = value;
    }

    // Getter para fecha
    get fecha(): number | undefined {
        return this._fecha;
    }

    // Método para convertirlo a objetoBusqueda
    toObjetoBusqueda(): objetoBusqueda {
        return {
            titulo: this._titulo,
            fecha: this._fecha,
        };
    }
}
