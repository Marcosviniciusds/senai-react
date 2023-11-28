import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import Home from './componentes/Home';


import Tela2 from './componentes/Tela2';


function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tela2" element={<Tela2/>}/>
      </Routes>
    </Router>
  );
}

export default App;
