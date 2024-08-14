import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Guerreiro',
        'Mago',
        'Bruxo',
        'Monge',
        'Ladino',
        'Paladino',
        'Druida',
        'Bardo'
    ]

    return (
            <section className="formulario">
                <form>
                    <h2>Preencha os dados.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Antecedente" placeholder="Digite seu Antecendente" />
                <CampoTexto label="Imagem do Personagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
                </form>
            </section>
    )

}


export default Formulario