import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Beaker, Code2, Rocket, Users, Award, Pipette, Package, GitBranch } from 'lucide-react';

export default function ImmunityAIWebsite() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollY, setScrollY] = useState(0);

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
      color: 'from-orange-500 to-orange-600',
      overview: 'Non-animal-source squalene water-in-oil emulsion with dual immune stimulants. Industry-leading efficacy and safety for swine, poultry, and cattle vaccines.',
      keyFeatures: {
        'Immunity Onset': '1.5 weeks (vs 2–4 weeks competitors)',
        'Duration': '25+ weeks protection',
        'Local Reactions': '0.9% (vs higher for oil adjuvants)',
        'Stability': '24 months @ 2–8°C',
        'Injection Routes': 'IM, ID, IN, IP, oral'
      },
      mechanism: [
        'Antigen release stabilization',
        'TLR receptor activation',
        'Inflammasome activation',
        'Dectin-1 immune signaling',
        'Strong Th1/Th17 cell response',
        '4–8× antibody elevation vs oil adjuvants'
      ],
      applications: ['PCV2d/PCV3', 'FMD', 'PRRS', 'Avian influenza H9/H5', 'Newcastle disease', 'Multi-valent combinations'],
      status: '50 MT/yr capacity · 2,000 doses · GMP-certified',
      image: '🛡️'
    },
    {
      id: 1,
      name: 'LAS-OIQ01',
      type: 'DC-Targeted LNP mRNA Adjuvant',
      color: 'from-cyan-500 to-blue-600',
      overview: 'First-in-class dendritic cell (DC)–targeting LNP nanoparticles with triple immune stimulation. Solves mRNA vaccine cold-chain bottleneck.',
      keyFeatures: {
        'Cellular Immunity': '100× vs aluminum adjuvants',
        'Antibody Response': '8× vs aluminum adjuvants',
        'Stability': '12 months @ 4°C (no -80°C required)',
        'Oil Content': '0.01% (5,000× less than ISA206)',
        'Antigen Reduction': '5–10× lower dose requirement'
      },
      mechanism: [
        'Mannose-modified surface targets DC receptors',
        'Encapsulates TLR9 CpG ODN',
        'Encapsulates TLR7/8 dual agonist',
        'Synergistic pathway activation',
        'Strong CD8+ T-cell response',
        'Durable immune memory'
      ],
      applications: ['mRNA vaccines', 'Protein subunit vaccines', 'Multi-valent combinations', 'Tumor immunotherapy', 'CAR-T cell enhancement', 'Therapeutic vaccines'],
      status: '100 L/yr capacity · GMP-ready · Regulatory support',
      image: '💉'
    },
    {
      id: 2,
      name: 'NanoAlhydrogel',
      type: 'Nano Aluminum Hydroxide',
      color: 'from-teal-500 to-green-600',
      overview: 'Innovative nano-formulation of aluminum hydroxide with 50× higher surface area than traditional alum. Direct replacement for imported adjuvants.',
      keyFeatures: {
        'Surface Area': '50× traditional aluminum hydroxide',
        'Particle Size': '20–100 nm (tunable)',
        'Format': 'Ready-to-use aqueous solution',
        'Quality': 'Complies CP/EP/USP standards',
        'Replacement': 'Drop-in for imported Alhydrogel®'
      },
      mechanism: [
        'Nano-scale particle design',
        'Antigen release stabilization',
        'TLR receptor activation',
        'Th1/Th2 balance enhancement',
        'Increased surface area = higher efficacy',
        'Cost-optimized manufacturing'
      ],
      applications: ['Inactivated vaccines', 'Protein subunit vaccines', 'Veterinary vaccines', 'Human vaccines', 'Multi-valent formulations'],
      status: 'Ready for commercialization · Cost-competitive · Import-independent',
      image: '⚛️'
    }
  ];

  const currentProduct = products[activeProduct];

  const pipeline = [
    {
      stage: 'Early Development',
      items: [
        { product: 'SwineShield05 + Swine Vaccines', partner: 'CAHIC, 中牧', indication: 'PCV/FMD/PRRS', status: 'Pre-trial optimization' },
        { product: 'LAS01 + Avian Vaccines', partner: 'Tianjin Ruipu', indication: 'Avian flu (H9/H5)', status: 'Field trial initiation' },
        { product: 'NanoAlhydrogel + Multi-antigen', partner: 'Multiple', indication: 'Broad vaccine applications', status: 'Safety studies complete' }
      ]
    },
    {
      stage: 'Commercial Preparation',
      items: [
        { product: 'SwineShield05', partner: 'Zoetis (全球)', indication: 'Pet/Swine/Poultry/Cattle', status: 'Technical negotiation' },
        { product: 'LAS01 mRNA Platform', partner: 'Sanofi, Shanghai Jiaotong', indication: 'Human/tumor vaccines', status: 'Formulation optimization' },
        { product: 'Companion Animal Products', partner: 'Global partners', indication: 'Canine/feline vaccines', status: 'Regulatory planning' }
      ]
    },
    {
      stage: 'Scaling & Market Launch',
      items: [
        { product: 'All Three Platforms', partner: 'Global manufacturing network', indication: 'Multi-market rollout', status: '2025–2026 commercialization' },
        { product: 'Custom Formulations', partner: 'CRO/CDMO partners', indication: 'Partner-specific solutions', status: 'Full technical support' }
      ]
    }
  ];

  const procurementOptions = [
    {
      icon: '📦',
      title: 'Direct Adjuvant Supply',
      description: 'Purchase adjuvants in bulk for formulation into your vaccine products',
      features: ['Flexible packaging (50 mL–25 L)', 'GMP-certified batches', '1,000+ MT/year capacity', 'Custom specifications', 'Quality assurance documentation'],
      cta: 'Request Quote'
    },
    {
      icon: '🔬',
      title: 'Technology Licensing',
      description: 'License our proprietary platforms for internal R&D and commercial manufacturing',
      features: ['Exclusive/non-exclusive IP rights', 'Complete technical dossier', 'Scale-up manufacturing support', 'Regulatory pathway guidance', 'Global commercial rights available'],
      cta: 'Discuss Partnership'
    },
    {
      icon: '⚙️',
      title: 'CRO/CDMO Services',
      description: 'End-to-end custom adjuvant design, optimization, and GMP manufacturing',
      features: ['Rational design based on your vaccine', 'High-throughput screening', 'Scale-up to 1,000+ MT/year', 'Regulatory package preparation', 'Rapid turnaround'],
      cta: 'Start Project'
    },
    {
      icon: '🤝',
      title: 'Joint Development',
      description: 'Co-development partnerships for next-generation vaccine adjuvants',
      features: ['Shared IP frameworks', 'Collaborative R&D timeline', 'Fast-track commercialization', 'Joint marketing', 'Win-win revenue sharing'],
      cta: 'Propose Collaboration'
    }
  ];

  const collaborators = [
    'Zoetis', 'Sanofi', 'Boehringer Ingelheim', 'CAHIC (生物股份)',
    'SPAH (国药动保)', 'Tianjin Ruipu', 'Shanghai Jiaotong University', 'Peking University'
  ];

  const team = [
    {
      name: 'Dr. Xingdong Yang',
      role: 'Founder & CEO',
      background: '18 years vaccine & immunotherapy R&D (NIH, Georgetown, Shanghai Pharma)',
      credential: 'Virginia Tech PhD (Biomedical Engineering)'
    },
    {
      name: 'Dr. Aizhi Hu',
      role: 'SVP R&D',
      background: '18 years Pfizer vaccine R&D (Flumist, Prevnar 13/20, Trumenba)',
      credential: 'Karolinska PhD (Virology), 2023 National Talent Awardee'
    },
    {
      name: 'Dr. Xidan Li',
      role: 'SVP AI Drug Design',
      background: '20 years AI biotech expertise (AstraZeneca, Karolinska)',
      credential: 'Karolinska PhD, PAS Engine architect'
    },
    {
      name: 'Bernard Miserez',
      role: 'Global Scientific Advisor',
      background: 'GSK ~20 years vaccine commercialization leadership',
      credential: 'Antwerp University PhD (Neurobiology & Pharmacology)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-orange-500 flex items-center justify-center font-bold text-xl">
              ⚔️
            </div>
            <span className="font-bold text-lg tracking-tight">ImmunityAI</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#products" className="hover:text-cyan-400 transition">Products</a>
            <a href="#technology" className="hover:text-cyan-400 transition">Technology</a>
            <a href="#pipeline" className="hover:text-cyan-400 transition">Pipeline</a>
            <a href="#procurement" className="hover:text-cyan-400 transition">Procurement</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/40">
            <span className="text-cyan-300 text-sm font-semibold">🚀 AI-Powered Adjuvant Science</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
              Next-Generation Vaccine Adjuvants
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            AI-driven discovery, synthetic biology, and GMP-scale manufacturing for transformative vaccine development across animal and human health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
              Learn More
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-bold hover:bg-orange-500/10 transition">
              Procurement Services
            </button>
          </div>

          {/* Core Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '5', label: 'Tech Platforms' },
              { value: '15+', label: 'Active Partners' },
              { value: '1,000+', label: 'MT/yr Capacity' },
              { value: '6', label: 'Patents Filed' }
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

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Proprietary <span className="text-cyan-400">Adjuvant Platforms</span>
          </h2>

          {/* Product Selector */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-3">
            {products.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveProduct(i);
                  setActiveTab('overview');
                }}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                  activeProduct === i
                    ? `bg-gradient-to-r ${p.color} text-white shadow-lg`
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Product Details */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">{currentProduct.image}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{currentProduct.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{currentProduct.type}</p>
                <p className="text-gray-300 mb-4">{currentProduct.overview}</p>
                <p className="text-sm text-gray-400">{currentProduct.status}</p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 border-b border-slate-700">
              {['overview', 'mechanism', 'specs', 'applications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-semibold transition ${
                    activeTab === tab
                      ? 'border-b-2 border-cyan-400 text-cyan-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === 'overview' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(currentProduct.keyFeatures).map(([key, value]) => (
                    <div key={key} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                      <p className="text-sm text-gray-400 mb-1">{key}</p>
                      <p className="text-lg font-bold text-cyan-300">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'mechanism' && (
                <div className="space-y-3">
                  <p className="text-gray-300 mb-4">Mechanism of Action:</p>
                  {currentProduct.mechanism.map((point, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="space-y-3">
                  <p className="text-gray-300 mb-4">Technical Specifications:</p>
                  {Object.entries(currentProduct.keyFeatures).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-gray-300">{key}</span>
                      <span className="font-bold text-cyan-300">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="grid md:grid-cols-2 gap-4">
                  {currentProduct.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-gray-300">{app}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-6">
            <span className="text-cyan-400">PAS Engine</span>: AI-Driven Discovery Platform
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Global first: Generative AI + synthetic biology + high-throughput automation for breakthrough adjuvant discovery and development.
          </p>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-6 gap-4 mb-8">
              {[
                { num: '1', label: 'Adjuvant Library', desc: '100+ molecules' },
                { num: '2', label: 'AI Design', desc: 'Virtual screening' },
                { num: '3', label: 'Cell Screening', desc: 'High-throughput HTS' },
                { num: '4', label: 'In Vivo Test', desc: 'Multi-species validation' },
                { num: '5', label: 'Pre-clinical', desc: 'Safety & efficacy' },
                { num: '6', label: 'GMP Supply', desc: 'Commercial scale' }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {step.num}
                  </div>
                  <p className="font-bold text-sm mb-1">{step.label}</p>
                  <p className="text-xs text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600">
              <p className="text-gray-300">
                <strong>Evaluation Criteria:</strong> Safety · Efficacy · Manufacturability · Cost-effectiveness · Stability · Regulatory path
              </p>
            </div>
          </div>

          {/* Application Scenarios */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🦠', title: 'Infectious Disease', desc: 'Vaccines for prevention of viral & bacterial diseases' },
              { icon: '🎯', title: 'Tumor Immunotherapy', desc: 'Enhanced checkpoint inhibitor & cancer vaccine efficacy' },
              { icon: '🏥', title: 'Therapeutic Vaccines', desc: 'Treatment of chronic infections & autoimmune disorders' },
              { icon: '💨', title: 'Inhalation/Oral', desc: 'Non-injection routes for mucosal immunity' },
              { icon: '👶', title: 'Pediatric', desc: 'Safety-optimized adjuvants for infant vaccination' },
              { icon: '🐾', title: 'Animal Health', desc: 'Next-gen veterinary vaccine solutions' }
            ].map((app, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition">
                <p className="text-4xl mb-3">{app.icon}</p>
                <h4 className="font-bold mb-2">{app.title}</h4>
                <p className="text-sm text-gray-400">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section id="pipeline" className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Development <span className="text-cyan-400">Pipeline</span>
          </h2>

          <div className="space-y-8">
            {pipeline.map((stage, stageIdx) => (
              <div key={stageIdx} className="p-8 rounded-xl bg-slate-800/40 border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <GitBranch className="w-6 h-6 text-orange-400" />
                  {stage.stage}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {stage.items.map((item, i) => (
                    <div key={i} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600">
                      <p className="text-sm text-cyan-400 font-semibold mb-2">{item.product}</p>
                      <p className="text-gray-300 text-sm mb-3">{item.indication}</p>
                      <p className="text-xs text-gray-500 mb-2">Partner: {item.partner}</p>
                      <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50">
                        <span className="text-xs text-orange-300">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Section */}
      <section id="procurement" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-6 text-center">
            <span className="text-cyan-400">Procurement & Partnership</span> Options
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Multiple pathways to integrate next-generation adjuvants into your vaccine programs—from direct supply to full co-development partnerships.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {procurementOptions.map((option, i) => (
              <div key={i} className="p-8 rounded-xl bg-slate-800/40 border border-slate-700 hover:border-cyan-500/50 transition hover:shadow-lg hover:shadow-cyan-500/20">
                <p className="text-5xl mb-4">{option.icon}</p>
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-6 text-sm">{option.description}</p>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition">
                  {option.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Procurement Specs */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Supply Capabilities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Current Capacity</p>
                <p className="text-2xl font-bold text-cyan-400">1,000+ MT/yr</p>
                <p className="text-xs text-gray-500 mt-2">Veterinary adjuvants (expandable)</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Packaging Options</p>
                <p className="text-2xl font-bold text-orange-400">50 mL–25 L</p>
                <p className="text-xs text-gray-500 mt-2">PET/HDPE sterile containers</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Quality Standard</p>
                <p className="text-2xl font-bold text-purple-400">GMP Certified</p>
                <p className="text-xs text-gray-500 mt-2">NMPA/CFDA ready · Full documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Leadership & <span className="text-cyan-400">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {team.map((member, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-orange-400 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-2">{member.background}</p>
                <p className="text-xs text-gray-500">{member.credential}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Global Collaborators</h3>
            <div className="flex flex-wrap gap-3">
              {collaborators.map((collab, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-slate-700/50 border border-slate-600 text-sm">
                  {collab}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            <span className="text-cyan-400">State-of-the-Art</span> Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-slate-800/40 border border-slate-700">
              <p className="text-4xl mb-4">🏭</p>
              <h3 className="font-bold text-lg mb-3">R&D Center</h3>
              <p className="text-gray-300 text-sm mb-4">
                1,000 m² modern research facility with advanced equipment and 500 m² clean room (ISO 5) for mid-scale production.
              </p>
              <p className="text-xs text-gray-500">Changzhou New North District, Binjiang International Business Park</p>
            </div>

            <div className="p-8 rounded-xl bg-slate-800/40 border border-slate-700">
              <p className="text-4xl mb-4">⚙️</p>
              <h3 className="font-bold text-lg mb-3">Manufacturing Partnerships</h3>
              <p className="text-gray-300 text-sm mb-4">
                130+ acres across two GMP-certified production facilities with capacity for 5,000–10,000 MT/year (500+ billion doses).
              </p>
              <p className="text-xs text-gray-500">Shandong Lvdu · Shanghai Ruizhou · Suzhou Kaituor</p>
            </div>

            <div className="p-8 rounded-xl bg-slate-800/40 border border-slate-700">
              <p className="text-4xl mb-4">✅</p>
              <h3 className="font-bold text-lg mb-3">Quality Assurance</h3>
              <p className="text-gray-300 text-sm mb-4">
                ISO 5 cleanrooms, gamma-ray sterilization (0.22 μm sterile filtration), NMPA/CFDA regulatory-ready quality systems.
              </p>
              <p className="text-xs text-gray-500">USP/EP/CP compliant testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to <span className="text-cyan-400">Transform</span> Vaccine Development?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Partner with ImmunityAI for innovative adjuvants, advanced technology platforms, and full commercial support across animal and human vaccines.
          </p>

          <div className="space-y-4 mb-12">
            <p className="text-gray-400">📧 <a href="mailto:jeffyang25@immunityai.com" className="text-cyan-400 hover:underline">jeffyang25@immunityai.com</a></p>
            <p className="text-gray-400">🌐 <a href="https://immunityai-multilang.netlify.app" className="text-cyan-400 hover:underline">immunityai-multilang.netlify.app</a></p>
            <p className="text-gray-400">📍 Changzhou · Shanghai · New York</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-500/50 transition">
              Adjuvant Supply
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Technology Licensing
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-bold hover:bg-purple-500/10 transition">
              CRO/CDMO Services
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-gray-500 text-sm">
        <p>© 2026 ImmunityAI · 金卓吉（常州）生物科技有限公司</p>
        <p className="mt-2">Proprietary & Confidential Document</p>
      </footer>
    </div>
  );
}
