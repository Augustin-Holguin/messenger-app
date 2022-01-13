import { useSelector } from 'react-redux';

import './style.scss';

import PanelHeader from '../../common/panel/PanelHeader/PanelHeader';
import FormSearch from '../../common/forms/FormSearch';
import PanelList from '../../common/panel/PanelList/PanelList';

const ChatListNewConv = () => {
    const { friends } = useSelector((state) => state.user);
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
            <PanelList list={friends} />
        </div>
    );
};

export default ChatListNewConv;
