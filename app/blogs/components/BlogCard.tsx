import CommentIcon from "@/app/components/icons/common/CommentIcon";
import HeartIcon from "@/app/components/icons/common/HeartIcon";

interface Props {
  title: string;
  description?: string;
  date?: string;
  like_count?: number;
  comment_count?: number;
}
export default function BlogCard({
  title,
  description = "",
  date,
  like_count,
  comment_count,
}: Props) {
  return (
    <div className="flex flex-col gap-1 p-4 border bg-base-100 rounded-2xl">
      <div className="flex flex-col flex-1 gap-1 overflow-hidden">
        <h2 className="card-title">{title}</h2>
        <p className="overflow-hidden font-light text-gray-400 h-18 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-start gap-3 mt-1 text-xs text-gray-400">
        <span>{date}</span>
        <div className="flex items-center justify-center gap-1">
          <HeartIcon width={12} height={12} className="fill-gray-400" />
          <span>{like_count ? like_count : "-"}</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <CommentIcon width={12} height={12} className="fill-gray-400" />
          <span>{comment_count ? comment_count : "-"}</span>
        </div>
      </div>
    </div>
  );
}
