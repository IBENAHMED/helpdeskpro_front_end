import './App.css';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import Dashbord from './dashbord/Dashbord';
import Navbar from './components/Navbar';
import Tickets from './tickets/Ticket';

const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={token ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Dashbord />
              </>
            </ProtectedRoute>
          } />
          <Route path="/tickets" element={
            <ProtectedRoute>
              <Tickets />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
