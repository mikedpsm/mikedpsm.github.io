import './index.css';
import close from '../../../assets/close.svg'
import cadChargesIcon from '../../../assets/cad-charges-icon.svg';
/*import MyContext from '../../../contexts';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';*/

function DetailsChargesModal() {

  /*const [charges, setCharges] = useState([]);*/
  /*const { 
    values: {detailsCharges,setDetailsCharges}
  } = useContext(MyContext)*/

  
  return (
     <div className = "DetailsChargesModal">
      <div className='details-charges-container'>
        <img alt='close' src={close} onClick=''/>
        <div className='header-details-charges-modal'>
          <img src={cadChargesIcon} alt='charges'/>
          <h2>Detalhe de Cobrança</h2>
        </div>
          <div className="container name">
            <span className='details-head'>Nome</span>
            <span className='details-body'>Ciro Raykar Dias Pereira</span>
          </div>
          <div className=" container description">
            <span className='details-head'>Descrição</span>
            <span className='details-body'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda corrupti, quod placeat voluptas quo culpa dolores recusandae dicta architecto accusamus fuga libero atque accusantium eos quos molestias, deleniti nam id.</span>
          </div>
          <div className="container-aside">
            <div className=" container valid">
              <span className='details-head'>Vencimento</span>
              <span className='details-body'>24/06/2000</span>
            </div>
            <div className=" container value">
              <span className='details-head'>Valor</span>
              <span className='details-body'>R$300,00</span>
            </div>
          </div>
          <div className="container-aside">
            <div className=" container id-charges">
              <span className='details-head'>ID Cobranças</span>
              <span className='details-body'>2112627727</span>
            </div>
            <div className=" container status">
              <span className='details-head'>Status</span>
              <span className='details-body toBePaid'>Pendente</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default DetailsChargesModal;