import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { displayMsgMenu, deleteMessage } from 'src/actions';
import './style.scss';

const Message = ({ author, content }) => {
  const messageMenu = useSelector((state) => state.messageMenu);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(displayMsgMenu(!messageMenu));
  };

  const handleDelete = (e) => {
    const element = e.target.closest('.message').getAttribute('messageid');

    dispatch(deleteMessage(element));
  };

  return (
    <li className="message" messageid={content}>
      <p className="message__author">{author}</p>
      <div className="message__content">
        <span className="message__content__triangle" />
        {content}
        <div className="message__content__showMenu" onFocus={toggleMenu} onBlur={toggleMenu} tabIndex="0">
          <i className="fas fa-chevron-down" />
          { messageMenu && (
          <div className="message__content__menu">
            <ul>
              <li className="message__content__menu__li">Reply</li>
              <li className="message__content__menu__li" onClick={handleDelete}>Delete message</li>
            </ul>
          </div>
          ) }
        </div>
      </div>
    </li>
  );
};

Message.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
