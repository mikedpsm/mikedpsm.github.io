import { useContext, useEffect } from 'react';
import openMenu from '../../assets/chevron-down.svg';
import ProfileModal from '../Modais/ProfileModal';
import { getInfoAPI } from '../../api';
import './index.css';
import MyContext from '../../contexts';

function Profile() {
  const { values: {
    fLetter, setFLetter,
    fName, setFName,
    openMenuBtn, setOpenMenuBtn
  } } = useContext(MyContext);
  
  useEffect(() => {
    async function getInfo() {
      const response = await getInfoAPI();

      const data = response.data;

      if (data.username.includes(' ')) {
        const rub = data.username.split(' ');
        const letters = rub[0][0] + rub[1][0]
        setFLetter(letters);
      } else {
        setFLetter(data.username[0].toUpperCase() + data.username[1].toUpperCase());
      }

      setFName(data.username.split(' ')[0]);
    }

    getInfo();
  }, [setFLetter, setFName]);
  
	return (
		<>
			<div className='first-letter'>
				<span>
					{fLetter}
				</span>
			</div>
			<span className='first-name'>{fName}</span>
			<div className='arrow-menu'>
				<img 
					src={openMenu} 
					alt='menu'
					onClick={() => setOpenMenuBtn(!openMenuBtn)}
				/>
				{openMenuBtn ? <ProfileModal/> : null}
			</div>
		</>
	)
}

export default Profile;