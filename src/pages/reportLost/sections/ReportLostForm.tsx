export default function ReportLostForm() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200/70">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-rose-300">Lost item</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">Tell AI exactly what you lost.</h1>
        <p className="mt-4 leading-7 text-slate-300">Clear details improve matching. Add color, brand, unique marks, where you lost it, and when.</p>
        <div className="mt-8 rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
          <p className="font-black">Matching tip</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Example: “Black leather wallet with student ID, lost near Shahr-e-Naw Market at 5 PM.”</p>
        </div>
      </aside>

      <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="text-sm font-bold text-slate-700">Item name</span>
            <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" placeholder="Wallet, phone, passport, bag..." />
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">Category</span>
            <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10">
              <option>Electronics</option>
              <option>Documents</option>
              <option>Bags</option>
              <option>Wallets</option>
              <option>Other</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">Date lost</span>
            <input type="date" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-bold text-slate-700">Location lost</span>
            <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" placeholder="Area, market, school, station..." />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-bold text-slate-700">Description</span>
            <textarea rows={5} className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" placeholder="Brand, color, serial number, marks, documents inside, last seen details..." />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-bold text-slate-700">Photo upload</span>
            <div className="mt-2 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center">
              <p className="font-black text-slate-950">Drop image here or click to upload</p>
              <p className="mt-1 text-sm text-slate-500">PNG/JPG helps AI match faster</p>
            </div>
          </label>
        </div>

        <button className="mt-6 w-full rounded-2xl bg-rose-600 px-5 py-3 font-black text-white shadow-xl shadow-rose-900/20 hover:bg-rose-700">
          Submit lost report
        </button>
      </form>
    </div>
  );
}
