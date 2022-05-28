import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../model/Cliente";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.novoCliente())

  const clienteTable = [
    new Cliente('Ana Teste', 34, '123'),
    new Cliente('Maria Teste', 24, '1234'),
    new Cliente('José Teste', 37, '12345'),
    new Cliente('Pedro Teste', 28, '123456'),
  ]

  function clienteSeleciona(clienteSelecao: Cliente) {
    console.log(`Seleciona: ${clienteSelecao.nome}`)
    setCliente(clienteSelecao)
    setVisivel('form')
  }

  function clienteExcluido(clienteExclui: Cliente) {
    console.log(`Exclui: ${clienteExclui.nome}`)
  }

  function novoCliente() {
    setCliente(Cliente.novoCliente())
    setVisivel('form')
  }

  function salvarCliente(clienteSalvo: Cliente) {
    console.log(`Gravou: ${clienteSalvo.nome}`)
    setVisivel('tabela')
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
            <Tabela clientes={clienteTable}
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
