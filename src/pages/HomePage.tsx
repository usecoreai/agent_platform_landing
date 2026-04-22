import Hero from '../components/Hero';
import Manifest from '../components/Manifest';
import Problem from '../components/Problem';
import SecondBrain from '../components/SecondBrain';
import PlatformPillars from '../components/PlatformPillars';
import AskVerifyAct from '../components/AskVerifyAct';
import DemoFlow from '../components/DemoFlow';
// import SkillHub from '../components/SkillHub';       // moved to /platform
// import PipelineBuilder from '../components/PipelineBuilder'; // moved to /platform
// import A2ASection from '../components/A2ASection';   // moved to /platform
// import Connectors from '../components/Connectors';   // moved to /platform
import DashboardSection from '../components/DashboardSection';
import ModelProviders from '../components/ModelProviders';
// import EnterpriseControl from '../components/EnterpriseControl';
import WhyCoreAI from '../components/WhyCoreAI';
// import UseCases from '../components/UseCases';
import PartnerSection from '../components/PartnerSection';
import PilotTimeline from '../components/PilotTimeline';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

interface HomePageProps {
  onOpenContactForm: () => void
}

export default function HomePage({ onOpenContactForm }: HomePageProps) {
  return (
    <main>
      <Hero onOpenContactForm={onOpenContactForm} />
      <Manifest />
      <Problem />
      <SecondBrain />
      <PlatformPillars />
      <AskVerifyAct />
      <DemoFlow />
      {/* <SkillHub />        → /platform */}
      {/* <PipelineBuilder /> → /platform */}
      {/* <A2ASection />      → /platform */}
      {/* <Connectors />      → /platform */}
      <DashboardSection />
      <ModelProviders />
      {/* <EnterpriseControl /> */}
      <WhyCoreAI />
      {/* <UseCases /> */}
      <PartnerSection onOpenContactForm={onOpenContactForm} />
      <PilotTimeline onOpenContactForm={onOpenContactForm} />
      <Comparison />
      <FAQ />
      <FinalCTA onOpenContactForm={onOpenContactForm} />
    </main>
  );
}
