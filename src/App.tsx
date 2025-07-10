import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MenuLogin } from './components/Login-forms/MenuLogin';
import SignIn from './components/Login-forms/singIn';
// import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/signup" element={<MenuLogin />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;