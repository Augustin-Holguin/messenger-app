import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

import './style.scss';

const ConversationHeader = ({ roomInfo }) => (
    <div className="conversationHeader">
        {roomInfo.length > 0 && roomInfo[0].friend !== undefined && (
            <div className="conversationHeader__friend-info">
                <Avatar>AV</Avatar>
                <p>{roomInfo[0].friend[0].username}</p>
            </div>
        )}
    </div>
);

ConversationHeader.propTypes = {
    roomInfo: PropTypes.array.isRequired,
};

export default ConversationHeader;
