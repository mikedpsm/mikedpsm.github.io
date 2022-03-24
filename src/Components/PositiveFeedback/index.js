import './index.css';
import closeIcon from '../../assets/close-icon.svg'
import sucessIcon from '../../assets/charge-delete-sucess.svg'


function PositiveFeedback() {
    
  return(
    <div className="Feedback">
      <div className="feedback-content">
        <img src = {sucessIcon} alt="" />
        <span>Cobrança excluída com sucesso</span>
      </div>
      <img src={closeIcon} alt="" />
    </div>
  ) ;

}

export default PositiveFeedback;