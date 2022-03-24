import * as yup from 'yup'

const schemaLogIn = yup.object().shape({
    email: yup.string().email().required(),
    passwd: yup.string().min(8).max(16).required()
});

export default schemaLogIn;