import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../model/Cliente";

export default function Home() {

  const clienteTable = [
    new Cliente('Ana Teste', 34, '123'),
    new Cliente('Maria Teste', 24, '1234'),
    new Cliente('José Teste', 37, '12345'),
    new Cliente('Pedro Teste', 28, '123456'),
  ]

  function clienteSeleciona(clienteSelecao: Cliente) {
    console.log(`Seleciona: ${clienteSelecao.nome}`)
  }

  function clienteExcluido(clienteExclui: Cliente) {
    console.log(`Exclui: ${clienteExclui.nome}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 via-gray-200 to-blue-600
    `}>
      <Layout titulo="Crud Simples">
        <div className="flex justify-end mr-2">
          <Botao cor="green" classeNome="mb-4 mt-4">Novo Cliente</Botao>
        </div>
        {/*<Tabela clientes={clienteTable}
          clienteSelecionado={clienteSeleciona}
          clienteExcluir={clienteExcluido} />*/}
          <Formulario cliente={clienteTable[1]} />
      </Layout>
    </div>
  )
}
