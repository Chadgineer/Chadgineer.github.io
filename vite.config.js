import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Geliştirme sunucusunda /play/<oyun>/ adreslerini public/ içindeki
// index.html'e yönlendirir (GitHub Pages bunu zaten kendisi yapar).
const servePlayPages = () => ({
  name: 'serve-play-pages',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [pathname, query] = req.url.split('?')
      if (/^\/play\/[^/]+\/?$/.test(pathname)) {
        req.url = pathname.replace(/\/?$/, '/index.html') + (query ? `?${query}` : '')
      }
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), servePlayPages()],
})
