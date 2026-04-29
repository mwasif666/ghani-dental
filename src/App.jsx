import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import MainHome from './Pages/HomePage/MainHome';
import HomeV2 from './Pages/HomePage/HomeV2';
import HomeV3 from './Pages/HomePage/HomeV3';
import AboutPage from './Pages/AboutPage/AboutPage';
import ServicePage from './Pages/Service/ServicePage';
import ServiceDetails from './Pages/Service/ServiceDetails';
import BracesOrthodonticsPage from './Pages/Service/BracesOrthodonticsPage';
import DentalFillingsPage from './Pages/Service/DentalFillingsPage';
import ToothExtractionPage from './Pages/Service/ToothExtractionPage';
import ScalingPolishingPage from './Pages/Service/ScalingPolishingPage';
import RootCanalTreatmentPage from './Pages/Service/RootCanalTreatmentPage';
import TeethWhiteningPage from './Pages/Service/TeethWhiteningPage';
import DentalImplantsPage from './Pages/Service/DentalImplantsPage';
import CrownsBridgesPage from './Pages/Service/CrownsBridgesPage';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import BlogsDetails from './Pages/BlogsPage/BlogsDetails';
import DoctorsPage from './Pages/Pages/DoctorsPage';
import DoctorsDetailsPage from './Pages/Pages/DoctorsDetailsPage';
import TestimonialsPage from './Pages/Pages/TestimonialsPage';
import FaqPage from './Pages/Pages/FaqPage';
import TimeTablePage from './Pages/Pages/TimeTablePage';
import PortfolioPage from './Pages/Pages/PortfolioPage';
import ErrorPage from './Pages/Pages/ErrorPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ScrollUpButton from './Components/ScrollUpButton';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

function App() {
  Aos.init({
    duration: 1500,
    delay: 0.25,
    disable: 'mobile',
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isTopBar={true} />}>
          <Route index element={<MainHome />} />
          <Route path="/home-v2" element={<HomeV2 />} />
        </Route>
        <Route path="/" element={<Layout variant="cs_type_1" />}>
          <Route path="/home-v3" element={<HomeV3 />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/braces-orthodontics" element={<BracesOrthodonticsPage />} />
          <Route path="/service/dental-fillings" element={<DentalFillingsPage />} />
          <Route path="/service/tooth-extraction" element={<ToothExtractionPage />} />
          <Route path="/service/scaling-polishing" element={<ScalingPolishingPage />} />
          <Route path="/service/root-canal-treatment" element={<RootCanalTreatmentPage />} />
          <Route path="/service/teeth-whitening" element={<TeethWhiteningPage />} />
          <Route path="/service/dental-implants" element={<DentalImplantsPage />} />
          <Route path="/service/crowns-bridges" element={<CrownsBridgesPage />} />
          <Route path="/service/:serviceId" element={<ServiceDetails />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:blogId" element={<BlogsDetails />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:doctorId" element={<DoctorsDetailsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/timetable" element={<TimeTablePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <a
        href="tel:03334425828"
        aria-label="Call 0333 4425828"
        className="cs_float_btn cs_float_phone"
      >
        <FaPhone size={22} />
      </a>
      <a
        href="https://wa.me/923334425828"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp 0333 4425828"
        className="cs_float_btn cs_float_whatsapp"
      >
        <FaWhatsapp size={24} />
      </a>
      <ScrollUpButton />
    </>
  );
}

export default App;
