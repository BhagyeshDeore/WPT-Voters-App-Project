import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigationbar } from './components/Navigationbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Voterlist } from './components/voterlist';
import { RegistrationPage } from './components/Registration';
import LoginForm, { Login } from './components/LoginForm';
import { VoterEditForm } from './components/voterEditForm';


function App() {
  return (
    <BrowserRouter>
      <Navigationbar></Navigationbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Voterlist' element={<Voterlist/>}></Route>
        <Route path='/register' element={<RegistrationPage/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/edit/:phone' element={<VoterEditForm/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
