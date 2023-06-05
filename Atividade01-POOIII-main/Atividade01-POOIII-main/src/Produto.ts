enum CODIGO {
    Camisa,
    Calca,
    Blusa,
    Jaqueta,
    Meia,
    Vestido, 
    Camiseta,
    Calcado,
}

export default class Produto {
    private _codigo: CODIGO;
    private _valor: number;
    private _descricao: string;

    constructor (codigo: CODIGO, valor: number, descricao: string){
        this._codigo = codigo;
        this._valor = valor;
        this._descricao = descricao;
    }

    get codigo() : CODIGO {
        return this._codigo;
    }
    
    get valor () : number {
        return this._valor;
    } 

    get descricao() : string {
        return this._descricao;
    }

    set codigo (codigo: CODIGO) {
        this._codigo = codigo;
    }

    set valor (valor: number) {
        this._valor = valor;
    }

    set descricao (descricao: string) {
        this._descricao = descricao;
    }
}