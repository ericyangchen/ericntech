import FeaturedBlogCard from "./FeaturedBlogCard";

export default function FeaturedSection() {
  return (
    <div className="cursor-pointer h-96 card rounded-2xl">
      {/* <Image
        src="/bg-temp-2.png"
        alt="Menu"
        fill
        priority
        className="rounded-2xl"
      /> */}
      <div className="gap-0 p-4 card-body">
        <h1 className="mb-8 text-6xl font-bold max-w-fit custom-red-blue-bg custom-featured-text">
          Featured
        </h1>
        <div className="self-center flex-1 w-full">
          <h2 className="mb-4 text-4xl font-medium">
            How I build this website
          </h2>
          <div className="line-clamp-3 md:line-clamp-4">
            How I build this website How I build this website How I build this
          </div>
        </div>
        <div className="justify-end card-actions">
          <button className="btn">Read Now</button>
        </div>
      </div>
    </div>
  );
}
