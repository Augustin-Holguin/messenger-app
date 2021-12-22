import PropTypes from 'prop-types';
import './style.scss';

const Message = ({ message, user }) => (
  <li className="message">
    <p className="message__user">{user}</p>
    <p className="message__text">
      <span className="message__text__triangle" />
      {message}
    </p>
  </li>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Message;
