import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App'
import Aboutme from './pages/Aboutme';
import Jobs from './pages/Jobs';
import Error from './pages/Error404';
import Studies from './pages/Studies';
import Skills from './pages/Skills';
import Prueba from './pages/Prueba';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Prueba/>}></Route>
          <Route path='/about-me' element={<Aboutme/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/studies' element={<Studies/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='*' element = {<Error/>}></Route>
          <Route path='/Home' element ={<App/>}></Route>
          <Route path='/home' element={<Navigate to={"/"}/>}></Route>

      </Routes>
  </BrowserRouter>
);

