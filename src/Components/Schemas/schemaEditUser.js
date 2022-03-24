import * as yup from 'yup';

const schemaEditUser = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string().min(11).notRequired(),
    phone: yup.string().min(8).notRequired(),
    changePasswd: yup.boolean(),
    passwd: yup.string().min(8).max(16).required(),
    repeatPasswd: yup.string().oneOf([yup.ref('passwd'), null], 'Os campos devem ser iguais.')
});

export default schemaEditUser;