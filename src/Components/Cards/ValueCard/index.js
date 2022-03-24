import './index.css';
import paid from '../../../assets/cpagas.svg';
import overdue from '../../../assets/cvencidas.svg';
import forseen from '../../../assets/cprevistas.svg';
import {getHomeValuesAPI} from '../../../api'
import { useEffect, useState } from 'react';

function ValueCard() {
  const [overdueValue, setOverdueValue] = useState(0);
  const [forseenValue, setForseenValue] = useState(0);
  const [paidValue, setPaidValue] = useState(0);

  useEffect(() => {
    getHomeValues();
  }, []);

  const getHomeValues = async () => {
    const response = await getHomeValuesAPI();

    const toBePaidQuery = response.data.toBePaidQuery[0].sum;
    const overdueQuery = response.data.overdueQuery[0].sum;
    const paidQuery = response.data.paidQuery[0].sum;

    overdueQuery && setOverdueValue(overdueQuery);
    paidQuery && setPaidValue(paidQuery);
    toBePaidQuery && setForseenValue(toBePaidQuery)
  }

  return (
    <div className = "ValueCard">
      <div className='paid-accounts'>
        <img src={paid} alt=''/>
        <div className='value'>
          <span>Cobranças Pagas</span>
          <p>R$ {(paidValue / 100).toFixed(2)}</p>
        </div>
      </div>
      <div className='overdue-accounts'>
        <img src={overdue} alt=''/>
        <div className='value'>
          <span>Cobranças Vencidas</span>
          <p>R$ {(overdueValue / 100).toFixed(2)}</p>
        </div>
      </div>
      <div className='forseen-accounts'>
        <img src={forseen} alt=''/>
        <div className='value'>
          <span>Cobranças Previstas</span>
          <p>R$ {(forseenValue / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ValueCard;