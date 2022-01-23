import { useSelector } from 'react-redux';

import './style.scss';

import ConversationHeader from './ConversationHeader';
import Messages from './Messages';
import Form from './Form';

const Conversation = () => {
    const { convSelected } = useSelector((state) => state.settings);
    const { rooms } = useSelector((state) => state.user);

    const selectedRoomInfo = rooms.filter((room) => room.roomId === convSelected.id);

    return (
        <div className="conversation">
            <ConversationHeader roomInfo={selectedRoomInfo} />
            <Messages />
            <Form />
        </div>
    );
};

export default Conversation;
