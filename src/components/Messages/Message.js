import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateInput, deleteMessage } from 'src/actions';
import './style.scss';

const Message = ({ author, content }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    const element = e.target.closest('.message').getAttribute('messageid');

    dispatch(deleteMessage(element));
  };

  const handleEdit = (e) => {
    const text = e.target.closest('.message').getAttribute('messageid');

    dispatch(updateInput(text));
  };

  return (
    <li className="message" messageid={content}>
      <p className="message__author">{author}</p>
      <p className="message__content">
        <span className="message__content__triangle" />
        {content}
        <button type="button" className="message__content__delete" onClick={handleDelete}>x</button>
        <button type="button" className="message__content__edit" onClick={handleEdit}>edit</button>
      </p>
    </li>
  );
};

Message.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
