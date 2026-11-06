import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { dict, WHATSAPP_NUMBER, type Lang } from "@/lib/i18n";
import cleaner from "@/assets/cleaner.jpg";
import doula from "@/assets/doula.jpg";
import contractor from "@/assets/contractor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "pro.found — Get more clients like your best ones" },
      { name: "description", content: "Website, booking, payments and social for solo entrepreneurs — set up and run for you, in English, Spanish or Portuguese." },
      { property: "og:title", content: "pro.found — Build trust. Grow your business." },
      { property: "og:description", content: "We speak your language, we set it up, and we keep it running." },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <span className="text-xl font-extrabold tracking-tight">
      pro.found <span className="text-accent">▶︎</span>
    </span>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = dict[lang];
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waMsg)}`;
  const photos = [cleaner, doula, contractor];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top"><Logo /></a>
          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-accent">{t.nav.services}</a>
            <a href="#plans" className="hover:text-accent">{t.nav.plans}</a>
            <a href="#about" className="hover:text-accent">{t.nav.about}</a>
          </nav>
          <div className="flex rounded-full bg-muted p-1 text-xs font-bold">
            {(["en", "es", "pt"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1.5 uppercase transition ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top" lang={lang}>
        <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:pt-24">
          <span className="inline-block rounded-full bg-sky px-4 py-1.5 text-sm font-semibold text-secondary-foreground">{t.tagline}</span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">{t.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{t.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition hover:opacity-90">{t.heroCta}</a>
            <a href="#plans" className="rounded-full border-2 border-primary px-7 py-3 font-bold transition hover:bg-primary hover:text-primary-foreground">{t.heroCta2}</a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.map((src, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-2xl bg-muted">
                <img src={src} alt={t.gallery[i]} width={768} height={1024} loading={i === 0 ? "eager" : "lazy"} className="aspect-[3/4] w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-background px-4 py-1.5 text-sm font-bold">{t.gallery[i]}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-center text-muted-foreground">{t.galleryNote}</p>
        </section>

        <section id="services" className="bg-primary py-20 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">{t.hardTitle}</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/15 md:grid-cols-2">
              {t.hard.map(([a, b]) => (
                <div key={a} className="bg-primary p-7">
                  <p className="text-sm font-semibold text-muted-foreground line-through">{a}</p>
                  <p className="mt-2 text-lg font-semibold"><span className="text-accent">→ </span>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.builtTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.built.map(([a, b], i) => (
              <div key={a} className="rounded-2xl bg-sky p-6">
                <span className="text-sm font-extrabold text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{a}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="plans" className="bg-card py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.plansTitle}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {t.plans.map((p, i) => {
                const hi = i === 1;
                return (
                  <div key={p.name} className={`relative flex flex-col rounded-2xl border p-7 ${hi ? "border-primary bg-primary text-primary-foreground" : "bg-background"}`}>
                    {hi && <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{t.popular}</span>}
                    <h3 className="text-2xl font-extrabold">{p.name}</h3>
                    <p className={`mt-1 text-sm ${hi ? "opacity-70" : "text-muted-foreground"}`}>{p.sub}</p>
                    <p className="mt-6"><span className="text-4xl font-extrabold">{p.price}</span> <span className="text-sm opacity-70">{p.per}</span></p>
                    <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                      {p.items.map((it) => (
                        <li key={it} className="flex gap-2"><span className="text-accent">✓</span>{it}</li>
                      ))}
                    </ul>
                    <a href={wa} target="_blank" rel="noreferrer" className={`mt-8 rounded-full px-5 py-3 text-center font-bold transition hover:opacity-90 ${hi ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>{t.heroCta}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.aboutTitle}</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {t.about.map((p, i) => <p key={i} className={i === 0 ? "text-foreground" : ""}>{p}</p>)}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-accent px-8 py-16 text-center text-accent-foreground md:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">{t.contactSub}</p>
            <a href={wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:opacity-90">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
              {t.heroCta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground">
          <Logo />
          <span>© 2026 pro.found · {t.rights}</span>
        </div>
      </footer>
    </div>
  );
}
