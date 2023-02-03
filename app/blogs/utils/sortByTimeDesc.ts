import { type Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const sortByTimeDesc = (posts: Post[]) => {
  const sortedPosts = posts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return sortedPosts;
};
