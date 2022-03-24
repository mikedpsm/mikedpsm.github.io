import * as yup from 'yup';

const schemaRegister2 = yup.object().shape({
	passwd: yup.string().min(8).required('O campo senha é obrigatório!'),
	confirmPasswd: yup.string()
    .oneOf([yup.ref('passwd'), null], 'Os campos devem ser iguais.')
});

export default schemaRegister2;