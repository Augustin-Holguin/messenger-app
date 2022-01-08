import { useSelector } from 'react-redux';

import Welcome from 'src/components/Welcome';
import Chat from 'src/components/Chat';

const App = () => {
    const { loggedIn } = useSelector((state) => state.user);

    return (
        !loggedIn ? <Welcome /> : <Chat />
    );
};

export default App;
