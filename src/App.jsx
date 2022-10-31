import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Report from './pages/Reports';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isLoading = useSelector((state) => state.loader.loading);
  return (
    <Router>
      <Routes>
        {!isLogged ? (
          <Route path="/" element={<Login />} />
        ) : (
          <>
            <Route path="*" element={<Dashboard />} />
          </>
        )}
      </Routes>
      <Toaster />
      <Loader visible={isLoading} />
    </Router>
  );
}

export default App;
