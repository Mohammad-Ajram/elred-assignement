import { useState } from 'react'
import {Container,Col,Row} from "reactstrap"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import AboutUs from './pages/aboutus';
import './App.css';

function App() {

  return (
    <div className="App">
      <Container fluid className='px-0'>
        <Navbar />
        <Row className='m-0'>
          <Col md="3" xl="3" xxl="2" className='p-4'><Sidebar /></Col>
          <Col md="9" xl="9" xxl="10" className='p-4 ps-0'>
            <AboutUs />
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default App
