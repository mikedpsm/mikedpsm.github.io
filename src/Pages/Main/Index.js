import { useContext } from 'react';
import ClientCard from '../../Components/Cards/ClientCards';
import ClientCharge from '../../Components/Cards/ClientCharges';
import ValueCard from '../../Components/Cards/ValueCard';
import Header from '../../Components/Header';
import EditModal from '../../Components/Modais/EditModal';
import MyContext from '../../contexts';
import './index.css';
import Profile from '../../Components/Profile';
import RegisteredModal from '../../Components/Modais/RedisteredModal';

function Main() {
  const { values: {showEdit, registered, setRegistered} } = useContext(MyContext);

  return (
    <div className = "Main">
      <Header />
      <div className='main-page'>
        <div className='main-ahead'>
          <h1>Resumo das cobranças</h1>
          <div className='profile-container'>
            <Profile/>
          </div>
        </div>
        <ValueCard />
        <ClientCharge />
        <ClientCard />
        {showEdit ? <EditModal /> : null}
        {registered ? (<RegisteredModal /> && setTimeout(() => { setRegistered(false) }, 5000)): null}
      </div>
    </div>
  );
}

export default Main;
