import './index.css';
import home from '../../assets/home.svg'
import homeSelected from '../../assets/home-selected.svg'
import clients from '../../assets/clientes.svg'
import clientsSelected from '../../assets/clientes-selected.svg'
import charges from '../../assets/cobrancas.svg';
import chargesSelected from '../../assets/cobranca-selected.svg'
import { useLocation, useNavigate } from "react-router-dom";
import MyContext from '../../contexts';
import { useContext } from 'react';



function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { values: { setOpenMenuBtn } } = useContext(MyContext);

  function goTo(path) {
    navigate(path);
    setOpenMenuBtn(false);
  }

  return (
    <div className="Header">
      <div 
        className={location.pathname === '/main' ? 'selected' : ''}
        onClick={() => goTo('/main')}
      >
        <img 
          src={location.pathname === '/main' ? homeSelected : home} alt=""
        />
      </div>
      <div  className={location.pathname === '/clients' ? 'selected' : '' } >
        <img 
          src={location.pathname === '/clients' ? clientsSelected : clients} alt=""
          onClick={() => goTo('/clients')}
        />
      </div>
      <div  className={location.pathname === '/charges' ? 'selected' : '' }>
        <img 
          src={location.pathname === '/charges' ? chargesSelected : charges}
          onClick = {() => goTo('/charges')}
          alt=''
        />
      </div>
    </div>
  );
}

export default Header;