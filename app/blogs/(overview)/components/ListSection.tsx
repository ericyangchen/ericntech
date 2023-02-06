import BlogCard from "./BlogCard";
import { compareDesc } from "date-fns";

const fakeBlogList = [
  {
    title: "How I build this blog",
    description:
      "The systematic thinking in our industry is that settings are the result of design failure. As designers, our goal is to create product experiences that don’t require any adjustment by the user. So offering customization options is often seen as a failure to make firm product decisions. I think there is a misunderstanding about what settings really are.",
    date: "JAN 15",
    thumbnail: "macbook.jpg",
    like_count: 10,
    comment_count: 5,
  },
  {
    title: "Custom",
    description:
      "A overlook on how this site is built 2 A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2A overlook on how this site is built 2",
    date: "MAR 30",
    thumbnail: "mdx-thumbnail.png",
    like_count: 1,
    comment_count: 5,
  },
  {
    title: "How I build this blog",
    description: "A overlook on how this site is built",
    date: "JAN 15",
    thumbnail: "test.jpg",
    like_count: 10,
    comment_count: 5,
  },
  {
    title: "How I build this blog",
    description: "A overlook on how this site is built",
    date: "JAN 15",
    thumbnail: "test.jpg",
    like_count: 10,
    comment_count: 5,
  },
  {
    title: "How I build this blog",
    description: "A overlook on how this site is built",
    date: "JAN 15",
    thumbnail: "test.jpg",
    like_count: 10,
    comment_count: 5,
  },
];

async function getBlogList() {
  return fakeBlogList;
}

const Tabs = () => {
  return (
    <div className="flex sm:max-w-xs tabs tabs-boxed">
      <a className="flex-1 tab tab-active">All</a>
      <a className="flex-1 tab ">Featured</a>
      <a className="flex-1 tab ">Recent</a>
    </div>
  );
};

export default async function ListSection() {
  const blogList = await getBlogList();
  return (
    <div className="p-4 pt-2 card ">
      <Tabs />
      <div className="grid grid-cols-1 mt-4 gap-x-12 gap-y-16 md:grid-cols-2">
        {blogList.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              thumbnail={blog.thumbnail}
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
