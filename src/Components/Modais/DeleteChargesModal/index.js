import './index.css';
import close from '../../../assets/close.svg'
import warningDelete from '../../../assets/warning-delete-icon.svg'
import MyContext from '../../../contexts';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteInvoiceAPI, getAllInvoicesAPI } from '../../../api';

function DeleteChargesModal() {

  const [charges, setCharges] = useState([]);
  const { 
    values: {/*editCharges,setEditCharges,deleteCharges,*/setDeleteCharges}
  } = useContext(MyContext)

  useEffect(() => {
    getClientInvoice();
  }, [charges]);
  

  const getClientInvoice = async () => {
    const response = await getAllInvoicesAPI();
    setCharges(response.data);
  }


  const deleteInvoice = async (id) => {
    await deleteInvoiceAPI(id);
    alert('Usuário deletado com sucesso');
  }


  const handleCloseDeleteChargeModal =  () => {
    setDeleteCharges(false)

  };
  const handleDeleteCharge = () =>{
    charges.map((charge) => 
      deleteInvoice(charge.id)
    )
  }
  
  return (
     <div className = "DeleteModal">
      <div className='delete-container'>
        <img alt='close' src={close} onClick={handleCloseDeleteChargeModal}/>
        <div className="warning-delete">
          <img src = {warningDelete} alt="" />
          <span>Tem certeza que deseja excluir essa cobrança?</span>
          <div className='choose-btn'>
            <button className='no-btn'>
                Não
            </button>
            <button 
              className='yes-btn'
              onSubmit ={handleDeleteCharge}
              type = 'submit'
            >
                Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteChargesModal;