import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import lineStep2 from '../../../assets/linestep2.svg';
import MyContext from '../../../contexts';
import schemaRegister2 from '../../Schemas/schemaRegister2';
import eyeoff from '../../../assets/eye-off.svg'
import './index.css';

function FormSectionPassword(){

  function showAlert(alertMessage) {
    alert(alertMessage)
  }

  const navigate = useNavigate();
  
  const {  
    values: {
    inputEmail,
    inputName,
    showPassword,
    setShowPassword,
    password, setPassword
    },
    registerUser

  } = useContext(MyContext);

  function goTo(path) {
    navigate(path);
  }

  const finishRegistration = async (event) => {
    event.preventDefault();
    if(event.target[0].value.length < 8 || event.target[1].value.length < 8) {
      showAlert('Senha deve ter no mínimo 8 caracteres!');
      return;
    }
    let formData = {
      passwd: event.target[0].value,
      confirmPasswd: event.target[1].value
    }
    
    const isValid = await schemaRegister2.isValid(formData);
    
    if (isValid) {
      registerUser(inputName, inputEmail, password)
    }
  }


  return(
    <div className = "form-section">
      <h2>Escolha uma senha</h2>
      <form onSubmit={finishRegistration}>
        <div className="password">
          <label htmlFor="password">Senha*</label>
          <div className="showPassword">
            <input 
              id="reg-password" 
              placeholder='Digite sua senha'  
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img src={eyeoff} alt="" className='show-password-img' onClick={() => setShowPassword(!showPassword)}/>
          </div>
        </div>
        <div className="repeat-password">
          <label htmlFor="repeat-reg-password">Repita a senha*</label>
          <div className="showPassword">
            <input 
              id="repeat-reg-password" 
              placeholder='Repita sua senha'  
              type={showPassword ? 'text' : 'password'} 
              required
            />
            <img src={eyeoff} alt="" className='show-password-img' onClick={() => setShowPassword(!showPassword)}/>
          </div>
        </div>
        <div className="send-section">
          <button type='submit'>Entrar</button>
          <p>Já possui uma conta? Faça seu <span onClick={() => goTo('/')}>Login</span></p>
        </div>
      </form>
      <img src={lineStep2} alt="" />
    </div>
  );
}

export default FormSectionPassword;