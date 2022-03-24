import close from '../../../assets/close.svg';
import './index.css'
import MyContext from '../../../contexts';
import { useContext } from 'react';

export const Error = ({ msg }) => {
  const { 
    values: {
      setError
    }
  } = useContext(MyContext)

  return (
    <div className="Error">
      <img src={close} alt='close' className='canClick' onClick={() => setError(false)}/>
      <main>
        <p className='error-title'>Erro</p>
        <span>{msg}</span>
        <div className='btn-ok canClick' onClick={() => setError(false)}>
          <p>Okay</p>
        </div>
      </main>
    </div>
  )
}