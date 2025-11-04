import { useState } from 'react';
import { ExternalLink, Gamepad, Mail, Code, Github, Linkedin, Download, Trophy, Calendar, Image as ImageIcon, Send, Award, Briefcase, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // TODO: Kendi bilgilerinizi doldurun
  const personalInfo = {
    name: "Berk", // İsminiz
    title: "Oyun Geliştiricisi", // Mesleğiniz/Unvanınız
    bio: "Esenlikler, ben Berk. Oyun geliştiriciliği yapıyorum ve yaratıcı projeler üretmeyi seviyorum.", // Kendiniz hakkında kısa açıklama
    about: "Oyun geliştirme konusunda tutkulu bir geliştiriciyim. Farklı türlerde oyunlar üretiyorum ve her projede yeni şeyler öğrenmeye devam ediyorum.", // Hakkınızda detaylı açıklama
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
    //   type: "İş" // "İş" veya "Eğitim"
    // },
    // Daha fazla deneyim eklemek için yukarıdaki formata göre ekleyin
  ];

  // TODO: Projelerinizi/Oyunlarınızı ekleyin
  const projects = [
    /*{
      name: "Chronobreak",
      description: "Steam'de yayınlanmış oyunum.",
      link: socialLinks.steam,
      type: "Oyun",
      image: "", // Proje görseli URL'i (isteğe bağlı)
      tags: ["Unity", "Steam"] // Proje etiketleri
    }*/
    // Daha fazla proje eklemek için buraya yeni obje ekleyin:
    // {
    //   name: "Proje Adı",
    //   description: "Proje açıklaması",
    //   link: "https://proje-linki.com",
    //   type: "Oyun/Tool/Diğer",
    //   image: "https://görsel-url.com/image.jpg", // İsteğe bağlı
    //   tags: ["Unity", "C#"] // İsteğe bağlı
    // }
  ];

  // İletişim formu state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // TODO: Form gönderme işlemini buraya ekleyin (EmailJS, Formspree, vb.)
    // Şimdilik mailto linki kullanılıyor
    const subject = encodeURIComponent(`${t('contact.subject')}: ${contactForm.name}`);
    const body = encodeURIComponent(`${contactForm.message}\n\n${t('form.name')}: ${contactForm.email}`);
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => changeLanguage('tr')}
          className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
            i18n.language === 'tr' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
          }`}
        >
          TR
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
            i18n.language === 'en' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
          }`}
        >
          EN
        </button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <Gamepad size={80} className="text-blue-400 hover:animate-pulse transition duration-500" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            {t('personal.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
            {t('personal.bio')}
          </p>

          {/* CV İndirme Butonu */}
          {hasCV && cvLink && (
            <div className="mb-6">
              <a 
                href={cvLink}
                target={cvLink.startsWith('http') ? "_blank" : undefined}
                rel={cvLink.startsWith('http') ? "noopener noreferrer" : undefined}
                download={!cvLink.startsWith('http')}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Download className="w-5 h-5" />
                {t('buttons.downloadCV')}
              </a>
            </div>
          )}

          {/* Sosyal Medya Linkleri */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* Itch.io Link */}
            <a 
              href={socialLinks.itch} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <ExternalLink className="w-5 h-5" />
              Itch.io
            </a>

            {/* LinkedIn Link */}
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            {/* GitHub Link */}
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            {/* Steam Link */}
            <a 
              href={socialLinks.steam} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <ExternalLink className="w-5 h-5" />
              Steam
            </a>

            {/* E-posta Link */}
            <a 
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Mail className="w-5 h-5" />
              {t('buttons.contact')}
            </a>
          </div>
        </div>

        {/* İstatistikler Bölümü */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 text-center hover:scale-105 transform transition duration-300">
              <Trophy className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-300 mb-1">{stats.projectsCompleted}+</div>
              <div className="text-sm text-gray-400">{t('stats.projectsCompleted')}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 text-center hover:scale-105 transform transition duration-300">
              <Gamepad className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-purple-300 mb-1">{stats.gamesPublished}+</div>
              <div className="text-sm text-gray-400">{t('stats.gamesPublished')}</div>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 text-center hover:scale-105 transform transition duration-300">
              <Calendar className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-pink-300 mb-1">{stats.yearsExperience}+</div>
              <div className="text-sm text-gray-400">{t('stats.yearsExperience')}</div>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 text-center hover:scale-105 transform transition duration-300">
              <Code className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-green-300 mb-1">{stats.technologiesUsed}+</div>
              <div className="text-sm text-gray-400">{t('stats.technologies')}</div>
            </div>
          </div>
        </section>

        {/* Hakkımda Bölümü */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" />
              {t('sections.about')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('personal.about')}
            </p>
            
            {/* Yetenekler/Teknolojiler */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">{t('sections.skills')}</h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-lg border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
                {/* Daha fazla yetenek eklemek için yukarıdaki skills array'ine ekleyin */}
              </div>
            </div>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {t('sections.projects')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 hover:shadow-2xl hover:scale-105 transform overflow-hidden"
              >
                {/* Proje Görseli */}
                {project.image ? (
                  <div className="w-full h-48 bg-gray-700 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
                    <Gamepad className="w-16 h-16 text-purple-400 opacity-50" />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                    <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                      {t(`types.${project.type.toLowerCase()}`) || project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Proje Etiketleri */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition duration-200"
                  >
                    {t('buttons.details')} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Daha fazla proje eklemek için yukarıdaki projects array'ine yeni obje ekleyin */}
        </section>

        {/* Deneyim/Timeline Bölümü */}
        {experience.length > 0 && (
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-400" />
              {t('sections.experience')}
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 hover:border-blue-500 transition duration-300 relative pl-10"
                >
                  <div className="absolute left-0 top-6 w-4 h-4 bg-blue-500 rounded-full -translate-x-2"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <span className="text-blue-400 font-semibold">{exp.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                      <p className="text-purple-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {t(`types.${exp.type.toLowerCase()}`) || exp.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* İletişim Formu Bölümü */}
        <section className="max-w-2xl mx-auto mb-16">
                      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500 flex items-center justify-center gap-3">
              <Mail className="w-8 h-8 text-pink-400" />
              {t('sections.contact')}
            </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                  rows={5}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('buttons.send')}
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
          <p>© {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}</p>
          <p className="mt-2 text-sm">{t('footer.builtWith')}</p>
        </footer>
      </section>
    </div>
  );
};

export default App;
