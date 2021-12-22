import { useSelector } from 'react-redux';
import Message from './Message';

const Messages = () => {
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);

  return (
    <ul>
      {
        messages.map((message) => (
          <Message key={message} message={message} user={user} />
        ))
      }
    </ul>
  );
};

export default Messages;
