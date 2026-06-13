import { Link } from "react-router-dom";
import Container from "../../../shared/components/shared/container";

const CTASection = () => {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl shadow-slate-950/30 sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Start now</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Ready to find what matters?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Create a report, search existing items, or let AI suggest the most likely matches.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/report-lost" className="rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 hover:bg-slate-100">Report lost item</Link>
            <Link to="/report-found" className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white hover:bg-white/10">Report found item</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
