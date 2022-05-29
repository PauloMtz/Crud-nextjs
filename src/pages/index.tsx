import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import ColecaoClientes from "../firebase/db/ColecaoClientes";
import Cliente from "../model/Cliente";
import ClienteRepository from "../model/ClienteRepository";

export default function Home() {

  const repository: ClienteRepository = new ColecaoClientes()

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.novoCliente())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repository.listarTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSeleciona(clienteSelecao: Cliente) {
    console.log(`Seleciona: ${clienteSelecao.nome}`)
    setCliente(clienteSelecao)
    setVisivel('form')
  }

  async function clienteExcluido(clienteExclui: Cliente) {
    await repository.excluir(clienteExclui)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.novoCliente())
    setVisivel('form')
  }

  async function salvarCliente(clienteSalvo: Cliente) {
    await repository.salvar(clienteSalvo)
    obterTodos()
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 via-gray-200 to-blue-600
    `}>
      <Layout titulo="Crud Simples">
        {visivel === 'tabela' ? (
          <div className="ml-4 mr-4 mb-4">
            <div className="flex justify-end">
              <Botao cor="green" classeNome="mb-4 mt-4" 
                CliqueAqui={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSeleciona}
              clienteExcluir={clienteExcluido} />
          </div>
        ) : (
          <div className="mt-4">
            <Formulario 
              cliente={cliente}
              clienteAlterado={salvarCliente}
              cancelado={() => setVisivel('tabela')} />
          </div>
        )}
      </Layout>
    </div>
  )
}
