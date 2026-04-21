import SkillHub from '../components/SkillHub';
import PipelineBuilder from '../components/PipelineBuilder';
import A2ASection from '../components/A2ASection';
import Connectors from '../components/Connectors';
import FinalCTA from '../components/FinalCTA';

interface PlatformPageProps {
  onOpenContactForm: () => void
}

export default function PlatformPage({ onOpenContactForm }: PlatformPageProps) {
  return (
    <main>
      <section className="section bg-bg border-b border-black/5">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Платформа</span>
          <h1 className="h-display mt-4 text-balance">Скиллы, пайплайны и коннекторы</h1>
          <p className="lead mt-6">
            Готовые навыки, повторяемые agentic-процессы и коннекторы к системам, которые уже живут в компании.
          </p>
        </div>
      </section>

      <SkillHub />
      <PipelineBuilder />
      <A2ASection />
      <Connectors />

      <FinalCTA onOpenContactForm={onOpenContactForm} />
    </main>
  );
}
