import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Rubik } from 'next/font/google';
import "@/styles/tailwind.css"
import { ThemeProvider } from 'next-themes';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic", "latin"],
})


export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }
  const messages = await getMessages();
 
  return (
    <html lang={locale} className='dark' style={{colorScheme: 'dark'}} suppressHydrationWarning>
      <meta name='theme-color' content='#000000' />
      <body dir={locale === "ar" ? "rtl" : "ltr"} className={`${rubik.variable} font-rubik antialiased`} >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute={"class"}>
          	{children}
        	</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}