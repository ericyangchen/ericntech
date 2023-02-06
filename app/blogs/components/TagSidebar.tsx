import TagIcon from "@/app/components/icons/common/TagIcon";

const tagList = [
  {
    name: "ReactJS",
    count: 13,
    icon: "",
  },
  {
    name: "NextJS",
    count: 1,
    icon: "",
  },
  {
    name: "Guide",
    count: 1,
    icon: "",
  },
];

export default function TagSidebar() {
  return (
    <div className="flex flex-col p-4 border w-60 bg-base-100 rounded-2xl border-base-200">
      <div className="gap-1 pb-3 card-title text-neutral-content">
        <TagIcon className="w-5 h-5" />
        Tags
      </div>
      <div className="flex flex-wrap gap-2 p-0">
        {tagList.map((tag, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-1 px-2 text-sm rounded-full bg-base-200"
            >
              <span>{tag.name}</span>
              <div className="flex items-center justify-center w-4 h-4 my-1 text-xs rounded-full px-auto bg-base-100">
                <span>{tag.count}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
