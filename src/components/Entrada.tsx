interface EntradaProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    valorAlterado?: (valor: any) => void
    classeNomeEntrada?: string
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col mb-2 ${props.classeNomeEntrada}`}>
            <label className="mb-2 ml-2">{props.texto}</label>
            <input 
                type={props.tipo ?? 'text'} 
                value={props.valor} 
                readOnly={props.somenteLeitura}
                onChange={e => props.valorAlterado?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-md
                    bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `} />
        </div>
    )
}