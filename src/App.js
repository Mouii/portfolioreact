import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './i18n';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
            </Routes>
        </Router>
    );
}

export default App;
