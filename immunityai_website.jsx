import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Beaker, Code2, Rocket, Users, Award, Pipette, TrendingUp, Package } from 'lucide-react';

export default function ImmunityAIWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 0,
      name: 'SwineShield™05',
      type: 'Squalene O/W Emulsion',
      overview: 'Non-animal-source squalene water-in-oil emulsion with dual immune stimulants. Industry-leading efficacy for swine and avian vaccines.',
      mechanism: {
        title: 'Mechanism of Action',
        points: [
          'Antigen release & stabilization',
          'TLR receptor activation',
          'Inflammasome & Dectin-1 activation',
          'Slow antigen release with multiple immune pathways'
        ]
      },
      specs: {
        'Immunity Onset': '1.5 weeks',
        'Duration': '25+ weeks',
        'Injection Reactions': '0.9%',
        'Stability': '24 months @ 2–8°C',
        'Compatibility': 'IM, ID, IN, IP, PO'
      },
      applications: ['PCV2d/PCV3', 'FMD', 'PRRS', 'Avian influenza', 'Newcastle disease'],
      advantages: ['High antibody titers', 'Fast immune response', 'Multiple dosing routes', 'Biodegradable', 'No drug residue']
    },
    {
      id: 1,
      name: 'LAS-OIQ01',
      type: 'DC-Targeted LNP mRNA Adjuvant',
      overview: 'First-in-class DC-cell targeting LNP nanoparticles delivering multiple immune stimulants. Solves mRNA cold-chain bottleneck with 4°C stability.',
      mechanism: {
        title: 'Mechanism of Action',
        points: [
          'Mannose-modified surface targets dendritic cells',
          'Encapsulates TLR9 (CpG ODN) + TLR7/8 dual agonists',
          'Synergistic activation of multiple immune pathways',
          'Strong cellular and humoral responses'
        ]
      },
      specs: {
        'Antibody Elevation': '8× vs aluminum',
        'T-cell Response': '100× vs aluminum',
        'Stability': '12 months @ 4°C',
        'Oil Content': '0.01% (5000× lower than ISA206)',
        'Antigen Dose Reduction': '5–10×'
      },
      applications: ['mRNA vaccines', 'Protein subunit vaccines', 'Tumor immunotherapy', 'CAR-T cell therapy', 'Multi-valent combinations'],
      advantages: ['Cold-chain friendly', 'Lower injection reactions', 'Biodegradable', 'Reduced antigen requirement', 'Long immune memory']
    },
    {
      id: 2,
      name: 'NanoAlhydrogel',
      type: 'Nano Aluminum Hydroxide',
      overview: 'Innovative nano-formulation of aluminum hydroxide with 50× higher surface area than traditional alum. Drop-in import replacement.',
      mechanism: {
        title: 'Mechanism of Action',
        points: [
          'Nano-scale 20–100 nm particles',
          'Antigen release & stabilization',
          'TLR receptor activation',
          'Th1/Th2 balance enhancement'
        ]
      },
      specs: {
        'Surface Area': '50× traditional alum',
        'Particle Size': '20–100 nm',
        'Stability': 'Complies CP/EP/USP',
        'Format': 'Ready-to-use aqueous',
        'Direct Replacement': 'Drop-in for imported alum'
      },
      applications: ['Inactivated vaccines', 'Protein subunit vaccines', 'Multi-valent vaccines', 'Animal & human vaccines'],
      advantages: ['Cost-effective', 'High purity', 'Consistent batch-to-batch', 'Eliminates import dependency', 'Same regulatory profile']
    }
  ];

  const pipeline = [
    { partner: 'Zoetis', product: 'Pet/Swine/Poultry/Cattle Vaccines', value: '¥100M/yr', status: 'Commercial Negotiation' },
    { partner: 'CAHIC', product: 'FMD Vaccine (90B doses)', value: '¥20M/yr', status: 'Pre-trials Complete' },
    { partner: 'Tianjin Ruipu', product: 'Avian Flu + Newcastle', value: '¥10M/yr', status: 'Field Trials' },
    { partner: 'Shanghai Jiaotong/Sanofi', product: 'Pancreatic CAR-T Immunotherapy', value: '¥350M+', status: '2026 Efficacy Study' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-orange-500 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg tracking-tight">ImmunityAI</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#platforms" className="hover:text-cyan-400 transition">Platforms</a>
            <a href="#pipeline" className="hover:text-cyan-400 transition">Pipeline</a>
            <a href="#team" className="hover:text-cyan-400 transition">Team</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/40">
            <span className="text-cyan-300 text-sm font-semibold">🚀 AI-Driven Vaccine Science</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            Vaccine Adjuvants
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Combining generative AI, synthetic biology, and GMP-scale manufacturing to revolutionize global vaccine development—from discovery to commercialization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-bold hover:bg-orange-500/10 transition">
              View Pipeline
            </button>
          </div>

          {/* Core Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '5', label: 'Patent Platforms' },
              { value: '15+', label: 'Active Partners' },
              { value: '¥5.4B', label: '2028 Revenue Target' },
              { value: '1,000+', label: 'MT/yr GMP Capacity' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition">
                <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
        </div>
      </section>

      {/* Why ImmunityAI Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">
            Why Choose <span className="text-cyan-400">ImmunityAI</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Dual Patent Moat',
                desc: 'LAS-OIQ01 LNP (CN 121337975 A) and MDP nanoparticles (CN 117731637 A) provide unbreakable competitive advantage'
              },
              {
                icon: Beaker,
                title: '4°C Cold Chain Revolution',
                desc: 'Eliminate -80°C dependency. 3-year stability at refrigerator temperatures opens new markets globally'
              },
              {
                icon: Code2,
                title: 'AI-Accelerated R&D',
                desc: 'PAS Engine continuously discovers new adjuvant candidates from 100+ molecular library—advantage compounds over time'
              },
              {
                icon: Rocket,
                title: 'GMP Verified & Scaled',
                desc: '1,000+ MT/yr existing capacity, roadmap to 5,000 MT. From lab to commercial supply chain in weeks'
              },
              {
                icon: Award,
                title: '100% Domestic Supply',
                desc: 'Zero import dependency risk. All raw materials sourced domestically—supply chain security in volatile geopolitical landscape'
              },
              {
                icon: Users,
                title: 'World-Class Leadership',
                desc: 'Team spanning Pfizer, GSK, AstraZeneca, NIH—proven track record in FDA vaccine approvals'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-800/40 border border-slate-700 hover:border-orange-500/50 transition group">
                <item.icon className="w-8 h-8 text-orange-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platforms */}
      <section id="platforms" className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Technology Platforms</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">Five proprietary platforms covering every major vaccine technology route—mRNA, protein subunits, nanoparticles, and more.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {platforms.map((p, i) => (
              <div
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-6 rounded-xl border-2 transition cursor-pointer ${
                  activeTab === i
                    ? 'border-cyan-400 bg-cyan-500/10'
                    : 'border-slate-700 bg-slate-800/30 hover:border-orange-500/50'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-cyan-400 flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{p.name}</h3>
                    <p className="text-sm text-cyan-400">{p.type}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.metrics.map((m, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-slate-700/50 text-xs font-semibold text-cyan-300">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Pipeline */}
      <section id="pipeline" className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Commercial Pipeline</h2>
          <p className="text-gray-400 mb-12">38 product-partner combinations generating ¥5.4B 2028 revenue target across animal and human health.</p>

          <div className="space-y-4">
            {pipeline.map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-orange-500/40 transition grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-400 text-xs mb-1">PARTNER</p>
                  <p className="font-bold">{item.partner}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">PRODUCT</p>
                  <p className="font-semibold text-sm">{item.product}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">2028 VALUE</p>
                  <p className="font-bold text-orange-400">{item.value}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">STATUS</p>
                  <p className="text-sm text-cyan-400">{item.status}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Projection */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-orange-500/30">
            <h3 className="font-bold text-xl mb-6">Revenue Growth Trajectory</h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-orange-400">¥914万</p>
                <p className="text-sm text-gray-400 mt-2">2026 Confirmed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-cyan-400">¥1亿+</p>
                <p className="text-sm text-gray-400 mt-2">2027 Milestone</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-purple-400">¥5.4亿</p>
                <p className="text-sm text-gray-400 mt-2">2028 Target</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Leadership</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">Industry veterans from Pfizer, GSK, AstraZeneca, NIH with proven track records in FDA-approved vaccines and global commercialization.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Xingdong Yang',
                role: 'Founder & CEO',
                bg: 'NIH • Georgetown • Shanghai Pharma',
                desc: '18 years in vaccine R&D & immunotherapy. MDP nanoparticle inventor.'
              },
              {
                name: 'Dr. Aizhi Hu',
                role: 'SVP R&D',
                bg: 'Pfizer • Karolinska',
                desc: 'Led Flumist, Prevnar 13/20, Trumenba. 2023 National Talent Award.'
              },
              {
                name: 'Dr. Xidan Li',
                role: 'SVP AI Drug Design',
                bg: 'AstraZeneca • Karolinska',
                desc: '20 years AI biotech expertise. PAS Engine architect.'
              }
            ].map((member, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs mb-3">{member.bg}</p>
                <p className="text-gray-300 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Vaccine Science?</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            We're partnering with global vaccine manufacturers, biotech firms, and research institutions to bring next-generation adjuvants to market.
          </p>

          <div className="space-y-4 mb-12">
            <p className="text-gray-400">📧 <a href="mailto:info@immunityai.com" className="text-cyan-400 hover:underline">jeff@immunityai.com</a></p>
            <p className="text-gray-400">🌐 <a href="https://immunityai-multilang.netlify.app" className="text-cyan-400 hover:underline">immunityai-multilang.netlify.app</a></p>
            <p className="text-gray-400">📍 Changzhou, Jiangsu | Shanghai | New York</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/50 transition">
              Technology Licensing
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Direct Procurement
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-bold hover:bg-purple-500/10 transition">
              CRO/CDMO Services
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 ImmunityAI · 金卓吉（常州）生物科技有限公司 · Confidential Document</p>
      </footer>
    </div>
  );
}
