import './Formulario.css'
import CampoTexto from '../Campotexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'




const Formulario = () => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [times, setTimes] = useState('')
    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log(

            nome,
            cargo,
            imagem,
            times
        )
    }
    const Times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um usuário</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite um nome..."
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={(nome) => setNome(nome)}
                />

                <CampoTexto
                    label="Cargo"
                    placeholder="Digite um cargo..."
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={(cargo) => setCargo(cargo)}

                />


                <CampoTexto
                    label="Imagem"
                    placeholder="Digite url de uma imagem..."
                    obrigatorio={true}
                    valor={imagem}
                    aoAlterado={(imagem) => setImagem(imagem)}

                />


                <ListaSuspensa label="Times" itens={Times} />
                <Botao>𝘊𝘢𝘥𝘢𝘴𝘵𝘳𝘢𝘳</Botao>
            </form>
        </section>

    )


}
export default Formulario