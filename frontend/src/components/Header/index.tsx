import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <>
      <header>

        <div className="notifyMeta-logo-container">
          <img src={logo} alt="NotifyMeta" />
          <h1>NotifyMeta</h1>
          <p>Desenvolvido por
            <a href="https://www.linkedin.com/in/israel-igarashi/">@Israel Igarashi</a>
          </p>
        </div>
      </header>
    </>
  )
}

export default Header;