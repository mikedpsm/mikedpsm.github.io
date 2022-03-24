import './index.css';
import lineStep1 from  '../../../assets/linestep1.svg';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../contexts/index';
import { useContext, useState } from 'react';
import schemaRegister1 from '../../Schemas/schemaRegister1';


function FormSection(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const {
    values: { setInputEmail, setInputName }
  } = useContext(MyContext);
  function goTo(path) {
    navigate(path);
  }

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      name,
      email 
    }
    const isValid = await schemaRegister1.isValid(formData);

    if (isValid) {
      setInputEmail(email);
      setInputName(name);
      goTo('/register-password');
    }
  }

  return(
    <div className='form-section'>
      <h2>Adicione seus  dados</h2>
      <form onSubmit={createUser}>
        <div className="name">
          <label htmlFor="name">Nome*</label>
          <input 
            id="name" 
            placeholder='Digite seu nome'  
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail*</label>
          <input 
            id="email"
            placeholder='Digite seu e-mail'  
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="send-section">
          <button type='submit'>Continuar</button>
          <p>Já possui uma conta? Faça seu <span onClick={() => goTo('/')}>Login</span></p>
        </div>
      </form>
        <img src={lineStep1} alt=""/>
    
    </div>
  );
}

export default FormSection;