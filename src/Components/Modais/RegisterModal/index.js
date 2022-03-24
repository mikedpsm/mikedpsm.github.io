import './index.css';
import close from '../../../assets/close.svg'
import clientAdd from '../../../assets/cad-cliente.svg';
import MyContext from '../../../contexts';
import { useContext } from 'react';
import schemaRegisterClient from '../../Schemas/schemaRegisterClient'


function RegisterModal() {
  const { 
    values: { 
      setAddClient,
      setRegisterd,
      inputRegisterName, setInputRegisterName,
      inputRegisterEmail, setInputRegisterEmail,
      inputRegisterCpf, setInputRegisterCpf,
      inputRegisterPhone, setInputRegisterPhone,
      inputRegisterAddress, setInputRegisterAddress,
      inputRegisterComp, setInputRegisterComp,
      inputRegisterCep, setInputRegisterCep,
      inputRegisterDistrict, setInputRegisterDistrict,
      inputRegisterCity, setInputRegisterCity,
      inputRegisterUf, setInputRegisterUf
    },
    addNewClient
  } = useContext(MyContext);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const isValid = await schemaRegisterClient.validate({
      name: inputRegisterName,
      email: inputRegisterEmail,
      cpf: inputRegisterCpf,
      phone: inputRegisterPhone,
      address: inputRegisterAddress,
      comp: inputRegisterComp,
      cep: inputRegisterCep,
      district: inputRegisterDistrict,
      city: inputRegisterCity,
      uf: inputRegisterUf
    })

    if (isValid) {
      addNewClient(
        inputRegisterPhone,
        inputRegisterEmail,
        inputRegisterName,
        inputRegisterCpf,
        inputRegisterCity,
        inputRegisterUf,
        inputRegisterCep,
        inputRegisterAddress,
        inputRegisterDistrict,
        inputRegisterComp,
      )
      setAddClient(false);
      setRegisterd(true)
    }
  }

  return (
    <div className = "RegisterModal">
      <div className='active-register-client-add'>
        <img alt='close' src={close} onClick={() => setAddClient(false)}/>
        <div className='header-register-modal-client-add'>
          <img src={clientAdd} alt='clientAdd'/>
          <span>Cadastro do Cliente</span>
        </div>
        <form className='container-label-client-add' onSubmit={handleRegisterSubmit}>
          <label className='input-nome'>
            <span>Nome*</span>
            <input 
              id='register-name-nput' 
              type='text' 
              value={inputRegisterName}
              onChange={e => setInputRegisterName(e.target.value)}
              required
            />
          </label>
          <label className='input-email'>
            <span>Email*</span>
            <input 
              id='register-email-input' 
              type='email' 
              value={inputRegisterEmail}
              onChange={e => setInputRegisterEmail(e.target.value)}
              required
            />
          </label>
          <div className='register-asides-client-add'>
            <label className='input-cpf'>
              <span>CPF*</span>
              <input 
                id='register-cpf-input'
                type='number' 
                value={inputRegisterCpf}
                onChange={e => setInputRegisterCpf(e.target.value)}
                required
               />
            </label>
            <label className='input-phone'>
              <span>Telefone*</span>
              <input 
                id='register-phone-input' 
                type='number' 
                value={inputRegisterPhone}
                onChange={e => setInputRegisterPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <label className='input-address'>
            <span>Endereço</span>
            <input
              id='register-address-input' 
              type='text'
              value={inputRegisterAddress}
              onChange={e => setInputRegisterAddress(e.target.value)}
            />
          </label>
          <label className='input-comp'>
            <span>Complemento</span>
            <input 
              id='register-comp-input' 
              type='text'
              value={inputRegisterComp}
              onChange={e => setInputRegisterComp(e.target.value)}
            />
          </label>
          <div className='register-down'>
            <label className='input-cep'>
              <span>CEP</span>
              <input 
                id='register-cep-input' 
                type='number'
                value={inputRegisterCep}
                onChange={e => setInputRegisterCep(e.target.value)}
              />
            </label>
            <label className='input-district'>
              <span>Bairro</span>
              <input 
                id='register-district-input' 
                type='text'
                value={inputRegisterDistrict}
                onChange={e => setInputRegisterDistrict(e.target.value)}
              />
            </label>
            <label className='input-city'>
              <span>Cidade</span>
              <input 
                id='register-city-input' 
                type='text'
                value={inputRegisterCity}
              onChange={e => setInputRegisterCity(e.target.value)}
              />
            </label>
            <label className='input-region'>
              <span>UF</span>
              <input 
                id='register-region-input' 
                type='text'
                value={inputRegisterUf}
                onChange={e => setInputRegisterUf(e.target.value)}
              />
            </label>
          </div>
          <div className='container-btn'>
            <div className='btn-register-client-add-cancel'>
              <span>Cancelar</span>
            </div>
            <button className='btn-register-client-add-apply' type='submit'>
              Aplicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;