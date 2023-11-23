import './ListaSuspensa.css'

export default function ListaSuspensa(props) {



    return (

        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>

            <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
            <option value={''}></option>
           
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}

            </select>
        </div>
    )

}