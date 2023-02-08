"use client";

import { tabTypes } from "@/store/types";
import { useGlobalStore } from "@/store/store";

export default function ListTab() {
  const activeTab = useGlobalStore((state) => state.activeTab);
  const setActiveTab = useGlobalStore((state) => state.setActiveTab);

  return (
    <div className="flex max-w-sm tabs tabs-boxed">
      {tabTypes.map((tab) => (
        <button
          key={tab}
          className={`flex-1 tab ${activeTab === tab && "tab-active"}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
