import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const container = document.getElementById('sparkles');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#edabd2', '#ffae57', '#fcf577', '#bae67e', '#5ccfe6', '#9cc6f4', '#aa72c5', '#ffffff'];
    for (let i = 0; i < 100; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      const size = Math.random() * 3 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.backgroundColor = color;
      sparkle.style.top = `${Math.random() * 100}vh`;
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.animationDelay = `${Math.random() * 3}s`;
      sparkle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      container.appendChild(sparkle);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  return (
    <>
      <div id="sparkles" className="sparkles"></div>
      <button
        aria-label="Open navigation menu"
        className="md:hidden fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/40 backdrop-blur border border-white/10 text-white flex items-center justify-center"
        onClick={() => setIsMenuOpen(true)}
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>
      <nav className="hidden md:flex fixed top-0 right-0 h-screen w-[144px] flex-col items-center bg-transparent z-50 p-8">
        <div className="flex w-12 h-12 items-center justify-center mt-2 mb-2 cursor-pointer transition-transform duration-300 hover:scale-110">
          <span className="text-4xl">✨</span>
        </div>
        <div className="w-px bg-[var(--dim-gray)] flex-1"></div>
        <ul className="flex flex-col items-end gap-4 list-none pr-16">
          <li>
            <button onClick={() => scrollToSection('home')} className="font-extrabold tracking-wide text-[20px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all">Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="font-extrabold tracking-wide text-[20px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all">About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')} className="font-extrabold tracking-wide text-[20px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all">Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="font-extrabold tracking-wide text-[20px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all">Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="font-extrabold tracking-wide text-[20px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all">Contact</button>
          </li>
        </ul>
        <div className="w-px bg-[var(--dim-gray)] flex-1"></div>
        <ul className="flex flex-col items-end gap-5 list-none mb-1 mt-2 pr-0">
          <li>
            <a href="https://github.com/Shakaet" target="_blank" rel="noreferrer" className="text-[var(--dim-gray)] hover:text-[var(--pink-accent)] text-[18px]"><i className="fab fa-github"></i></a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer" className="text-[var(--dim-gray)] hover:text-[var(--pink-accent)] text-[18px]"><i className="fab fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer" className="text-[var(--dim-gray)] hover:text-[var(--pink-accent)] text-[18px]"><i className="fab fa-twitter"></i></a>
          </li>
        </ul>
        <div className="w-px bg-[var(--dim-gray)] min-h-8"></div>
      </nav>
      {/* Mobile full-screen overlay menu */}
      <div className={`md:hidden fixed inset-0 ${isMenuOpen ? 'flex' : 'hidden'} z-50`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black opacity-95"></div>
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close navigation menu" className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Projects', id: 'projects' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-4xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-8 flex gap-6">
            <a href="https://github.com/Shakaet" target="_blank" rel="noreferrer" className="text-white text-2xl"><i className="fab fa-github"></i></a>
            <a href="#" target="_blank" rel="noreferrer" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" rel="noreferrer" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
