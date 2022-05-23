export default class Cliente {
    // para trabalhar com atributos privados
    // alterar no tsconfig o target para uma versão mais nova
    // isso é do javascript, não é do typescript
    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    static novoCliente() {
        return new Cliente('', 0)
    }

    get id() {return this.#id}

    get nome() {return this.#nome}

    get idade() {return this.#idade}
}