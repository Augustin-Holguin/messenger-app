import { useSelector } from 'react-redux';

import Login from './Login';
import Register from './Register';
import './style.scss';

const Welcome = () => {
    const { existingUser } = useSelector((state) => state.user);

    return (
        <div className="welcome">
            <h1 className="welcome__title">Welcome to Messenger</h1>
            { existingUser ? <Login /> : <Register /> }
        </div>
    );
};

export default Welcome;
