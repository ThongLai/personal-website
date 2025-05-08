import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <main className="grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
