import PropTypes from 'prop-types';

const Message = ({ text }) => (
  <li>{text}</li>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
