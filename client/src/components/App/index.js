import { useSelector } from 'react-redux';

import Welcome from 'src/components/Welcome';
import Chat from 'src/components/Chat';

const App = () => {
    const { logged } = useSelector((state) => state.user);

    return (
        !logged ? <Welcome /> : <Chat />
    );
};

export default App;
