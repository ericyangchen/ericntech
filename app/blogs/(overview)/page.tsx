import FeaturedSection from "./components/FeaturedSection";
import ListSection from "./components/ListSection";

export default function BlogOverviewPage() {
  return (
    <div className="flex flex-col gap-2 bg-base-100">
      <FeaturedSection />
      <ListSection />
    </div>
  );
}
