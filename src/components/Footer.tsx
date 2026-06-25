"use client";

import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation"; // 1. Import router

export default function Footer() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>(["SYSTEM READY. Type 'help' for commands."]);
  const router = useRouter(); // 2. Initialize router

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = command.trim().toLowerCase();
      let response = "";
      let shouldRedirect = false;
      let path = "";

      // 3. Define mapping
      switch (cmd) {
        case "sys info": 
          response = ">> Redirecting to /about..."; 
          shouldRedirect = true; path = "/#about"; 
          break;
        case " sys projects": 
          response = ">> Redirecting to /projects..."; 
          shouldRedirect = true; path = "/#projects"; 
          break;
        case "sys contact": 
          response = ">> Email: connectsuryasubhrajit@gmail.com | Tel: +91 89174 73946"; 
          break;
        case "help": 
          response = ">> Commands: 'sys info', 'sys projects', 'sys contact', 'cls'"; 
          break;
        case "cls": 
          setHistory([]); setCommand(""); return;
        default: 
          response = `>> bash: command not found: ${cmd}`;
      }

      setHistory([...history, `root@surya:~$ ${command}`, response]);
      setCommand("");

      // 4. Execute redirect after a short delay so the user sees the message
      if (shouldRedirect) {
        setTimeout(() => router.push(path), 800);
      }
    }
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-[#333] px-10 py-12 font-mono text-[13px]" style={{fontFamily: "'Courier New', 'Fira Code', 'JetBrains Mono', monospace"}}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        
        {/* Top Row: Static Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-1">
            <div className="text-[#888]">// identity</div>
            <div className="text-[#D7E2EA] font-bold">surya.exe</div>
            <div className="text-[#444]">build_id: 2026.06.25</div>
          </div>

          <div className="space-y-1">
            <div className="text-[#888]">// nav_stack</div>
            <div className="text-[#D7E2EA]">01: about</div>
            <div className="text-[#D7E2EA]">02: skills</div>
            <div className="text-[#D7E2EA]">03: projects</div>
          </div>

          <div className="space-y-1">
            <div className="text-[#888]">// contact_endpoint</div>
            <div className="text-[#D7E2EA]">connectsuryasubhrajit@gmail.com</div>
            <div className="text-[#D7E2EA]">+91 89174 73946</div>
          </div>
        </div>

        {/* Bottom Row: Interactive Terminal Console */}
        <div className="border border-[#222] p-6 bg-[#0a0a0a] flex flex-col h-[200px]">
          <div className="flex-1 text-[#00ff41] space-y-1 overflow-y-auto mb-2 scrollbar-hide">
            {history.map((log, i) => (
              <div key={i} className="text-[12px] break-all">{log}</div>
            ))}
          </div>
          <div className="flex gap-2 items-center border-t border-[#222] pt-3">
            <span className="text-[#00ff41] text-[12px]">root@surya:~$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none border-none text-[#D7E2EA] text-[12px] caret-[#00ff41]"
              placeholder="_"
              autoFocus
            />
          </div>
        </div>
      </div>
    </footer>
  );
}