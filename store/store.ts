import { PostInfo, tabType, tabTypes } from "./types";

import { create } from "zustand";

interface Store {
  activeTab: tabType;
  setActiveTab: (type: tabType) => void;

  postInfo: Record<tabType, PostInfo[]>;
  updatePostInfo: (postInfo: PostInfo[], tab: tabType) => void;
}

export const useGlobalStore = create<Store>()((set) => ({
  // activeTab
  activeTab: tabType.Recent,
  setActiveTab: (type) => set({ activeTab: type }),

  // PostInfo
  postInfo: tabTypes.reduce(
    (acc, tab) => ({ ...acc, [tab]: [] }),
    {} as Record<tabType, PostInfo[]>
  ),
  updatePostInfo: (postInfo: PostInfo[], tab) =>
    set((state) => ({
      postInfo: {
        ...state.postInfo,
        [tab]: [...state.postInfo[tab], ...postInfo],
      },
    })),
}));
