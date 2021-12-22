import { useSelector } from 'react-redux';
import Message from './Message';

const Messages = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <ul>
      {
        messages.map((message) => (
          <Message key={message} text={message} />
        ))
      }
    </ul>
  );
};

export default Messages;
