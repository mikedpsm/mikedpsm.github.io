import './index.css';
import close from '../../../assets/close.svg'
import cadChargesIcon from '../../../assets/cad-charges-icon.svg';
import checked from '../../../assets/checked-icon.svg';
import unchecked from '../../../assets/unchecked-icon.svg';
import MyContext from '../../../contexts';
import { useContext } from 'react';
import {useState} from 'react'

function RegisterChargesModal() {
  const { 
    values: { 
      cpf, 
      setCpf, 
      setNewChargeModal,
      chargeClientName, setChargeClientName,
      chargeClientDescription, setChargeClientDescription,
      chargeClientDate, setChargeClientDate,
      chargeClientValue, setChargeClientValue,
      chargeClientStatus, setChargeClientStatus
    }, addNewCharge } = useContext(MyContext);
  const [activeButton,setActiveButton] = useState(checked);
  const [inactiveButton,setInactiveButton] = useState(unchecked);

  
  
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const response = await 
    addNewCharge(
      cpf,
      chargeClientDate, 
      chargeClientStatus, 
      chargeClientDescription, 
      chargeClientValue
    );

    alert(response.data);

    // setChargeClientName('')
    // setChargeClientDescription('')
    // setChargeClientDate('')
    // setChargeClientValue('')
    // setChargeClientStatus('')
    // setCpf('');
  }

  const handleCloseAddChargeModal = () => {
    setNewChargeModal(false);
    setCpf('');
  };

  return (
    <div className = "RegisterChargesModal">
      <div className='register-charges-container'>
        <img alt='close' src={close} onClick={handleCloseAddChargeModal}/>
        <div className='header-register-charges-modal'>
          <img src={cadChargesIcon} alt='clientAdd'/>
          <h2>Cadastro de Cobrança</h2>
        </div>
        <form className='container-label' onSubmit={handleSubmitAdd}>
          <label className='input-nome'>
            <span>Nome*</span>
            <input 
              id='register-name-nput' 
              type='text'
              value={chargeClientName}
              onChange={e => setChargeClientName(e.target.value)}
              required 
              placeholder='Escreva seu nome'
            />
          </label>
          <label className='input-description'>
            <span>Descrição*</span>
            <textarea 
              id='register-email-description' 
              type='text' 
              value={chargeClientDescription}
              onChange={e => setChargeClientDescription(e.target.value)}
              required
              placeholder='Digite a descrição'
            />
          </label>
          <div className='register-asides'>
            <label className='input-valid'>
              <span>Vencimento*</span>
              <input 
                id='register-valid-input' 
                value={chargeClientDate}
                onChange={e => setChargeClientDate(e.target.value)}
                required
                placeholder='Digite o Status'
              />
            </label>
            <label className='input-value'>
              <span>Valor*</span>
              <input 
                id='register-value-input' 
                type='number'
                value={chargeClientValue}
                onChange={e => setChargeClientValue(e.target.value)}
                required
                placeholder='Digite o valor'
              />
            </label>
          </div>
          <label className='input-status'>
            <span>Status</span>
            <button 
              type="button" 
              className="paid-satus"
              onClick = {() => (setActiveButton(checked) && setChargeClientStatus(true))|| setInactiveButton(unchecked)} 
            > 
              <img src={activeButton}  
                alt="" 
              />  
              Cobrança Paga
            </button>
            <button 
              type="button" 
              className="pendent-status"
              onClick = {() => (setActiveButton(unchecked) && setChargeClientStatus(false))|| setInactiveButton(checked)} 
              > 
              <img src={inactiveButton} 
                alt="" 
              /> 
              Cobrança Pendente
            </button>
          </label>
          <div className='container-btn-outside'>
            <div className='container-btn'>
              <div className='btn-register-cancel'>
                <span>Cancelar</span>
              </div>
              <button className='btn-register-apply' type='submit'>
                <span>Aplicar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterChargesModal;