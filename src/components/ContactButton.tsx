"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { createPortal } from "react-dom";

export default function ContactButton() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<
    "name" | "email" | "message" | "confirm" | "sending" | "success" | "aborted"
  >("name");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [inputValue, setInputValue] = useState("");

  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Microsoft Windows [Version 10.0.22631]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "C:\\Users\\guest> cd C:\\surya\\contact",
    "C:\\surya\\contact> run contact_agent.exe",
    "Initializing secure link...",
    "[SUCCESS] Handshake complete.",
    ""
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [terminalHistory, isOpen, step]);

  useEffect(() => {
    const esc = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  }, [isOpen]);

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const val = inputValue.trim();

    if (step === "name") {
      if (!val) return;

      setFormData((prev) => ({ ...prev, name: val }));
      setTerminalHistory((prev) => [...prev, `Name: ${val}`]);
      setInputValue("");
      setStep("email");
    }

    else if (step === "email") {
      if (!validateEmail(val)) return;

      setFormData((prev) => ({ ...prev, email: val }));
      setTerminalHistory((prev) => [...prev, `Email: ${val}`]);
      setInputValue("");
      setStep("message");
    }

    else if (step === "message") {
      if (!val) return;

      setFormData((prev) => ({ ...prev, message: val }));
      setTerminalHistory((prev) => [
        ...prev,
        `Message: ${val}`,
        "",
        "Ready to send. Type Y"
      ]);
      setInputValue("");
      setStep("confirm");
    }

    else if (step === "confirm") {
      if (val.toUpperCase() === "Y") {
        setTerminalHistory((prev) => [
          ...prev,
          "Connecting to database...",
          "Transmitting payload to Google Sheets..."
        ]);

        setStep("sending");

        const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";

        if (!scriptUrl) {
          // Fallback simulation if environment variable is not defined
          setTimeout(() => {
            setTerminalHistory((prev) => [
              ...prev,
              "[SUCCESS] Message delivered successfully."
            ]);
            setStep("success");
          }, 1500);
          return;
        }

        fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString(),
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        })
          .then(() => {
            setTerminalHistory((prev) => [
              ...prev,
              "[SUCCESS] Message logged in Google Sheets database."
            ]);
            setStep("success");
          })
          .catch((err) => {
            setTerminalHistory((prev) => [
              ...prev,
              `>> ERROR: Write failed: ${err.message}`,
              "Please check connection and retry."
            ]);
            setStep("confirm");
          });
      }
    }
  };

  const modal = (
    <div
      className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        className="w-full max-w-[800px] bg-[#050505] border border-[#222] flex flex-col rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        style={{ height: "550px", maxHeight: "85vh" }}
      >
        {/* Header - Modernized */}
        <div className="bg-[#0a0a0a] px-5 py-3 flex justify-between items-center border-b border-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
           C:\surya\contact.sh
          </span>
          <button onClick={handleClose} className="text-slate-500 hover:text-white transition">
            ✕
          </button>
        </div>

        {/* Terminal - Refined Typography & Spacing */}
        <div
          className="flex-1 p-6 overflow-y-auto text-[#00ff41] font-mono text-[13px] leading-relaxed"
          onClick={() => inputRef.current?.focus()}
        >
          {terminalHistory.map((line, i) => (
            <div key={i} className="mb-1">{line || <>&nbsp;</>}</div>
          ))}

          {step !== "sending" && step !== "success" && (
            <div className="flex gap-2 mt-4 items-center">
              <span className="text-green-500 font-bold">
                {step === "name" && "> NAME:"}
                {step === "email" && "> EMAIL:"}
                {step === "message" && "> MSG:"}
                {step === "confirm" && "> SEND(Y/N):"}
              </span>

              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none flex-1 text-white caret-green-500"
                autoFocus
                autoComplete="off"
              />
            </div>
          )}

          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-8 py-3 bg-black text-green-400 border border-green-400"
      >
        ./contact.sh
      </button>

      {mounted && isOpen && createPortal(modal, document.body)}
    </>
  );
}