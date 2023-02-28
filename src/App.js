import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllData from './component/AllData';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/alldata' element={<AllData />}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
