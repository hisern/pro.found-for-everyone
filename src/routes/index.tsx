import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { dict, WHATSAPP_NUMBER, type Lang } from "@/lib/i18n";
import cleaner from "@/assets/cleaner.jpg";
import doula from "@/assets/doula.jpg";
import contractor from "@/assets/contractor.jpg";
import heroPaid from "@/assets/hero-paid.jpg";

const heroPhoto = heroPaid;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "pro.found | Fill your schedule with clients you love" },
      { name: "description", content: "Website, booking, payments and social for solo entrepreneurs, set up and run for you, in English, Spanish or Portuguese." },
      { property: "og:title", content: "pro.found | Build trust. Grow your business." },
      { property: "og:description", content: "We speak your language, we set it up, and we keep it running." },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <span className="text-xl font-extrabold tracking-tight">
      pro.found <span className="text-accent-strong">▶︎</span>
    </span>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
    </svg>
  );
}

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2);
}

export function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = dict[lang];
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waMsg)}`;
  const photos = [cleaner, doula, contractor];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b bg-background/90 backdrop-blur">
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
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-background">
          <div className="mx-auto max-w-6xl px-5 pb-6 pt-12 md:pt-16 xl:flex xl:min-h-[640px] xl:items-center xl:py-20">
            <div className="relative z-10 max-w-xl xl:max-w-lg">
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{t.heroTitle}</h1>
              <p className="mt-6 text-lg text-foreground/75 md:text-xl">{t.heroSub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground shadow-sm transition hover:brightness-95">
                  <WhatsAppIcon />{t.heroCta}
                </a>
                <a href="#plans" className="rounded-full border-2 border-primary bg-background/60 px-7 py-3 font-bold transition hover:bg-primary hover:text-primary-foreground">{t.heroCta2}</a>
              </div>
            </div>
            <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-[2rem] sm:aspect-[1672/941] xl:absolute xl:inset-y-0 xl:right-0 xl:mt-0 xl:h-full xl:w-auto xl:rounded-none">
              <img
                src={heroPhoto}
                alt="A smiling cleaning business owner holding her phone"
                width={1672}
                height={941}
                loading="eager"
                className="h-full w-full object-cover object-right"
              />
              <div aria-hidden className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background to-transparent xl:block" />
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-xl bg-background/95 px-2.5 py-1.5 text-[11px] font-bold shadow-lg shadow-black/10 sm:left-[73%] sm:top-[12%] sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-xs xl:text-sm">
                <span aria-hidden className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[oklch(0.68_0.17_150)] text-[9px] text-white sm:h-5 sm:w-5 sm:text-[11px]">✓</span>
                <span className="whitespace-nowrap">{t.paidNote}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 xl:pt-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.map((src, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-2xl bg-muted">
                <img src={src} alt={t.gallery[i]} width={768} height={1024} loading={i === 0 ? "eager" : "lazy"} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:aspect-[3/4]" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-background px-4 py-1.5 text-sm font-bold">
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent align-middle" />{t.gallery[i]}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-center text-muted-foreground">{t.galleryNote}</p>
        </section>

        {/* Problem / answer */}
        <section id="services" className="bg-deep py-20 text-deep-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">{t.hardTitle}</h2>
            <div className="mt-12 space-y-3">
              <div className="hidden grid-cols-2 gap-6 px-7 text-xs font-bold uppercase tracking-widest text-deep-foreground/60 md:grid">
                <span>{t.problemLabel}</span>
                <span>{t.answerLabel}</span>
              </div>
              {t.hard.map(([a, b]) => (
                <div key={a} className="grid gap-3 rounded-2xl bg-deep-foreground/[0.07] p-6 md:grid-cols-2 md:gap-6 md:p-7">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-deep-foreground/60 md:hidden">{t.problemLabel}</span>
                    <p className="mt-1 text-lg font-semibold md:mt-0">{a}</p>
                  </div>
                  <div className="flex gap-3 border-t border-deep-foreground/15 pt-3 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">✓</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-sky md:hidden">{t.answerLabel}</span>
                      <p className="text-lg text-deep-foreground/90">{b}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.builtTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.built.map(([a, b], i) => (
              <div key={a} className="rounded-2xl bg-sky p-6">
                <span className="text-sm font-extrabold text-accent-strong">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{a}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client story placeholder */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid overflow-hidden rounded-3xl border-2 border-dashed border-accent/50 bg-card md:grid-cols-[2fr_3fr]">
              <div className="flex min-h-56 flex-col items-center justify-center gap-2 bg-sky p-8 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-background text-2xl font-extrabold text-accent-strong">M</span>
                <span className="text-sm font-semibold text-secondary-foreground">{t.storySite}</span>
              </div>
              <div className="p-8 md:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-strong">{t.storyLabel}</span>
                <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl"><span className="text-accent-strong">“</span>{t.storyQuote}<span className="text-accent-strong">”</span></p>
                <p className="mt-6 font-bold">{t.storyName}</p>
                <p className="text-sm text-muted-foreground">{t.storyBiz}</p>
                <p className="mt-6 inline-block rounded-lg bg-muted px-3 py-2 text-xs font-semibold text-muted-foreground">{t.storyPlaceholder}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="bg-card py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.plansTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.plansNote}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {t.plans.map((p, i) => {
                const hi = i === 1;
                return (
                  <div key={p.name} className={`relative flex flex-col rounded-2xl border p-7 ${hi ? "border-deep bg-deep text-deep-foreground" : "bg-background"}`}>
                    {hi && <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{t.popular}</span>}
                    {p.note && <span className="absolute -top-3 left-7 rounded-full border bg-background px-3 py-1 text-xs font-bold text-foreground">{p.note}</span>}
                    <h3 className="text-2xl font-extrabold">{p.name}</h3>
                    <p className={`mt-1 text-sm ${hi ? "opacity-75" : "text-muted-foreground"}`}>{p.sub}</p>
                    <p className="mt-6"><span className="text-4xl font-extrabold">{p.price}</span> <span className="text-sm opacity-75">{p.per}</span></p>
                    <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                      {p.items.map((it) => (
                        <li key={it} className="flex gap-2"><span className={hi ? "text-sky" : "text-accent-strong"}>✓</span>{it}</li>
                      ))}
                    </ul>
                    <a href={wa} target="_blank" rel="noreferrer" className={`mt-8 rounded-full px-5 py-3 text-center font-bold transition ${hi ? "bg-accent text-accent-foreground hover:brightness-95" : "bg-primary text-primary-foreground hover:opacity-90"}`}>{t.heroCta}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.aboutTitle}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{t.aboutIntro}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.team.map((m) => (
              <div key={m.name} className="flex flex-col rounded-2xl border bg-background p-6">
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent/40 bg-sky">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background text-xl font-extrabold text-accent-strong">{initials(m.name)}</span>
                  <span className="text-xs font-semibold text-secondary-foreground">{t.photoSoon}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{m.name}</h3>
                <p className="text-sm font-bold text-accent-strong">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 pb-24">
          <div className="mx-auto max-w-6xl rounded-3xl bg-accent px-8 py-16 text-center text-accent-foreground md:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg">{t.contactSub}</p>
            <a href={wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:opacity-90">
              <WhatsAppIcon />{t.heroCta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 pb-24 text-sm text-muted-foreground md:pb-8">
          <Logo />
          <span>© 2026 pro.found · {t.rights}</span>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label={t.heroCta}
        className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] z-30 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 font-bold text-accent-foreground shadow-lg shadow-black/20 transition hover:brightness-95"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span>{t.waShort}</span>
      </a>
    </div>
  );
}
