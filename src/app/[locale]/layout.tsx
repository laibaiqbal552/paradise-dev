import { ThemeProvider } from "components/theme-provider";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="className" suppressHydrationWarning={true}>
        <div className="max-w-6xl mx-auto">
          {/* <Navbar /> */}

          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
