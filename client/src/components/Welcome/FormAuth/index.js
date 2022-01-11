import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { updateAuthInfo, existingUserToggle } from 'src/actions/user';
import './style.scss';

const FormAuth = ({ type, handleFormSubmit }) => {
    const {
        name, email, password, existingUser,
    } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const updateFieldValue = (e) => {
        dispatch(updateAuthInfo({ [e.target.name]: e.target.value }));
    };

    return (
        <div className="form-auth">
            <h2 className="form-auth__title">{ type === 'login' ? 'Log into your account' : 'Create an account'}</h2>
            <form
                className="form-auth__form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(handleFormSubmit());
                }}
            >
                {type === 'register' && (
                    <input
                        className="form-auth__form__input"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={updateFieldValue}
                        name="name"
                    />
                )}
                <input
                    className="form-auth__form__input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={updateFieldValue}
                    name="email"
                />
                <input
                    className="form-auth__form__input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updateFieldValue}
                    name="password"
                />
                <button className="form-auth__form__btn" type="submit">Send</button>
            </form>
            <button
                className="form-auth__toggle"
                type="button"
                onClick={() => dispatch(existingUserToggle())}
            >{!existingUser ? 'I already have an account' : 'Don\'t have an account yet ? Click here'}
            </button>
        </div>
    );
};

FormAuth.propTypes = {
    type: PropTypes.string.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
};

export default FormAuth;
