import { ThemeProvider } from "components/theme-provider";
// import { locales } from "../../i18n";
// import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className="className" suppressHydrationWarning={true}>
        {/* <Navbar /> */}

        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
