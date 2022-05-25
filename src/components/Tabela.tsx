import Cliente from "../model/Cliente"
import { IconeEditar, IconeExcluir } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluir?: (cliente: Cliente) => void
}

export default function Tabela(props) {
    const exibirAcoes = props.clienteSelecionado || props.clienteExcluir

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="p-4">#</th>
                <th className="p-4">Nome</th>
                <th className="p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Opções</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, indice) => {
            return (
                <tr key={cliente.id} className={`
                        ${indice % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}
                    `}>
                    <td className="p-4">{cliente.id}</td>
                    <td className="p-4">{cliente.nome}</td>
                    <td className="p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarOpcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarOpcoes(clienteOpcao: Cliente) {
        return (
            <td className="flex">
                {props.clienteSelecionado ? (
                    <button 
                        onClick={() => props.clienteSelecionado?.(clienteOpcao)} 
                        className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-2
                        hover:bg-purple-50
                    `}>
                        {IconeEditar}
                    </button>
                ) : false}
                {props.clienteExcluir ? (
                    <button
                        onClick={() => props.clienteExcluir?.(clienteOpcao)}
                        className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-2
                        hover:bg-purple-50
                    `}>
                        {IconeExcluir}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <div>
            <table className={`w-full`}>
                <thead className={`
                    text-gray-100 text-left
                    bg-gradient-to-r from-purple-500 to bg-purple-800
                `}>
                    {renderizarCabecalho()}
                </thead>
                <tbody>
                    {renderizarDados()}
                </tbody>
            </table>
        </div>
    )
}