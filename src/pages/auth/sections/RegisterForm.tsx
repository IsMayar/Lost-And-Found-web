import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log("REGISTER DATA:", data);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8">
      <div className="mb-8">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-600 text-lg font-black text-white">✓</div>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-950">Create your account</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Start reporting items, saving searches, and receiving AI match alerts.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Full name</span>
          <input {...register("name")} placeholder="Your full name" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          {errors.name && <p className="mt-2 text-sm font-medium text-rose-600">{errors.name.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-bold text-slate-700">Email address</span>
          <input {...register("email")} type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          {errors.email && <p className="mt-2 text-sm font-medium text-rose-600">{errors.email.message}</p>}
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Password</span>
            <input {...register("password")} type="password" placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
            {errors.password && <p className="mt-2 text-sm font-medium text-rose-600">{errors.password.message}</p>}
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">Confirm</span>
            <input {...register("confirmPassword")} type="password" placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
            {errors.confirmPassword && <p className="mt-2 text-sm font-medium text-rose-600">{errors.confirmPassword.message}</p>}
          </label>
        </div>

        <button disabled={isSubmitting} className="w-full rounded-2xl bg-emerald-600 px-5 py-3 font-black text-white shadow-xl shadow-emerald-900/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account? <Link to="/login" className="font-black text-slate-950 hover:underline">Login</Link>
      </p>
    </div>
  );
}
