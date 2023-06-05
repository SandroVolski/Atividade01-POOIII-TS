import Endereco from "./Endereco";
import Telefone from "./Telefone";

enum GENERO {
    Masculino,
    Feminino,
    Indefinido,
}

export default class Cliente {
    private _nome : string;
    private _cpf : number;
    private _dataNascimento : number;
    private _sexo : GENERO;
    private _endereco : Endereco;
    private _telefones : Telefone[];

    constructor (nome: string, cpf: number, dataNascimento: number, sexo: GENERO, endereco: Endereco, telefones: Telefone[]) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefones = telefones;
    }

    get nome() : string {
        return this._nome;
    }

    get cpf(): number {
        return this._cpf;
    }

    get dataNascimento(): number {
        return this._dataNascimento;
    }

    get sexo(): GENERO {
        return this._sexo;
    } 

    get endereco(): Endereco {
        return this._endereco;
    }

    get telefones(): Telefone[]{
        return this._telefones;
    }

    set nome (nome: string) {
        this._nome = nome;
    }

    set cpf (cpf: number) {
        this._cpf = cpf;
    }

    set datanascimento (dataNascimento: number) {
        this._dataNascimento = dataNascimento;
    }

    set sexo (sexo: GENERO){
        this._sexo = sexo;
    }

    set endereco (endereco: Endereco) {
        this._endereco = endereco;
    }

    set telefones (telefones: Telefone[]) {
        this._telefones = telefones;
    }
}