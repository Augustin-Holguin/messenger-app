import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMsgInput, postMessage } from 'src/actions/message';
import './style.scss';

const Form = () => {
    const { inputText } = useSelector((state) => state.messages);
    const { convSelected } = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    const inputEl = useRef();

    useEffect(() => {
        inputEl.current.focus();
    }, [convSelected]);

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
                disabled={!convSelected.isSelected}
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
