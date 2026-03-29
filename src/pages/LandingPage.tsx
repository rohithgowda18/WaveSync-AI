import { Link } from 'react-router-dom';
import {
  Zap, Shield, Eye, Clock, Brain, Search,
  Database, GitBranch, Layers, Sparkles, Monitor,
  ArrowRight, ChevronRight, TrendingDown, DollarSign, ShieldCheck,
  Cloud, Server, Globe, Lock
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

/* ─── Hero Background ─── */
function HeroBackground() {
  const nodes = [
    { x: 120, y: 80 }, { x: 280, y: 140 }, { x: 450, y: 60 },
    { x: 600, y: 160 }, { x: 180, y: 250 }, { x: 380, y: 220 },
    { x: 540, y: 280 }, { x: 700, y: 100 }, { x: 80, y: 180 },
    { x: 650, y: 240 }, { x: 320, y: 320 }, { x: 500, y: 350 },
    { x: 160, y: 350 }, { x: 750, y: 300 },
  ];
  const edges = [
    [0,1],[1,2],[2,3],[1,5],[4,5],[5,6],[3,7],[0,8],[3,9],[5,10],[6,11],[4,12],[9,13],[8,4],[10,12],[6,9],[2,7],
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] animate-pulse-glow animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-[100px]" />
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="url(#edgeGradient)" strokeWidth="1.5"
            strokeDasharray="6 4"
            style={{ animation: `dash-flow 2s linear infinite`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="12" fill="rgba(99,102,241,0.08)" />
            <circle cx={n.x} cy={n.y} r="5" fill="url(#nodeGradient)"
              style={{ animation: `node-pulse 3s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Dependency Diagram ─── */
function DependencyDiagram() {
  const boxes = [
    { label: 'Frontend', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { label: 'Auth', icon: Lock, color: 'from-indigo-500 to-purple-500' },
    { label: 'Database', icon: Database, color: 'from-purple-500 to-pink-500' },
    { label: 'Billing', icon: DollarSign, color: 'from-pink-500 to-rose-500' },
  ];
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
        {boxes.map((b, i) => (
          <div key={i} className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center shadow-lg`}>
                <b.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">{b.label}</span>
            </div>
            {i < boxes.length - 1 && (
              <div className="flex items-center -mt-6">
                <div className="w-6 sm:w-10 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400" />
                <ChevronRight className="w-4 h-4 text-purple-400 -ml-1" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 px-4 py-2 rounded-full bg-red-50 border border-red-200">
        <p className="text-red-600 text-xs sm:text-sm font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Hidden dependencies break migrations
        </p>
      </div>
    </div>
  );
}

/* ─── Pipeline Step ─── */
function PipelineStep({ icon: Icon, label, sub, color, index }: { icon: any; label: string; sub: string; color: string; index: number }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
          <span className="text-[10px] font-bold text-indigo-600">{index}</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-bold text-slate-800">{label}</p>
      <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
    </div>
  );
}



/* ─── MAIN PAGE ─── */
export default function LandingPage() {
  return (
    <main className="overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center hero-gradient">
        <HeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-indigo-100 shadow-sm mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Automating Neuro-Symbolic Cloud Migration Planning</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 animate-slide-up">
              <span className="gradient-text">AI-Powered</span><br />
              Cloud Migration<br />
              Wave Planning
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 animate-slide-up animation-delay-200">
              WaveSync AI automatically analyzes enterprise application dependencies and generates safe cloud migration waves using graph mathematics and generative AI. It replaces <strong className="text-slate-800">months of manual consulting</strong> with a <strong className="text-indigo-700">10-second intelligent compute cycle</strong>.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
              <Link to="/details" className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all">
                View Architecture
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/details" className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border-2 border-indigo-200 text-indigo-700 font-semibold hover:border-indigo-300 hover:bg-indigo-50 transition-all">
                How It Works
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="#f8fafc"/></svg>
        </div>
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-4">The Problem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              The Cloud Migration<br /><span className="gradient-text">Dependency Crisis</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Enterprises cannot migrate all applications to the cloud at once. They must move them in sequential batches called <strong>migration waves</strong>. However, applications are deeply interconnected. Moving one application without its dependencies causes <strong className="text-red-600">cascading failures</strong>.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="animate-slide-up" delay="animation-delay-400">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <DependencyDiagram />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ THE SOLUTION ═══ */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">The Solution</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              Neuro-Symbolic<br /><span className="gradient-text">Cloud Migration Planning</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              WaveSync AI combines deterministic graph algorithms with generative AI to automatically group applications into safe migration waves and assign migration strategies.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="animate-slide-in-left">
              <div className="card-hover h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-transparent rounded-bl-full opacity-50" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg mb-6">
                    <GitBranch className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Symbolic Layer</h3>
                  <p className="text-slate-500 text-sm mb-5">Deterministic graph mathematics</p>
                  <ul className="space-y-3">
                    {['Graph theory analysis', 'SCC detection', 'Topological sorting', 'Dependency clustering'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                          <ChevronRight className="w-3.5 h-3.5 text-indigo-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="animate-slide-in-right">
              <div className="card-hover h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg mb-6">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Neural Layer</h3>
                  <p className="text-slate-500 text-sm mb-5">Generative AI reasoning</p>
                  <ul className="space-y-3">
                    {['Amazon Bedrock integration', 'Migration strategy assignment', 'Plain-text explanations', 'Risk analysis'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ PIPELINE ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">Pipeline</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Five-step intelligent pipeline from data to dashboard</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative">
              {/* Desktop connecting line */}
              <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-300 via-indigo-400 via-purple-400 to-pink-400 opacity-30" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
                <PipelineStep icon={Database} label="Data Ingestion" sub="Amazon S3" color="from-blue-500 to-cyan-500" index={1} />
                <PipelineStep icon={GitBranch} label="Graph Analysis" sub="NetworkX" color="from-indigo-500 to-blue-600" index={2} />
                <PipelineStep icon={Layers} label="SCC Grouping" sub="Wave Detection" color="from-purple-500 to-indigo-600" index={3} />
                <PipelineStep icon={Sparkles} label="AI Strategy" sub="Amazon Bedrock" color="from-pink-500 to-purple-600" index={4} />
                <PipelineStep icon={Monitor} label="Dashboard" sub="React" color="from-rose-500 to-pink-600" index={5} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ KEY FEATURES ═══ */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Key <span className="gradient-text">Features</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: 'Automatic Dependency Detection', desc: 'Discovers hidden relationships across your entire application portfolio automatically.', color: 'from-blue-500 to-cyan-500' },
              { icon: Brain, title: 'AI Migration Strategy', desc: 'Amazon Bedrock assigns the optimal 6R strategy with detailed reasoning.', color: 'from-indigo-500 to-purple-500' },
              { icon: Shield, title: 'Zero Cascading Failures', desc: 'Graph-validated waves ensure no dependency is ever broken during migration.', color: 'from-green-500 to-emerald-500' },
              { icon: Eye, title: 'Interactive Visualization', desc: 'React-powered dashboard with drag-and-drop wave management.', color: 'from-purple-500 to-pink-500' },
              { icon: Clock, title: '10-Second Compute Cycle', desc: 'What took consultants months now runs in seconds of intelligent compute.', color: 'from-orange-500 to-amber-500' },
              { icon: Zap, title: 'Explainable AI', desc: 'Every recommendation comes with a plain-text explanation and risk score.', color: 'from-rose-500 to-red-500' },
            ].map((f, i) => (
              <AnimatedSection key={i} delay={`animation-delay-${(i % 3) * 200}`}>
                <div className="card-hover h-full bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-md mb-5`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AWS SERVICES ═══ */}
      <section className="py-24 lg:py-32 dark-section text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-sm font-semibold mb-4">Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              AWS Services <span className="text-indigo-400">Architecture</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Built on enterprise-grade AWS infrastructure</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: 'Amazon S3', desc: 'Stores application portfolio and dependency matrices', color: 'from-orange-500 to-amber-500' },
              { icon: Brain, title: 'Amazon Bedrock', desc: 'Generates migration strategy and plain-text explanations', color: 'from-indigo-500 to-purple-500' },
              { icon: Cloud, title: 'AWS Lambda', desc: 'Serverless async processing for heavy graph computation', color: 'from-blue-500 to-cyan-500' },
              { icon: Server, title: 'API Gateway', desc: 'RESTful API routing and request management', color: 'from-pink-500 to-rose-500' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={`animation-delay-${i * 200}`}>
                <div className="card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-4`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Architecture Flow */}
          <AnimatedSection className="mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
              <h3 className="text-center text-lg font-bold text-indigo-300 mb-8">Architecture Flow</h3>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                {['S3 Storage', 'API Gateway', 'FastAPI', 'NetworkX', 'Bedrock', 'React UI'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-400/30 text-sm font-semibold text-white whitespace-nowrap">
                      {item}
                    </div>
                    {i < 5 && <ArrowRight className="w-4 h-4 text-indigo-400 flex-shrink-0 hidden sm:block" />}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ BUSINESS VALUE ═══ */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-4">Impact</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Business <span className="gradient-text">Value</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: TrendingDown, title: 'Time to Value', before: '3 months', after: '10 seconds', desc: 'Compress months of analysis into seconds of intelligent compute.', color: 'from-blue-500 to-indigo-600' },
              { icon: DollarSign, title: 'Cost Reduction', before: 'Consultants', after: 'Automated AI', desc: 'Replace expensive consulting engagements with automated intelligence.', color: 'from-green-500 to-emerald-600' },
              { icon: ShieldCheck, title: 'Risk Mitigation', before: 'Risky', after: 'Zero Failures', desc: 'Graph-validated waves guarantee zero cascading failures.', color: 'from-purple-500 to-pink-600' },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={`animation-delay-${i * 200}`}>
                <div className="card-hover bg-white rounded-3xl p-8 border border-slate-100 shadow-lg text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-lg mx-auto mb-6`}>
                    <v.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-sm font-medium line-through">{v.before}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <span className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-sm font-bold">{v.after}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-white rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-300 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to See the<br />Technical Details?
            </h2>
            <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
              Dive deeper into the architecture, algorithms, and sample outputs that power WaveSync AI.
            </p>
            <Link to="/details" className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-indigo-700 font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-[1.03] transition-all">
              View Technical Details
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
