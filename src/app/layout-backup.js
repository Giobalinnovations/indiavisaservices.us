import Header from '@/components/common/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/common/Footer';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from './context/formContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Visa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen `}>
        <FormProvider>
          <ReactQueryProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastContainer />
          </ReactQueryProvider>
        </FormProvider>
      </body>
    </html>
  );
}
