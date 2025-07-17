import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SignIn from './components/Login-forms/singIn';
import SignUp from './components/Login-forms/SingUp';
// import { Layout } from './components/dashboard/Layout';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />   
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;