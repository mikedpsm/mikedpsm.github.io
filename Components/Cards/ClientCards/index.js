import { useEffect, useState } from 'react';
import loyal from '../../../assets/cem-dia.svg';
import defaulter from '../../../assets/cinadimplente.svg';
import './index.css';
import { getHomeValuesAPI } from '../../../api';


function ClientCard() {
  const [defaulters, setDefaulters] = useState([]);
  const [loyals, setLoyals] = useState([]);


  useEffect(() => {
    getHomeValues();
  }, [loyals, defaulters]);

  async function getHomeValues(){
    const response = await getHomeValuesAPI();
    const responseObj = response.data;
    setLoyals(responseObj.upToDateClients);
    setDefaulters(responseObj.ovdClients);
  }

  function truncate(word) {
    if (word.length > 10) {
      return word.slice(0, 10) + '...'
    }
    return word;
  }
  
  return (
    <div className = "ClientCard">
      <div className='defaulter-client'>
        <div className='header-clients-card'>
          <div className='card-title'>
            <img src={defaulter} alt='defaulter'/>
            <span>Clientes Inadimplentes</span>
          </div>
          <div className='defaulter-count'>
            <span>{defaulters.length}</span>
          </div>
        </div>
        <div className='clients-container'>
          <div className='client-guide'>
            <span>Clientes</span>
            <span>Data de venc.</span>
            <span>Valor</span>
          </div>
          {defaulters.map((client) => {
            return (
              <div className='client-register' key={client.id}>
                <span>{truncate(client.username)}</span>
                <span>{new Date(client.duedate).toLocaleDateString()}</span>
                <span>R$ {(client.total / 100).toFixed(2)}</span>
              </div>
            )
          })}
        </div>
        <div className='all'>
          <span>Ver todos</span>
        </div>
      </div>
      <div className='loyal-client'>
        <div className='header-clients-card'>
          <div className='card-title'>
            <img src={loyal} alt='loyal'/>
            <span>Clientes em dia</span>
          </div>
          <div className='loyal-count'>
            <span>{loyals.length}</span>
          </div>
        </div>
        <div className='clients-container'>
          <div className='client-guide'>
            <span>Clientes</span>
            <span>Data de venc.</span>
            <span>Valor</span>
          </div>
          {loyals.map((client) => {
            return (
              <div className='client-register'  key={client.id}>
                <span>{truncate(client.username)}</span>
                <span>{new Date(client.duedate).toLocaleDateString()}</span>
                <span>R$ {(client.total / 100).toFixed(2)}</span>
              </div>
            )
          })}
        </div>
        <div className='all'>
          <span>Ver todos</span>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;