import { useSelector } from 'react-redux';

import './style.scss';

import PanelHeader from '../../common/panel/PanelHeader';
import FormSearch from '../../common/forms/FormSearch';

const ChatListNewConv = () => {
    const { newConvToggle, searchFriendInput } = useSelector((state) => state.settings);

    return (
        <div className={newConvToggle ? 'chatListNewConv chatListNewConv--open' : 'chatListNewConv'}>
            <PanelHeader content="Start a new conversation" button="fas fa-times" />
            <FormSearch
                placeholder="Find a contact"
                inputName="searchFriendInput"
                inputValue={searchFriendInput}
                handleSubmit={console.log('hello')}
            />
        </div>
    );
};

export default ChatListNewConv;
