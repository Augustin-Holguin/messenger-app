import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './style.scss';

import { displayNewConv } from 'src/actions/settings';

const PanelHeader = ({ content, button }) => {
    const dispatch = useDispatch();

    return (
        <div className="chatListHeader">
            <div className="chatListHeader__user">{content}</div>
            <button type="button" className="chatListHeader__new-msg" onClick={() => dispatch(displayNewConv())}>
                <i className={button} />
            </button>
        </div>
    );
};

PanelHeader.propTypes = {
    content: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};

export default PanelHeader;
