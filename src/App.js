import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import All from './All';
import Fsd from './All';
import Datas from './All';
import Cyber from './Cyber';
import Career from './Career';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">ALL</Nav.Link>
            <Nav.Link href="/Fsd">FULL STACK DEVELOPMENT</Nav.Link>
            <Nav.Link href="/Datas">DATA SCIENCE</Nav.Link>
            <Nav.Link href="/Cyber">CYBER SECURITY</Nav.Link>
            <Nav.Link href="/Career">CAREER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<All />}></Route>
          <Route path='/Fsd' element={<All />}></Route>
          <Route path='/Datas' element={<Datas />}></Route>
          <Route path='/Cyber' element={<Cyber />}></Route>
          <Route path='/Career' element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
