import './index.css';
import {getAllInvoicesAPI} from '../../../api';
import {useState, useEffect} from 'react'

function ChargeCard() {
  const [overdueList, setOverdueList] = useState([]);
  const [forseenList, setForseenList] = useState([]);
  const [paidList, setPaidList] = useState([]);

  useEffect(() => {
    getAllInvoices();
  }, [overdueList, forseenList, paidList]);

  const getAllInvoices = async () => {
    const response = await getAllInvoicesAPI();
    
    const data = response.data;

    function dateConverter(date) {
      const dataDate = date.split('/')
      const dd = dataDate[0];
      const mm = dataDate[1];
      const yy = dataDate[2]

      return new Date(yy, mm, dd); 
    }

    const ovd = data.filter((c) => !c.paidout && dateConverter(c.duedate) > new Date());
    const fsn = data.filter(c => !c.paidout && dateConverter(c.duedate) < new Date());
    const pd = data.filter(c => c.paidout);
    setOverdueList(ovd);
    setForseenList(fsn);
    setPaidList(pd);
  }

  function truncate(word) {
    if (word.length > 10) {
      return word.slice(0, 10) + '...'
    }
    return word;
  }

  function truncateValue(value) {
    if (value.length > 7) {
      return value.slice(0, 5) + '...';
    }
    return value;
  }

  return (
    <div className = "ChargeCard">
      <div className='overdue-charges'>
        <div className='card-ahead'>
          <span>Cobranças Vencidas</span>
          <span className='overdue-count'>{overdueList.length}</span>
        </div>
        <div className='overdue-container'>
          <div className='card-list'>
            <span>Cliente</span>
            <span>ID da cob.</span>
            <span>Valor</span>
          </div>
          {overdueList.map((item) => {
            return (
              <div className='charges-register' key={Math.random()}>
                <span>{truncate(item.username)}</span>
                <span>{item.id}</span>
                <span>R$ {truncateValue(String((item.total / 100).toFixed(2)))}</span>
              </div>
            )
          })}
        </div>
        <div className='see-all'>
          <span>Ver todos</span>
        </div>
      </div>
      <div className='foreseen-charges'>
        <div className='card-ahead'>
          <span>Cobranças Previstas</span>
          <span className='foreseen-count'>{forseenList.length}</span>
        </div>
        <div className='foreseen-container'>
          <div className='card-list'>
            <span>Cliente</span>
            <span>ID da cob.</span>
            <span>Valor</span>
          </div>
          {forseenList.map((item) => {
            return (
              <div className='charges-register' key={Math.random()}>
                <span>{truncate(item.username)}</span>
                <span>{item.id}</span>
                <span>R$ {truncateValue(String((item.total / 100).toFixed(2)))}</span>
              </div>
            )
          })}
        </div>
        <div className='see-all'>
          <span>Ver todos</span>
        </div>
      </div>
      <div className='paid-charges'>
        <div className='card-ahead'>
          <span>Cobranças Pagas</span>
          <span className='paid-count'>{paidList.length}</span>
        </div>
        <div className='paid-container'>
          <div className='card-list'>
            <span>Cliente</span>
            <span>ID da cob.</span>
            <span>Valor</span>
          </div>
          {paidList.map((item) => {
            return (
              <div className='charges-register' key={Math.random()}>
                <span>{truncate(item.username)}</span>
                <span>{item.id}</span>
                <span>R$ {truncateValue(String((item.total / 100).toFixed(2)))}</span>
              </div>
            )
          })}
        </div>
        <div className='see-all'>
          <span>Ver todos</span>
        </div>
      </div>
    </div>
  );
}

export default ChargeCard;