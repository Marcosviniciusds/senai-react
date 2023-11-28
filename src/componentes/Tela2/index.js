import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Tela2 () {
    const [imagem, setImage] = useState('')
    const clicarClick = useNavigate();
    const handleClick = () => {
        clicarClick(-1);

    };

    useEffect(() => {
        const reqGet = async () => {
            // Exemplo de requisição GET
            await fetch(`https://dog.ceo/api/breeds/image/random`)
                .then(data => {
                    data.json().then(resposta => {
                        console.log(resposta.message)
                        setImage(resposta.message)
                    });
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        }

        reqGet()
    }, [])

    return (
        <div>
        Alou
        <img src={imagem}  />
        <button onClick={handleClick}>Botao  Voltar</button>
      </div>
    );
  
    }
    export default Tela2