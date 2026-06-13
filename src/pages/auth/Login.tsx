import LoginForm from "./sections/LoginForm";

export default function Login() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-50 py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(20,184,166,0.16),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(15,23,42,0.10),transparent_28%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hidden lg:block">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-600">Welcome back</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">Manage matches, reports, and recovery activity.</h1>
          <p className="mt-5 max-w-xl leading-8 text-slate-600">Sign in to continue tracking reports, reviewing AI suggestions, and reconnecting people with lost items.</p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
