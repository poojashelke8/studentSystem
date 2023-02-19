import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </>
  );
}

export default App;
