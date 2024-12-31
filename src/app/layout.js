import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata = {
  title: 'Travel Visa Services - Fast & Reliable Indian Visa Application',
  description:
    'Apply for your Indian visa online with our fast, secure, and reliable visa application service. Expert assistance for tourist, business, and medical visas.',
  keywords:
    'Indian visa, e-visa India, tourist visa, business visa, medical visa, visa application, travel to India',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Travel Visa Services - Fast & Reliable Indian Visa Application',
    description:
      'Apply for your Indian visa online with our fast, secure, and reliable visa application service.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${plusJakartaSans.variable}`}
    >
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <FormProvider>
          <ReactQueryProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-LC9MZM89N4" />
        <GoogleAnalytics gaId="G-LC9MZM89N4" />
      </body>
    </html>
  );
}
