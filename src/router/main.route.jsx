import { HashRouter, Route, Routes } from "react-router-dom"
import ContactUsPage from '../pages/ContactUsPage';
import FarmPage from '../pages/FarmPage';
import Home from '../pages/Home';
import HomesPage from '../pages/HomesPage';
import EachHome from '../pages/EachHome';
import TechPage from '../pages/TechPage';
import Mission from '../pages/Mission';
import CodeOfEthics from '../pages/CodeOfEthics';
import Branding from "../pages/TechPages/Branding";
import DigitalMarketing from "../pages/TechPages/DigitalMarketing";
import MediaDistribution from "../pages/TechPages/MediaDistribution";
import Networking from "../pages/TechPages/Networking";
import ScrollToTop from '../components/ScrollToTop';

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='/farms' element = {<FarmPage />} />
                <Route path='/contact-us' element = {<ContactUsPage />} />
                <Route path='/tech/branding' element = {<Branding />} />
                <Route path='/tech/digital-marketing' element = {<DigitalMarketing />} />
                <Route path='/tech/media-distribution' element = {<MediaDistribution />} />
                <Route path='/tech/networking' element = {<Networking />} />
                <Route path='/homes' element = {<HomesPage />} />
                <Route path='/homes/:id' element = {<EachHome />} />
                <Route path='/tech' element = {<TechPage />} />
                <Route path='/our-mission' element = {<Mission />} />
                <Route path='/code-of-ethics' element = {<CodeOfEthics />} />
            </Routes>
            <ScrollToTop />
        </HashRouter>
    )
}

export default Router
