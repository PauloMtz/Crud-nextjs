import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
      tabelaVisivel,
      exibirTabela,
      clienteSeleciona, 
      clienteExcluido, 
      salvarCliente, 
      novoCliente, 
      cliente, 
      clientes
    } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 via-gray-200 to-blue-600
    `}>
      <Layout titulo="Crud Simples">
        {tabelaVisivel ? (
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
              cancelado={exibirTabela} />
          </div>
        )}
      </Layout>
    </div>
  )
}
