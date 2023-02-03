import BlogCard from "./BlogCard";
import { compareDesc } from "date-fns";

const fakeBlogList = [
  {
    title: "How I build this blog",
    description: "A overlook on how this site is built",
    date: "JAN 15",
    like_count: 10,
    comment_count: 5,
  },
  {
    title: "How I build this blog 2",
    description:
      "A overlook on how this site is built 2 A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2",
    date: "MAR 30",
    like_count: 1,
  },
  {
    title: "How I build this blog 3",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
    date: "FEB 20",
  },
  {
    title: "How I build this blog 4",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
  },
  {
    title: "How I build this blog 5",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
  },
  {
    title: "How I build this blog 6",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
  },
  {
    title: "How I build this blog 7",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
  },
  {
    title: "How I build this blog 8",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
  },
  {
    title: "How I build this blog 9",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
  },
  {
    title: "How I build this blog 10",
    description:
      "A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built. A overlook on how this site is built.",
  },
];

export async function getBlogList() {
  return fakeBlogList;
}

export default async function ListSection() {
  const blogList = await getBlogList();
  return (
    <div className="p-4 pt-2 overflow-hidden border card border-base-200 rounded-2xl">
      <div className="flex sm:max-w-xs tabs">
        <a className="flex-1 tab tab-bordered tab-active">All</a>
        <a className="flex-1 tab tab-bordered">Featured</a>
        <a className="flex-1 tab tab-bordered">Recent</a>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        {blogList.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              like_count={blog?.like_count}
              comment_count={blog?.comment_count}
            />
          );
        })}
      </div>
    </div>
  );
}
