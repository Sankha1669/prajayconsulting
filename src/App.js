import AboutUs from "./components/About/AboutUs/AboutUs";
import Careers from "./components/About/Careers/Careers";
import Testimonials from "./components/About/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import ForAgencies from "./components/ForAgencies/ForAgencies";
import Header from "./components/Header/Header";
import LandingPages from "./components/LandingPages/LandingPages";
import Packages from "./components/Packages/Packages";
import ProfileOptimization from "./components/WhatWeDoPages/ProfileOptimization/ProfileOptimization";
import WhatWeDo from "./components/WhatWeDoPages/WhatWeDoLandingPage/WhatWeDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPages />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route
            path="/what-we-do/profileoptimization"
            element={<ProfileOptimization />}
          />
          <Route path="/foragencies" element={<ForAgencies />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/about/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
