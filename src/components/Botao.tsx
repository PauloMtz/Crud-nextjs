interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    classeNome?: string
    children: any
    CliqueAqui?: () => void
}

export default function Botao(props: BotaoProps) {
    const corFundo = props.cor ?? 'blue'
    
    return (
        <button onClick={props.CliqueAqui} 
            className={`
                bg-gradient-to-r from-${corFundo}-400 to-${corFundo}-700
                text-white px-4 py-2 rounded-md
                ${props.classeNome}
            `}>
            {props.children}
        </button>
    )
}