// Navigation Component - Glassmorphism Fixed Header

export const Navigation = () => {
  return (
    <header className="nav-fixed glass-nav">
      <div className="container-main h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-h3 font-semibold text-primary">AIBIEI</span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="btn-ghost hidden sm:flex">
            Sign in
          </button>
          <button className="btn-primary">
            Get Started
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
