import { ThemeProvider } from "components/theme-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Head from "next/head"; // Import the Head component

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <Head>
        <title>Paradise website</title>
        <meta name="description" content="WE PROPOSE YOU TO DEVELOP YOUR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* Add other meta tags as needed */}
      </Head>
      <body className="className" suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
