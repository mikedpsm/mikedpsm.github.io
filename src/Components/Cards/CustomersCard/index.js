import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../../api";
import newCharge from '../../../assets/criar-cobranca.svg';
import arrows from '../../../assets/setas.svg';
import MyContext from '../../../contexts';
import './index.css';

function CustomersCard() {
  const { values: {
   setNewChargeModal
  } } = useContext(MyContext);

  const navigate = useNavigate();

  function goTo(path){
    navigate(path);
  }
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    api
      .get("/clients")
      .then((res) => {
        setCliente(res.data);
      })
      .catch((err) => {
        alert("ops!");
      });
  }, []);

  function truncate(word) {
    if (word.length > 10) {
      return word.slice(0, 10) + '...'
    }
    return word;
  }

  function truncateEmail(word) {
    if (word.length > 18) {
      return word.slice(0, 18) + '...'
    }
    return word;
  }

  return (
    <div className="CustomersCard">
      <div className="customer-card-ahead">
        <span>
          <img src={arrows} alt="arrows" />
          Clientes
        </span>
        <span>CPF</span>
        <span>E-mail</span>
        <span>Telefone</span>
        <span>Status</span>
        <span>Criar Cobrança</span>
      </div>
      {cliente.map((client) => {
        return (
          <div className="customer-container-item" key={client.id}>
            <span onClick={()=> goTo(`/info-client/${client.cpf}`)} className='canClick'>{truncate(client.username)}</span> 
            <span>{client.cpf}</span>
            <span>{truncateEmail(client.email)}</span>
            <span>{client.phone}</span>
            <span className={!client.overdue ? 'overdueFalse' : 'overdueTrue'}>{!client.overdue ? "Em Dia" : "Inadimlente"}</span>
            <img src={newCharge} alt="newCharge" className='canClick' onClick={() => setNewChargeModal(true)} />
          </div>
        );
      })}
    </div>
  );
}

export default CustomersCard;
