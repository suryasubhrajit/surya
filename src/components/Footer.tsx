"use client";

import React from "react";

// Custom SVG components for Brand Logos to bypass package/version differences
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "http://github.com/suryasubhrajit",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "http://linkedin.com/in/suryasubhrajit",
    },
    {
      name: "Twitter",
      icon: XIcon,
      url: "http://x.com/suryasubhrajit",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "http://instagram.com/suryasubhrajit",
    },
  ];

  const calculateVersion = () => {
    const today = new Date();
    const birthDate = new Date("2004-05-12");

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();

    if (today.getDate() < birthDate.getDate()) {
      ageMonths--;
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    return `v${ageYears}.${ageMonths}`;
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-[#333] px-10 py-12 font-mono text-[13px]" style={{ fontFamily: "'Courier New', 'Fira Code', 'JetBrains Mono', monospace" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* Top Row: Static & Interactive Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-2">
            <div className="text-[#888]">// identity</div>
            <div className="flex justify-left items-center gap-2">
              <span className="text-[#D7E2EA] font-bold text-[15px]">surya.exe</span>
              <div className="relative group flex items-center cursor-help">
                <span className="text-[#00ff41] text-xs px-1">{calculateVersion()}</span>

                {/* Custom Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#111] text-[#D7E2EA] text-[11px] font-mono px-3 py-1.5 rounded border border-[#333] whitespace-nowrap shadow-[0_0_15px_rgba(0,255,65,0.15)] z-50 flex items-center gap-1.5">
                  WTF? It's my biological uptime
                  <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111] border-b border-r border-[#333] rotate-45"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[#888]">// for_freelance</div>
              <div className="space-y-1">
                <a href="mailto:connectsuryasubhrajit@gmail.com" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit break-all">
                  connectsuryasubhrajit@gmail.com
                </a>
              </div>
              <div className="text-[#888]">/* mail_subject_must_be_freelance */</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[#888]">// nav_stack</div>
            <div className="space-y-1">
              <a href="#about" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                01: about
              </a>
              <a href="#skills" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                02: skills
              </a>
              <a href="#projects" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                03: projects
              </a>

              <div className="space-y-1">
                <div className="relative group w-fit cursor-help">
                  <div className="text-[#888]">// to_hire_me</div>
                  
                  {/* Custom Tooltip */}
                  <div className="absolute -top-14 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#111] text-[#D7E2EA] text-[11px] font-mono px-3 py-2 rounded border border-[#333] whitespace-nowrap shadow-[0_0_15px_rgba(0,255,65,0.15)] z-50 flex flex-col">
                    <span className="text-[#00ff41]">WTF? Why in the nav stack?</span>
                    <span className="text-[#888]">- Good devs knows how to fill empty spaces ( ͡° ͜ʖ ͡°)</span>
                    <div className="absolute -bottom-[5px] left-6 w-2 h-2 bg-[#111] border-b border-r border-[#333] rotate-45"></div>
                  </div>
                </div>
                <a href="mailto:suryasubhrajit@gmail.com" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit break-all">
                  suryasubhrajit@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[#888]">// quick_links</div>
            <div className="space-y-1">
              <a href="http://xaor.onrender.com/test" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                01: xaor web
              </a>
              <a href="http://shaadowapps.github.io" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                02: shaadow web
              </a>
              <a href="http://favtunes.github.io" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                03: favtunes web
              </a>
              <a href="http://booferapp.github.io" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                04: boofer web
              </a>
              <a href="http://devbgames.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:text-[#00ff41] transition-colors duration-200 block w-fit">
                05: bgames console
              </a>
            </div>
          </div>


        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#222]" />

        {/* Bottom Row: Copyright and Social links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[#666] text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
            © {new Date().getFullYear()} 
            <div className="relative group cursor-help inline-flex items-center">
              <span className="text-[#888] hover:text-[#00ff41] transition-colors border-b border-dashed border-[#555] group-hover:border-[#00ff41]">Surya</span>
              
              {/* Custom Tooltip */}
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[#111] text-[11px] font-mono px-3 py-2 rounded border border-[#333] whitespace-nowrap shadow-[0_0_15px_rgba(0,255,65,0.15)] z-50 flex flex-col items-center">
                <span className="text-[#00ff41]">Domain says Subhrajit?</span>
                <span className="text-[#888]">- Yeah, my full name is Surya Subhrajit.</span>
                <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111] border-b border-r border-[#333] rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center bg-[#0d0d0d] border border-[#222] text-[#888] hover:text-[#00ff41] hover:border-[#00ff41]/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] rounded-full h-10 w-10 hover:w-32 transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div className="absolute left-3 flex items-center justify-center shrink-0 w-4 h-4">
                  <social.icon className="w-4 h-4" />
                </div>
                <span className="pl-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-[12px] font-bold font-mono tracking-wider">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
