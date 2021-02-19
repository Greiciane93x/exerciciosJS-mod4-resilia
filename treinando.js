const bcrypt = require('bcrypt')
class Pessoa {
    constructor(nome, email, senha){
    this.nome = nome; 
    this.email = email; 
    this.senha = senha; 

    } 
}

let pessoa1 = {
    nome :'Greiciane',
    email : 'test@bcrypt',
    senha :'12132121'
}

let pessoa2 = {
    nome :'Alice',
    email : 'test@bcrypt',
    senha :'121321292819301'
}

const passwordPessoa1 = bcrypt.hashSync(pessoa1.senha, 9);
const passwordPessoa2 = bcrypt.hashSync(pessoa2.senha, 9);

let arrayPessoa1 = [pessoa1.nome, pessoa1.email, passwordPessoa1]; 
let arrayPessoa2 = [pessoa2.nome, pessoa2.email, passwordPessoa2]; 

let arrayFinal = [arrayPessoa1, arrayPessoa2]


