import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus, LockKeyhole, MapPin, ShieldCheck, UploadCloud } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3, "Title is required"),
  category: z.string().min(1, "Category is required"),
  location: z.string().min(3, "Location is required"),
  date: z.string().min(1, "Date is required"),
  description: z.string().min(20, "Please add at least 20 characters"),
  color: z.string().optional(),
  brand: z.string().optional(),
  privateHint: z.string().min(10, "Add a private verification hint"),
});

type FormData = z.infer<typeof schema>;

type ReportFormProps = {
  mode: "lost" | "found";
};

const categories = ["Phone", "Wallet", "Bag", "Keys", "Document", "Laptop", "Pet", "Other"];

export default function ReportForm({ mode }: ReportFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log(`${mode.toUpperCase()} REPORT DATA:`, data);
  };

  const isLost = mode === "lost";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-8 flex items-start gap-4 rounded-[1.5rem] bg-slate-50 p-4">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${isLost ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"}`}>
          <ShieldCheck className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-xl font-black text-slate-950">{isLost ? "Lost item details" : "Found item details"}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Add clear public details and keep sensitive ownership proof inside private hints.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-sm font-black text-slate-700">Item title</span>
          <input {...register("title")} placeholder={isLost ? "Black iPhone 13 with blue case" : "Dark phone found near university road"} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          {errors.title && <p className="mt-2 text-sm font-bold text-rose-600">{errors.title.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">Category</span>
          <select {...register("category")} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10">
            <option value="">Select category</option>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
          {errors.category && <p className="mt-2 text-sm font-bold text-rose-600">{errors.category.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">Date {isLost ? "lost" : "found"}</span>
          <input {...register("date")} type="date" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          {errors.date && <p className="mt-2 text-sm font-bold text-rose-600">{errors.date.message}</p>}
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-black text-slate-700">Location</span>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-slate-950 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-950/10">
            <MapPin className="h-5 w-5 text-slate-400" />
            <input {...register("location")} placeholder="General location, not exact private address" className="w-full bg-transparent outline-none" />
          </div>
          {errors.location && <p className="mt-2 text-sm font-bold text-rose-600">{errors.location.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">Color</span>
          <input {...register("color")} placeholder="Black, brown, grey..." className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
        </label>

        <label className="block">
          <span className="text-sm font-black text-slate-700">Brand / model</span>
          <input {...register("brand")} placeholder="Apple, Samsung, Lenovo..." className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-black text-slate-700">Public description</span>
          <textarea {...register("description")} rows={5} placeholder="Describe what people can safely see publicly." className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/10" />
          {errors.description && <p className="mt-2 text-sm font-bold text-rose-600">{errors.description.message}</p>}
        </label>

        <label className="block sm:col-span-2">
          <span className="inline-flex items-center gap-2 text-sm font-black text-slate-700"><LockKeyhole className="h-4 w-4" /> Private verification hint</span>
          <textarea {...register("privateHint")} rows={4} placeholder="Private details used only to verify a claim. Example: wallpaper, inside wallet photo, number of keys, document initials." className="mt-2 w-full resize-none rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 outline-none focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10" />
          {errors.privateHint && <p className="mt-2 text-sm font-bold text-rose-600">{errors.privateHint.message}</p>}
        </label>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
        <ImagePlus className="mx-auto h-8 w-8 text-slate-400" />
        <h3 className="mt-3 font-black text-slate-950">Upload item images</h3>
        <p className="mt-1 text-sm text-slate-500">Mock upload area. Backend storage will be connected later.</p>
        <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:bg-slate-50">
          <UploadCloud className="h-4 w-4" /> Choose images
        </button>
      </div>

      <button disabled={isSubmitting} className="mt-6 w-full rounded-2xl bg-slate-950 px-5 py-4 font-black text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Submitting..." : isLost ? "Submit lost item report" : "Submit found item report"}
      </button>
    </form>
  );
}
