/* eslint-disable react/jsx-max-props-per-line */
import { useSelector, useDispatch } from 'react-redux';

import { displayLogin, updateLoginInfo, loginSubmit } from 'src/actions';
import './style.scss';

const Settings = () => {
    const { logged } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const { email, password } = useSelector((state) => state.user);

    return (
        <div className={logged ? 'login' : 'login login--closed'}>
            <button
                className={logged ? 'login__toggle-btn btn--open' : 'login__toggle-btn'}
                type="button"
                onClick={() => dispatch(displayLogin())}
            >
                &#43;
            </button>
            <form
                className="login__form" onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(loginSubmit());
                }}
            >
                <input
                    className="login__form__input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => dispatch(updateLoginInfo(e.target.value, null))}
                />
                <input
                    className="login__form__input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => dispatch(updateLoginInfo(null, e.target.value))}
                />
                <button className="login__form__btn" type="submit">Send</button>
            </form>
        </div>
    );
};

export default Settings;
