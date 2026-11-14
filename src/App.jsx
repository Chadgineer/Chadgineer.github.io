import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Download,
  Gamepad2,
  Github,
  Joystick,
  Layers,
  Linkedin,
  Mail,
  Rocket,
  Send,
  Trophy,
  Wrench,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// TODO: Kendi bilgilerinizi doldurun
// Not: Ünvan, kısa açıklama ve "Hakkımda" metni src/i18n/locales/*.json dosyalarından gelir.
const personalInfo = {
  name: "Berk", // İsminiz
  nickname: "Chadgineer", // Nickname
  skills: ["Unity", "C#", "Game Design", "3D modelling"], // Yetenekleriniz/Teknolojileriniz
  email: "iberker37@gmail.com" // E-posta adresiniz
};

// TODO: Sosyal medya ve platform linklerinizi ekleyin
const socialLinks = {
  itch: "https://chadgineer.itch.io", // Itch.io profil linkiniz
  linkedin: "https://www.linkedin.com/in/ibrahim-berk-er-33612b295", // LinkedIn profil linkiniz
  github: "https://github.com/Chadgineer", // GitHub profil linkiniz
  steam: "https://steamcommunity.com/profiles/76561198294279253/", // Steam sayfanız veya oyun linkiniz
  email: personalInfo.email
};

// TODO: İstatistiklerinizi ekleyin
const stats = {
  projectsCompleted: 5, // Tamamladığınız proje sayısı
  gamesPublished: 1, // Yayınladığınız oyun sayısı
  yearsExperience: 3, // Yıl deneyim
  technologiesUsed: 10 // Kullandığınız teknoloji sayısı
};

// TODO: CV/Resume linkinizi ekleyin
const cvLink = ""; // CV dosyanızın linki (Google Drive, Dropbox vb.) veya public klasöründe ise "/cv.pdf"
const hasCV = false; // CV'niz varsa true yapın

// TODO: Deneyim/Timeline bilgilerinizi ekleyin
const experience = [
  // {
  //   year: "2024",
  //   title: "Oyun Geliştiricisi",
  //   company: "Şirket/Stüdyo Adı",
  //   description: "Açıklama",
  //   type: "work" // "work" (İş) veya "education" (Eğitim)
  // },
];

// TODO: Projelerinizi/Oyunlarınızı ekleyin
const projects = [
  // {
  //   name: "Proje Adı",
  //   description: "Proje açıklaması",
  //   link: "https://proje-linki.com",
  //   type: "game", // "game", "tool" veya "other"
  //   image: "https://görsel-url.com/image.jpg", // İsteğe bağlı
  //   tags: ["Unity", "C#"] // İsteğe bağlı
  // }
];

const socials = [
  { label: "Itch.io", href: socialLinks.itch, Icon: Gamepad2, hover: "hover:border-[#fa5c5c]/60 hover:text-[#fa5c5c]" },
  { label: "Steam", href: socialLinks.steam, Icon: Joystick, hover: "hover:border-sky-400/60 hover:text-sky-300" },
  { label: "GitHub", href: socialLinks.github, Icon: Github, hover: "hover:border-gray-300/60 hover:text-white" },
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: Linkedin, hover: "hover:border-[#0a66c2]/70 hover:text-[#4c9be8]" },
];

const statItems = [
  { key: "projectsCompleted", value: stats.projectsCompleted, Icon: Rocket },
  { key: "gamesPublished", value: stats.gamesPublished, Icon: Trophy },
  { key: "yearsExperience", value: stats.yearsExperience, Icon: Layers },
  { key: "technologies", value: stats.technologiesUsed, Icon: Wrench },
];

const card = "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-xl shadow-black/20";
const inputClass =
  "w-full rounded-xl border border-white/10 bg-gray-900/60 px-4 py-3 text-white placeholder-gray-500 transition focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40";

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ Icon, children }) => (
  <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white md:text-3xl">
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10">
      <Icon className="h-5 w-5 text-blue-300" />
    </span>
    {children}
  </h2>
);

