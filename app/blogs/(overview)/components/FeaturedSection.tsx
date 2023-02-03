const text =
  "How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website 000 How I build this website How I build this website How I --- build this website How I build this website ||| How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website How I build this website";

export default function FeaturedSection() {
  return (
    <div className="overflow-hidden transition border cursor-pointer h-96 card border-base-200 rounded-2xl hover:shadow">
      {/* <Image
        src="/bg-temp-2.png"
        alt="Menu"
        fill
        priority
        className="rounded-2xl"
      /> */}
      <div className="gap-0 card-body">
        <h1 className="mb-8 text-6xl font-bold max-w-fit custom-red-blue-bg custom-featured-text">
          Featured
        </h1>
        <div className="self-center flex-1 w-full">
          <h2 className="mb-4 text-4xl font-medium line-clamp-2">
            How I build this website
          </h2>
          <div className="line-clamp-3 md:line-clamp-4">{text}</div>
        </div>
        <div className="justify-end card-actions">
          <button className="btn btn-ghost">Read Now</button>
        </div>
      </div>
    </div>
  );
}
