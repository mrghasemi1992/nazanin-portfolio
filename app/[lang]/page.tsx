import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Introduction from "../../components/Introduction";
import Educations from "@/components/Educations";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Script from "next/script";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9YBDWNZVNW" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      <Introduction dictionary={dictionary} />
      <Educations dictionary={dictionary} />
      <Experiences dictionary={dictionary} />
      <Skills dictionary={dictionary} />
    </main>
  );
}
