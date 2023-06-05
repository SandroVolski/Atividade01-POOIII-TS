import Cliente from "./Cliente";
import Produto from "./Produto";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Venda from "./Venda";

let produto1 : Produto = new Produto (2, 85.90, "Moletom Preto CSGO - M");
let produto2 : Produto = new Produto (7, 159.90, "Nike Air Preto/Branco - 42");
let produto3 : Produto = new Produto (4, 9.99, "Meia Ben10 - 41/43");

let endereco1 : Endereco = new Endereco ("Rua Rodolfo Schulumberger", 26, "Irati", 15);
let telefones1 : Telefone = new Telefone ("42", 34232802, 0);
let cliente1 : Cliente = new Cliente("Eduardo Prado Volski", 11965573908, 25112003, 0, endereco1, [telefones1]);

let endereco2 : Endereco = new Endereco ("Rua Saldanha Marinho", 736, "Guarapuava", 15);
let telefones2 : Telefone = new Telefone ("42", 998005326, 4);
let cliente2 : Cliente = new Cliente("Tiago Alexandre Prado Volski", 123132321, 25102010, 0, endereco2, [telefones1, telefones2]);

let endereco3 : Endereco = new Endereco ("Praca Presidente Eurico Gaspar Dutra", 374, "Barbacena", 12);
let telefones3 : Telefone = new Telefone ("32", 3339-2631, 1);
let cliente3 : Cliente = new Cliente ("Regina Fernandes de Souza", 10061989, 10061989, 1, endereco3, [telefones3]);

let venda1 : Venda = new Venda(1, 28052023, cliente1, [produto1, produto2]);
let venda2 : Venda = new Venda(2, 22042023, cliente2, [produto2]);
let venda3 : Venda = new Venda(3, 15052023, cliente3, [produto3]);

console.log(venda1.calcularTotal());
console.log(venda2.calcularTotal());
console.log(venda3.calcularTotal());





