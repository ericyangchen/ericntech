import CommentIcon from "@/app/components/icons/common/CommentIcon";
import HeartIcon from "@/app/components/icons/common/HeartIcon";
import { formatNumber } from "../../../utils/format";
import MDXImage from "@/mdxComponents/components/Image";

interface Props {
  title: string;
  description?: string;
  date?: string;
  thumbnail?: string;
  view_count?: number;
  like_count?: number;
  comment_count?: number;
}
export default function FeaturedBlogCard({
  title,
  description = "",
  date,
  thumbnail = "",
  view_count = 0,
  like_count = 0,
  comment_count = 0,
}: Props) {
  return (
    <div className="flex flex-col rounded-lg cursor-pointer bg-base-100">
      <MDXImage src={thumbnail} className="my-0 aspect-video" />

      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-2xl font-extrabold card-title">{title}</h2>
        <p className="text-[15px] text-info-content">{description}</p>
      </div>

      <div className="flex items-center w-full gap-8 mt-1 text-xs text-gray-400">
        {/* Date */}
        {date && <span>{date}</span>}

        {/* Likes & Comments */}
        <div className="flex items-center flex-1 gap-1">
          <div className="flex items-center gap-1">
            <HeartIcon className="w-4 h-4" />
            <span>{formatNumber(like_count)}</span>
          </div>
          <div className="flex items-center gap-1">
            <CommentIcon className="w-4 h-4" />
            <span>{formatNumber(comment_count)}</span>
          </div>
        </div>

        {/* Views */}
        <div className="flex gap-1 justify-self-end">
          <span>{formatNumber(view_count)} views</span>
        </div>
      </div>
    </div>
  );
}
