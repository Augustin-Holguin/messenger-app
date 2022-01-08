import { submitRegister } from 'src/actions/user';
import FormAuth from '../FormAuth';

const Login = () => (
    <FormAuth type="login" handleFormSubmit={submitRegister} />
);

export default Login;
