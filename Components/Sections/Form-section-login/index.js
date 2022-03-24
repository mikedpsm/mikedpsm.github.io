import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../contexts';
import schemaLogIn from '../../Schemas/schemaLogIn';
import './index.css';
import eyeoff from '../../../assets/eye-off.svg';
import { Error } from '../../Cards/ErrorCard';



function FormSectionLogin(){
  const [email, setEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
  const [msg, setMsg] = useState('')

  const {
    values: {
      showPassword, 
      setShowPassword,
      setError,
      error
    },
    logIn
  } = useContext(MyContext);

  const navigate = useNavigate();

  function goTo(path) {
    navigate(path);
  };

  const handleLogInSubmit = async (event) => {
    event.preventDefault();
    await schemaLogIn.validate({
      email,
      passwd: loginPassword
    });

    try {
      await logIn(email, loginPassword);
    } catch (error) {
      setMsg(error.response.data.mensagem)
      setError(true);
    }
  }

  return(
    <div className = "form-section">
      <h2>Faça seu login</h2>
        <form onSubmit={handleLogInSubmit} className='form'>
        <div className="email">
          <label htmlFor="login-email">E-mail</label>
          <input 
            id="login-email" 
            placeholder='Digite seu e-mail'  
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <label htmlFor="login-password">Senha</label>
        <div className="showPassword">
          <input 
            id="login-password" 
            placeholder='Digite sua senha'  
            type={showPassword ? 'text' : 'password'}
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
            required
          />
          <img src={eyeoff} alt="" className='show-password-img' onClick={() => setShowPassword(!showPassword)}/>
        </div>
        <div className="send-section">
          <button type='submit'>Entrar</button>
          <p>Ainda não possui uma conta? <span onClick={() => goTo('/register')}>Cadastre-se</span></p>
        </div>
      </form>
      {error && <Error msg={msg}/>}
    </div>
  );
}

export default FormSectionLogin