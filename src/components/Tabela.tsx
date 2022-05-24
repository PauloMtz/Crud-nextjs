import Cliente from "../model/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props) {
    function renderizarCabecalho() {
        return (
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, indice) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
                    {renderizarCabecalho()}
                </thead>
                <tbody>
                    {renderizarDados()}
                </tbody>
            </table>
        </div>
    )
}