import './index.css';
import lineStep3 from  '../../../assets/linestep3.svg';
import cadSucess from '../../../assets/sucess-icon.svg';
import { useNavigate } from 'react-router-dom';


function FormSectionComplete(){
  const navigate = useNavigate();
  function goTo(path) {
    navigate(path);
  }
    return(
      <div className="complete-register">
        <div className="sucess-card">
          <img src={cadSucess} alt="" />
          <p>Cadastro Realizado com sucesso!</p>
        </div>
        <div className="complete-send">
          <button onClick={() => goTo('/')}>Ir para o Login</button>
        </div>
        <div className="line-step"><img src= {lineStep3} alt="" /></div>
      </div>
    );
 }

export default FormSectionComplete