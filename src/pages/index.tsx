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

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-gray-200 to-blue-600
    `}>
      <Layout titulo="Crud Simples">
        <Tabela clientes={clienteTable} />
      </Layout>
    </div>
  )
}
