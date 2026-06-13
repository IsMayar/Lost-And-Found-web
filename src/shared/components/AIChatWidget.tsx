import { Bot, MessageCircle, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open && (
        <div className="mb-3 w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">
          <div className="bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-black">Findly AI Assistant</p>
                  <p className="text-xs text-slate-300">Prototype smart guidance</p>
                </div>
              </div>
              <button className="rounded-full p-2 hover:bg-white/10" onClick={() => setOpen(false)} aria-label="Close AI assistant">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-3 p-5 text-sm leading-6">
            <div className="rounded-2xl bg-slate-100 p-4 text-slate-700">
              Tell me what you lost, where, and when. I can suggest better search terms and match clues.
            </div>
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-cyan-900">
              Example: “I lost a black iPhone with a blue case near Kabul University today.”
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 font-bold text-white hover:bg-slate-800">
              <Sparkles className="h-4 w-4" /> Start AI search
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-2xl shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
        aria-label="Open AI assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
