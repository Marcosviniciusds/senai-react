import './Formulario.css'
import CampoTexto from '../Campotexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

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
            <form>
                <h2>Preencha os dados para criar um usuário</h2>
                <CampoTexto label="Nome" placeholder="Digite um nome..." />
                <CampoTexto label="Cargo" placeholder="Digite um cargo..." />
                <CampoTexto label="Imagem" placeholder="Digite url de uma imagem..." />
                <ListaSuspensa label="Times" itens={Times}/>
            </form>
        </section>

    )


}
export default Formulario