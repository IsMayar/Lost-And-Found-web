import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("LOGIN DATA:", data);
    // later: call API / Firebase auth
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Login</h1>
      <p className="text-gray-500 text-sm ">Access your Lost & Found account</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-2 rounded text-gray-900"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full border p-2 rounded text-gray-900"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="w-full bg-black text-white p-2 rounded"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
