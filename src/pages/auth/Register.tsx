import RegisterForm from "./sections/RegisterForm";

export default function Register() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-50 py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(15,23,42,0.10),transparent_28%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hidden lg:block">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-600">Create account</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">Join a trusted lost and found community.</h1>
          <p className="mt-5 max-w-xl leading-8 text-slate-600">Report items, receive AI match suggestions, and keep recovery communication private and secure.</p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
