import { ThemeProvider } from "components/theme-provider";
import { locales } from "i18n";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = useMessages();
  return (
    <html lang={locale}>
      <head>
        <title>Paradise Dev</title>
        <meta
          name="description"
          content="IT solutions, development, cybersecurity and support"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="https://paradise-dev-weld.vercel.app/images/WALL-PARADISEDEV-DARK.png"
        />
        {/* Add other meta tags as needed */}
      </head>
      <body
        className="className"
        suppressHydrationWarning={true}
        data-ember-extension="1"
      >
        {/* delete data-ember-extension="1" */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
            enableSystem={false}
            enableColorScheme={true}
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
