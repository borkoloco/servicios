import { createContext, useContext, useEffect, useState } from 'react';
import { send } from '@emailjs/browser';
import {
  AlarmClock,
  ArrowRight,
  Check,
  ChevronDown,
  DatabaseZap,
  FileSpreadsheet,
  FileText,
  Handshake,
  KeyRound,
  Linkedin,
  Loader2,
  Mail,
  Menu,
  MessageCircle,
  MessagesSquare,
  Moon,
  PenLine,
  ScanText,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Users,
  Wallet,
  X,
} from 'lucide-react';
import me from './assets/me.png';
import { CONTACT, CONTENT, whatsappUrl } from './content.js';

const ICONS = {
  AlarmClock,
  DatabaseZap,
  FileSpreadsheet,
  FileText,
  Handshake,
  KeyRound,
  MessageCircle,
  MessagesSquare,
  PenLine,
  ScanText,
  Smartphone,
  Wallet,
};

// ---------- Preferencias: idioma y tema ----------

function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Sin almacenamiento (modo privado): la preferencia dura hasta recargar.
  }
}

function initialLang() {
  // ?lang=en en la dirección abre la web en inglés (sirve para compartir el link).
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
  const saved = readStored('lang');
  if (saved === 'es' || saved === 'en') return saved;
  return /^es/i.test(navigator.language || '') ? 'es' : 'en';
}

function initialTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

const AppContext = createContext(null);
const useApp = () => useContext(AppContext);

// ---------- Piezas comunes ----------

