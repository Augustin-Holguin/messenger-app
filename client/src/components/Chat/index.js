import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

import ChatListPanel from 'src/components/ChatListPanel';
import Conversation from 'src/components/Conversation';
import { getFriends } from 'src/actions/user';

const Chat = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends());
    }, []);

    return (
        <div className="chat">
            <ChatListPanel />
            <Conversation />
        </div>
    );
};

export default Chat;
