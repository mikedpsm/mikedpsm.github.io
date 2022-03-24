import './index.css';
import closeIcon from '../../assets/close-icon.svg'
import failedIcon from '../../assets/charge-delete-failed.svg'


function NegativeFeedback() {
    
  return(
    <div className="Feedback">
      <div className="feedback-content">
        <img src = {failedIcon} alt="" />
        <span>Esta cobrança não pode ser excluída</span>
      </div>
      <img src={closeIcon} alt="" />
    </div>
  ) ;

}

export default NegativeFeedback;