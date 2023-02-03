import CommentIcon from "@/app/components/icons/common/CommentIcon";
import EyeIcon from "@/app/components/icons/common/EyeIcon";
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
    <div className="flex flex-col gap-1 p-4 transition border cursor-pointer bg-base-100 rounded-2xl hover:shadow">
      <div className="flex flex-col flex-1 gap-1 overflow-hidden">
        <h2 className="card-title">{title}</h2>
        <p className="overflow-hidden font-light text-gray-400 h-18 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-start gap-3 mt-1 text-xs text-gray-400">
        <span>{date}</span>
        <div className="flex items-center justify-center gap-1">
          <EyeIcon width={16} height={16} className="fill-gray-400" />
          <span>{like_count}</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <HeartIcon width={16} height={16} className="fill-gray-400" />
          <span>{like_count}</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <CommentIcon width={16} height={16} className="fill-gray-400" />
          <span>{comment_count}</span>
        </div>
      </div>
    </div>
  );
}
