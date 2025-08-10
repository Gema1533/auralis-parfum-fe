import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/font-awesome.min.css'
import '../../public/assets/css/jquery-ui.css'
import '../../public/assets/css/slick.css'
import '../../public/assets/css/chosen.min.css'
import '../../public/assets/css/pe-icon-7-stroke.css'
import '../../public/assets/css/magnific-popup.min.css'
import '../../public/assets/css/lightbox.min.css'
import '../../public/assets/js/fancybox/source/jquery.fancybox.css'
import '../../public/assets/css/jquery.scrollbar.min.css'
import '../../public/assets/css/mobile-menu.css'
import '../../public/assets/fonts/flaticon/flaticon.css'
import '../../public/assets/css/style.css'
import '@/styles/globals.css'


import type { AppProps } from 'next/app'
import Mainlayout from './layouts/Mainlayout'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Mainlayout>
        <Component {...pageProps}></Component>
      </Mainlayout>
    </>
  )
}
