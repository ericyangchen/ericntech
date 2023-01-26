import FeaturedSection from "./components/FeaturedSection";
import ListSection from "./components/ListSection";
import RecentSection from "./components/RecentSection";

export default function BlogOverviewPage() {
  return (
    <div className="flex flex-col gap-2 bg-base-100">
      <FeaturedSection />
      {/* <RecentSection /> */}
      <ListSection />
    </div>
  );
}
