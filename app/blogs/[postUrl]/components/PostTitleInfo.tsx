import CommentIcon from "@/app/components/icons/common/CommentIcon";
import HeartIcon from "@/app/components/icons/common/HeartIcon";
import { IsoDateTimeString } from "contentlayer/core";
import { format, parseISO } from "date-fns";

interface Props {
  title: string;
  date: IsoDateTimeString;
}

const like_count = 0;
const comment_count = 0;

export default function PostTitleInfo({ title, date }: Props) {
  return (
    <div className="flex flex-col gap-2 py-4 mb-8 border-b">
      <h1 className="m-0">{title}</h1>

      <div className="flex items-center justify-between gap-3 text-base text-gray-400 flex-nowrap">
        <span>{format(parseISO(date), "LLL d, yyyy")}</span>
        <div className="flex items-center gap-3">
          <button className="h-8 min-h-0 gap-2 btn btn-ghost rounded-3xl border-base-300 hover:border-gray-400">
            <HeartIcon width={16} height={16} className="fill-gray-400" />
            <span>{like_count}</span>
          </button>
          <button className="h-8 min-h-0 gap-2 btn btn-ghost rounded-3xl border-base-300 hover:border-gray-400">
            <CommentIcon width={16} height={16} className="fill-gray-400" />
            <span>{comment_count}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
