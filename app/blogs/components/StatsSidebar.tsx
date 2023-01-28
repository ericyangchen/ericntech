import StatsIcon from "@/app/components/icons/common/StatsIcon";

export default function StatsSidebar() {
  return (
    <div className="flex flex-col p-4 border w-60 bg-base-100 rounded-2xl border-base-200">
      <div className="gap-1 pb-3 card-title">
        <StatsIcon width={28} height={28} />
        Stats
      </div>
      <div className="flex flex-col gap-2">
        <div className="border stats border-secondary">
          <div className="stat place-items-center">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="border stats border-info">
          <div className="stat place-items-center">
            <div className="stat-title">Weekly Page Views</div>
            <div className="stat-value">1400</div>
            <div className="stat-desc">35% more than last week</div>
          </div>
        </div>
        {/* <div className="border stats border-warning">
          <div className="stat place-items-center">
            <div className="stat-title">Server Uptime</div>
            <div className="stat-value">94%</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
