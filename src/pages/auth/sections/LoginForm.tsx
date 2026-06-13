import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log("LOGIN DATA:", data);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8">
      <div className="mb-8">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white">F</div>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-950">Login to Findly AI</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Access your lost and found reports, AI matches, and dashboard.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Email address</span>
          <input {...register("email")} type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          {errors.email && <p className="mt-2 text-sm font-medium text-rose-600">{errors.email.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-bold text-slate-700">Password</span>
          <input {...register("password")} type="password" placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          {errors.password && <p className="mt-2 text-sm font-medium text-rose-600">{errors.password.message}</p>}
        </label>

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 font-medium text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300" /> Remember me
          </label>
          <button type="button" className="font-bold text-slate-950 hover:underline">Forgot password?</button>
        </div>

        <button disabled={isSubmitting} className="w-full rounded-2xl bg-slate-950 px-5 py-3 font-black text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        New here? <Link to="/register" className="font-black text-slate-950 hover:underline">Create an account</Link>
      </p>
    </div>
  );
}
