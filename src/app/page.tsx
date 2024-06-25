import { useTranslations } from "next-intl";
export default function Home() {
  const intl = useTranslations('Index')
  return (
    <main>
      {intl('title')}
    </main>
  );
}
