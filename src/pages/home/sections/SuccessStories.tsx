import Container from "../../../shared/components/shared/container";

const stories = [
  { title: "Phone recovered", text: "A student recovered a phone within two hours after AI matched the location and device description." },
  { title: "Wallet returned", text: "A market visitor was connected with a found wallet report without exposing private details publicly." },
  { title: "Bag found", text: "A blue school bag was matched near the university gate using image and description similarity." },
];

const SuccessStories = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-600">Recovery stories</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Designed around trust and successful returns</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-emerald-50 ring-1 ring-emerald-100" />
              <h3 className="text-xl font-black text-slate-950">{story.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{story.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessStories;
