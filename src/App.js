import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import List from './Pages/List';
import List2 from './Pages/List2';
import SideBAr from './Components/SideBAr';
function App() {
  return (
  <>

  <SideBAr/>
  <Routes>
    <Route   path='/' element ={<List />} />
    <Route path='/List2' element ={ <List2 />} />
    
  </Routes>
  </>
  );
}

export default App;