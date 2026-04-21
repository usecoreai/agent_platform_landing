import Hero from '../components/Hero';
import Manifest from '../components/Manifest';
import Problem from '../components/Problem';
import SecondBrain from '../components/SecondBrain';
import PlatformPillars from '../components/PlatformPillars';
import AskVerifyAct from '../components/AskVerifyAct';
import DemoFlow from '../components/DemoFlow';
import SkillHub from '../components/SkillHub';
import PipelineBuilder from '../components/PipelineBuilder';
import A2ASection from '../components/A2ASection';
import Connectors from '../components/Connectors';
import DashboardSection from '../components/DashboardSection';
import ModelProviders from '../components/ModelProviders';
// import EnterpriseControl from '../components/EnterpriseControl';
import WhyCoreAI from '../components/WhyCoreAI';
import UseCases from '../components/UseCases';
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
      <SkillHub />
      <PipelineBuilder />
      <A2ASection />
      <Connectors />
      <DashboardSection />
      <ModelProviders />
      {/* <EnterpriseControl /> */}
      <WhyCoreAI />
      <UseCases />
      <PartnerSection onOpenContactForm={onOpenContactForm} />
      <PilotTimeline />
      <Comparison />
      <FAQ />
      <FinalCTA onOpenContactForm={onOpenContactForm} />
    </main>
  );
}
