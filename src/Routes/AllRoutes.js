import React from "react";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Projects from "../Pages/Projects";
import NeedHelp from "../Pages/NeedHelp";
// import Feedback from "../Pages/Feedbacks";
import Portfolio from "../Pages/Portfolio";
import ContactUs from "../Pages/ContactUs";
import WhyChooseUs from "../Pages/WhyChooseUs";
import TemsAndConditions from "../Pages/TemsAndConditions";



// import Services from "../Pages/Services";



import NodePage from "../Pages/ServicesPages/DevelopementServices/NodePage";
import ReactPage from "../Pages/ServicesPages/DevelopementServices/ReactPage";
import ShopifyPage from "../Pages/ServicesPages/DevelopementServices/ShopifyPage";
import WordpressPage from "../Pages/ServicesPages/DevelopementServices/WordpressPage";
import AndriodAppPage from "../Pages/ServicesPages/DevelopementServices/AndriodAppPage";
import StaticWebsitePage from "../Pages/ServicesPages/DevelopementServices/StaticWebsitePage";
import EmailInVoicesPage from "../Pages/ServicesPages/DevelopementServices/EmailInVoicesPage";
import WebDevelopementPage from "../Pages/ServicesPages/DevelopementServices/WebDevelopementPage";


import AIPage from "../Pages/ServicesPages/ItAndTechnicalServices/AIPage";
import LinuxPage from "../Pages/ServicesPages/ItAndTechnicalServices/LinuxPage";
import DatabasesPage from "../Pages/ServicesPages/ItAndTechnicalServices/DatabasesPage";
import NetworkingPage from "../Pages/ServicesPages/ItAndTechnicalServices/NetworkingPage";
import CyberSecuirtyPage from "../Pages/ServicesPages/ItAndTechnicalServices/CyberSecuirtyPage";
import CloudComputingPage from "../Pages/ServicesPages/ItAndTechnicalServices/CloudComputingPage";
import DataStructureAlgorithmPage from "../Pages/ServicesPages/ItAndTechnicalServices/DataStructureAlgorithmPage";


import CustomProgramsPage from "../Pages/ServicesPages/ProjectAssistanceServices/CustomProgramsPage";
import FinalYearProjectPage from "../Pages/ServicesPages/ProjectAssistanceServices/FinalYearProjectPage";
import ProjectMangementPage from "../Pages/ServicesPages/ProjectAssistanceServices/ProjectMangementPage";




import ThesisPage from "../Pages/ServicesPages/WrittingAndAcademicServices/ThesisPage";
import AssignimentPage from "../Pages/ServicesPages/WrittingAndAcademicServices/AssignimentPage";
import ProofReadingPage from "../Pages/ServicesPages/WrittingAndAcademicServices/ProofReadingPage";
import ResearchPapperPage from "../Pages/ServicesPages/WrittingAndAcademicServices/ResearchPapperPage";



import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/feedback" element={<Feedback />} /> */}
      <Route path="/need-help" element={<NeedHelp/>} />
      <Route path="/terms&conditions" element={<TemsAndConditions />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about-us" element={<AboutUs />} />


      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/faqs" element={<Home />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />


      <Route path="/services/node.js" element={<NodePage />} />
      <Route path="/services/react.js" element={<ReactPage />} />
      <Route path="/services/shopify" element={<ShopifyPage />} />
      <Route path="/services/wordpress" element={<WordpressPage />} />
      <Route path="/services/andriod-app" element={<AndriodAppPage />} />
      <Route path="/services/static-website" element={<StaticWebsitePage />} />
      <Route path="/services/email-invoices" element={<EmailInVoicesPage />} />
      <Route path="/services/web-development" element={<WebDevelopementPage />} />



      <Route path="/services/ai" element={<AIPage />} />
      <Route path="/services/linux" element={<LinuxPage />} />
      <Route path="/services/databases" element={<DatabasesPage />} />
      <Route path="/services/networking" element={<NetworkingPage />} />
      <Route path="/services/cloud-computing" element={<CloudComputingPage />} />
      <Route path="/services/cyber-security" element={<CyberSecuirtyPage />} />
      <Route path="/services/data-structure-algorithm" element={<DataStructureAlgorithmPage />} />




      <Route path="/services/custom-programs" element={<CustomProgramsPage />} />
      <Route path="/services/final-year-project" element={<FinalYearProjectPage />} />
      <Route path="/services/project-management" element={<ProjectMangementPage />} />


      <Route path="/services/thesis" element={<ThesisPage />} />
      <Route path="/services/assignments" element={<AssignimentPage />} />
      <Route path="/services/proof-reading" element={<ProofReadingPage />} />
      <Route path="/services/research-paper" element={<ResearchPapperPage />} />





      

    </Routes>
  );
};

export default AllRoutes;
