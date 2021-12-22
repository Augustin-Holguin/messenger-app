import { useSelector, useDispatch } from 'react-redux';
import { updateInput, postMessage } from 'src/actions';

const Form = () => {
  const inputText = useSelector((state) => state.inputText);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newInputText = e.target.value;
    dispatch(updateInput(newInputText));
  };

  const addNewMessage = () => {
    dispatch(postMessage(inputText));
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
        value={inputText}
        placeholder="Type your message"
        onChange={handleChange}
      />
      <button
        className="form__button"
        type="button"
        onClick={addNewMessage}
      >
        {'>'}
      </button>
    </form>
  );
};

export default Form;
