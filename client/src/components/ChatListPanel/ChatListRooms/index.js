import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';

import './style.scss';

const ChatListRooms = () => {
    const { rooms } = useSelector((state) => state.user);

    return (
        <div className="chatListRooms">
            <List>
                { rooms.map((room) => (
                    <ListItemButton key={room.roomId}>
                        <Avatar>AV</Avatar>
                        {room.friend[0].username}
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};

export default ChatListRooms;
