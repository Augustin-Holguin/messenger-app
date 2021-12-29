import { useSelector, useDispatch } from 'react-redux';

import { displayLogin, updateLoginInfo } from 'src/actions';
import './style.scss';

const Settings = () => {
  const loginToggle = useSelector((state) => state.loginToggle);

  const dispatch = useDispatch();
  const updateLoginToggle = () => dispatch(displayLogin());

  const login = useSelector((state) => state.login);

  return (
    <div className="login">
      <button
        className={loginToggle ? 'login__toggle-btn btn--open' : 'login__toggle-btn'}
        type="button"
        onClick={updateLoginToggle}
      >
        &#43;
      </button>
      <form className={loginToggle ? 'login__form form--open' : 'login__form'} action="submit">
        <input
          className="login__form__input"
          type="email"
          placeholder="Email"
          value={login.email}
          onChange={(e) => dispatch(updateLoginInfo(e.target.value, null))}
        />
        <input
          className="login__form__input"
          type="password"
          placeholder="Password"
          value={login.pwd}
          onChange={(e) => dispatch(updateLoginInfo(null, e.target.value))}
        />
        <button className="login__form__btn" type="button">Send</button>
      </form>
    </div>
  );
};

export default Settings;
