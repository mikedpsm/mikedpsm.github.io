import './index.css';
import customerImg from '../../assets/cad-cliente.svg';
import settings from '../../assets/config.svg';
import search from '../../assets/lupa.svg';
import Header from '../../Components/Header/index.js';
import CustomersCard from '../../Components/Cards/CustomersCard';
import Profile from '../../Components/Profile';
import MyContext from '../../contexts';
import { useContext } from 'react';
import EditModal from '../../Components/Modais/EditModal';
import RegisterModal from '../../Components/Modais/RegisterModal';
import RegisteredModal from '../../Components/Modais/RedisteredModal';
import RegisterChargesModal from '../../Components/Modais/RegisterChargesModal';

function Customers() {
  const { 
    values: {
    showEdit,
    newChargeModal,
    addClient,
    setAddClient,
    registered
  }
  } = useContext(MyContext)
	return (
		<div className='Customers'>
      {showEdit && <EditModal />}
			<Header/>
			<div className='clients-page'>
        <div className='clients-ahead'>
          <span>Clientes</span>
          <div className='profile-container'>
            <Profile/>
          </div>
        </div>
        <div className='customers-body'>
          <div className='customers-body-ahead'>
            <img src={customerImg} alt='costumerImg'/>
            <span>Clientes</span>
          </div>
          <div className='customers-body-options'>
            <div className='add-client' onClick={() => setAddClient(true)}>
              <span>+</span>
              <span>Adicionar cliente</span>
            </div>
            <div className='customers-settings'>
              <img src={settings} alt='settings'/>
            </div>
            <div className='customers-search'>
              <input type='text' placeholder='Pesquisa' alt='search'/>
              <img src={search} alt='search'/>
            </div>
          </div>
        </div>
        <CustomersCard/> 
      </div>
      {addClient && <RegisterModal />}
      {newChargeModal && <RegisterChargesModal/>}
      {registered && <RegisteredModal/>}
		</div>
	)
}

export default Customers;