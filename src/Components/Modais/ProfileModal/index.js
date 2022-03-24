import './index.css';
import { useContext } from 'react'
import edit from '../../../assets/editar.svg';
import logout from '../../../assets/exit.svg';
import MyContext from '../../../contexts';

function ProfileModal() {
  const { values: { setShowEdit }, logOut } = useContext(MyContext);


  return (
    <div className = "ProfileModal">
      <img 
        src={edit} 
        alt='edit'
        onClick={() => setShowEdit(prev => !prev)}
      />
      <img 
        src={logout}
        alt=''
        onClick={() => logOut()}
      />
    </div>
  );
}

export default ProfileModal;