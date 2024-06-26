import { useTranslations } from 'next-intl';
import Link from "next/link";
    const Hero2 = () => {
        const t = useTranslations('Home.Hero');
        return (
            <div className="w-3/4 mx-auto py-32 text-center">
                <h1 className="text-6xl font-bold">{t('Title')}</h1>
                <p className="pt-8 text-xl">{t('Subtitle')}</p>
                <Link
                    href="/about"
                    aria-label="Call To Action"
                    className="px-4 py-4 mt-6 bg-blue-500 text-white rounded inline-block"
                >
                    {t('CallToAction')}
                </Link>
            </div>
        );
    };
    export default Hero2;