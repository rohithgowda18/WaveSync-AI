import { Cpu, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="dark-section text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">WaveSync AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Neuro-Symbolic Cloud Migration Planning.<br />
              Automating what used to take months.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-slate-400 hover:text-indigo-400 text-sm transition-colors">Overview</Link>
              <Link to="/details" className="block text-slate-400 hover:text-indigo-400 text-sm transition-colors">How It Works</Link>
              <Link to="/details" className="block text-slate-400 hover:text-indigo-400 text-sm transition-colors">Architecture</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'FastAPI', 'NetworkX', 'Amazon Bedrock', 'AWS S3', 'Tailwind CSS'].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2025 WaveSync AI · Built for Hackathon</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/rohithgowda18/WaveSync-AI" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
