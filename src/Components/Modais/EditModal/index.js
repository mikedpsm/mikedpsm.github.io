import './index.css';
import close from '../../../assets/close.svg';
import MyContext from '../../../contexts/index'
import { useContext, useEffect } from 'react';
import { getInfoAPI } from '../../../api';
import eyeoff from '../../../assets/eye-off.svg'
import schemaEditUser from '../../Schemas/schemaEditUser';

function EditModal() {

  const {
    values: {
      editInputName,
      editInputEmail,
      editInputConfirm,
      editInputCpf,
      editInputNewPassword,
      editInputPhone,
      setEditInputCpf,
      setEditInputPhone,
      setEditInputNewPassword,
      setEditInputEmail,
      setEditInputName,
      setEditInputConfirm,
      setShowEdit,
      setRegistered,
      showPassword,
      setShowPassword
    },
    updateUser
  } = useContext(MyContext);

  let newPasswd = editInputNewPassword.length > 0 ? true : false;
  
    
  useEffect(() => {
    async function insertValues(){
      const responseGET = await getInfoAPI();

      const data = responseGET.data;

      setEditInputName(data.username);
      setEditInputEmail(data.email);
      setEditInputPhone(data.phone);
      setEditInputCpf(data.cpf);
    }
    insertValues();
    }, [setEditInputCpf, setEditInputEmail, setEditInputName, setEditInputPhone]);
  

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const editValues = {
      name: editInputName,
      email: editInputEmail,
      cpf:editInputCpf,
      phone: editInputPhone,
      changePasswd: newPasswd,
      passwd: editInputNewPassword,
      repeatPasswd: editInputConfirm,
    }

    try {
      const isValid = await schemaEditUser.validate(editValues);

      if (isValid) {
        updateUser(
          editInputName,
          editInputEmail,
          editInputCpf,
          editInputPhone,
          editInputNewPassword
        )
        setShowEdit(false);
        setEditInputNewPassword('')
        setEditInputConfirm('')
        setRegistered(true);
      }
    } catch (error) {
      alert(error);
    }
  }

  const closeEditModal = () => {
    setEditInputName('');
    setEditInputEmail('');
    setEditInputPhone('');
    setEditInputCpf('');
    setShowEdit(false)
  }

  return (
    <div className = "EditModal">
      <div className='edit-activated' >
        <img className='close' src={close} alt="" onClick={closeEditModal}/>
        <div className='edit-container'>
          <span className='title-container'>Edite seu cadastro</span>
          <form className='edit-data' onSubmit={handleEditSubmit}>
            <label htmlFor='edit-name-input'><span>Nome*</span></label>
            <input 
              id='edit-name-input'  
              type='text'
              value={editInputName}
              onChange={e => setEditInputName(e.target.value)}
              required
            />
            <label htmlFor='edit-email-input'><span>Email*</span></label>
              <input 
                id='edit-email-input' 
                type='email'
                onChange={e => setEditInputEmail(e.target.value)}
                value={editInputEmail}
                required
              />
            <div className='edit-asides'>
              <div className='asides'>
                <label htmlFor='edit-cpf-input'><span>CPF</span></label>
                <input 
                  id='edit-cpf-input' 
                  type='text'
                  onChange={e => setEditInputCpf(e.target.value)}
                  value={editInputCpf}
                />
              </div>
              <div className='asides'>
                <label htmlFor='edit-telephone-input'><span>Telefone</span></label>
                <input 
                  id='edit-telephone-input' 
                  type='text'
                  onChange={e => setEditInputPhone(e.target.value)}
                  value={editInputPhone}
                />
              </div>
            </div>
            <div className="password-edit-user">
              <label htmlFor="edit-password">Senha*</label>
              <div className="show-password">
                <input 
                  id="edit-password" 
                  placeholder='Digite sua senha'
                  type={showPassword ? 'text' : 'password'}
                  value={editInputNewPassword}
                  onChange={(e) => setEditInputNewPassword(e.target.value)}
                />
                <img src={eyeoff} alt="" className='show-password-img' onClick={() => setShowPassword(!showPassword)}/>
              </div>
            </div>
            <div className="password-edit-user">
              <label htmlFor="repeat-edit-password">Repita a Senha*</label>
              <div className="show-password">
                <input 
                  id="repeat-edit-password" 
                  placeholder='Digite sua senha'
                  type={showPassword ? 'text' : 'password'}
                  value={editInputConfirm}
                  onChange={(e) => setEditInputConfirm(e.target.value)}
                />
                <img 
                  src={eyeoff} 
                  className='show-password-img' 
                  onClick={() => setShowPassword(!showPassword)} 
                  alt=''
                />
              </div>
            </div>
            <div className='btn-edit'>
              <button className='finish-edit' type='submit'>
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;