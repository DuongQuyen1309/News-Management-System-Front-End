import Login from './components/pages/Login'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InforSection from './components/layout/InforSection'
import MainLayout from './components/layout/MainLayout'
import UserProvider from './components/context/UserProvider'
import HomePage from './components/pages/HomePage'
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<MainLayout />}>

            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App
