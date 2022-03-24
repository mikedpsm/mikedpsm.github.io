import './index.css';
import sucess from '../../../assets/cad-sucesso.svg';
import closeblue from '../../../assets/close-cad-cliente-sucesso.svg'
import { useContext } from 'react';
import MyContext from '../../../contexts';

function RegisteredModal() {
  const { setRegistered } = useContext(MyContext);
  return (
    <div className='RegisteredModal'>
      <div className='register-container'>
        <img src={sucess} alt='sucess'/>
        <span>Cadastro concluído com sucesso</span>
        <img 
          src={closeblue}
          alt='close'
          onClick={setRegistered(false)}
        />
      </div>
    </div>
  )
};

export default RegisteredModal;