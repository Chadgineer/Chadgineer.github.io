import { useState } from 'react';
import { ExternalLink, Gamepad, Mail, Code, Github, Linkedin } from 'lucide-react';

const App = () => {
  // TODO: Kendi bilgilerinizi doldurun
  const personalInfo = {
    name: "Berk", // İsminiz
    title: "Oyun Geliştiricisi", // Mesleğiniz/Unvanınız
    bio: "Selam, ben Berk. Oyun geliştiriciliği yapıyorum ve yaratıcı projeler üretmeyi seviyorum.", // Kendiniz hakkında kısa açıklama
    about: "Oyun geliştirme konusunda tutkulu bir geliştiriciyim. Farklı türlerde oyunlar üretiyorum ve her projede yeni şeyler öğrenmeye devam ediyorum.", // Hakkınızda detaylı açıklama
    skills: ["Unity", "C#", "Game Design, 3D modelling"], // Yetenekleriniz/Teknolojileriniz
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

  // TODO: Projelerinizi/Oyunlarınızı ekleyin
  const projects = [
    /*{
      name: "Chronobreak",
      description: "Steam'de yayınlanmış oyunum.",
      link: socialLinks.steam,
      type: "Oyun"
    }*/ ,
    // Daha fazla proje eklemek için buraya yeni obje ekleyin:
    // {
    //   name: "Proje Adı",
    //   description: "Proje açıklaması",
    //   link: "https://proje-linki.com",
    //   type: "Oyun/Tool/Diğer"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
            {personalInfo.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
            {personalInfo.bio}
          </p>

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
              İletişim
            </a>
          </div>
        </div>

        {/* Hakkımda Bölümü */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" />
              Hakkımda
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            
            {/* Yetenekler/Teknolojiler */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Yetenekler & Teknolojiler</h3>
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
            Projelerim & Oyunlarım
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 hover:shadow-2xl hover:scale-105 transform"
              >
                <div className="mb-4">
                  <Gamepad className="w-10 h-10 text-purple-400 mb-3" />
                  <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                  <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition duration-200"
                >
                  Detaylar <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Daha fazla proje eklemek için yukarıdaki projects array'ine yeni obje ekleyin */}
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Tüm hakları saklıdır.</p>
          <p className="mt-2 text-sm">Bu site React ve Vite ile geliştirilmiştir.</p>
        </footer>
      </section>
    </div>
  );
};

export default App;
