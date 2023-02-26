import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import PrivateRouter from './components/PrivateRouter';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/new-ticket'
              element={
                <PrivateRouter>
                  <NewTicket />
                </PrivateRouter>
              }
            />
            <Route
              path='/tickets'
              element={
                <PrivateRouter>
                  <Tickets />
                </PrivateRouter>
              }
            />
            <Route
              path='/tickets/:ticketId'
              element={
                <PrivateRouter>
                  <Ticket />
                </PrivateRouter>
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
