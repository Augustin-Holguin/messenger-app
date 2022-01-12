import './style.scss';

import ConversationHeader from './ConversationHeader';
import Messages from './Messages';
import Form from './Form';

const Conversation = () => (
    <div className="conversation">
        <ConversationHeader />
        <Messages />
        <Form />
    </div>
);

export default Conversation;
