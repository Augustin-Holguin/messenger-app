import './style.scss';
import ListItem from './ListItem';

const PanelList = ({ list }) => (
    list.map((item) => <ListItem key={item.id} item={item} />)
);

export default PanelList;
