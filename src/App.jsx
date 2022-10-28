import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <Router>
      <Routes>{!isLogged && <Route path="/" element={<Login />} />}</Routes>
    </Router>
  );
}

export default App;
