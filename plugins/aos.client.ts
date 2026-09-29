import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  const init = () => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: false,
      offset: 80,
      disable: () => window.innerWidth < 640,
    })
  }

  nuxtApp.hook('app:mounted', init)
  // Re-scan for new [data-aos] elements after route changes
  nuxtApp.hook('page:finish', () => AOS.refresh())
})
