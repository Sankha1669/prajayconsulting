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
import AudienceProfiling from "./components/WhatWeDoPages/AudienceProfiling/AudienceProfiling";
import ConnectionMessage from "./components/WhatWeDoPages/ConnectionMessage/ConnectionMessage";
import ContentMarketing from "./components/WhatWeDoPages/ContentMarketing/ContentMarketing";
import ConversationManagement from "./components/WhatWeDoPages/ConversationManagement/ConversationManagement";
import LinkedInAdvertising from "./components/WhatWeDoPages/LinkedInAdvertising/LinkedInAdvertising";
import OutreachMarketing from "./components/WhatWeDoPages/OutreachMarketing/OutreachMarketing";
import ProfileOptimization from "./components/WhatWeDoPages/ProfileOptimization/ProfileOptimization";
import WhatWeDo from "./components/WhatWeDoPages/WhatWeDoLandingPage/WhatWeDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          /what-we-do/AudienceProfiling
          <Route exact path="/" element={<LandingPages />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route
            path="/what-we-do/profileoptimization"
            element={<ProfileOptimization />}
          />
          <Route
            path="/what-we-do/audienceprofiling"
            element={<AudienceProfiling />}
          />
          <Route
            path="/what-we-do/connectionmessage"
            element={<ConnectionMessage />}
          />
          <Route
            path="/what-we-do/conversion-management"
            element={<ConversationManagement />}
          />
          <Route
            path="/what-we-do/content-marketing"
            element={<ContentMarketing />}
          />
          <Route
            path="/what-we-do/outreach-marketing"
            element={<OutreachMarketing />}
          />
          <Route
            path="/what-we-do/linkedin-advertising"
            element={<LinkedInAdvertising />}
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
