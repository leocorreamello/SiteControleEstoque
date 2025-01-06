import './App.css';
import { useState } from 'react';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Pecas from './componentes/pecas';
import SobreNos from './componentes/sobreNos';
import Sac from './componentes/sac';

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'section1' && <Pecas />}
        {activeSection === 'section2' && <SobreNos />}
        {activeSection === 'section3' && <Sac />}
      </main>
      <Footer />
    </>
  );
}

export default App;
