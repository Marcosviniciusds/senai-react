import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderEditada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} placeholder={placeholderEditada} required={props.obrigatorio} />
        </div>
    )
}
export default CampoTexto