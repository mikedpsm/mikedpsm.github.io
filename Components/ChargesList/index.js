import './index.css'
import setas from '../../assets/setas.svg'
import edit from '../../assets/editar.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import MyContext from '../../contexts';
import { useContext } from 'react';
import EditChargesModal from '../../Components/Modais/EditChargesModal'
import { useEffect, useState } from 'react';
import { /*deleteInvoiceAPI,*/ getAllInvoicesAPI } from '../../api';



function ChargesList() {
  const [charges, setCharges] = useState([]);
  const { 
    values: {editCharges,setEditCharges,/*deleteCharges,*/setDeleteCharges}
  } = useContext(MyContext)

  useEffect(() => {
    getClientInvoice();
  }, [charges]);
  

  const getClientInvoice = async () => {
    const response = await getAllInvoicesAPI();
    setCharges(response.data);
  }
/*
  const deleteInvoice = async (id) => {
    await deleteInvoiceAPI(id);
    alert('Usuário deletado com sucesso');
  }
*/
  return(
    <div className="table">
      <div className="table-body">
        <div className="table-line">
          <div className="table-header">
            <img 
              src={setas} 
                alt="apply filter" 
              />
              <span>Cliente</span>
          </div>
          <div className="table-header">
            <img 
              src={setas} 
              alt="apply filter" 
            />
            ID Cob.
          </div>
          <div className="table-header">Valor</div>
          <div className="table-header">Data de Venc.</div>
          <div className="table-header">Status</div>
          <div className="table-header last-column">Descrição</div>
        </div>
        {charges.map((charge) => {
          var dateString = charge.duedate;

          var dateParts = dateString.split("/");
          
          var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
          return (
            <div  className="table-line" key={charge.id}>
              <div className="line-items">{charge.username}</div>
              <div className="line-items">{charge.id}</div>
              <div className="line-items">R$ {(charge.total / 100).toFixed(2)}</div>
              <div className="line-items">{charge.duedate}</div>
              <div className="line-items">
                <span className={charge.paidout === true ? 
                    'alredyPaid': 
                    (new Date(dateObject) < new Date() ? 
                    'notPaid'  : 'toBePaid')
                  }>
                  {charge.paidout === true ? 'Pago' : (new Date(dateObject) < new Date() ? 'Vencida' : 'Pendente')}
                </span>
              </div>
              <div className="line-items last-column">{charge.description}</div>
              <div className="line-items icon">
                <img 
                  src={edit} 
                  alt="" 
                  onClick= {()=>setEditCharges(true)}
                />
                <img src={deleteIcon} alt="" onClick={() => setDeleteCharges(true)}/>
              </div>
            </div>
          )
        })}
      </div>
      {editCharges? <EditChargesModal /> : null}
    </div>
  )
}

export default ChargesList;
