import Banner from './componentes/Banner';
import CampoTexto from './componentes/Campotexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label= "Nome" placeholder="Digite um nome..." />
      <CampoTexto label= "Cargo" placeholder="Digite um cargo..." />
      <CampoTexto label= "imagem" placeholder="Digite url de uma imagem..." />
    </div>
  );
}

export default App;
