import Layout from "../components/Layout";

export default function Home() {

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-gray-200 to-blue-600
    `}>
      <Layout titulo="Crud Simples">
        <span>Conteudo Home</span>
      </Layout>
    </div>
  )
}
