import './style.scss';

import ChatListHeader from './ChatListHeader';
import ChatListSearch from './ChatListSearch';
import ChatListRooms from './ChatListRooms';

const ChatListPanel = () => (
    <div className="chatListPanel">
        <ChatListHeader />
        <ChatListSearch />
        <ChatListRooms />
    </div>
);

export default ChatListPanel;
