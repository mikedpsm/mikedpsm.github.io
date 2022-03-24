import * as yup from 'yup';

const schemaRegister1 = yup.object().shape({
	email: yup.string().email().required('O campo email é obrigatório!'),
	name: yup.string().strict().required('O campo Nome é obrigatório!'),
});

export default schemaRegister1;