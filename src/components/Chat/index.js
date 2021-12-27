// == Import
import './styles.css';

import Settings from 'src/components/Settings';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

// == Composant
const Chat = () => (
  <div className="app">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default Chat;
