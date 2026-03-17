import { ProfileHero } from '@/components/ProfileHero';
import { NewsSection } from '@/components/NewsSection';
import { PublicationList } from '@/components/PublicationList';
import { getAllNews } from '@/lib/news';
import { getSelectedPublications } from '@/lib/bibtex';
import { siteConfig } from '@/lib/siteConfig';

export default function HomePage() {
  const news = getAllNews().slice(0, siteConfig.newsLimit);
  const selectedPubs = getSelectedPublications();

  return (
    <div className="space-y-12">
      <ProfileHero />
      <NewsSection items={news} />
      {selectedPubs.length > 0 && (
        <PublicationList
          publications={selectedPubs}
          title="Research Highlights"
        />
      )}
    </div>
  );
}
