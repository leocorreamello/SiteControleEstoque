import '../index.css';
import logo from '../assets/logo.PNG';

function Header({ setActiveSection }) {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <a href="#section1" onClick={() => setActiveSection('section1')}>Peças</a>
        <a href="#section2" onClick={() => setActiveSection('section2')}>Sobre Nós</a>
        <a href="#section3" onClick={() => setActiveSection('section3')}>Contato</a>
      </nav>
    </header>
  );
}

export default Header;
