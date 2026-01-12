import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCards from "./components/ProductCards";
import ComparisonTable from "./components/ComparisonTable";
import TrustSection from "./components/TrustSection";
import AIConsultant from "./components/AIConsultant";
import MarketingKit from "./components/MarketingKit";
import PatientScripts from "./components/PatientScripts";
import LabEmail from "./components/LabEmail";
import ROICalculator from "./components/ROICalculator";
import FAQGenerator from "./components/FAQGenerator";
import BlogOutline from "./components/BlogOutline";
import CompetitionAnalyzer from "./components/CompetitionAnalyzer";
import ClinicalCaseGenerator from "./components/ClinicalCaseGenerator";
import TimeSavingsCalculator from "./components/TimeSavingsCalculator";
import SalesPitchGenerator from "./components/SalesPitchGenerator";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductCards />
      <ComparisonTable />
      <TrustSection />
      <AIConsultant />
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <MarketingKit />
        <PatientScripts />
        <LabEmail />
        <ROICalculator />
        <FAQGenerator />
        <BlogOutline />
        <CompetitionAnalyzer />
        <ClinicalCaseGenerator />
        <TimeSavingsCalculator />
        <SalesPitchGenerator />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
