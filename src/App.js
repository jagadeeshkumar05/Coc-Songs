import './App.css';
// import './css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Filters from './components/filters';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/:id' element={<Dashboard/>} />
              <Route path='/filters' element={<Filters/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
