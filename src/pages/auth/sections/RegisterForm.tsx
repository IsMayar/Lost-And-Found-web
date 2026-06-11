import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Minimum 6 characters"),
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
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("REGISTER DATA:", data);
    // later: API call / Firebase create user
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
      <p className="text-gray-500 text-sm">Join the Lost & Found system</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full border p-2 rounded text-gray-900"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

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

        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="w-full border p-2 rounded text-gray-900"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  );
}
