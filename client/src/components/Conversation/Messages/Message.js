import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { displayMsgMenu, deleteMessage } from 'src/actions';
import './style.scss';

const Message = ({ author, content, isGroupMsg }) => {
    const messageMenu = useSelector((state) => state.messageMenu);
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const toggleMenu = () => {
        dispatch(displayMsgMenu(!messageMenu));
    };

    const handleDelete = (e) => {
        const element = e.target.closest('.message').getAttribute('messageid');

        dispatch(deleteMessage(element));
        dispatch(displayMsgMenu(!messageMenu));
    };

    return (
        <li className={user.username === author ? 'message' : 'message message--left'} messageid={content}>
            <div className={user.username === author ? 'message__content' : 'message__content content--left'}>
                {
                    !isGroupMsg && <span className={user.username === author ? 'message__content__triangle triangle--right' : 'message__content__triangle'} />
                }
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
