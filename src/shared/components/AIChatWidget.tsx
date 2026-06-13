const AIChatWidget = () => {
  return (
    <button className="fixed bottom-6 right-6 z-40 hidden rounded-2xl bg-slate-950 px-5 py-4 text-left text-white shadow-2xl shadow-slate-900/30 transition hover:-translate-y-0.5 md:block">
      <span className="block text-sm font-black">AI Assistant</span>
      <span className="block text-xs text-slate-300">Ask about a lost item</span>
    </button>
  );
};

export default AIChatWidget;
