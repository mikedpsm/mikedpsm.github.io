import './index.css';
import finalStep from  '../../../assets/finalstep.svg';


function ProgressSection3(){
    return(
    <div className = "step-section">
      <img src={finalStep} alt="Barra de Progresso de passo a passo"/>
      <div className='step-section__instruction'>
        <span className=''>
          <p className='title'>Cadastre-se</p>
          <p className='subtitle'>Por favor, escreva seu nome e e-mail</p>
        </span>
        <span>
          <p className='title'>Escolha uma senha</p>
          <p className='subtitle'>Escolha uma senha segura</p>
        </span>
        <span>
          <p className='title'>Castro realizado com sucesso</p>
          <p className='subtitle'>E-mail e Senha cadastrados com sucesso</p>
        </span>
      </div>
    </div>
    );
}

export default ProgressSection3