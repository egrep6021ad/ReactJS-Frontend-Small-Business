import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainFrame from './Comps/MainFrame';
import Home from './Comps/Home';
import About from './Comps/About'
import Pricing from './Comps/Pricing';
import Contact from './Comps/Contact';
import ChatRoom from './Comps/ChatRoom';

function App() {
  return (
      <Routes>
        <Route path="/" element={ <MainFrame />}> 
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/chatroom' element={<ChatRoom />} />
        </Route>
      </Routes>
  );
}
export default App;