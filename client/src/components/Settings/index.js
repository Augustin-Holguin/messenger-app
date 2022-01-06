/* eslint-disable react/jsx-max-props-per-line */
import { useSelector, useDispatch } from 'react-redux';

import { displayLogin, updateLoginInfo, loginSubmit } from 'src/actions';
import './style.scss';

const Settings = () => {
  const loginToggle = useSelector((state) => state.loginToggle);

  const dispatch = useDispatch();

  const { email, pwd } = useSelector((state) => state.login);

  return (
    <div className={loginToggle ? 'login' : 'login login--closed'}>
      <button
        className={loginToggle ? 'login__toggle-btn btn--open' : 'login__toggle-btn'}
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
          value={pwd}
          onChange={(e) => dispatch(updateLoginInfo(null, e.target.value))}
        />
        <button className="login__form__btn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Settings;
