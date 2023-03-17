import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DarkToLight from './Components/useDarkMode/DarkToLight';



function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DarkToLight/>}></Route>
    </Routes>
  </BrowserRouter>
  

  
  );


}

export default App;