function WhatsAppButton({ children, className = '' }) {
  const { t } = useApp();
  return (
    <a
      href={whatsappUrl(t.ui.whatsappText)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-on-brand shadow-sm transition hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <MessageCircle size={20} aria-hidden="true" />
      {children ?? t.ui.whatsappCta}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-strong">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </div>
  );
}

function LangToggle() {
  const { lang, setLang, t } = useApp();
  return (
    <div role="group" aria-label={t.ui.language} className="inline-flex rounded-full border border-line p-0.5 text-xs font-semibold">
      {['es', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            lang === l ? 'bg-ink text-surface' : 'text-muted hover:text-ink'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, t } = useApp();
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? t.ui.themeToLight : t.ui.themeToDark}
      title={dark ? t.ui.themeToLight : t.ui.themeToDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition hover:text-ink"
    >
      {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}

// ---------- Secciones ----------

function Header() {
  const { t } = useApp();
  const [open, setOpen] = useState(false);
  const nav = [
    { href: '#casos', label: t.ui.nav.cases },
    { href: '#ia', label: t.ui.nav.ai },
    { href: '#como-trabajo', label: t.ui.nav.how },
    { href: '#preguntas', label: t.ui.nav.faq },
    { href: '#contacto', label: t.ui.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#inicio" className="font-display text-lg font-semibold">
          Santiago Bosca
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label={t.ui.mainNav}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <WhatsAppButton className="hidden px-4! py-2! text-sm lg:inline-flex">{t.ui.letsTalk}</WhatsAppButton>
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-surface px-4 pb-4 lg:hidden" aria-label={t.ui.mainNav}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="block py-3 font-medium text-muted" onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <WhatsAppButton className="mt-2 w-full">{t.ui.letsTalk}</WhatsAppButton>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useApp();
  const h = t.hero;
  return (
    <section id="inicio" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.4fr_1fr] md:px-6 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-strong">{h.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">{h.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">{h.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <a
              href="#casos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-semibold hover:border-ink"
            >
              {h.seeCases} <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-xs">
          <img
            src={me}
            alt="Santiago Bosca"
            className="aspect-square w-full rounded-3xl object-cover shadow-lg"
            width="484"
            height="498"
          />
          <figcaption className="mt-4 text-center text-sm text-muted">
            {h.caption[0]}
            <br />
            {h.caption[1]}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Problems() {
  const { t } = useApp();
  const p = t.problems;
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeader eyebrow={p.eyebrow} title={p.title} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {p.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.icon} className="rounded-2xl border border-line p-6">
              <span className="inline-flex rounded-xl bg-brand-soft p-3 text-brand-strong">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CaseCard({ c, reverse }) {
  const { t } = useApp();
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={reverse ? 'md:order-2' : ''}>
        <img
          src={c.image}
          alt={c.imageAlt}
          loading="lazy"
          className="w-full rounded-2xl border border-line object-cover shadow-md"
        />
      </div>
      <div>
        <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-strong">
          {c.tag}
        </span>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl">{c.title}</h3>
        <p className="mt-1 text-sm font-medium text-muted">{c.role}</p>
        {c.before && (
          <p className="mt-5 text-muted">
            <span className="font-semibold text-ink">{t.ui.before}</span>
            {c.before}
          </p>
        )}
        <ul className="mt-4 space-y-2">
          {c.after.map((a) => (
            <li key={a} className="flex gap-3">
              <Check size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-5">
          {c.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold text-brand-strong">{s.value}</dd>
              <dd className="text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function Cases() {
  const { t } = useApp();
  const c = t.cases;
  return (
    <section id="casos" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} text={c.text} />
        <div className="mt-14 space-y-20">
          {c.items.map((item, i) => (
            <CaseCard key={item.title} c={item} reverse={i % 2 === 1} />
          ))}
        </div>
        <div className="mt-20 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-start md:p-8">
          <span className="inline-flex shrink-0 self-start rounded-xl bg-brand-soft p-3 text-brand-strong">
            <Users size={24} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">{c.team.title}</h3>
            <p className="mt-2 text-muted">{c.team.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiSection() {
  const { t } = useApp();
  const ai = t.ai;
  return (
    <section id="ia" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeader eyebrow={ai.eyebrow} title={ai.title} text={ai.text} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {ai.uses.map((u) => {
          const Icon = ICONS[u.icon];
          return (
            <div key={u.icon} className="flex gap-4 rounded-2xl border border-line p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <p className="mt-2 text-muted">{u.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid gap-6 rounded-2xl border border-transparent bg-night p-6 text-white md:grid-cols-2 md:p-8 dark:border-line">
        <div className="flex gap-4">
          <Sparkles size={24} className="mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
          <p className="text-white/85">{ai.experience}</p>
        </div>
        <ul className="space-y-2">
          {ai.safeguards.map((s) => (
            <li key={s} className="flex gap-3 text-white/85">
              <ShieldCheck size={20} className="mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowIWork() {
  const { t } = useApp();
  const h = t.how;
  return (
    <section id="como-trabajo" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeader eyebrow={h.eyebrow} title={h.title} />
      <ol className="mt-12 grid gap-6 md:grid-cols-5">
        {h.steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line p-6">
            <span className="font-display text-3xl font-semibold text-brand-strong">{i + 1}</span>
            <h3 className="mt-2 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {h.benefits.map((b) => {
          const Icon = ICONS[b.icon];
          return (
            <div key={b.icon} className="flex gap-4">
              <Icon size={24} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted">{b.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useApp();
  const f = t.faq;
  return (
    <section id="preguntas" className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
        <SectionHeader eyebrow={f.eyebrow} title={f.title} />
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-surface">
          {f.items.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {item.q}
                <ChevronDown size={20} className="shrink-0 text-muted transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emptyForm = () => ({ name: '', email: '', phone: '', business: '', service: 0, message: '', website: '' });

function ContactForm() {
  const { t, lang } = useApp();
  const f = t.contact.form;
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [error, setError] = useState('');

  function update(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'service' ? Number(value) : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.website) return; // campo trampa: solo lo completan los robots
    if (!form.name.trim() || !form.message.trim()) {
      setError(f.errorRequired);
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError(f.errorEmail);
      return;
    }
    setError('');
    setStatus('sending');

    // La plantilla de EmailJS usa from_name, reply_to y message: el resto va dentro del mensaje.
    // El servicio va siempre en castellano, para que lo leas igual sin importar el idioma de la web.
    const message = [
      `[Consulta desde la web de servicios · idioma: ${lang.toUpperCase()}]`,
      `Servicio: ${CONTENT.es.contact.form.services[form.service]}`,
      `Negocio: ${form.business.trim() || '-'}`,
      `Teléfono: ${form.phone.trim() || '-'}`,
      '',
      form.message.trim(),
    ].join('\n');

    try {
      await send(
        import.meta.env.VITE_serviceID,
        import.meta.env.VITE_templateID,
        { from_name: form.name.trim(), reply_to: form.email.trim(), message },
        import.meta.env.VITE_publicKey,
      );
      setStatus('sent');
      setForm(emptyForm());
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl bg-surface p-8 text-center text-ink" role="status">
        <Check size={40} className="mx-auto text-brand" aria-hidden="true" />
        <h3 className="mt-3 text-xl font-semibold">{f.sentTitle}</h3>
        <p className="mt-2 text-muted">{f.sentText}</p>
        <button
          type="button"
          className="mt-5 font-semibold text-brand-strong underline-offset-4 hover:underline"
          onClick={() => setStatus('idle')}
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  const field =
    'mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-ink outline-none placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/25';

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-transparent bg-surface p-6 text-left text-ink md:p-8 dark:border-line">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          {f.name} *
          <input name="name" value={form.name} onChange={update} autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium">
          {f.email} *
          <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium">
          {f.phone}
          <input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" className={field} />
        </label>
        <label className="text-sm font-medium">
          {f.business}
          <input
            name="business"
            value={form.business}
            onChange={update}
            placeholder={f.businessPlaceholder}
            className={field}
          />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          {f.service}
          <select name="service" value={form.service} onChange={update} className={field}>
            {f.services.map((s, i) => (
              <option key={s} value={i}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          {f.message} *
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={update}
            placeholder={f.messagePlaceholder}
            className={field}
          />
        </label>
        {/* Campo trampa para robots: oculto para las personas */}
        <input
          name="website"
          value={form.website}
          onChange={update}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
      </div>
      {(error || status === 'error') && (
        <p className="mt-4 text-sm font-medium text-danger" role="alert">
          {error || f.errorSend}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-on-brand transition hover:bg-brand-hover disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={20} className="animate-spin" aria-hidden="true" /> {f.sending}
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" /> {f.submit}
          </>
        )}
      </button>
    </form>
  );
}

function Contact() {
  const { t } = useApp();
  return (
    <section id="contacto" className="bg-night text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1fr_1.3fr] md:px-6">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">{t.contact.title}</h2>
          <p className="mt-5 text-lg text-white/75">{t.contact.text}</p>
          <WhatsAppButton className="mt-8 bg-white! text-slate-900! hover:bg-teal-100!" />
          <div className="mt-8 flex flex-col gap-3 text-white/80">
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail size={18} aria-hidden="true" /> {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-white/10 bg-night text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm sm:flex-row sm:justify-between md:px-6">
        <p>© {new Date().getFullYear()} Santiago Bosca</p>
        <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-white">
          {t.ui.portfolio}
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLangState] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);
  const t = CONTENT[lang];

  function setLang(l) {
    setLangState(l);
    writeStored('lang', l);
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    writeStored('theme', next);
  }

  // Idioma: atributo lang, título y descripción de la página.
  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  // Tema: la clase .dark en <html> cambia todas las variables de color.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Cases />
        <AiSection />
        <HowIWork />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a
        href={whatsappUrl(t.ui.whatsappText)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.ui.whatsappCta}
        className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-on-brand shadow-lg transition hover:bg-brand-hover md:hidden"
      >
        <MessageCircle size={26} aria-hidden="true" />
      </a>
    </AppContext.Provider>
  );
}
