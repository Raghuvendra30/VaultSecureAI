import { Routes, Route } from 'react-router-dom';
import VaultSecureLanding from './components/landingpage';
import PersonalizedServices from './components/personalizedservices';
import AboutUs from './components/aboutus';
import SystemFeatures from './components/PowerfulFeatures';
import Login from './pages/login';
import Signup from './pages/signup';
import heroImage from './assets/hero-illustration.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      {/* 👇 Make this global, available across all routes */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={
          <>
            <VaultSecureLanding heroImage={heroImage} />
            <AboutUs />
            <PersonalizedServices />
            <SystemFeatures />
          </>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/anomaly-checker" element={<YourAnomalyToolComponent />} />
        <Route path="/loan-fraud-assessor" element={<YourLoanToolComponent />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
