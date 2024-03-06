export {};
import marvelLogo from '../assets/marvel-logo.svg'
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Получаем текущий год
  
    return (
      <div className="Footer">
        <div className="Footer-content">
          <img src={marvelLogo} alt="Marvel Logo" className="Footer-logo" />
          <p>Data provided by Marvel. © {currentYear} MARVEL</p>
          <a href="https://developer.marvel.com" target="_blank" rel="noopener noreferrer">developer.marvel.com</a>
        </div>
      </div>
    );
  };
  
  export default Footer;