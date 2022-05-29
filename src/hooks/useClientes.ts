import { useEffect, useState } from "react"
import ColecaoClientes from "../firebase/db/ColecaoClientes"
import Cliente from "../model/Cliente"
import ClienteRepository from "../model/ClienteRepository"
import useAlternacao from "./useAlternacao"

export default function useClientes() {
    const repository: ClienteRepository = new ColecaoClientes()
    const {tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useAlternacao()

  const [cliente, setCliente] = useState<Cliente>(Cliente.novoCliente())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repository.listarTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function clienteSeleciona(clienteSelecao: Cliente) {
    console.log(`Seleciona: ${clienteSelecao.nome}`)
    setCliente(clienteSelecao)
    exibirFormulario()
  }

  async function clienteExcluido(clienteExclui: Cliente) {
    await repository.excluir(clienteExclui)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.novoCliente())
    exibirFormulario()
  }

  async function salvarCliente(clienteSalvo: Cliente) {
    await repository.salvar(clienteSalvo)
    obterTodos()
  }

  return {
      tabelaVisivel,
      exibirTabela,
      salvarCliente,
      novoCliente,
      clienteExcluido,
      clienteSeleciona,
      obterTodos,
      cliente,
      clientes
  }
}