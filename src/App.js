import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/navbar.css"
import Content from './components/Content';
import "./style/content.css"
import Login from './components/Login';
function App() {
  return (
  <>

  <Router>
    <NavBar/>
    <Content/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
