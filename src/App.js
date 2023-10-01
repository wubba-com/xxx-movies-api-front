import AuthProvider from "./provider/auth";
import Routes from "./routes";
import './App.css';

const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;