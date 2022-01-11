import { submitLogin } from 'src/actions/user';
import FormAuth from '../FormAuth';

const Login = () => (
    <FormAuth type="login" handleFormSubmit={submitLogin} />
);

export default Login;
