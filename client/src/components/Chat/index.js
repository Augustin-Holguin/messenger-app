// == Import
import './style.scss';

// import Settings from 'src/components/Settings';
import ChatListPanel from 'src/components/ChatListPanel';
import Conversation from 'src/components/Conversation';

// == Composant
const Chat = () => (
    <div className="chat">
        {/* <Settings /> */}
        <ChatListPanel />
        <Conversation />
    </div>
);

// == Export
export default Chat;
