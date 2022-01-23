import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';

import { useSelector, useDispatch } from 'react-redux';

import { updateConvSelected } from 'src/actions/settings';
import './style.scss';

const ChatListRooms = () => {
    const { rooms } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    return (
        <div className="chatListRooms">
            <List>
                { rooms.map((room) => (
                    <ListItemButton
                        key={room.roomId}
                        onClick={() => dispatch(updateConvSelected(room.roomId))}
                    >
                        <Avatar>AV</Avatar>
                        {room.friend[0].username}
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};

export default ChatListRooms;
