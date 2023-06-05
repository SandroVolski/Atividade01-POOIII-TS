enum TIPO {
    Residencial,
    Empresarial, 
    Pessoal, 
    Fixo,
    Celular,
}

export default class Telefone {
    private _ddd: string;
    private _numero: number;
    private _tipo: TIPO;

    constructor (ddd: string, numero: number, tipo: TIPO){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    get ddd() : string {
        return this._ddd;
    }
    
    get numero () : number {
        return this._numero;
    } 

    get tipo() : TIPO {
        return this._tipo;
    }

    set ddd (ddd: string) {
        this._ddd = ddd;
    }

    set numero (numero: number) {
        this._numero = numero;
    }

    set tipo (tipo: TIPO) {
        this._tipo = tipo;
    }
}