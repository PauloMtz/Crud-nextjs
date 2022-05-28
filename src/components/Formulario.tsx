import { useState } from "react";
import Cliente from "../model/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteAlterado?: (clienteAltera: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura
                    classeNomeEntrada="ml-2 mr-2" />
            ) : false}
            <Entrada texto="Nome" valor={nome} valorAlterado={setNome} 
                classeNomeEntrada="mb-4 ml-2 mr-2" />
            <Entrada texto="Idade" valor={idade} tipo="number" valorAlterado={setIdade}
                classeNomeEntrada="mb-4 mt-2 ml-2 mr-2" />
            <div className="flex justify-end mb-4 mt-4 mr-2">
                <Botao 
                    cor="blue" 
                    classeNome="mr-2"
                    CliqueAqui={() => props.clienteAlterado?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" CliqueAqui={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}