import CommentIcon from "@/app/components/icons/common/CommentIcon";
import HeartIcon from "@/app/components/icons/common/HeartIcon";
import { IsoDateTimeString } from "contentlayer/core";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import ProfileAvatar from "@/public/profileAvatar.png";
import { formatNumber } from "../../utils/formatNumber";

interface Props {
  title: string;
  date: IsoDateTimeString;
  readingTime?: string;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
}

export default function PostHeader({
  title,
  date,
  readingTime,
  viewCount = 0,
  likeCount = 0,
  commentCount = 0,
}: Props) {
  return (
    <div className="flex flex-col gap-2 py-4 mb-8">
      <Info
        date={format(parseISO(date), "LLL d, yyyy")}
        readingTime={readingTime || "X min read"}
        views={formatNumber(viewCount)}
      />
      <Title title={title} />
      <div className="flex items-center justify-between gap-3">
        <Avatar />
        <LikeAndCommentButtons
          likes={formatNumber(likeCount)}
          comments={formatNumber(commentCount)}
        />
      </div>
    </div>
  );
}

const Info = ({
  date,
  readingTime,
  views,
}: {
  date: string;
  readingTime: string;
  views: string;
}) => {
  return (
    <div className="flex text-[13px] leading-[15px] text-gray-500 divide-x divide-gray-700">
      <div className="pr-3">{date}</div>
      <div className="px-3">{readingTime}</div>
      <div className="pl-3">{views} views</div>
    </div>
  );
};
const Title = ({ title }: { title: string }) => {
  return <h1 className="mt-4 mb-8 text-4xl ">{title}</h1>;
};
const Avatar = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="avatar online">
        <div className="w-10">
          <Image
            className="m-0 rounded-full"
            src={ProfileAvatar}
            alt="Profile"
          />
        </div>
      </div>
      <div className="text-base-content">Eric Chen</div>
    </div>
  );
};
const LikeAndCommentButtons = ({
  likes,
  comments,
}: {
  likes: string;
  comments: string;
}) => {
  return (
    <div className="flex gap-2">
      <button className="h-10 min-h-0 gap-2 btn rounded-3xl hover:border-gray-400 text-base-content">
        <HeartIcon />
        <span>{likes}</span>
      </button>
      <button className="h-10 min-h-0 gap-2 btn rounded-3xl hover:border-gray-400 text-base-content">
        <CommentIcon />
        <span>{comments}</span>
      </button>
    </div>
  );
};
