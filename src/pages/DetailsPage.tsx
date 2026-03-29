import { Link } from 'react-router-dom';
import {
  Database, GitBranch, Layers, Sparkles, Monitor, ArrowRight,
  Upload, Brain, BarChart3, ArrowDown,
  RefreshCw, Wrench, Server, Trash2, Replace,
  Globe, Cpu, Cloud, Zap, Check,
  ArrowLeft
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── Pipeline Step Detail ─── */
function StepCard({ index, icon: Icon, title, desc, color }: { index: number; icon: any; title: string; desc: string; color: string }) {
  return (
    <div className="card-hover flex gap-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100">
            <span className="text-xs font-extrabold text-indigo-600">{index}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Wave Card ─── */
function WaveCard({ wave, apps, color }: { wave: number; apps: string[]; color: string }) {
  return (
    <div className="card-hover bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className={`bg-gradient-to-r ${color} px-6 py-3`}>
        <h4 className="font-bold text-white text-sm">Migration Wave {wave}</h4>
      </div>
      <div className="p-5 space-y-2.5">
        {apps.map((app, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100">
            <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${color}`} />
            <span className="text-sm font-medium text-slate-700">{app}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



export default function DetailsPage() {
  return (
    <main className="overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-indigo-100 shadow-sm mb-6">
              <Cpu className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Technical Deep Dive</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              How <span className="gradient-text">WaveSync AI</span><br />Works
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              A complete breakdown of the execution pipeline, architecture, and intelligent algorithms behind autonomous cloud migration wave planning.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full"><path d="M0 30C480 60 960 0 1440 30V60H0V30Z" fill="#f8fafc"/></svg>
        </div>
      </section>

      {/* ═══ EXECUTION PIPELINE ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">Step by Step</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Execution <span className="gradient-text">Pipeline</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Six intelligent stages from raw data to actionable migration plan</p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { icon: Upload, title: 'Data Ingestion', desc: 'System loads the application portfolio and dependency matrix from Amazon S3. Supports CSV, JSON, and CMDB exports for seamless enterprise integration.', color: 'from-blue-500 to-cyan-500' },
              { icon: GitBranch, title: 'Graph Construction', desc: 'NetworkX builds a directed graph where each node represents an application and each edge represents a dependency relationship.', color: 'from-indigo-500 to-blue-600' },
              { icon: Layers, title: 'SCC Detection', desc: 'Tarjan\'s algorithm identifies strongly connected components — groups of mutually dependent applications that must migrate together.', color: 'from-purple-500 to-indigo-600' },
              { icon: BarChart3, title: 'Topological Sorting', desc: 'Waves are ordered using topological sort on the DAG of SCCs, ensuring dependencies are always migrated before dependents.', color: 'from-violet-500 to-purple-600' },
              { icon: Sparkles, title: 'AI Reasoning', desc: 'Amazon Bedrock analyzes each application\'s characteristics and assigns an optimal migration strategy (6R) with plain-text explanations.', color: 'from-pink-500 to-purple-600' },
              { icon: Monitor, title: 'Visualization', desc: 'Interactive React dashboard displays migration waves with drag-and-drop management, risk indicators, and strategy details.', color: 'from-rose-500 to-pink-600' },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={`animation-delay-${Math.min(i * 200, 800)}`}>
                <StepCard index={i + 1} icon={step.icon} title={step.title} desc={step.desc} color={step.color} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARCHITECTURE DIAGRAM ═══ */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              System <span className="gradient-text">Architecture</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100">
              {/* Vertical flow */}
              <div className="flex flex-col items-center gap-2">
                {[
                  { label: 'Amazon S3', sub: 'Data Storage', icon: Database, color: 'from-orange-500 to-amber-500' },
                  { label: 'FastAPI', sub: 'Backend Server', icon: Server, color: 'from-green-500 to-emerald-500' },
                  { label: 'NetworkX Engine', sub: 'Graph Processing', icon: GitBranch, color: 'from-indigo-500 to-blue-600' },
                  { label: 'Amazon Bedrock', sub: 'AI Reasoning', icon: Brain, color: 'from-purple-500 to-pink-600' },
                  { label: 'React Dashboard', sub: 'Visualization', icon: Monitor, color: 'from-cyan-500 to-blue-500' },
                ].map((block, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="flex items-center gap-4 w-full max-w-sm">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${block.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <block.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 px-5 py-4 rounded-xl bg-slate-50 border border-slate-100">
                        <p className="font-bold text-slate-800 text-sm">{block.label}</p>
                        <p className="text-xs text-slate-500">{block.sub}</p>
                      </div>
                    </div>
                    {i < 4 && (
                      <div className="flex flex-col items-center py-1">
                        <div className="w-0.5 h-4 bg-gradient-to-b from-indigo-300 to-purple-300" />
                        <ArrowDown className="w-4 h-4 text-indigo-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SAMPLE OUTPUT ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">Output</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Sample <span className="gradient-text">Migration Waves</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Auto-generated safe migration sequence with zero dependency conflicts</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6">
            <AnimatedSection animation="animate-slide-in-left">
              <WaveCard wave={1} apps={['Auth Database', 'Identity Service', 'LDAP Connector']} color="from-blue-500 to-indigo-500" />
            </AnimatedSection>
            <AnimatedSection animation="animate-slide-up">
              <WaveCard wave={2} apps={['Billing Engine', 'Payment Gateway', 'Invoice Service']} color="from-purple-500 to-pink-500" />
            </AnimatedSection>
            <AnimatedSection animation="animate-slide-in-right">
              <WaveCard wave={3} apps={['Frontend Portal', 'Analytics Dashboard', 'Notification Service']} color="from-cyan-500 to-blue-500" />
            </AnimatedSection>
          </div>

          {/* Visual timeline */}
          <AnimatedSection className="mt-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6 text-center">Migration Timeline</h4>
              <div className="relative">
                <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full opacity-20" />
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { wave: 'Wave 1', time: 'Week 1-2', color: 'bg-blue-500' },
                    { wave: 'Wave 2', time: 'Week 3-4', color: 'bg-purple-500' },
                    { wave: 'Wave 3', time: 'Week 5-6', color: 'bg-cyan-500' },
                  ].map((w, i) => (
                    <div key={i} className="text-center">
                      <div className={`w-12 h-12 ${w.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <span className="text-white font-bold text-sm">{i + 1}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-800">{w.wave}</p>
                      <p className="text-xs text-slate-500">{w.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ MIGRATION STRATEGY ═══ */}
      <section className="py-24 lg:py-32 dark-section text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-sm font-semibold mb-4">6R Framework</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Migration <span className="text-indigo-400">Strategy</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">AI assigns the optimal strategy for each application</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Cloud, title: 'Rehost', desc: 'Lift & shift to cloud', color: 'from-blue-500 to-cyan-500' },
              { icon: RefreshCw, title: 'Refactor', desc: 'Re-architect for cloud', color: 'from-indigo-500 to-purple-500' },
              { icon: Wrench, title: 'Replatform', desc: 'Optimize for cloud', color: 'from-purple-500 to-pink-500' },
              { icon: Trash2, title: 'Retire', desc: 'Decommission app', color: 'from-orange-500 to-red-500' },
              { icon: Replace, title: 'Replace', desc: 'Switch to SaaS', color: 'from-green-500 to-emerald-500' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={`animation-delay-${Math.min(i * 200, 800)}`}>
                <div className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 text-center hover:border-indigo-500/30">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mx-auto mb-3`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-slate-400">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">Stack</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Globe, title: 'Frontend', sub: 'React / Tailwind', color: 'from-cyan-500 to-blue-500' },
              { icon: Server, title: 'Backend', sub: 'FastAPI', color: 'from-green-500 to-emerald-500' },
              { icon: GitBranch, title: 'Graph Engine', sub: 'NetworkX', color: 'from-indigo-500 to-purple-500' },
              { icon: Brain, title: 'AI', sub: 'Amazon Bedrock', color: 'from-purple-500 to-pink-500' },
              { icon: Cloud, title: 'Cloud', sub: 'AWS S3', color: 'from-orange-500 to-amber-500' },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={`animation-delay-${Math.min(i * 200, 800)}`}>
                <div className="card-hover bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg mx-auto mb-4`}>
                    <t.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">{t.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{t.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-4">Transformation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Why It <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">WaveSync AI transforms cloud migration planning</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { before: 'Manual', after: 'Automated', icon: Zap, color: 'from-blue-500 to-indigo-500' },
              { before: 'Slow', after: 'Instant', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
              { before: 'Risky', after: 'Safe', icon: Check, color: 'from-green-500 to-emerald-500' },
              { before: 'Expensive', after: 'Cost-efficient', icon: BarChart3, color: 'from-orange-500 to-amber-500' },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={`animation-delay-${Math.min(i * 200, 600)}`}>
                <div className="card-hover bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <t.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-red-500 line-through">{t.before}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-bold text-green-700">{t.after}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BACK CTA ═══ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Back to Overview
            </h2>
            <p className="text-indigo-100 mb-8">Return to the main page for a high-level view of WaveSync AI</p>
            <Link to="/" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-bold shadow-2xl hover:scale-[1.03] transition-all">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              View Overview
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
