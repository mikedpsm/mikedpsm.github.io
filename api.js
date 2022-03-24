import axios from 'axios';

export const api = axios.create({
    baseURL: "https://db-pagmanager.herokuapp.com/api",
    headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type,Accept, auth-token, access-control-allow-origin',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    }
});

export const loginAPI = async (email, password) => {
    return api.post('/user/login', { email, passwd: password });
};

export const getInfoAPI = async () => {
    return api.get('/user');
};

export const registerAPI = async (name, email, password) => {
    return api.post('/user', { username: name, email, passwd: password });
}

export const getChargersAPI = async () => {
    return api.get('/invoices');
}

export const editUserAPI = async (username, email, cpf, phone, passwd) => {
    return api.patch('/user', { username, email, cpf, phone, passwd })
}

export const getHomeValuesAPI = async () => {
    return api.get('/invoice');
}
export const getClientInvoiceAPI = async () => {
    return api.get('/invoices');
}

export const deleteInvoiceAPI = async (id) => {
    return api.delete(`/invoice/${id}`);
}

export const getClientsAPI = async () => {
    return api.get('/clients');
}

export const addNewChargeAPI = async (
    cpf,
    chargeClientDate, 
    chargeClientStatus, 
    chargeClientDescription, 
    chargeClientValue) => {
    return api.post(`/invoice/${cpf}`, 
    { 
        duedate: chargeClientDate, 
        paidout: chargeClientStatus, 
        description: chargeClientDescription, 
        total: chargeClientValue
    })
};

export const getAllInvoicesAPI = async () => {
    return api.get('/invoices');
}

export const addNewClientAPI = async (
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
  return api.post('/client', { 
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
    }
  )
}

// netlify