import './App.css';
// import './css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Dashboard/>}/>
              {/* <Route path='/form' element={<UpdateForm/>}/> */}
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
