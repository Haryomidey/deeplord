import ContactUsPage from './pages/ContactUsPage';
import FarmPage from './pages/FarmPage';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import TechPages from './pages/TechPages';
import HomesPage from './pages/HomesPage';
import EachHome from './pages/EachHome';
import TechPage from './pages/TechPage';
import Mission from './pages/Mission';
import CodeOfEthics from './pages/CodeOfEthics';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/farms' element = {<FarmPage />} />
      <Route path='/contact-us' element = {<ContactUsPage />} />
      <Route path='/tech/:id' element = {<TechPages />} />
      <Route path='/homes' element = {<HomesPage />} />
      <Route path='/homes/:id' element = {<EachHome />} />
      <Route path='/tech' element = {<TechPage />} />
      <Route path='/our-mission' element = {<Mission />} />
      <Route path='/code-of-ethics' element = {<CodeOfEthics />} />
    </Routes>

  )
}

export default App;
