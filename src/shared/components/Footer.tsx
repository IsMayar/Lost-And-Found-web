import { Link } from "react-router-dom";
import Container from "./shared/container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white font-black">F</span>
              <div>
                <p className="font-black text-slate-950">Findly AI</p>
                <p className="text-sm text-slate-500">AI-powered lost and found</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              A privacy-first platform that helps communities report, search, match, and recover lost items faster with AI.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-950">Platform</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-500">
              <Link to="/search" className="hover:text-slate-950">Search items</Link>
              <Link to="/matches" className="hover:text-slate-950">AI matches</Link>
              <Link to="/dashboard" className="hover:text-slate-950">Dashboard</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-950">Report</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-500">
              <Link to="/report-lost" className="hover:text-slate-950">Report lost item</Link>
              <Link to="/report-found" className="hover:text-slate-950">Report found item</Link>
              <Link to="/register" className="hover:text-slate-950">Create account</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Findly AI. All rights reserved.</p>
          <p>Built for trusted community recovery.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
