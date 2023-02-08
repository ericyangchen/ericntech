import { PostInfo, tabType } from "@/store/types";
import { compareDesc } from "date-fns";

export const getPostListOfType = (posts: PostInfo[], type: tabType) => {
  const sorted = [...posts];
  // Recent
  if (type === tabType.Recent) {
    return sorted.sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  }
  // Most Liked
  if (type === tabType.MostLiked) {
    return sorted.sort((a, b) => {
      if (a.likeCount === b.likeCount) return 0;
      return a.likeCount > b.likeCount ? -1 : 1;
    });
  }
  // Featured: (considering switching to Most Viewed)
  if (type === tabType.Featured) {
    /** isFeatured */
    return posts.filter((post) => post?.isFeatured || false);

    /** Most Viewed */
    // return sorted.sort((a, b) => {
    //   if (a.viewCount === b.viewCount) return 0;
    //   return a.viewCount > b.viewCount ? -1 : 1;
    // });
  }
  return [];
};
