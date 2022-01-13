import { useSelector } from 'react-redux';

import './style.scss';

import PanelHeader from '../../common/panel/PanelHeader';

const ChatListHeader = () => {
    const { username } = useSelector((state) => state.user);
    return (
        <PanelHeader content={username} button="fas fa-plus-circle" />
    );
};

export default ChatListHeader;
