import { useContext } from 'react';
import chargesImg from '../../assets/charges-icon.svg';
import settings from '../../assets/config.svg';
import search from '../../assets/lupa.svg';
import ChargesList from '../../Components/ChargesList/index';
import Header from '../../Components/Header/index.js';
import EditModal from '../../Components/Modais/EditModal';
import RegisterModal from '../../Components/Modais/RegisterModal';
import DeleteChargesModal from '../../Components/Modais/DeleteChargesModal';
import DetailsChargesModal from '../../Components/Modais/DetailsChargesModal';
import RegisterChargesModal from '../../Components/Modais/RegisterChargesModal';
import PositiveFeedback from '../../Components/PositiveFeedback';
import NegativeFeedback from '../../Components/NegativeFeedback';
import Profile from '../../Components/Profile';
import MyContext from '../../contexts';
import './index.css';

function Charges() {
  const { 
    values: {addClient, showEdit,registerCharges,deleteCharges,detailsCharges,chargesDeleteSucess,chargesDeleteFailed}} = useContext(MyContext)
	return (
		<div className='Charges'>
			<Header/>
			<div className='charges-page'>
        <div className='charges-ahead'>
          <h3>Cobranças</h3>
          <div className='profile-container'>
            <Profile/>
          </div>
        </div>
        <div className='customers-body'>
          <div className='customers-body-ahead'>
            <img src={chargesImg} alt='costumerImg'/>
            <h2>Cobranças</h2>
          </div>
          <div className='customers-body-options'>
        
            <div className='customers-settings'>
              <img src={settings} alt='settings'/>
            </div>
            <div className='customers-search'>
              <input type='text' placeholder='Pesquisa' alt='search'></input>
              <img src={search} alt='search'/>
            </div>
          </div>
        </div>
        <ChargesList/> 
      </div>
      {addClient ? <RegisterModal /> : null}
      {showEdit ? <EditModal /> : null}
      {deleteCharges? <DeleteChargesModal/> : null}
      {registerCharges ? <RegisterChargesModal/> : null}
      {detailsCharges ? <DetailsChargesModal/> : null}
      {chargesDeleteSucess ? <PositiveFeedback/>: null}
      {chargesDeleteFailed ? <NegativeFeedback/> : null}
      
      
		</div>
	)
}

export default Charges;