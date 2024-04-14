import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";

export default function Header2() {
  const t = useTranslations("Navigation");

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          {t("home")}
        </Link>
        <LocalSwitcher />
      </nav>
    </header>
  );
}
