// == Import
import './styles.css';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

// == Composant
const Chat = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chat;
