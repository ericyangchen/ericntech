"use client";
import CommentIcon from "@/app/components/icons/common/CommentIcon";
import HeartIcon from "@/app/components/icons/common/HeartIcon";
import { formatDate, formatNumber } from "../../../utils/format";
import MDXImage from "@/mdxComponents/components/Image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PostInfo } from "@/store/types";

export default function BlogCard({
  url,
  title,
  description,
  thumbnail,
  date,
  viewCount,
  likeCount,
  commentCount,
  isFeatured,
}: Omit<PostInfo, "id">) {
  return (
    <div className="flex flex-col rounded-lg cursor-pointer bg-base-100">
      <Link href={`/blogs/${url}`}>
        <motion.div whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05 }}>
          <MDXImage
            src={thumbnail}
            className="m-0 rounded-lg aspect-video"
            priority
          />
        </motion.div>

        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl font-extrabold card-title">{title}</h2>
          <p className="text-[15px] text-info-content">{description}</p>
        </div>

        <div className="flex items-center w-full gap-8 mt-1 text-xs text-gray-400">
          {/* Date */}
          {date && <span>{formatDate(date)}</span>}

          {/* Likes & Comments */}
          <div className="flex items-center flex-1 gap-1">
            <div className="flex items-center gap-1">
              <HeartIcon className="w-4 h-4" />
              <span>{formatNumber(likeCount)}</span>
            </div>
            <div className="flex items-center gap-1">
              <CommentIcon className="w-4 h-4" />
              <span>{formatNumber(commentCount)}</span>
            </div>
          </div>

          {/* Views */}
          <div className="flex gap-1 justify-self-end">
            <span>{formatNumber(viewCount)} views</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
