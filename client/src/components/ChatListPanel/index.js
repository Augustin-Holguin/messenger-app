import './style.scss';

import ChatListHeader from './ChatListHeader';
import ChatListSearch from './ChatListSearch';
import ChatListRooms from './ChatListRooms';
import ChatListNewConv from './ChatListNewConv';

const ChatListPanel = () => (
    <div className="chatListPanel">
        <ChatListHeader />
        <ChatListSearch />
        <ChatListRooms />
        <ChatListNewConv />
    </div>
);

export default ChatListPanel;
