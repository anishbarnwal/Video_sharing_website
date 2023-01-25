import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector }from 'react-redux'


import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/Home'
import Auth from './pages/Auth'

import Navbar from './components/Navbar'
import Video from './pages/Video'
import User from './pages/User'
import Dashboard from './pages/Dashboard'

const App = () => {

  const user = useSelector((state)=> state.authReducer.authData)

  return (
    <div style={{margin: '10px'}}>
      <Navbar />
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/video/:id" element={<Video />} />
              <Route path="/user/:id" element={ user ? <User /> : <Auth /> } />
              <Route path="/dashboard/:id" element={ user ? <Dashboard /> : <Auth /> } />
              <Route path="/auth" element={ user ? <Navigate to = "/"/> : <Auth /> } />
          </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} transition={Bounce}/>
    </div>
  );
}

export default App;
