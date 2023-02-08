"use client";

import Image404 from "@/public/404-2.png";

import ListTab from "./ListTab";
import { PostInfo } from "@/store/types";
import { AnimatePresence, motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useGlobalStore } from "@/store/store";
import { getPostListOfType } from "@/app/utils/getPostListOfType";
import Image from "next/image";

interface Props {
  blogList: PostInfo[];
}

export default function ListSection({ blogList }: Props) {
  const activeTab = useGlobalStore((state) => state.activeTab);
  const filteredBlogList = getPostListOfType(blogList, activeTab);

  const postInfo = useGlobalStore((state) => state.postInfo);

  return (
    <div className="p-4 pt-2 card ">
      <ListTab />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredBlogList.length ? (
            <div className="grid grid-cols-1 mt-4 gap-x-12 gap-y-16 md:grid-cols-2">
              {filteredBlogList?.map((postInfo) => {
                return (
                  <BlogCard
                    key={postInfo.id}
                    url={postInfo.url}
                    title={postInfo.title}
                    description={postInfo.description}
                    thumbnail={postInfo.thumbnail}
                    date={postInfo.date}
                    viewCount={postInfo.viewCount}
                    likeCount={postInfo.likeCount}
                    commentCount={postInfo.commentCount}
                    isFeatured={postInfo.isFeatured}
                  />
                );
              })}
            </div>
          ) : (
            <EmptyList />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const EmptyList = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-[10%] gap-8 md:gap-12 lg:gap-16 ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 1,
        }}
      >
        <h1 className="text-3xl font-bold">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Sorry! There's no post in the current tab.
        </h1>
      </motion.div>

      <motion.div
        initial={{ rotate: 60, y: 10, opacity: 0 }}
        animate={{ rotate: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 8,
          stiffness: 1000,
        }}
      >
        <Image
          className="border-4 sm:max-w-sm md:max-w-xl rounded-xl border-neutral-content"
          src={Image404}
          alt="404"
        />
      </motion.div>
    </div>
  );
};
