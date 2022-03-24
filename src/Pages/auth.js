import { Navigate, Outlet, useNavigate } from "react-router-dom";
import MyContext from "../contexts";
import { useContext, useState, useEffect } from "react";
import { loginAPI, api, registerAPI, editUserAPI, addNewChargeAPI, addNewClientAPI } from "../api";

export const PrivateRoutes = () => {
  const {authenticated, loading} = useContext(MyContext);

  if (loading) {
    return <div className="loading">Carregando...</div>
  }
  
  if (!authenticated) {
    return <Navigate to='/'/>
  }
  return <Outlet/>;
};



export const AuthProvider = ({children}) => {
  const [inputName,setInputName] = useState('');
	const [inputEmail, setInputEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
	const [addClient, setAddClient] = useState(false);
  const [registerCharges, setRegisterCharges] = useState(false);
  const [deleteCharges, setDeleteCharges] = useState(false);
  const [detailsCharges, setDetailsCharges] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
  const [showAddCharge, setShowAddCharge] = useState(false)
  const [user, setUser] = useState(null);
  const [cpf, setCpf] = useState('')
  const [fLetter, setFLetter] = useState('');
  const [fName, setFName] = useState('');
  const [inputMenuBtn, setInputMenuBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [openMenuBtn, setOpenMenuBtn] = useState(false);
  const [error, setError] = useState(false)
	// Estados pada edição
  const [editCharges, setEditCharges] = useState(false);
	const [editInputName, setEditInputName] = useState('');
	const [editInputEmail, setEditInputEmail] = useState('');
	const [editInputCpf, setEditInputCpf] = useState('');
	const [editInputPhone, setEditInputPhone] = useState('');
	const [editInputNewPassword, setEditInputNewPassword] = useState('');
	const [editInputConfirm, setEditInputConfirm] = useState('');
  const [registered, setRegistered] = useState(false);
  const [newChargeModal, setNewChargeModal] = useState(false);
  const [chargeClientName, setChargeClientName] = useState('');
  const [chargeClientDescription, setChargeClientDescription] = useState('');
  const [chargeClientDate, setChargeClientDate] = useState('');
  const [chargeClientValue, setChargeClientValue] = useState('');
  const [chargeClientStatus, setChargeClientStatus] = useState(false)
  const [ chargesDeleteSucess,setChargeDeleteSucess] = useState(false)
  const [ chargesDeleteFailed,setChargeDeleteFailed] = useState(false);


  // Estados para cadastro de cliente
  const [inputRegisterName, setInputRegisterName] = useState('');
  const [inputRegisterEmail, setInputRegisterEmail] = useState('');
  const [inputRegisterCpf, setInputRegisterCpf] = useState('');
  const [inputRegisterPhone, setInputRegisterPhone] = useState('');
  const [inputRegisterAddress, setInputRegisterAddress] = useState('');
  const [inputRegisterComp, setInputRegisterComp] = useState('');
  const [inputRegisterCep, setInputRegisterCep] = useState('');
  const [inputRegisterDistrict, setInputRegisterDistrict] = useState('');
  const [inputRegisterCity, setInputRegisterCity] = useState('');
  const [inputRegisterUf, setInputRegisterUf] = useState('');


  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    const tokenLocal = localStorage.getItem('token');

    if (recoveredUser) {
      setUser(recoveredUser);
      api.defaults.headers.Authorization = `Bearer ${tokenLocal}`;
    }

    setLoading(false);
  }, []);

  const values = {
    registerCharges, setRegisterCharges,
    deleteCharges, setDeleteCharges,
    detailsCharges, setDetailsCharges,
    fLetter, setFLetter,
    fName, setFName,
    cpf, setCpf,
    inputMenuBtn, setInputMenuBtn,
    openMenuBtn, setOpenMenuBtn,
		showEdit, setShowEdit,
		addClient, setAddClient,
    editCharges, setEditCharges,
    showAddCharge, setShowAddCharge,
		editInputName, setEditInputName,
		editInputEmail, setEditInputEmail,
		editInputCpf, setEditInputCpf,
		editInputPhone, setEditInputPhone,
		editInputNewPassword, setEditInputNewPassword,
		editInputConfirm, setEditInputConfirm,
    newChargeModal, setNewChargeModal,
    chargeClientName, setChargeClientName,
    chargeClientDescription, setChargeClientDescription,
    chargeClientDate, setChargeClientDate,
    chargeClientValue, setChargeClientValue,
    chargeClientStatus, setChargeClientStatus,
    inputName, setInputName,
    inputEmail, setInputEmail,
    password, setPassword,
    registered, setRegistered,
    showPassword, setShowPassword,
    loading,
    chargesDeleteSucess,setChargeDeleteSucess,
    chargesDeleteFailed,setChargeDeleteFailed,
    inputRegisterName, setInputRegisterName,
    inputRegisterEmail, setInputRegisterEmail,
    inputRegisterCpf, setInputRegisterCpf,
    inputRegisterPhone, setInputRegisterPhone,
    inputRegisterAddress, setInputRegisterAddress,
    inputRegisterComp, setInputRegisterComp,
    inputRegisterCep, setInputRegisterCep,
    inputRegisterDistrict, setInputRegisterDistrict,
    inputRegisterCity, setInputRegisterCity,
    inputRegisterUf, setInputRegisterUf,
    error, setError,
	}

  const navigate = useNavigate();

  function goTo(path) {
    navigate(path)
  }

  async function registerUser(name, email, password) {

    try {
      await registerAPI(name, email, password);
      goTo('/register-complete');
    } catch (error) {
      console.log(error)
    }
  }

  const logIn = async (email, password) => {

    const response = await loginAPI(email, password);
    const token = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', email);


    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(localStorage.getItem('user'));
    goTo('/main');
    
  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    api.defaults.headers.Authorization = null;
    setUser(null);
    goTo('/');
  };

  const updateUser = async (username, email, cpf, phone, passwd) => {
    try {
      const response = await editUserAPI(username, email, cpf, phone, passwd);
      alert(response.data)
    } catch (error) {
      alert(error);
    }
  }

  const addNewCharge = async (
      cpf,
      chargeClientDate, 
      chargeClientStatus, 
      chargeClientDescription, 
      chargeClientValue) => {
    const response = await addNewChargeAPI(
      cpf, 
      chargeClientDate, 
      chargeClientStatus, 
      chargeClientDescription, 
      chargeClientValue);

    alert(response.data);
  }

  const addNewClient = async (
    phone, 
    email, 
    username, 
    cpf, 
    city, 
    uf, 
    cep,
    street, 
    region, 
    complement
  ) => {
    await addNewClientAPI(
      phone, 
      email, 
      username, 
      cpf, 
      city, 
      uf, 
      cep,
      street, 
      region, 
      complement
    );
  }



  return (
    <MyContext.Provider value={{
      values, 
      authenticated: !!user, 
      user, 
      loading, 
      logIn, 
      logOut, 
      registerUser,
      updateUser,
      addNewCharge,
      addNewClient
    }}
    >
      {children}
    </MyContext.Provider>
  )
}