import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifest from './components/Manifest';
import Problem from './components/Problem';
import SecondBrain from './components/SecondBrain';
import PlatformPillars from './components/PlatformPillars';
import AskVerifyAct from './components/AskVerifyAct';
import DemoFlow from './components/DemoFlow';
import SkillHub from './components/SkillHub';
import PipelineBuilder from './components/PipelineBuilder';
import A2ASection from './components/A2ASection';
import Connectors from './components/Connectors';
import DashboardSection from './components/DashboardSection';
import ModelProviders from './components/ModelProviders';
import EnterpriseControl from './components/EnterpriseControl';
import WhyCoreAI from './components/WhyCoreAI';
import UseCases from './components/UseCases';
import PartnerSection from './components/PartnerSection';
import PilotTimeline from './components/PilotTimeline';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactFormModal from './components/contact-form-modal';

export default function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header onOpenContactForm={() => setIsContactFormOpen(true)} />
      <main>
        <Hero onOpenContactForm={() => setIsContactFormOpen(true)} />
        <Manifest />
        <Problem />
        <SecondBrain />
        <PlatformPillars />
        <AskVerifyAct />
        <DemoFlow />
        <SkillHub />
        <PipelineBuilder />
        <A2ASection />
        <Connectors />
        <DashboardSection />
        <ModelProviders />
        <EnterpriseControl />
        <WhyCoreAI />
        <UseCases />
        <PartnerSection />
        <PilotTimeline />
        <Comparison />
        <FAQ />
        <FinalCTA onOpenContactForm={() => setIsContactFormOpen(true)} />
      </main>
      <Footer />
      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
}
