import { ThemeProvider } from "components/theme-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";

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
      <head>
        <title>Paradise website</title>
        <meta name="description" content="WE PROPOSE YOU TO DEVELOP YOUR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* Add other meta tags as needed */}
      </head>
      <body className="className" suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
