// @ts-nocheck
import { Navigation } from './navigation';
import { HeroShader } from './hero-shader';

// SVG 噪点滤镜组件
const NoiseFilter = () => (
  <svg className="sr-only" aria-hidden="true">
    <defs>
      <filter id="noiseFilter">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.8" 
          numOctaves="4" 
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </defs>
  </svg>
);

export const Main = () => {
  return (
    <>
      {/* 全局噪点滤镜定义 */}
      <NoiseFilter />
      
      <Navigation />
      
      <main className="bg-page">
        {/* ===== Hero Section ===== */}
        <section className="relative min-h-screen flex items-center justify-center glow-top overflow-hidden pt-[var(--nav-height)]">
          <HeroShader />
          
          <div className="container-main relative z-10 text-center py-[var(--space-4xl)]">
            {/* Badge - 使用玻璃态 */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
              <span className="eyebrow-indicator" style={{ color: 'var(--color-plan)' }} />
              <span className="text-mini font-medium text-secondary">Unified Intelligence Platform</span>
            </div>
            
            {/* Hero Title - 使用新的 title 系统 */}
            <h1 className="title-9 text-primary mb-6 animate-fade-in-up">
              The Intelligence Behind<br />
              <span className="gradient-text">Every Decision</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-large text-secondary max-w-2xl mx-auto mb-4 animate-fade-in-up delay-100">
              Artificial Intelligence × Business Intelligence × Enterprise Intelligence
            </p>
            
            {/* Description */}
            <p className="text-regular text-tertiary max-w-xl mx-auto mb-12 animate-fade-in-up delay-200">
              AIBIEI unifies the power of AI, BI, and EI to help organizations evolve intelligently.
              Transform data into insights, insights into action, and action into growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
              <button className="btn-primary">
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="btn-secondary">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
            
            {/* Keyboard Hint */}
            <div className="mt-8 flex items-center justify-center gap-2 text-quaternary animate-fade-in delay-400">
              <span className="text-micro">Press</span>
              <kbd className="kbd">⌘</kbd>
              <kbd className="kbd">K</kbd>
              <span className="text-micro">to get started quickly</span>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
            <span className="text-micro text-quaternary">Scroll</span>
            <svg className="w-5 h-5 text-quaternary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ===== Features Section - Bento Grid ===== */}
        <section id="features" className="section-padding" style={{ background: 'var(--color-bg-level-1)' }}>
          <div className="container-main">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 badge badge-brand mb-4">
                <span className="eyebrow-indicator" style={{ color: 'var(--color-brand-accent)' }} />
                <span>CORE CAPABILITIES</span>
              </div>
              <h2 className="title-7 text-primary mb-4">
                Unified Intelligence
              </h2>
              <p className="text-large text-secondary max-w-2xl mx-auto">
                Harness the combined power of AI, BI, and EI to transform your organization into an intelligent enterprise
              </p>
            </div>
            
            {/* Bento Grid */}
            <div className="bento-grid">
              {/* AI Card - Large */}
              <div className="bento-cell bento-span-8 group">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="icon-container group-hover:scale-110" style={{ transition: 'transform 0.2s var(--ease-out-quint)' }}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="badge" style={{ background: 'var(--color-brand-accent-tint)', color: 'var(--color-brand-accent)' }}>AI</span>
                  </div>
                  <h3 className="title-3 text-primary mb-3">Artificial Intelligence</h3>
                  <p className="text-regular text-secondary mb-6">
                    Unlock automation, prediction, and intelligent content generation powered by advanced AI models. 
                    Our AI engine learns from your data to provide personalized insights and recommendations.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="badge">Machine Learning</span>
                    <span className="badge">NLP</span>
                    <span className="badge">Predictive Analytics</span>
                    <span className="badge">Auto-Generation</span>
                  </div>
                </div>
              </div>
              
              {/* BI Card */}
              <div className="bento-cell bento-span-4 group">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="icon-container group-hover:scale-110" style={{ transition: 'transform 0.2s var(--ease-out-quint)' }}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="badge badge-success">BI</span>
                  </div>
                  <h3 className="title-3 text-primary mb-3">Business Intelligence</h3>
                  <p className="text-regular text-secondary">
                    Transform raw data into clear, actionable insights. Make every decision data-driven and measurable.
                  </p>
                </div>
              </div>
              
              {/* EI Card */}
              <div className="bento-cell bento-span-4 group">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="icon-container group-hover:scale-110" style={{ transition: 'transform 0.2s var(--ease-out-quint)' }}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="badge badge-warning">EI</span>
                  </div>
                  <h3 className="title-3 text-primary mb-3">Enterprise Intelligence</h3>
                  <p className="text-regular text-secondary">
                    Integrate your systems, teams, and strategy into one intelligent ecosystem.
                  </p>
                </div>
              </div>
              
              {/* Integration Card */}
              <div className="bento-cell bento-span-8 group">
                <div className="flex flex-col md:flex-row gap-8 h-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-container">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <h3 className="title-3 text-primary">Unified Platform</h3>
                    </div>
                    <p className="text-regular text-secondary mb-6">
                      At AIBIEI, we don't just provide tools — we deliver comprehensive intelligence solutions 
                      that adapt to your unique business challenges. Our integrated approach ensures that every 
                      aspect of your organization benefits from the power of unified intelligence.
                    </p>
                    <button className="btn-tertiary">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 flex items-center justify-center mask-fade-both">
                    {/* Abstract visualization - 使用玻璃态容器 */}
                    <div className="glass-container-outer w-full max-w-[200px]">
                      <div className="glass-container-inner p-6">
                        <div className="relative w-full aspect-square flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border border-[var(--color-line-secondary)] flex items-center justify-center animate-pulse">
                            <div className="w-14 h-14 rounded-full border border-[var(--color-line-secondary)] flex items-center justify-center">
                              <div className="w-5 h-5 rounded-full" style={{ background: 'var(--color-brand-accent)', opacity: 0.6 }} />
                            </div>
                          </div>
                          {/* Orbiting dots */}
                          <div className="absolute w-2 h-2 rounded-full bg-[var(--color-fg-quaternary)]" style={{ top: '15%', left: '50%' }} />
                          <div className="absolute w-2 h-2 rounded-full bg-[var(--color-fg-quaternary)]" style={{ bottom: '20%', right: '15%' }} />
                          <div className="absolute w-2 h-2 rounded-full bg-[var(--color-fg-quaternary)]" style={{ bottom: '20%', left: '15%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Solutions Section ===== */}
        <section id="solutions" className="section-padding bg-page relative">
          {/* Subtle gradient - 多层背景 */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: `
                radial-gradient(ellipse 60% 40% at 50% 100%, rgba(94, 106, 210, 0.04), transparent),
                linear-gradient(180deg, var(--color-bg-level-1) 0%, var(--color-bg-level-0) 30%, var(--color-bg-level-0) 100%)
              `,
            }}
          />
          
          <div className="container-main relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 badge badge-brand mb-4">
                <span className="eyebrow-indicator" style={{ color: 'var(--color-build)' }} />
                <span>USE CASES</span>
              </div>
              <h2 className="title-7 text-primary mb-4">
                From Data to Strategy
              </h2>
              <p className="text-large text-secondary max-w-2xl mx-auto">
                Whether you're a startup or a global enterprise, AIBIEI adapts to your intelligence journey.
              </p>
            </div>
            
            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Solution 1 */}
              <div className="card-glass bento-cell group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="icon-container shrink-0 group-hover:scale-110" style={{ transition: 'transform 0.2s var(--ease-out-quint)' }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="title-3 text-primary mb-2 group-hover:text-[var(--color-brand-accent-hover)]" style={{ transition: 'color var(--speed-quick) var(--ease-out-quad)' }}>
                      AI-Powered Dashboards
                    </h3>
                    <p className="text-regular text-secondary">
                      Intelligent dashboards that automatically surface the metrics that matter most to your business.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Solution 2 */}
              <div className="card-glass bento-cell group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="icon-container shrink-0 group-hover:scale-110" style={{ transition: 'transform 0.2s var(--ease-out-quint)' }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="title-3 text-primary mb-2 group-hover:text-[var(--color-brand-accent-hover)]" style={{ transition: 'color var(--speed-quick) var(--ease-out-quad)' }}>
                      Workflow Automation
                    </h3>
                    <p className="text-regular text-secondary">
                      Intelligent automation that learns your patterns and streamlines repetitive tasks.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Solution 3 */}
              <div className="card-glass bento-cell group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="icon-container shrink-0 group-hover:scale-110" style={{ transition: 'transform 0.2s var(--ease-out-quint)' }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="title-3 text-primary mb-2 group-hover:text-[var(--color-brand-accent-hover)]" style={{ transition: 'color var(--speed-quick) var(--ease-out-quad)' }}>
                      Predictive Analytics
                    </h3>
                    <p className="text-regular text-secondary">
                      Enterprise data integration with predictive models that anticipate trends and opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Solution 4 */}
              <div className="card-glass bento-cell group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="icon-container shrink-0 group-hover:scale-110" style={{ transition: 'transform 0.2s var(--ease-out-quint)' }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="title-3 text-primary mb-2 group-hover:text-[var(--color-brand-accent-hover)]" style={{ transition: 'color var(--speed-quick) var(--ease-out-quad)' }}>
                      Strategic Intelligence
                    </h3>
                    <p className="text-regular text-secondary">
                      Transform insights into action with strategic intelligence for sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Industries */}
            <div className="text-center">
              <p className="text-micro text-quaternary uppercase tracking-wider mb-6">
                Trusted Across Industries
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-tertiary">
                <span className="text-small">Financial Services</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-line-secondary)]" />
                <span className="text-small">Healthcare</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-line-secondary)]" />
                <span className="text-small">Manufacturing</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-line-secondary)]" />
                <span className="text-small">Retail</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-line-secondary)]" />
                <span className="text-small">Technology</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== About / Mission Section ===== */}
        <section id="about" className="section-padding" style={{ background: 'var(--color-bg-level-1)' }}>
          <div className="container-main">
            {/* Header - Left-aligned asymmetric grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 badge badge-brand mb-4">
                  <span className="eyebrow-indicator" style={{ color: 'var(--color-success)' }} />
                  <span>OUR MISSION</span>
                </div>
                <h2 className="title-7 text-primary">
                  Building the Intelligent Enterprise
                </h2>
              </div>
              <div className="md:col-span-5" style={{ alignSelf: 'end' }}>
                <p className="text-large text-secondary">
                  We believe intelligence is the foundation of the modern enterprise. We build systems that learn,
                  adapt, and empower — turning complexity into clarity and data into action.
                </p>
              </div>
            </div>

            {/* Bento Grid - Quote left, Values right */}
            <div className="bento-grid" style={{ borderTop: '2px solid var(--color-border-translucent)', borderBottom: '2px solid var(--color-border-translucent)' }}>
              {/* Quote - Left Cell */}
              <div className="bento-span-6 relative" style={{ padding: 'var(--space-2xl) var(--space-xl)', borderRight: '2px solid var(--color-border-translucent)' }}>
                <blockquote className="title-5 text-primary italic leading-relaxed mb-8" style={{ textWrap: 'balance' }}>
                  "True intelligence is not about algorithms — it's about empowering humans to make better choices."
                </blockquote>
                <cite className="text-small text-tertiary not-italic font-medium">— AIBIEI Team</cite>
              </div>

              {/* Values - Right Cell as spec list */}
              <div className="bento-span-6" style={{ padding: 'var(--space-2xl) var(--space-xl)' }}>
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="icon-container shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-small font-medium text-primary mb-1">Trust</h3>
                      <p className="text-small text-tertiary">
                        Building reliable systems that organizations can depend on for critical decisions.
                      </p>
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="flex items-start gap-4">
                    <div className="icon-container shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-small font-medium text-primary mb-1">Innovation</h3>
                      <p className="text-small text-tertiary">
                        Pushing the boundaries of what's possible with AI and enterprise intelligence.
                      </p>
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="flex items-start gap-4">
                    <div className="icon-container shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-small font-medium text-primary mb-1">Collaboration</h3>
                      <p className="text-small text-tertiary">
                        Empowering teams to work together with intelligent tools and insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section id="contact" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h2 className="title-7 text-primary" style={{ textWrap: 'balance' }}>
                  Plan the intelligence. Build the future.
                </h2>
              </div>
              <div className="md:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button className="btn-secondary w-full sm:w-auto">
                  Contact Sales
                </button>
                <button className="btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Footer ===== */}
        <footer style={{ background: 'var(--color-bg-level-0)', borderTop: '1px solid var(--color-line-tertiary)' }}>
          <div className="container-main py-16">
            {/* Footer Top */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="title-3 text-primary mb-4">AIBIEI</h3>
                <p className="text-regular text-secondary mb-6 max-w-md">
                  All Intelligence. One Vision. Transforming enterprises through the unified power of 
                  AI, Business Intelligence, and Enterprise Intelligence.
                </p>
                <a href="mailto:contact@aibiei.com" className="text-small text-[var(--color-text-link)] hover:text-[var(--color-text-link-hover)]" style={{ transition: 'color var(--speed-quick) var(--ease-out-quad)' }}>
                  contact@aibiei.com
                </a>
              </div>
              
              {/* Links */}
              <div>
                <h4 className="text-small font-medium text-primary mb-4">Product</h4>
                <ul className="space-y-3">
                  <li><a href="#features" className="nav-link">Features</a></li>
                  <li><a href="#solutions" className="nav-link">Solutions</a></li>
                  <li><a href="#" className="nav-link">Pricing</a></li>
                  <li><a href="#" className="nav-link">Changelog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-small font-medium text-primary mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#about" className="nav-link">About</a></li>
                  <li><a href="#" className="nav-link">Blog</a></li>
                  <li><a href="#" className="nav-link">Careers</a></li>
                  <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
            
            {/* Divider */}
            <div className="divider mb-8" />
            
            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-mini text-quaternary">
                © 2026 AIBIEI. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="nav-link text-mini">Privacy Policy</a>
                <a href="#" className="nav-link text-mini">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};
