import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

const Messages = () => {
    const { messages } = useSelector((state) => state.messages);
    const messagesElem = useRef();

    useEffect(() => {
        messagesElem.current.scrollTo({
            top: messagesElem.current.scrollHeight,
            behavior: 'smooth',
        });
    }, [messages.length]);

    return (
        <ul className="messages" ref={messagesElem}>
            {
                messages.map((message) => (
                    <Message
                        key={message.id}
                        author={message.author}
                        content={message.content}
                        isGroupMsg={message.isGroupMsg}
                    />
                ))
            }
        </ul>
    );
};

export default Messages;
