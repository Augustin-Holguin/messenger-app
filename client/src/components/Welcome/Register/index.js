import { submitRegister } from 'src/actions/user';
import FormAuth from '../FormAuth';

const Register = () => (
    <FormAuth type="register" handleFormSubmit={submitRegister} />
);

export default Register;
