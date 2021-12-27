import './style.scss';

const Settings = () => (
  <div className="login">
    <button className="login__toggle-btn btn--open" type="button">&#43;</button> {/*alternative: &#10006; */}
    <form className="login__form" action="submit">
      <input className="login__form__input" type="email" placeholder="Email" />
      <input className="login__form__input" type="password" placeholder="Password" />
      <button className="login__form__btn" type="button">Send</button>
    </form>
  </div>
);

export default Settings;
