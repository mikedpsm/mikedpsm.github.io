import * as yup from 'yup'

const schemaRegisterClient = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string().min(11).notRequired(),
    phone: yup.string().min(8).notRequired(),
    address: yup.string().notRequired(),
    comp: yup.string().notRequired(),
    cep: yup.string().notRequired(),
    district: yup.string().notRequired(),
    city: yup.string().notRequired(),
    uf: yup.string().notRequired()
});

export default schemaRegisterClient;