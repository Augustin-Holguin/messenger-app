import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMsgInput, postMessage } from 'src/actions';
import './style.scss';

const Form = () => {
    const inputText = useSelector((state) => state.inputText);
    const user = useSelector((state) => state.user.pseudo);
    const dispatch = useDispatch();

    const inputEl = useRef();

    useEffect(() => {
        inputEl.current.focus();
    }, [user]);

    const handleChange = (e) => {
        const newInputText = e.target.value;
        dispatch(updateMsgInput(newInputText));
    };

    const addNewMessage = () => {
        dispatch(postMessage());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewMessage();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form__input"
                type="text"
                ref={inputEl}
                value={inputText}
                placeholder="Type your message"
                onChange={handleChange}
            />
            <button
                className="form__button"
                type="button"
                onClick={addNewMessage}
            >
                <i className="fab fa-telegram-plane" />
            </button>
        </form>
    );
};

export default Form;
