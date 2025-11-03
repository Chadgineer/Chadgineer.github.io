import { useState } from 'react';
import { ExternalLink, Gamepad } from 'lucide-react';

const App = () => {
  const [count, setCount] = useState(0);
  
  const steamLink = "https://store.steampowered.com/app/2408740/dgd_Chronobreak/";

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      
      <div className="flex space-x-8 mb-8">
        <div className="text-blue-400">
          <Gamepad size={72} className="hover:animate-spin transition duration-500" />
        </div>
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Vite + React
      </h1>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        
        <div className="card mb-6 p-4 bg-gray-700/50 rounded-lg">
          <button 
            onClick={() => setCount((c) => c + 1)} 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Butona Tıklandı: {count}
          </button>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed border-t border-gray-700 pt-6">
          Selam, ben Berk. Sitem daha çalışma altında. 
        </p>

        <div className="text-center mb-6">
            <a 
                href={steamLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 shadow-xl transform hover:scale-[1.03]"
            >
                <ExternalLink className="w-5 h-5 mr-2" /> 
                Chronobreak Steam Sayfası
            </a>
        </div>


        <div className="space-y-2 text-sm text-gray-400 pt-4 border-t border-gray-700">
          <p>Ibo Berk is the best</p>
          <p>But Suat is the superior</p>
        </div>

      </div>
      
      <p className="text-sm text-gray-500 mt-8">
        Daha fazla bilgi edinmek için logolara tıklayın.
      </p>

    </div>
  );
};

export default App;
