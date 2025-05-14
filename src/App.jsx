import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import {Home}from './Pages/Home';
import { Rooms } from './Pages/Rooms';
import { PartyHall } from './Pages/PartyHall';
import { Services } from './Pages/Services';
import { Contact } from './Pages/Contact';
import {Navbar} from './components/Navbar';
import { Footer } from './components/Footer';
import './index.css'

function App() {
  return (
   <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/party-hall" element={<PartyHall />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
   </Router>
  );
}
export default App;