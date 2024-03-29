import './globals.css';
//
import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import { routes } from '@/routes/routes';
import { videoRoutes } from '@/routes/videoRoutes';
import mainBgL from '@/assets/mainBg.png';
import mainBgS from '@/assets/mainBg425x425.png';
import Head from 'next/head';
//

export const metadata = {
    title: 'Báo Tuổi Trẻ Cloned',
    description: 'Generated by create next app',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <Head>
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link
                    rel='manifest'
                    href='/site.webmanifest'
                />
            </Head>
            <body className='body'>
                <Header
                    routes={routes}
                    videoRoutes={videoRoutes}
                />
                <img
                    src={mainBgS.src}
                    alt='body-background'
                    srcSet={`${mainBgS.src} 400w, ${mainBgL.src} 1600w`}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                    }}
                />
                <main className='bg-white main-container layoutContainer'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