const App = () => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'tr').slice(0, 2);

  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  // Sayfa dilini ve başlığını seçili dile göre güncelle
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.title = `${personalInfo.name} (${personalInfo.nickname}) - ${t('personal.title')}`;
  }, [currentLang, t]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // TODO: Form gönderme işlemini buraya ekleyin (EmailJS, Formspree, vb.)
    // Şimdilik mailto linki kullanılıyor
    const subject = encodeURIComponent(`${t('contact.subject')}: ${contactForm.name}`);
    const body = encodeURIComponent(
      `${contactForm.message}\n\n${t('form.name')}: ${contactForm.name}\n${t('form.email')}: ${contactForm.email}`
    );
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
    setContactForm({ name: "", email: "", message: "" });
  };

  const typeLabel = (type) => t(`types.${type}`, { defaultValue: type });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-950 text-gray-100">
      {/* Arka plan ışıkları */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[30%] -right-40 h-[380px] w-[380px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute bottom-0 -left-40 h-[380px] w-[380px] rounded-full bg-pink-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold text-white">
            <Gamepad2 className="h-6 w-6 text-blue-400" />
            <span>{personalInfo.nickname}</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden items-center gap-6 text-sm text-gray-400 sm:flex">
              <a href="#about" className="transition hover:text-white">{t('sections.about')}</a>
              {projects.length > 0 && (
                <a href="#projects" className="transition hover:text-white">{t('nav.projects')}</a>
              )}
              <a href="#contact" className="transition hover:text-white">{t('buttons.contact')}</a>
            </div>
            <div className="flex rounded-lg border border-white/10 bg-white/5 p-0.5 text-xs font-semibold" role="group" aria-label="Language">
              {['tr', 'en'].map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => i18n.changeLanguage(lng)}
                  aria-pressed={currentLang === lng}
                  className={`rounded-md px-3 py-1.5 uppercase transition ${
                    currentLang === lng ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main id="top" className="relative mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="fade-up flex flex-col items-center py-20 text-center md:py-28">
          <div className="mb-8 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-2xl shadow-purple-900/40">
            <div className="flex h-24 w-24 items-center justify-center rounded-[22px] bg-gray-950">
              <Gamepad2 className="h-12 w-12 text-blue-300" strokeWidth={1.5} />
            </div>
          </div>

          <span className="mb-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-400">
            @{personalInfo.nickname}
          </span>

          <h1 className="mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text pb-1 text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            {personalInfo.name}
          </h1>

          <p className="mb-6 text-xl font-medium text-gray-300 md:text-2xl">
            {t('personal.title')}
          </p>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
            {t('personal.bio')}
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-0.5 hover:shadow-blue-800/50"
            >
              <Mail className="h-5 w-5" />
              {t('buttons.contact')}
            </a>
            {hasCV && cvLink && (
              <a
                href={cvLink}
                target={cvLink.startsWith('http') ? "_blank" : undefined}
                rel={cvLink.startsWith('http') ? "noopener noreferrer" : undefined}
                download={!cvLink.startsWith('http')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Download className="h-5 w-5" />
                {t('buttons.downloadCV')}
              </a>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {socials.map(({ label, href, Icon, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-300 transition hover:-translate-y-0.5 ${hover}`}
              >
                <Icon className="h-4 w-4" />
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </section>

        {/* İstatistikler */}
        <section className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {statItems.map(({ key, value, Icon }) => (
            <div key={key} className={`${card} p-5 text-center`}>
              <Icon className="mx-auto mb-3 h-5 w-5 text-purple-300" />
              <div className="text-3xl font-bold text-white">{value}+</div>
              <div className="mt-1 text-sm text-gray-400">{t(`stats.${key}`)}</div>
            </div>
          ))}
        </section>

        {/* Hakkımda */}
        <section id="about" className="mb-20 scroll-mt-24">
          <SectionTitle Icon={Code2}>{t('sections.about')}</SectionTitle>
          <div className={`${card} p-6 md:p-8`}>
            <p className="text-lg leading-relaxed text-gray-300">{t('personal.about')}</p>
            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-gray-400">
              {t('sections.skills')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projeler */}
        {projects.length > 0 && (
          <section id="projects" className="mb-20 scroll-mt-24">
            <SectionTitle Icon={Gamepad2}>{t('sections.projects')}</SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${card} group overflow-hidden transition hover:-translate-y-1 hover:border-blue-400/40`}
                >
                  {project.image && (
                    <img src={project.image} alt={project.name} loading="lazy" className="aspect-video w-full object-cover" />
                  )}
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-400">
                        {typeLabel(project.type)}
                      </span>
                    </div>
                    <p className="mb-4 text-gray-400">{project.description}</p>
                    {project.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-purple-500/10 px-2 py-0.5 text-xs text-purple-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-300">
                      {t('buttons.details')}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Deneyim / Eğitim */}
        {experience.length > 0 && (
          <section className="mb-20">
            <SectionTitle Icon={Briefcase}>{t('sections.experience')}</SectionTitle>
            <ol className="relative space-y-6 border-l border-white/10 pl-6">
              {experience.map((exp, index) => (
                <li key={index} className="relative">
                  <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-gray-950" />
                  <div className={`${card} p-6`}>
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="text-sm font-semibold text-blue-300">{exp.year}</span>
                        <h3 className="mt-1 text-lg font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-300">{exp.company}</p>
                      </div>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                        {typeLabel(exp.type)}
                      </span>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* İletişim */}
        <section id="contact" className="mx-auto mb-20 max-w-2xl scroll-mt-24">
          <SectionTitle Icon={Mail}>{t('sections.contact')}</SectionTitle>
          <div className={`${card} p-6 md:p-8`}>
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className={inputClass}
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className={inputClass}
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  rows={5}
                  className={`${inputClass} resize-y`}
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:brightness-110 active:scale-[0.99]"
              >
                <Send className="h-5 w-5" />
                {t('buttons.send')}
              </button>
              <p className="text-center text-sm text-gray-500">
                {t('contact.orEmail')}{' '}
                <a href={`mailto:${socialLinks.email}`} className="text-blue-300 underline-offset-4 hover:underline">
                  {socialLinks.email}
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-500 sm:flex-row">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} {personalInfo.name} ({personalInfo.nickname}). {t('footer.rights')}</p>
            <p className="mt-1 text-xs text-gray-600">{t('footer.builtWith')}</p>
          </div>
          <div className="flex gap-1">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
